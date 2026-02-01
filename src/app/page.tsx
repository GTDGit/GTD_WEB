import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProductsSection from "@/components/sections/ProductsSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
    return (
        <>
            <HeroSection />
            <AboutSection noTopFade />
            <ProductsSection />
            <FeaturesSection />
            <ContactSection />
        </>
    );
}
