import Image from "next/image";

export default function HeroSection() {
    return (
        <section
            id="beranda"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Floating Orbs */}
            <div className="floating-orb w-96 h-96 bg-primary-500 top-1/4 -left-48" />
            <div className="floating-orb w-80 h-80 bg-primary-600 bottom-1/4 -right-40 animation-delay-3000" />
            <div className="floating-orb w-64 h-64 bg-primary-400 top-1/2 left-1/3 opacity-20" />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
                {/* Logo */}
                <div className="mb-8 animate-fade-in">
                    <div className="relative w-32 h-32 mx-auto mb-6">
                        <Image
                            src="/logo_gtd.png"
                            alt="PT Gerbang Transaksi Digital"
                            fill
                            className="object-contain drop-shadow-2xl"
                            priority
                        />
                    </div>
                </div>

                {/* Main Heading */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up">
                    <span className="text-gradient-shine">GERBANG</span>
                    <br />
                    <span className="text-gradient">TRANSAKSI DIGITAL</span>
                </h1>

                {/* Subtitle */}
                <p className="text-xl md:text-2xl text-gray-300 mb-4 animate-fade-in-up animate-delay-200 max-w-3xl mx-auto">
                    Digital Transaction Gateway
                </p>

                {/* Description */}
                <p className="text-base md:text-lg text-gray-400 mb-12 animate-fade-in-up animate-delay-300 max-w-2xl mx-auto leading-relaxed">
                    Startup teknologi yang mengembangkan solusi transaksi digital untuk memberdayakan
                    UMKM dan mendukung gaya hidup modern di Indonesia dan Asia Tenggara.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-400 mb-12">
                    <a href="products" className="btn-primary">
                        <span>Lihat Produk Kami</span>
                    </a>
                    <a href="about-us" className="btn-outline">
                        Pelajari Lebih Lanjut
                    </a>
                </div>

                {/* Scroll Indicator */}
                <div className="flex justify-center animate-bounce">
                    <svg
                        className="w-6 h-6 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </svg>
                </div>
            </div>


        </section>
    );
}
