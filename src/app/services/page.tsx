import FeaturesSection from "@/components/sections/FeaturesSection";
import Link from "next/link";

export const metadata = {
    title: "Layanan Kami - Gerbang Transaksi Digital",
    description:
        "Fitur dan layanan yang sedang dikembangkan PT Gerbang Transaksi Digital untuk kebutuhan transaksi digital Anda.",
};

const services = [
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
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>
        ),
        title: "Seaply - Gaming Supply",
        description:
            "Platform B2C untuk penjualan voucher game dan top-up game dengan jangkauan Asia Tenggara. Dirancang untuk komunitas gamer.",
        features: [
            "Top-up game instan",
            "Voucher game lengkap",
            "5 negara Asia Tenggara",
            "Harga kompetitif",
        ],
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
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
            </svg>
        ),
        title: "ppob.id - Layanan PPOB",
        description:
            "Aplikasi B2B2C untuk penjualan produk PPOB dengan harga distributor. Membantu mitra UMKM mendapatkan penghasilan tambahan.",
        features: [
            "Pulsa & paket data",
            "PLN & tagihan",
            "Transfer bank",
            "QRIS statis untuk mitra",
        ],
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
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>
        ),
        title: "Harga Distributor",
        description:
            "Menawarkan harga yang kompetitif setara distributor besar untuk membantu mitra mendapatkan margin keuntungan yang optimal.",
        features: [
            "Harga bersaing",
            "Margin menarik",
            "Tanpa biaya admin",
            "Promo berkala",
        ],
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
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
            </svg>
        ),
        title: "Kemitraan UMKM",
        description:
            "Program kemitraan untuk konter pulsa, toko, dan warung. Bergabung menjadi mitra dan dapatkan akses ke berbagai produk digital.",
        features: [
            "Pendaftaran mudah",
            "Tanpa modal besar",
            "Dukungan mitra",
            "Pelatihan bisnis",
        ],
    },
];

export default function LayananPage() {
    return (
        <div>
            {/* Page Hero */}
            <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="relative max-w-7xl mx-auto px-6 text-center pt-32 pb-20">
                    <span className="inline-block px-4 py-2 rounded-full glass text-primary-400 text-sm font-medium mb-4">
                        Layanan Kami
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Fitur <span className="text-gradient">Unggulan</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                        Fitur-fitur yang sedang kami kembangkan untuk memberikan
                        pengalaman terbaik dalam setiap transaksi digital Anda.
                    </p>
                </div>
            </section>

            {/* Services Detail */}
            <section className="relative py-20 overflow-hidden">
                {/* No fades needed - hero fades to dark-surface and next section is also dark-surface */}
                <div className="relative max-w-7xl mx-auto px-6">
                    <div className="grid gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="glass rounded-3xl p-8 md:p-10 card-hover"
                            >
                                <div className="grid lg:grid-cols-3 gap-8 items-center">
                                    <div className="lg:col-span-2">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500/20 to-primary-600/10 flex items-center justify-center text-primary-400">
                                                {service.icon}
                                            </div>
                                            <h2 className="text-2xl md:text-3xl font-bold text-white">
                                                {service.title}
                                            </h2>
                                        </div>
                                        <p className="text-gray-300 text-lg leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>
                                    <div className="space-y-3">
                                        {service.features.map((feature, i) => (
                                            <div
                                                key={i}
                                                className="flex items-center gap-3 text-gray-300"
                                            >
                                                <svg
                                                    className="w-5 h-5 text-primary-400 shrink-0"
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
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FeaturesSection */}
            <FeaturesSection noTopFade noBottomFade noHeader />
        </div>
    );
}
