"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Tentang", href: "/about-us" },
    { name: "Produk", href: "/products" },
    { name: "Layanan", href: "/services" },
    { name: "Kontak", href: "/contact-us" },
];


export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? "bg-dark-bg/80 backdrop-blur-xl shadow-lg shadow-primary-900/10 py-3"
                : "bg-transparent py-5"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-110">
                        <Image
                            src="/logo_gtd.png"
                            alt="GTD Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    <div className="hidden sm:block">
                        <span className="text-lg font-bold text-gradient">GERBANG</span>
                        <span className="block text-xs text-gray-400 -mt-1">
                            Transaksi Digital
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`transition-colors duration-300 text-sm font-medium relative group ${isActive ? "text-primary-400" : "text-gray-300 hover:text-primary-400"
                                    }`}
                            >
                                {link.name}
                                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary-400 to-primary-600 transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                                    }`} />
                            </Link>
                        );
                    })}
                </div>

                <div className="hidden md:block">
                    <Link
                        href="/contact-us"
                        className="px-6 py-2.5 rounded-full bg-gradient-to-r from-primary-500 to-primary-700 text-white text-sm font-semibold hover:from-primary-400 hover:to-primary-600 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/30"
                    >
                        Hubungi Kami
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden p-2 text-gray-300 hover:text-white"
                    aria-label="Toggle menu"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {isMobileMenuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="bg-dark-surface/95 backdrop-blur-xl border-t border-white/10 px-6 py-4 space-y-4">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`block transition-colors duration-300 text-base font-medium ${isActive ? "text-primary-400" : "text-gray-300 hover:text-primary-400"
                                    }`}
                            >
                                {isActive && <span className="inline-block w-2 h-2 rounded-full bg-primary-400 mr-2" />}
                                {link.name}
                            </Link>
                        );
                    })}
                    <Link
                        href="/contact-us"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block w-full text-center px-6 py-3 rounded-full bg-gradient-to-r from-primary-500 to-primary-700 text-white font-semibold"
                    >
                        Hubungi Kami
                    </Link>
                </div>
            </div>
        </nav>
    );
}
