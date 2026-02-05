import { useTranslation } from "react-i18next";
import sheBeautyClinicLogo from "@/assets/she-beauty-clinic-logo.png";
import soulMedicalCenterLogo from "@/assets/soul-medical-center-logo.png";

const HeroSection = () => {
  const { t } = useTranslation();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover" key="hero-video-2025">
          <source src="/hero-video.mp4?v=2" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-24 md:pt-32">
        <div className="max-w-lg space-y-6 blur-to-focus">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-white leading-[1.1] drop-shadow-lg tracking-wide my-0 px-0 mx-0 text-left">
            <span className="font-semibold">{t('hero.titlePart1')}</span> {t('hero.titleMiddle')} <span className="font-semibold">{t('hero.titlePart2')}</span>
          </h1>
        </div>
      </div>

      {/* Partnership Logos - Bottom Left */}
      <div className="absolute bottom-8 left-4 lg:left-8 z-10 flex items-center gap-4">
        <span className="text-white/80 text-xs tracking-widest font-light">In Partnership With</span>
        <img 
          src={sheBeautyClinicLogo} 
          alt="SHE Beauty Clinic" 
          className="h-12 lg:h-14 w-auto brightness-0 invert"
        />
        <img 
          src={soulMedicalCenterLogo} 
          alt="Soul Medical Center" 
          className="h-8 lg:h-10 w-auto brightness-0 invert"
        />
      </div>
    </section>
  );
};

export default HeroSection;
