import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { promises as fs } from "node:fs";
import { chromium } from "playwright-core";
import { PDFDocument } from "pdf-lib";
import pptxgen from "pptxgenjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const publicDir = path.join(rootDir, "public");
const outputDir = path.join(rootDir, "exports", "pitch-deck");
const slidesDir = path.join(outputDir, "slides");
const deckFile = "pitch-deck.html";
const viewport = { width: 1920, height: 1080 };
const deviceScaleFactor = 2;
const pdfPageSize = [960, 540];
const pptSize = { width: 13.333, height: 7.5 };
const deckName = "pitch-deck";

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".gif": "image/gif",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

function log(message) {
  process.stdout.write(`${message}\n`);
}

async function exists(targetPath) {
  try {
    await fs.access(targetPath);
    return true;
  } catch {
    return false;
  }
}

async function resolveChromePath() {
  const candidates = [
    process.env.CHROME_BIN,
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
    "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  ].filter(Boolean);

  for (const candidate of candidates) {
    if (await exists(candidate)) {
      return candidate;
    }
  }

  throw new Error(
    "Chrome or Edge executable not found. Set CHROME_BIN to a local browser path before running export."
  );
}

function startStaticServer(rootPath) {
  const rootResolved = path.resolve(rootPath);
  const server = http.createServer(async (req, res) => {
    try {
      const requestUrl = new URL(req.url || "/", "http://127.0.0.1");
      const normalizedPath = decodeURIComponent(requestUrl.pathname === "/" ? deckFile : requestUrl.pathname.replace(/^\/+/, ""));
      const filePath = path.join(rootResolved, normalizedPath);
      const resolved = path.resolve(filePath);

      if (!resolved.startsWith(rootResolved)) {
        res.writeHead(403);
        res.end("Forbidden");
        return;
      }

      const stat = await fs.stat(resolved).catch(() => null);
      if (!stat || !stat.isFile()) {
        res.writeHead(404);
        res.end("Not found");
        return;
      }

      const ext = path.extname(resolved).toLowerCase();
      const type = mimeTypes[ext] || "application/octet-stream";
      const body = await fs.readFile(resolved);
      res.writeHead(200, { "Content-Type": type, "Cache-Control": "no-store" });
      res.end(body);
    } catch (error) {
      res.writeHead(500);
      res.end(String(error));
    }
  });

  return new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(0, "127.0.0.1", () => {
      const address = server.address();
      resolve({
        close: () =>
          new Promise((closeResolve, closeReject) => {
            server.close((error) => (error ? closeReject(error) : closeResolve()));
          }),
        port: address.port,
      });
    });
  });
}

async function waitForDeckReady(page, expectedSlide) {
  await page.waitForFunction(
    (slideNumber) => {
      const exportState = window.__deckExport;
      return (
        exportState &&
        exportState.ready === true &&
        exportState.currentSlide === slideNumber &&
        document.documentElement.dataset.exportReady === "1"
      );
    },
    expectedSlide,
    { timeout: 30000 }
  );
}

async function createPdf(slidePaths, pdfPath) {
  const pdfDoc = await PDFDocument.create();

  for (const slidePath of slidePaths) {
    const pngBytes = await fs.readFile(slidePath);
    const pngImage = await pdfDoc.embedPng(pngBytes);
    const page = pdfDoc.addPage(pdfPageSize);
    page.drawImage(pngImage, { x: 0, y: 0, width: pdfPageSize[0], height: pdfPageSize[1] });
  }

  const pdfBytes = await pdfDoc.save();
  await fs.writeFile(pdfPath, pdfBytes);
}

async function createPptx(slidePaths, pptxPath) {
  const pptx = new pptxgen();
  pptx.layout = "LAYOUT_WIDE";
  pptx.author = "OpenAI Codex";
  pptx.company = "PT Gerbang Transaksi Digital";
  pptx.subject = "GTD AI Product Pitch Deck";
  pptx.title = "GTD AI Product Pitch Deck";
  pptx.lang = "en-US";

  for (const slidePath of slidePaths) {
    const slide = pptx.addSlide();
    slide.addImage({
      path: slidePath,
      x: 0,
      y: 0,
      w: pptSize.width,
      h: pptSize.height,
    });
  }

  await pptx.writeFile({ fileName: pptxPath });
}

async function main() {
  const chromePath = await resolveChromePath();
  const server = await startStaticServer(publicDir);
  const browser = await chromium.launch({
    executablePath: chromePath,
    headless: true,
  });

  await fs.rm(outputDir, { recursive: true, force: true });
  await fs.mkdir(slidesDir, { recursive: true });

  const context = await browser.newContext({
    viewport,
    deviceScaleFactor,
  });
  const page = await context.newPage();
  const baseUrl = `http://127.0.0.1:${server.port}/${deckFile}`;

  try {
    await page.goto(`${baseUrl}?export=1&slide=1`, { waitUntil: "networkidle" });
    await waitForDeckReady(page, 1);

    const slideCount = await page.evaluate(() => window.__deckExport?.slideCount || 0);
    if (!slideCount) {
      throw new Error("Unable to detect slide count from pitch-deck.html.");
    }

    log(`Detected ${slideCount} slides.`);

    const slidePaths = [];
    for (let slideNumber = 1; slideNumber <= slideCount; slideNumber += 1) {
      const slidePath = path.join(slidesDir, `slide-${String(slideNumber).padStart(2, "0")}.png`);
      log(`Rendering slide ${slideNumber}/${slideCount}...`);
      await page.goto(`${baseUrl}?export=1&slide=${slideNumber}`, { waitUntil: "networkidle" });
      await waitForDeckReady(page, slideNumber);
      await page.screenshot({
        path: slidePath,
        clip: { x: 0, y: 0, width: viewport.width, height: viewport.height },
      });
      slidePaths.push(slidePath);
    }

    const pdfPath = path.join(outputDir, `${deckName}.pdf`);
    const pptxPath = path.join(outputDir, `${deckName}.pptx`);

    log("Creating PDF...");
    await createPdf(slidePaths, pdfPath);

    log("Creating PPTX...");
    await createPptx(slidePaths, pptxPath);

    log(`Done: ${pdfPath}`);
    log(`Done: ${pptxPath}`);
  } finally {
    await browser.close();
    await server.close();
  }
}

main().catch((error) => {
  process.stderr.write(`${error.stack || error}\n`);
  process.exitCode = 1;
});
