import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import AboutDoctorSection from "@/components/home/AboutDoctorSection";
import SignatureProceduresSection from "@/components/home/SignatureProceduresSection";
import CertificatesSection from "@/components/home/CertificatesSection";
import DifferentiatorsSection from "@/components/home/DifferentiatorsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTABanner from "@/components/home/CTABanner";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutDoctorSection />
        <SignatureProceduresSection />
        <CertificatesSection />
        <DifferentiatorsSection />
        <TestimonialsSection />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
