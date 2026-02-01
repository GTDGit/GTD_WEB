"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const products = [
    {
        name: "Seaply",
        tagline: "SEA Gaming Supply",
        status: "Dalam Pengembangan",
        description:
            "Platform B2C & B2B untuk penjualan voucher game dan top-up game dengan jangkauan Asia Tenggara (Indonesia, Singapura, Malaysia, Thailand, Filipina). Dirancang untuk memberikan pengalaman transaksi yang cepat dan harga kompetitif bagi komunitas gamer.",
        logo: "/logo_seaply.png",
        url: "https://seaply.co",
        features: [
            "Top-up Game Instan",
            "Voucher Game Lengkap",
            "Jangkauan 5 Negara",
            "Harga Kompetitif",
        ],
        target: "Gamer & Komunitas Gaming",
        gradient: "from-blue-500 to-cyan-500",
        bgGradient: "from-blue-500/10 to-cyan-500/10",
    },
    {
        name: "ppob.id",
        tagline: "Payment Point Online Bank",
        status: "Dalam Pengembangan",
        description:
            "Platform B2B2C & B2B untuk penjualan produk PPOB dengan harga distributor. Dirancang untuk membantu konter pulsa, toko, dan warung mendapatkan penghasilan tambahan melalui layanan pulsa, data, PLN, e-money, pembayaran tagihan, transfer bank, hingga QRIS statis.",
        logo: "/logo_ppob.png",
        url: "https://ppob.id",
        features: [
            "Harga Distributor",
            "QRIS Statis untuk Mitra",
            "Transfer Bank",
            "Tagihan & E-Money",
        ],
        target: "Konter Pulsa, Toko & Warung",
        gradient: "from-blue-600 to-indigo-600",
        bgGradient: "from-blue-600/10 to-indigo-600/10",
    },
];

export default function ProductsSection() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = sectionRef.current?.querySelectorAll(".fade-in-section");
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="produk"
            className="relative py-32 overflow-hidden"
        >


            <div className="relative max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-20 fade-in-section">
                    <span className="inline-block px-4 py-2 rounded-full glass text-primary-400 text-sm font-medium mb-4">
                        Produk Kami
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Produk <span className="text-gradient">Kami</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                        Dua produk digital yang sedang kami kembangkan untuk memberdayakan
                        ekonomi mikro dan mendukung gaya hidup digital di Asia Tenggara.
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid lg:grid-cols-2 gap-8">
                    {products.map((product, index) => (
                        <div
                            key={product.name}
                            className="fade-in-section group"
                            style={{ animationDelay: `${index * 200}ms` }}
                        >
                            <div
                                className={`relative glass rounded-3xl p-8 md:p-10 card-hover overflow-hidden h-full`}
                            >
                                {/* Background Gradient */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${product.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                                />

                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Status Badge */}
                                    <div className="mb-4">
                                        <span className="inline-block px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-xs font-medium">
                                            {product.status}
                                        </span>
                                    </div>

                                    {/* Logo */}
                                    <div className="flex items-center gap-6 mb-6">
                                        <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-white/5 p-3">
                                            <Image
                                                src={product.logo}
                                                alt={product.name}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-3xl font-bold text-white">
                                                {product.name}
                                            </h3>
                                            <p className="text-gray-400 text-sm">{product.tagline}</p>
                                        </div>
                                    </div>

                                    {/* Target Market */}
                                    <div className="mb-4">
                                        <span className="text-xs text-gray-500">Target:</span>
                                        <span className="ml-2 text-sm text-primary-400">{product.target}</span>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-300 leading-relaxed mb-8">
                                        {product.description}
                                    </p>

                                    {/* Features */}
                                    <div className="grid grid-cols-2 gap-3 mb-8">
                                        {product.features.map((feature, i) => (
                                            <div
                                                key={i}
                                                className="flex items-center gap-2 text-sm text-gray-400"
                                            >
                                                <svg
                                                    className={`w-5 h-5 text-primary-400`}
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                                {feature}
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA Button */}
                                    <a
                                        href={product.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r ${product.gradient} text-white font-semibold hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300 group/btn`}
                                    >
                                        Kunjungi {product.name}
                                        <svg
                                            className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                                            />
                                        </svg>
                                    </a>
                                </div>

                                {/* Decorative Elements */}
                                <div
                                    className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${product.gradient} opacity-10 blur-3xl group-hover:opacity-20 transition-opacity duration-500`}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
