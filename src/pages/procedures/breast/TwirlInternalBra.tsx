import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/home/ContactCTASection";
import drKaraaltinLogo from "@/assets/dr-karaaltin-logo-white.svg";

const TwirlInternalBra = () => {
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
    { number: "01", titleKey: "procedurePages.twirl.overview1Title", descKey: "procedurePages.twirl.overview1Desc" },
    { number: "02", titleKey: "procedurePages.twirl.overview2Title", descKey: "procedurePages.twirl.overview2Desc" },
    { number: "03", titleKey: "procedurePages.twirl.overview3Title", descKey: "procedurePages.twirl.overview3Desc" },
    { number: "04", titleKey: "procedurePages.twirl.overview4Title", descKey: "procedurePages.twirl.overview4Desc" },
    { number: "05", titleKey: "procedurePages.twirl.overview5Title", descKey: "procedurePages.twirl.overview5Desc" },
  ];

  const journeySteps = [
    { step: "01", titleKey: "procedurePages.common.consultation", descKey: "procedurePages.twirl.journey1Desc" },
    { step: "02", titleKey: "procedurePages.twirl.journey2Title", descKey: "procedurePages.twirl.journey2Desc" },
    { step: "03", titleKey: "procedurePages.twirl.journey3Title", descKey: "procedurePages.twirl.journey3Desc" },
    { step: "04", titleKey: "procedurePages.twirl.journey4Title", descKey: "procedurePages.twirl.journey4Desc" },
    { step: "05", titleKey: "procedurePages.twirl.journey5Title", descKey: "procedurePages.twirl.journey5Desc" },
  ];

  const candidates = [
    { emoji: "⬆️", titleKey: "procedurePages.twirl.candidate1Title", descKey: "procedurePages.twirl.candidate1Desc" },
    { emoji: "🚫", titleKey: "procedurePages.twirl.candidate2Title", descKey: "procedurePages.twirl.candidate2Desc" },
    { emoji: "📐", titleKey: "procedurePages.twirl.candidate3Title", descKey: "procedurePages.twirl.candidate3Desc" },
    { emoji: "⏳", titleKey: "procedurePages.twirl.candidate4Title", descKey: "procedurePages.twirl.candidate4Desc" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* 1. HERO SECTION */}
        <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
          <img alt={t("procedurePages.twirl.title")} className="absolute inset-0 w-full h-full object-cover animate-[scale-in_1.5s_ease-out]" src="/lovable-uploads/0f56d8cf-545e-45e7-b857-7a2511b905d8.jpg" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
          <div className="relative container mx-auto px-8 h-full flex flex-col justify-center items-center text-center pointer-events-none">
            <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1 rounded-full text-xs uppercase tracking-widest text-white mb-6 animate-fade-in">
              {t("procedurePages.common.signatureTechnique")}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-[0.1em] uppercase text-white mb-6 animate-fade-in">
              {t("procedurePages.twirl.title")}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl font-light animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {t("procedurePages.twirl.subtitle")}
            </p>
          </div>
        </section>

        {/* 2. INTRO / SEO BLOCK */}
        <section className="section-spacing bg-white">
          <div className="container mx-auto px-8 max-w-4xl text-center content-spacing">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed animate-fade-in">
              {t("procedurePages.twirl.intro")}
            </p>
          </div>
        </section>

        {/* 3. OVERVIEW — HAKIMI STICKY EFFECT */}
        <section ref={overviewRef} className="overview-section-dark">
          <div className="container mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16 relative">
              <div className="overview-sticky-left animate-fade-in">
                <div>
                  <h2 className="overview-title-dark">Twirl Internal Bra™</h2>
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
              {t("procedurePages.twirl.featured")}
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
                    {t("procedurePages.twirl.techTitle")}
                  </h3>
                  <ul className="space-y-4 text-base md:text-lg text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-gray-900 font-bold mt-1">•</span>
                      <span>{t("procedurePages.twirl.tech1")}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-gray-900 font-bold mt-1">•</span>
                      <span>{t("procedurePages.twirl.tech2")}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-gray-900 font-bold mt-1">•</span>
                      <span>{t("procedurePages.twirl.tech3")}</span>
                    </li>
                  </ul>
                </div>
                <div className="order-1 lg:order-2 animate-fade-in">
                  <img alt={t("procedurePages.twirl.techTitle")} className="w-full aspect-[4/3] object-cover rounded-lg shadow-lg" src="/lovable-uploads/3e03a256-b7da-4f18-8459-1ed615501a86.jpg" />
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="animate-fade-in">
                  <img alt={t("procedurePages.twirl.benefitsTitle")} className="w-full aspect-[4/3] object-cover rounded-lg shadow-lg" src="/lovable-uploads/b46bf345-79d9-4186-8870-21be5838722d.jpg" />
                </div>
                <div className="content-spacing animate-fade-in">
                  <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase mb-6">
                    {t("procedurePages.twirl.benefitsTitle")}
                  </h3>
                  <ul className="space-y-4 text-base md:text-lg text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-gray-900 font-bold mt-1">•</span>
                      <span>{t("procedurePages.twirl.benefit1")}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-gray-900 font-bold mt-1">•</span>
                      <span>{t("procedurePages.twirl.benefit2")}</span>
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
                <img alt={t("procedurePages.common.recoveryHealing")} className="w-full aspect-[4/3] object-cover rounded-lg shadow-lg" src="/lovable-uploads/f4a2efd1-80e0-4131-bcf4-f95ee630d2df.jpg" />
              </div>
              <div className="content-spacing animate-fade-in">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase mb-6">
                  {t("procedurePages.common.recoveryHealing")}
                </h2>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
                  {t("procedurePages.twirl.recovery")}
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

        {/* 9. GET STARTED CTA */}
        <ContactCTASection />
      </main>

      <Footer />
    </div>
  );
};

export default TwirlInternalBra;
