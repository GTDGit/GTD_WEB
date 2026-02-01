"use client";

import { useEffect, useRef, useState } from "react";

interface ContactSectionProps {
    hideHeader?: boolean;
    noTopFade?: boolean;
}

const countryCodes = [
    { code: "+62", country: "ID", flag: "🇮🇩" },
    { code: "+65", country: "SG", flag: "🇸🇬" },
    { code: "+60", country: "MY", flag: "🇲🇾" },
    { code: "+66", country: "TH", flag: "🇹🇭" },
    { code: "+63", country: "PH", flag: "🇵🇭" },
    { code: "+84", country: "VN", flag: "🇻🇳" },
];

export default function ContactSection({ hideHeader = false, noTopFade = false }: ContactSectionProps) {
    const sectionRef = useRef<HTMLElement>(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        product: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
    const [showToast, setShowToast] = useState(false);
    const [showModal, setShowModal] = useState(false);

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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");
        setShowToast(false); // Hide any previous toast
        setShowModal(false); // Hide any previous modal

        try {
            const response = await fetch("https://formspree.io/f/mkorzbqe", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus("success");
                setFormData({ name: "", email: "", phone: "", company: "", product: "", message: "" });
                setShowToast(true);
                setShowModal(true);
                setTimeout(() => setShowToast(false), 5000); // Hide toast after 5s
            } else {
                setSubmitStatus("error");
                setShowToast(true);
                setShowModal(true);
                setTimeout(() => setShowToast(false), 5000);
            }
        } catch {
            setSubmitStatus("error");
            setShowToast(true);
            setShowModal(true);
            setTimeout(() => setShowToast(false), 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            ref={sectionRef}
            id="kontak"
            className="relative py-32 overflow-hidden"
        >
            {/* Toast Notification */}
            <div className={`fixed top-24 right-6 z-50 transition-all duration-500 transform ${showToast ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0 pointer-events-none"}`}>
                <div className={`px-6 py-4 rounded-xl shadow-2xl flex items-center gap-4 ${submitStatus === "success" ? "bg-green-500" : "bg-red-500"
                    } text-white font-medium`}>
                    <div className="bg-white/20 p-2 rounded-full">
                        {submitStatus === "success" ? "✓" : "!"}
                    </div>
                    <div>
                        <div className="font-bold">{submitStatus === "success" ? "Berhasil!" : "Gagal!"}</div>
                        <div className="text-sm opacity-90">
                            {submitStatus === "success" ? "Pesan berhasil terkirim" : "Pesan gagal terkirim"}
                        </div>
                    </div>
                    <button onClick={() => setShowToast(false)} className="ml-2 hover:bg-white/20 p-1 rounded-lg transition-colors">
                        ✕
                    </button>
                </div>
            </div>

            {/* Modal Notification */}
            {showModal && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fade-in" onClick={() => setShowModal(false)} />
                    <div className="relative bg-dark-surface border border-white/10 rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl animate-scale-up">
                        <div className={`w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center ${submitStatus === "success" ? "bg-green-500/10" : "bg-red-500/10"
                            }`}>
                            {submitStatus === "success" ? (
                                <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            ) : (
                                <svg className="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">
                            {submitStatus === "success" ? "Pesan Terkirim!" : "Gagal Mengirim"}
                        </h3>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            {submitStatus === "success"
                                ? "Terima kasih telah menghubungi kami. Tim kami akan segera merespon pesan Anda."
                                : "Maaf, terjadi kesalahan teknis. Silakan coba lagi beberapa saat lagi."}
                        </p>
                        <button
                            onClick={() => setShowModal(false)}
                            className="btn-primary w-full"
                        >
                            <span>Tutup</span>
                        </button>
                    </div>
                </div>
            )}



            <div className="relative max-w-7xl mx-auto px-6">
                {/* Section Header */}
                {!hideHeader && (
                    <div className="text-center mb-20 fade-in-section">
                        <span className="inline-block px-4 py-2 rounded-full glass text-primary-400 text-sm font-medium mb-4">
                            Hubungi Kami
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Mari <span className="text-gradient">Terhubung</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                            Tertarik untuk bekerja sama atau ingin tahu lebih lanjut tentang produk kami?
                            Hubungi kami melalui form di bawah ini.
                        </p>
                    </div>
                )}

                <div className="max-w-2xl mx-auto">
                    {/* Contact Form */}
                    <div className="fade-in-section">
                        <div className="glass rounded-3xl p-8 md:p-10">
                            <h3 className="text-2xl font-bold text-white mb-6">
                                Kirim Pesan
                            </h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <div>
                                        <label
                                            htmlFor="company"
                                            className="block text-sm font-medium text-gray-300 mb-2"
                                        >
                                            Nama Lengkap
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            value={formData.name}
                                            onChange={(e) =>
                                                setFormData({ ...formData, name: e.target.value })
                                            }
                                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                            placeholder="Masukkan Nama Lengkap Anda"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-gray-300 mb-2"
                                        >
                                            E-Mail
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={formData.email}
                                            onChange={(e) =>
                                                setFormData({ ...formData, email: e.target.value })
                                            }
                                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                            placeholder="Masukkan E-mail Anda"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="phone"
                                            className="block text-sm font-medium text-gray-300 mb-2"
                                        >
                                            Nomor Telepon
                                        </label>
                                        <input
                                            type="number"
                                            id="phone"
                                            value={formData.phone}
                                            onChange={(e) =>
                                                setFormData({ ...formData, phone: e.target.value })
                                            }
                                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                            placeholder="Masukkan Nomor Telepon Anda"
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label
                                        htmlFor="company"
                                        className="block text-sm font-medium text-gray-300 mb-2"
                                    >
                                        Nama Perusahaan (Opsional)
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        value={formData.company}
                                        onChange={(e) =>
                                            setFormData({ ...formData, company: e.target.value })
                                        }
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                        placeholder="Masukkan Nama Perusahaan Anda"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="product"
                                        className="block text-sm font-medium text-gray-300 mb-2"
                                    >
                                        Produk yang Diminati
                                    </label>
                                    <select
                                        id="product"
                                        value={formData.product}
                                        onChange={(e) =>
                                            setFormData({ ...formData, product: e.target.value })
                                        }
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all appearance-none cursor-pointer"
                                        required
                                    >
                                        <option value="" className="bg-dark-surface text-gray-400">Pilih Produk</option>
                                        <option value="ppob.id" className="bg-dark-surface text-white">ppob.id</option>
                                        <option value="seaply" className="bg-dark-surface text-white">Seaply</option>
                                        <option value="keduanya" className="bg-dark-surface text-white">Keduanya</option>
                                    </select>
                                </div>
                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-gray-300 mb-2"
                                    >
                                        Pesan
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={5}
                                        value={formData.message}
                                        onChange={(e) =>
                                            setFormData({ ...formData, message: e.target.value })
                                        }
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                                        placeholder="Tuliskan pesan Anda..."
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                                    disabled={isSubmitting}
                                >
                                    <span>
                                        {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
                                    </span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
