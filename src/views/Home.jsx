
import Hero from '../components/Hero';
import AboutSection from "../components/Sections/AboutSection";
import ServicesSection from "../components/Sections/ServicesSection";
import ContactSection from "../components/Sections/ContactSection";
import Footer from "../components/Footer";
import FeatureSection from "../components/Sections/FeatureSection";
import ClientSection from "../components/Sections/ClientSection";
import ProfessionalSection from "../components/Sections/ProfessionalSection";

function Home() {
    return (
        <>
            <Hero />
            <FeatureSection />
            <AboutSection />
            <ProfessionalSection />
            <ServicesSection />
            <ClientSection />
            <ContactSection />
            <Footer />
        </>
    );
}

export default Home;