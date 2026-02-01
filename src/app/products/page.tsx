import ProductsSection from "@/components/sections/ProductsSection";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Produk Kami - Gerbang Transaksi Digital",
    description:
        "Produk PT Gerbang Transaksi Digital: Seaply untuk voucher game B2C dan ppob.id untuk layanan PPOB B2B2C.",
};

const productDetails = [
    {
        name: "Seaply",
        tagline: "SEA Gaming Supply",
        status: "Dalam Pengembangan",
        logo: "/logo_seaply.png",
        url: "https://seaply.co",
        description:
            "Platform B2C & B2B untuk penjualan voucher game dan top-up game dengan jangkauan Asia Tenggara (Indonesia, Singapura, Malaysia, Thailand, Filipina). Dirancang untuk komunitas gamer yang menginginkan transaksi cepat dan harga kompetitif.",
        gradient: "from-blue-500 to-cyan-500",
        target: "Gamer & Komunitas Gaming",
        features: [
            {
                title: "Top-up Game Instan",
                desc: "Proses top-up game favorit dalam hitungan detik",
            },
            {
                title: "Jangkauan Regional",
                desc: "Melayani 5 negara di Asia Tenggara",
            },
            {
                title: "Voucher Lengkap",
                desc: "Berbagai voucher untuk game populer",
            },
            {
                title: "Harga Kompetitif",
                desc: "Harga bersaing untuk semua produk",
            },
        ],
        highlights: [
            { value: "5", label: "Negara Target" },
            { value: "B2C & B2B", label: "Model Bisnis" },
            { value: "Gaming", label: "Fokus Produk" },
        ],
    },
    {
        name: "ppob.id",
        tagline: "Payment Point Online Bank",
        status: "Dalam Pengembangan",
        logo: "/logo_ppob.png",
        url: "https://ppob.id",
        description:
            "Platform B2B2C & B2B untuk penjualan produk PPOB dengan harga distributor. Membantu konter pulsa, toko, dan warung mendapatkan penghasilan tambahan melalui berbagai layanan digital.",
        gradient: "from-blue-600 to-indigo-600",
        target: "Konter Pulsa, Toko & Warung",
        features: [
            {
                title: "Harga Distributor",
                desc: "Harga kompetitif setara distributor besar",
            },
            {
                title: "QRIS Statis",
                desc: "Terima pembayaran langsung ke saldo aplikasi",
            },
            {
                title: "Transfer Bank",
                desc: "Transfer ke semua bank di Indonesia",
            },
            {
                title: "Produk Lengkap",
                desc: "Pulsa, data, PLN, tagihan, dan e-money",
            },
        ],
        highlights: [
            { value: "B2B2C & B2B", label: "Model Bisnis" },
            { value: "UMKM", label: "Target Mitra" },
            { value: "QRIS", label: "Fitur Unggulan" },
        ],
    },
];

export default function ProdukPage() {
    return (
        <div>
            {/* Page Hero */}
            <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="relative max-w-7xl mx-auto px-6 text-center pt-32 pb-20">
                    <span className="inline-block px-4 py-2 rounded-full glass text-primary-400 text-sm font-medium mb-4">
                        Produk Kami
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Produk <span className="text-gradient">Kami</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                        Dua produk digital yang sedang kami kembangkan untuk memberdayakan
                        UMKM dan mendukung gaya hidup digital di Asia Tenggara.
                    </p>
                </div>
            </section>

            {/* Product Details */}
            {productDetails.map((product, index) => (
                <section
                    key={product.name}
                    className="relative py-20 overflow-hidden"
                >
                    <div className="relative max-w-7xl mx-auto px-6">
                        <div
                            className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Product Info */}
                            <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                                {/* Status Badge */}
                                <div className="mb-4">
                                    <span className="inline-block px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-xs font-medium">
                                        {product.status}
                                    </span>
                                </div>

                                <div className="flex items-center gap-4 mb-4">
                                    <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-white/5 p-2">
                                        <Image
                                            src={product.logo}
                                            alt={product.name}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-bold text-white">
                                            {product.name}
                                        </h2>
                                        <p className="text-gray-400">{product.tagline}</p>
                                    </div>
                                </div>

                                {/* Target Market */}
                                <div className="mb-4">
                                    <span className="text-xs text-gray-500">Target:</span>
                                    <span className="ml-2 text-sm text-primary-400">{product.target}</span>
                                </div>

                                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                    {product.description}
                                </p>

                                {/* Highlights */}
                                <div className="grid grid-cols-3 gap-4 mb-8">
                                    {product.highlights.map((item, i) => (
                                        <div key={i} className="glass rounded-xl p-4 text-center">
                                            <div className="text-2xl font-bold text-gradient">
                                                {item.value}
                                            </div>
                                            <div className="text-gray-400 text-xs">{item.label}</div>
                                        </div>
                                    ))}
                                </div>

                                <a
                                    href={product.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r ${product.gradient} text-white font-semibold hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300`}
                                >
                                    Kunjungi {product.name}
                                    <svg
                                        className="w-5 h-5"
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
                                </a>
                            </div>

                            {/* Features Grid */}
                            <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {product.features.map((feature, i) => (
                                        <div
                                            key={i}
                                            className="glass rounded-xl p-6 card-hover group"
                                        >
                                            <div
                                                className={`w-10 h-10 rounded-lg bg-gradient-to-br ${product.gradient} opacity-20 flex items-center justify-center mb-4 group-hover:opacity-30 transition-opacity`}
                                            >
                                                <svg
                                                    className="w-5 h-5 text-white"
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
                                            </div>
                                            <h3 className="text-lg font-semibold text-white mb-2">
                                                {feature.title}
                                            </h3>
                                            <p className="text-gray-400 text-sm">{feature.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}
        </div>
    );
}
