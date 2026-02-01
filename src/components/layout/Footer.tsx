import Image from "next/image";
import Link from "next/link";

const footerLinks = {
    company: [
        { name: "Tentang Kami", href: "/about-us" },
        { name: "Produk Kami", href: "/products" },
        { name: "Layanan Kami", href: "/services" },
        { name: "Kontak Kami", href: "/contact-us" },
    ],
    products: [
        { name: "Seaply", href: "https://seaply.co", external: true },
        { name: "ppob.id", href: "https://ppob.id", external: true },
    ],
};

export default function Footer() {
    return (
        <footer className="relative bg-dark-bg/80 backdrop-blur-lg border-t border-white/5">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/10 to-transparent pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-3 mb-6">
                            <div className="relative w-14 h-14">
                                <Image
                                    src="/logo_gtd.png"
                                    alt="GTD Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div>
                                <span className="text-xl font-bold text-gradient">GERBANG</span>
                                <span className="block text-xs text-gray-400">
                                    Transaksi Digital
                                </span>
                            </div>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Startup teknologi yang mengembangkan solusi transaksi digital
                            untuk memberdayakan UMKM di Indonesia dan Asia Tenggara.
                        </p>
                        {/* Social Media */}
                        <div className="flex gap-4">
                            {["facebook", "twitter", "instagram", "linkedin"].map(
                                (social) => (
                                    <a
                                        key={social}
                                        href="#"
                                        className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-primary-400 hover:bg-primary-500/20 transition-all duration-300"
                                        aria-label={social}
                                    >
                                        <SocialIcon name={social} />
                                    </a>
                                )
                            )}
                        </div>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Menu</h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Produk Kami</h4>
                        <ul className="space-y-3">
                            {footerLinks.products.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        target={link.external ? "_blank" : undefined}
                                        rel={link.external ? "noopener noreferrer" : undefined}
                                        className="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-sm inline-flex items-center gap-1"
                                    >
                                        {link.name}
                                        {link.external && (
                                            <svg
                                                className="w-3 h-3"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                />
                                            </svg>
                                        )}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Kontak</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <svg
                                    className="w-5 h-5 text-primary-400 mt-0.5 shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                <div>
                                    <span className="text-primary-400 text-xs font-medium">Kantor Utama</span>
                                    <p className="text-gray-400 text-sm">
                                        Wisma Keiai 14th Floor Unit 1410, Jl. Jenderal Sudirman, Karet Tengsin, Tanah Abang, Jakarta Pusat, DKI Jakarta, 10220
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg
                                    className="w-5 h-5 text-primary-400 mt-0.5 shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                <div>
                                    <span className="text-primary-400 text-xs font-medium">Kantor Operasional</span>
                                    <p className="text-gray-400 text-sm">
                                        Jl. Ness Muhajirin, Muhajirin, Jambi Luar Kota, Muaro Jambi, Jambi 36361
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg
                                    className="w-5 h-5 text-primary-400 mt-0.5 shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <a
                                    href="mailto:hello@gtd.co.id"
                                    className="text-gray-400 text-sm hover:text-primary-400 transition-colors"
                                >
                                    hello@gtd.co.id
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg
                                    className="w-5 h-5 text-primary-400 mt-0.5 shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                <a
                                    href="https://wa.me/628138181630"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 text-sm hover:text-primary-400 transition-colors"
                                >
                                    +628138181630
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} PT Gerbang Transaksi Digital. All
                        rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

function SocialIcon({ name }: { name: string }) {
    const icons: Record<string, React.ReactNode> = {
        facebook: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
        ),
        twitter: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
        instagram: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
        ),
        linkedin: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    };
    return icons[name] || null;
}
