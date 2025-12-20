import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/home/ContactCTASection";
import drKaraaltinLogo from "@/assets/dr-karaaltin-logo-white.svg";

const VibrasatPro = () => {
  const { t } = useTranslation();
  const [activeCard, setActiveCard] = useState(0);
  const overviewRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!cardsRef.current) return;
      const cards = cardsRef.current.querySelectorAll('.overview-card');
      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
          setActiveCard(index);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const overviewCards = [
    { number: "01", titleKey: "procedurePages.vibrasat.overview1Title", descKey: "procedurePages.vibrasat.overview1Desc" },
    { number: "02", titleKey: "procedurePages.vibrasat.overview2Title", descKey: "procedurePages.vibrasat.overview2Desc" },
    { number: "03", titleKey: "procedurePages.vibrasat.overview3Title", descKey: "procedurePages.vibrasat.overview3Desc" },
    { number: "04", titleKey: "procedurePages.vibrasat.overview4Title", descKey: "procedurePages.vibrasat.overview4Desc" },
    { number: "05", titleKey: "procedurePages.vibrasat.overview5Title", descKey: "procedurePages.vibrasat.overview5Desc" },
    { number: "06", titleKey: "procedurePages.vibrasat.overview6Title", descKey: "procedurePages.vibrasat.overview6Desc" },
  ];

  const journeySteps = [
    { step: "01", titleKey: "procedurePages.common.consultation", descKey: "procedurePages.vibrasat.journey1Desc" },
    { step: "02", titleKey: "procedurePages.vibrasat.journey2Title", descKey: "procedurePages.vibrasat.journey2Desc" },
    { step: "03", titleKey: "procedurePages.vibrasat.journey3Title", descKey: "procedurePages.vibrasat.journey3Desc" },
    { step: "04", titleKey: "procedurePages.vibrasat.journey4Title", descKey: "procedurePages.vibrasat.journey4Desc" },
    { step: "05", titleKey: "procedurePages.vibrasat.journey5Title", descKey: "procedurePages.vibrasat.journey5Desc" },
  ];

  const candidates = [
    { emoji: "💎", titleKey: "procedurePages.vibrasat.candidate1Title", descKey: "procedurePages.vibrasat.candidate1Desc" },
    { emoji: "🍑", titleKey: "procedurePages.vibrasat.candidate2Title", descKey: "procedurePages.vibrasat.candidate2Desc" },
    { emoji: "✨", titleKey: "procedurePages.vibrasat.candidate3Title", descKey: "procedurePages.vibrasat.candidate3Desc" },
    { emoji: "⚡", titleKey: "procedurePages.vibrasat.candidate4Title", descKey: "procedurePages.vibrasat.candidate4Desc" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* 1. HERO SECTION */}
        <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
          <img alt={t("procedurePages.vibrasat.title")} className="absolute inset-0 w-full h-full object-cover animate-[scale-in_1.5s_ease-out]" src="/lovable-uploads/d52b1132-d479-4541-9e5d-25b5aea5ce40.png" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
          <div className="relative container mx-auto px-8 h-full flex flex-col justify-center items-center text-center pointer-events-none">
            <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1 rounded-full text-xs uppercase tracking-widest text-white mb-6 animate-fade-in">
              {t("procedurePages.vibrasat.badge")}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-[0.1em] uppercase text-white mb-6 animate-fade-in">
              {t("procedurePages.vibrasat.title")}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl font-light animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {t("procedurePages.vibrasat.subtitle")}
            </p>
          </div>
        </section>

        {/* 2. INTRO / SEO BLOCK */}
        <section className="section-spacing bg-white">
          <div className="container mx-auto px-8 max-w-4xl text-center content-spacing">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed animate-fade-in">
              {t("procedurePages.vibrasat.intro")}
            </p>
          </div>
        </section>

        {/* 3. OVERVIEW — HAKIMI STICKY EFFECT */}
        <section ref={overviewRef} className="overview-section-dark">
          <div className="container mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16 relative">
              <div className="overview-sticky-left animate-fade-in">
                <div>
                  <h2 className="overview-title-dark">Vibrasat Pro™</h2>
                  <p className="overview-subtitle-dark">{t("procedurePages.common.overview")}</p>
                </div>
                <img src={drKaraaltinLogo} alt="Dr. Karaaltin Logo" className="w-48 h-auto opacity-80" />
              </div>

              <div ref={cardsRef} className="space-y-8 min-h-screen">
                {overviewCards.map((card, index) => (
                  <div key={index} className={`overview-card-dark ${activeCard === index ? 'shadow-lg border-white/20' : ''}`}>
                    <h3 className="overview-card-title-dark">
                      {card.number} // {t(card.titleKey)}
                    </h3>
                    <p className="overview-card-text-dark">{t(card.descKey)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. FEATURED SECTION */}
        <section className="section-spacing bg-white">
          <div className="container mx-auto px-8 max-w-4xl text-center content-spacing">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed animate-fade-in">
              {t("procedurePages.vibrasat.featured")}
            </p>
          </div>
        </section>

        {/* 5. PROCEDURE DETAILS */}
        <section className="section-spacing bg-gray-50">
          <div className="container mx-auto px-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-center mb-12 lg:mb-16 animate-fade-in">
              {t("procedurePages.common.procedureDetails")}
            </h2>
            
            <div className="max-w-6xl mx-auto space-y-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="order-2 lg:order-1 content-spacing animate-fade-in">
                  <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase mb-6">
                    {t("procedurePages.vibrasat.techTitle")}
                  </h3>
                  <ul className="space-y-4 text-base md:text-lg text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-gray-900 font-bold mt-1">•</span>
                      <span>{t("procedurePages.vibrasat.tech1")}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-gray-900 font-bold mt-1">•</span>
                      <span>{t("procedurePages.vibrasat.tech2")}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-gray-900 font-bold mt-1">•</span>
                      <span>{t("procedurePages.vibrasat.tech3")}</span>
                    </li>
                  </ul>
                </div>
                <div className="order-1 lg:order-2 animate-fade-in">
                  <img alt={t("procedurePages.vibrasat.techTitle")} className="w-full aspect-[4/3] object-cover rounded-lg shadow-lg" src="/lovable-uploads/8d47f823-fe6a-4b94-b54e-2dd4320e9525.jpg" />
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="animate-fade-in">
                  <img alt={t("procedurePages.vibrasat.applicationsTitle")} className="w-full aspect-[4/3] object-cover rounded-lg shadow-lg" src="/lovable-uploads/e1b2f457-eb50-499f-8031-a77737c97853.jpg" />
                </div>
                <div className="content-spacing animate-fade-in">
                  <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase mb-6">
                    {t("procedurePages.vibrasat.applicationsTitle")}
                  </h3>
                  <ul className="space-y-4 text-base md:text-lg text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-gray-900 font-bold mt-1">•</span>
                      <span>{t("procedurePages.vibrasat.application1")}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-gray-900 font-bold mt-1">•</span>
                      <span>{t("procedurePages.vibrasat.application2")}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. SURGICAL JOURNEY */}
        <section className="section-spacing bg-white">
          <div className="container mx-auto px-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-center mb-12 lg:mb-16 animate-fade-in">
              {t("procedurePages.common.surgicalJourney")}
            </h2>
            
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {journeySteps.map((item, index) => (
                <div key={index} className="text-center space-y-4 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-5xl md:text-6xl font-light text-gray-200">{item.step}</div>
                  <h3 className="text-xl md:text-2xl font-light tracking-wide uppercase">{t(item.titleKey)}</h3>
                  <p className="text-base text-gray-700 leading-relaxed">{t(item.descKey)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. RECOVERY BLOCK */}
        <section className="section-spacing bg-gray-50">
          <div className="container mx-auto px-8">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="animate-fade-in">
                <img alt={t("procedurePages.common.recoveryHealing")} className="w-full aspect-[4/3] object-cover rounded-lg shadow-lg" src="/lovable-uploads/f0505104-8b65-4c34-b1d5-f393bdf74d7d.jpg" />
              </div>
              <div className="content-spacing animate-fade-in">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase mb-6">
                  {t("procedurePages.common.recoveryHealing")}
                </h2>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
                  {t("procedurePages.vibrasat.recovery")}
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded text-sm uppercase tracking-widest font-light hover:bg-gray-800 transition-all duration-300">
                  {t("procedurePages.common.bookConsultation")}
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 8. IDEAL CANDIDATES */}
        <section className="candidates-section-dark">
          <div className="container mx-auto px-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-center mb-12 lg:mb-16 animate-fade-in text-white">
              {t("procedurePages.common.idealCandidates")}
            </h2>
            
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {candidates.map((candidate, index) => (
                <div key={index} className="candidate-card-dark text-center" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="candidate-icon-dark">{candidate.emoji}</div>
                  <h3 className="candidate-card-title-dark">{t(candidate.titleKey)}</h3>
                  <p className="candidate-card-text-dark">{t(candidate.descKey)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. BEFORE & AFTER CTA */}
        <section className="section-spacing bg-gray-50">
          <div className="container mx-auto px-8 text-center">
            <div className="max-w-3xl mx-auto content-spacing animate-fade-in">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase mb-8">
                {t("procedurePages.vibrasat.galleryCta")}
              </h2>
              <Link to="/gallery" className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded text-sm uppercase tracking-widest font-light hover:bg-gray-800 transition-all duration-300">
                {t("procedurePages.common.beforeAfterCta")}
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* 10. GET STARTED CTA */}
        <ContactCTASection />
      </main>

      <Footer />
    </div>
  );
};

export default VibrasatPro;
