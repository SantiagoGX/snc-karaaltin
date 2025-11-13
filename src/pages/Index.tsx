import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import AboutDoctorSection from "@/components/home/AboutDoctorSection";
import SignatureProceduresSection from "@/components/home/SignatureProceduresSection";
import CertificatesSection from "@/components/home/CertificatesSection";
import DifferentiatorsSection from "@/components/home/DifferentiatorsSection";
import FacilitiesSection from "@/components/home/FacilitiesSection";
import OperationsSection from "@/components/home/OperationsSection";

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
        <FacilitiesSection />
        <OperationsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
