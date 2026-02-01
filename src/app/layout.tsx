import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ParticleBackground from "@/components/layout/ParticleBackground";

export const metadata: Metadata = {
    title: "Gerbang Transaksi Digital - Digital Transaction Gateway",
    description:
        "PT Gerbang Transaksi Digital adalah startup teknologi yang mengembangkan solusi transaksi digital melalui Seaply (voucher game) dan ppob.id (layanan PPOB) untuk Indonesia dan Asia Tenggara.",
    keywords: [
        "startup",
        "fintech",
        "ppob",
        "voucher game",
        "digital payment",
        "indonesia",
        "southeast asia",
        "seaply",
        "ppob.id",
        "top up game",
        "gaming supply",
        "UMKM",
    ],
    authors: [{ name: "PT Gerbang Transaksi Digital" }],
    icons: {
        icon: "/logo_gtd.png",
        apple: "/logo_gtd.png",
    },
    openGraph: {
        title: "PT Gerbang Transaksi Digital",
        description:
            "Startup teknologi yang mengembangkan solusi transaksi digital untuk memberdayakan ekonomi mikro di Asia Tenggara.",
        type: "website",
        images: ["/logo_gtd.png"],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="id">
            <body className="antialiased">
                <ParticleBackground />
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
