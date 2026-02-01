import AboutSection from "@/components/sections/AboutSection";

export const metadata = {
    title: "Tentang Kami - Gerbang Transaksi Digital",
    description:
        "Mengenal PT Gerbang Transaksi Digital, startup teknologi yang mengembangkan solusi transaksi digital untuk Indonesia dan Asia Tenggara.",
};

export default function TentangPage() {
    return (
        <div>
            {/* Page Hero */}
            <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="relative max-w-7xl mx-auto px-6 text-center pt-32 pb-20">
                    <span className="inline-block px-4 py-2 rounded-full glass text-primary-400 text-sm font-medium mb-4">
                        Tentang Kami
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Mengenal{" "}
                        <span className="text-gradient">PT Gerbang Transaksi Digital</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                        Startup teknologi yang berfokus pada pengembangan solusi transaksi digital
                        untuk memberdayakan ekonomi mikro di Indonesia dan Asia Tenggara.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <AboutSection hideHeader noTopFade />

            {/* Additional About Content */}
            <section className="relative py-20 overflow-hidden">
                <div className="relative max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Mengapa Memilih <span className="text-gradient">Kami?</span>
                            </h2>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-primary-600/10 flex items-center justify-center text-primary-400 shrink-0">
                                        <svg
                                            className="w-6 h-6"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-2">
                                            Fokus pada Solusi
                                        </h3>
                                        <p className="text-gray-400">
                                            Mengembangkan produk yang benar-benar menjawab kebutuhan
                                            pasar dan mitra bisnis.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-primary-600/10 flex items-center justify-center text-primary-400 shrink-0">
                                        <svg
                                            className="w-6 h-6"
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
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-2">
                                            Teknologi Modern
                                        </h3>
                                        <p className="text-gray-400">
                                            Membangun infrastruktur dengan teknologi terkini untuk
                                            pengalaman pengguna terbaik.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-primary-600/10 flex items-center justify-center text-primary-400 shrink-0">
                                        <svg
                                            className="w-6 h-6"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-2">
                                            Memberdayakan Mitra
                                        </h3>
                                        <p className="text-gray-400">
                                            Berkomitmen membantu UMKM dan mitra bisnis tumbuh
                                            bersama melalui platform kami.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="glass rounded-3xl p-8 gradient-border">
                            <h3 className="text-2xl font-bold text-white mb-6">
                                Nilai-nilai Perusahaan
                            </h3>
                            <div className="space-y-4">
                                {[
                                    {
                                        title: "Integritas",
                                        desc: "Kejujuran dan transparansi dalam setiap transaksi",
                                    },
                                    {
                                        title: "Inovasi",
                                        desc: "Terus berinovasi untuk memberikan solusi terbaik",
                                    },
                                    {
                                        title: "Kepuasan Pelanggan",
                                        desc: "Mengutamakan kepuasan dan kepercayaan pelanggan",
                                    },
                                    {
                                        title: "Kolaborasi",
                                        desc: "Bekerja sama untuk mencapai tujuan bersama",
                                    },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <span className="w-2 h-2 rounded-full bg-primary-400 mt-2 shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-white">{item.title}</h4>
                                            <p className="text-gray-400 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
