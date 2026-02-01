"use client";

import { useEffect, useRef } from "react";

const stats = [
    { value: "2", label: "Produk Digital" },
    { value: "5", label: "Negara Target" },
    { value: "B2C & B2B", label: "Model Bisnis" },
    { value: "2025", label: "Tahun Berdiri" },
];

const values = [
    {
        icon: (
            <svg
                className="w-8 h-8"
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
        title: "Inovasi Berkelanjutan",
        desc: "Mengembangkan solusi digital yang inovatif untuk memenuhi kebutuhan pasar yang terus berkembang.",
    },
    {
        icon: (
            <svg
                className="w-8 h-8"
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
        title: "Memberdayakan Mitra",
        desc: "Membantu UMKM dan mitra bisnis untuk tumbuh bersama melalui platform yang mudah digunakan.",
    },
    {
        icon: (
            <svg
                className="w-8 h-8"
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
        title: "Kepercayaan Digital",
        desc: "Mengutamakan keamanan data dan transparansi layanan bagi seluruh pengguna.",
    },
];

interface AboutSectionProps {
    hideHeader?: boolean;
    noTopFade?: boolean;
}

export default function AboutSection({ hideHeader = false, noTopFade = false }: AboutSectionProps) {
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
            id="tentang"
            className="relative py-32 overflow-hidden"
        >


            <div className="relative max-w-7xl mx-auto px-6">
                {/* Section Header */}
                {!hideHeader && (
                    <div className="text-center mb-20 fade-in-section">
                        <span className="inline-block px-4 py-2 rounded-full glass text-primary-400 text-sm font-medium mb-4">
                            Tentang Kami
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Mengenal{" "}
                            <span className="text-gradient">PT Gerbang Transaksi Digital</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
                            Startup teknologi yang berfokus pada pengembangan solusi transaksi digital
                            untuk memberdayakan ekonomi mikro dan mendukung gaya hidup modern
                            di Indonesia dan Asia Tenggara.
                        </p>
                    </div>
                )}

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 fade-in-section">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="glass rounded-2xl p-6 text-center card-hover gradient-border flex flex-col justify-center min-h-[140px]"
                        >
                            <div className="text-3xl md:text-4xl font-bold text-gradient mb-2 whitespace-nowrap">
                                {stat.value}
                            </div>
                            <div className="text-gray-400 text-sm">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Values Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {values.map((item, index) => (
                        <div
                            key={index}
                            className="fade-in-section glass rounded-2xl p-8 card-hover group"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-500/20 to-primary-600/20 flex items-center justify-center text-primary-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">
                                {item.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Vision Mission */}
                <div className="mt-20 fade-in-section">
                    {/* Vision */}
                    <div className="glass rounded-2xl p-8 gradient-border mb-8">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                                <svg
                                    className="w-6 h-6 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-white">Visi</h3>
                        </div>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            Menjadi gerbang utama penggerak ekonomi digital mikro dan gaya hidup modern yang inklusif di Asia Tenggara.
                        </p>
                    </div>

                    {/* Mission */}
                    <div className="glass rounded-2xl p-8 gradient-border">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                                <svg
                                    className="w-6 h-6 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 10V3L4 14h7v7l9-11h-7z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-white">Misi</h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <h4 className="font-semibold text-white">Memberdayakan Potensi Ekonomi Mitra</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Menyediakan platform layanan keuangan dan PPOB yang lengkap untuk membantu mitra dan UMKM mendapatkan penghasilan tambahan serta kemudahan bertransaksi.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-semibold text-white">Menghadirkan Akses Hiburan Digital Terbaik</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Memberikan pengalaman transaksi produk digital yang tercepat, harga kompetitif, dan teraman untuk mendukung gaya hidup komunitas digital.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-semibold text-white">Inovasi Teknologi Berorientasi Pengguna</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Membangun ekosistem aplikasi yang mudah digunakan, stabil, dan aman untuk menjembatani kebutuhan bisnis maupun personal pengguna.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-semibold text-white">Membangun Kepercayaan Digital</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Menjadi perusahaan teknologi yang mengutamakan keamanan data dan transparansi layanan bagi seluruh mitra dan pelanggan.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
