import ContactSection from "@/components/sections/ContactSection";

export const metadata = {
    title: "Kontak Kami - Gerbang Transaksi Digital",
    description:
        "Hubungi PT Gerbang Transaksi Digital untuk informasi kemitraan dan produk kami.",
};

export default function KontakPage() {
    return (
        <div>
            {/* Page Hero */}
            <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="relative max-w-7xl mx-auto px-6 text-center pt-32 pb-20">
                    <span className="inline-block px-4 py-2 rounded-full glass text-primary-400 text-sm font-medium mb-4">
                        Hubungi Kami
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Mari <span className="text-gradient">Terhubung</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                        Tertarik bermitra atau ingin tahu lebih lanjut tentang produk kami?
                        Hubungi kami melalui form di bawah ini.
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <ContactSection hideHeader noTopFade />

            {/* Map / Office Locations */}
            <section className="relative py-20 overflow-hidden">
                <div className="relative max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Kantor <span className="text-gradient">Kami</span>
                        </h2>
                    </div>

                    <div className="glass rounded-3xl p-8 md:p-10">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-6">
                                    Kantor Utama
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-primary-500/20 flex items-center justify-center text-primary-400 shrink-0">
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
                                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-white">Alamat</h4>
                                            <p className="text-gray-400 text-sm">
                                                Wisma Keiai 14th Floor Unit 1410, Jl. Jenderal Sudirman, Karet Tengsin, Tanah Abang, Jakarta Pusat, DKI Jakarta, 10220
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-primary-500/20 flex items-center justify-center text-primary-400 shrink-0">
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
                                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-white">Jam Operasional</h4>
                                            <p className="text-gray-400 text-sm">
                                                Senin - Jumat: 09:00 - 18:00 WIB
                                                <br />
                                                Customer Support: 24/7
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-white mb-6">
                                    Kantor Operasional
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-primary-500/20 flex items-center justify-center text-primary-400 shrink-0">
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
                                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-white">Alamat</h4>
                                            <p className="text-gray-400 text-sm">
                                                Jl. Ness Muhajirin, Muhajirin, Jambi Luar Kota, Muaro Jambi, Jambi 36361
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-white mt-6 mb-6">
                            Kontak Kami
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 glass rounded-xl">
                                <div>
                                    <h4 className="font-medium text-white">General Inquiry</h4>
                                    <p className="text-gray-400 text-sm">hello@gtd.co.id</p>
                                </div>
                                <a
                                    href="mailto:hello@gtd.co.id"
                                    className="text-primary-400 hover:text-primary-300"
                                >
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
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                </a>
                            </div>
                            <div className="flex items-center justify-between p-4 glass rounded-xl">
                                <div>
                                    <h4 className="font-medium text-white">Support</h4>
                                    <p className="text-gray-400 text-sm">help@gtd.co.id</p>
                                </div>
                                <a
                                    href="mailto:help@gtd.co.id"
                                    className="text-primary-400 hover:text-primary-300"
                                >
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
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                </a>
                            </div>
                            <div className="flex items-center justify-between p-4 glass rounded-xl">
                                <div>
                                    <h4 className="font-medium text-white">Partnership</h4>
                                    <p className="text-gray-400 text-sm">
                                        partnership@gtd.co.id
                                    </p>
                                </div>
                                <a
                                    href="mailto:partnership@gtd.co.id"
                                    className="text-primary-400 hover:text-primary-300"
                                >
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
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Preview */}
            <section className="relative py-20 overflow-hidden">
                <div className="relative max-w-4xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Pertanyaan <span className="text-gradient">Umum</span>
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {[
                            {
                                q: "Kapan produk akan diluncurkan?",
                                a: "Seaply dan ppob.id saat ini sedang dalam tahap pengembangan. Hubungi kami untuk informasi lebih lanjut tentang timeline peluncuran.",
                            },
                            {
                                q: "Bagaimana cara menjadi mitra?",
                                a: "Anda dapat menghubungi tim kami melalui email partnership@gtd.co.id atau mengisi form kontak di atas untuk mendaftarkan minat Anda.",
                            },
                            {
                                q: "Apakah ada biaya pendaftaran mitra?",
                                a: "Tidak ada biaya pendaftaran untuk menjadi mitra. Anda hanya perlu melakukan deposit saldo untuk mulai bertransaksi.",
                            },
                        ].map((faq, index) => (
                            <div key={index} className="glass rounded-xl p-6">
                                <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
                                <p className="text-gray-400 text-sm">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
