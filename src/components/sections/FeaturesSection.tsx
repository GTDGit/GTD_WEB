"use client";

import { useEffect, useRef } from "react";

const features = [
    {
        icon: (
            <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
            </svg>
        ),
        title: "Multi-Platform",
        description:
            "Dikembangkan untuk web dan mobile agar pengguna dapat mengakses layanan dengan mudah kapan saja.",
    },
    {
        icon: (
            <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
            </svg>
        ),
        title: "Keamanan Data",
        description:
            "Dibangun dengan standar keamanan modern untuk melindungi data dan transaksi pengguna.",
    },
    {
        icon: (
            <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                />
            </svg>
        ),
        title: "Proses Cepat",
        description:
            "Dirancang untuk memproses transaksi dengan cepat dan efisien menggunakan infrastruktur modern.",
    },
    {
        icon: (
            <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>
        ),
        title: "Harga Kompetitif",
        description:
            "Menawarkan harga yang bersaing untuk membantu mitra dan pengguna mendapatkan keuntungan maksimal.",
    },
    {
        icon: (
            <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>
        ),
        title: "Jangkauan Regional",
        description:
            "Seaply dikembangkan untuk melayani pasar Asia Tenggara: Indonesia, Singapura, Malaysia, Thailand, dan Filipina.",
    },
    {
        icon: (
            <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
            </svg>
        ),
        title: "Fokus Mitra UMKM",
        description:
            "ppob.id dirancang khusus untuk memberdayakan konter pulsa, toko, dan warung dengan harga distributor.",
    },
];

interface FeaturesSectionProps {
    noTopFade?: boolean;
    noBottomFade?: boolean;
    noHeader?: boolean;
}

export default function FeaturesSection({ noTopFade = false, noBottomFade = false, noHeader = false }: FeaturesSectionProps) {
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
            id="layanan"
            className="relative py-32 overflow-hidden"
        >


            <div className="relative max-w-7xl mx-auto px-6">
                {/* Section Header */}
                {!noHeader && (
                    <div className="text-center mb-20 fade-in-section">
                        <span className="inline-block px-4 py-2 rounded-full glass text-primary-400 text-sm font-medium mb-4">
                            Layanan Kami
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Fitur <span className="text-gradient">Unggulan</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                            Fitur-fitur yang sedang kami kembangkan untuk memberikan
                            pengalaman terbaik dalam setiap transaksi digital Anda.
                        </p>
                    </div>
                )}

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="fade-in-section"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="glass rounded-2xl p-8 h-full card-hover group">
                                {/* Icon */}
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500/20 to-primary-600/10 flex items-center justify-center text-primary-400 mb-6 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-primary-500/30 group-hover:to-primary-600/20 transition-all duration-300">
                                    {feature.icon}
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-300 transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed text-sm">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Extra Info */}
                <div className="mt-20 fade-in-section">
                    <div className="glass rounded-3xl p-10 md:p-14 text-center gradient-border">
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Tertarik <span className="text-gradient">Bekerja sama?</span>
                        </h3>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
                            Kami terbuka untuk peluang partnertship dan kolaborasi.
                            Hubungi kami untuk informasi lebih lanjut.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="contact-us" className="btn-primary">
                                <span>Hubungi Kami</span>
                            </a>
                            <a href="products" className="btn-outline">
                                Lihat Produk
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
