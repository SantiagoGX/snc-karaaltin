import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/home/ContactCTASection";
import drKaraaltinLogo from "@/assets/dr-karaaltin-logo-white.svg";

const Rhinoplasty = () => {
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
    { number: "01", titleKey: "overview1Title", descKey: "overview1Desc" },
    { number: "02", titleKey: "overview2Title", descKey: "overview2Desc" },
    { number: "03", titleKey: "overview3Title", descKey: "overview3Desc" },
    { number: "04", titleKey: "overview4Title", descKey: "overview4Desc" },
    { number: "05", titleKey: "overview5Title", descKey: "overview5Desc" },
    { number: "06", titleKey: "overview6Title", descKey: "overview6Desc" },
    { number: "07", titleKey: "overview7Title", descKey: "overview7Desc" },
    { number: "08", titleKey: "overview8Title", descKey: "overview8Desc" },
    { number: "09", titleKey: "overview9Title", descKey: "overview9Desc" }
  ];

  const journeySteps = [
    { step: "01", titleKey: "journey1Title", descKey: "journey1Desc" },
    { step: "02", titleKey: "journey2Title", descKey: "journey2Desc" },
    { step: "03", titleKey: "journey3Title", descKey: "journey3Desc" },
    { step: "04", titleKey: "journey4Title", descKey: "journey4Desc" },
    { step: "05", titleKey: "journey5Title", descKey: "journey5Desc" },
    { step: "06", titleKey: "journey6Title", descKey: "journey6Desc" }
  ];

  const candidates = [
    { emoji: "✨", titleKey: "candidate1Title", descKey: "candidate1Desc" },
    { emoji: "💨", titleKey: "candidate2Title", descKey: "candidate2Desc" },
    { emoji: "🔄", titleKey: "candidate3Title", descKey: "candidate3Desc" },
    { emoji: "⏳", titleKey: "candidate4Title", descKey: "candidate4Desc" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* 1. HERO SECTION */}
        <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
          <img alt="Rhinoplasty Hero" className="absolute inset-0 w-full h-full object-cover animate-[scale-in_1.5s_ease-out]" src="/lovable-uploads/d87c6078-4f9a-4ca3-a7ab-47749665c684.jpg" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
          <div className="relative container mx-auto px-8 h-full flex flex-col justify-center items-center text-center pointer-events-none">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-[0.1em] uppercase text-white mb-6 animate-fade-in">
              {t('procedurePages.rhinoplasty.title')}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl font-light animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {t('procedurePages.rhinoplasty.subtitle')}
            </p>
          </div>
        </section>

        {/* 2. INTRO / SEO BLOCK */}
        <section className="section-spacing bg-white">
          <div className="container mx-auto px-8 max-w-4xl text-center content-spacing">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 animate-fade-in">
              {t('procedurePages.rhinoplasty.intro')}
            </p>
          </div>
        </section>

        {/* 3. OVERVIEW — HAKIMI STICKY EFFECT */}
        <section ref={overviewRef} className="overview-section-dark">
          <div className="container mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16 relative">
              <div className="overview-sticky-left animate-fade-in">
                <div>
                  <h2 className="overview-title-dark">
                    {t('procedurePages.rhinoplasty.title')}
                  </h2>
                  <p className="overview-subtitle-dark">
                    {t('procedurePages.common.overview')}
                  </p>
                </div>
                <img src={drKaraaltinLogo} alt="Dr. Karaaltin Logo" className="w-48 h-auto opacity-80" />
              </div>

              {/* RIGHT: SCROLLABLE CARDS */}
              <div ref={cardsRef} className="space-y-8 min-h-screen">
                {overviewCards.map((card, index) => (
                  <div key={index} className={`overview-card-dark ${activeCard === index ? 'shadow-lg border-white/20' : ''}`}>
                    <h3 className="overview-card-title-dark">
                      {card.number} // {t(`procedurePages.rhinoplasty.${card.titleKey}`)}
                    </h3>
                    <p className="overview-card-text-dark">
                      {t(`procedurePages.rhinoplasty.${card.descKey}`)}
                    </p>
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
              {t('procedurePages.rhinoplasty.featuredText')}
            </p>
          </div>
        </section>

        {/* 5. PROCEDURE DETAILS */}
        <section className="section-spacing bg-gray-50">
          <div className="container mx-auto px-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-center mb-12 lg:mb-16 animate-fade-in">
              {t('procedurePages.common.procedureDetails')}
            </h2>
            
            <div className="max-w-6xl mx-auto space-y-16">
              {/* Detail 1 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="order-2 lg:order-1 content-spacing animate-fade-in">
                  <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase mb-6">
                    {t('procedurePages.rhinoplasty.advancedApproachesTitle')}
                  </h3>
                  <ul className="space-y-4 text-base md:text-lg text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-gray-900 font-bold mt-1">•</span>
                      <span>{t('procedurePages.rhinoplasty.approach1')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-gray-900 font-bold mt-1">•</span>
                      <span>{t('procedurePages.rhinoplasty.approach2')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-gray-900 font-bold mt-1">•</span>
                      <span>{t('procedurePages.rhinoplasty.approach3')}</span>
                    </li>
                  </ul>
                </div>
                <div className="order-1 lg:order-2 animate-fade-in">
                  <img alt="Rhinoplasty Approaches" className="w-full aspect-[4/3] object-cover rounded-lg shadow-lg" src="/lovable-uploads/c828ce1c-212b-4c24-b0f7-2b145abdd83f.jpg" />
                </div>
              </div>

              {/* Detail 2 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="animate-fade-in">
                  <img alt="Airway Optimization" className="w-full aspect-[4/3] object-cover rounded-lg shadow-lg" src="/lovable-uploads/a81a8973-c97d-43de-901d-9d52c3cdb28e.jpg" />
                </div>
                <div className="content-spacing animate-fade-in">
                  <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase mb-6">
                    {t('procedurePages.rhinoplasty.integratedExcellenceTitle')}
                  </h3>
                  <ul className="space-y-4 text-base md:text-lg text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-gray-900 font-bold mt-1">•</span>
                      <span>{t('procedurePages.rhinoplasty.excellence1')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-gray-900 font-bold mt-1">•</span>
                      <span>{t('procedurePages.rhinoplasty.excellence2')}</span>
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
              {t('procedurePages.common.surgicalJourney')}
            </h2>
            
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {journeySteps.map((item, index) => (
                <div key={index} className="text-center space-y-4 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-5xl md:text-6xl font-light text-gray-200">{item.step}</div>
                  <h3 className="text-xl md:text-2xl font-light tracking-wide uppercase">{t(`procedurePages.rhinoplasty.${item.titleKey}`)}</h3>
                  <p className="text-base text-gray-700 leading-relaxed">{t(`procedurePages.rhinoplasty.${item.descKey}`)}</p>
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
                <img alt="Recovery Process" className="w-full aspect-[4/3] object-cover rounded-lg shadow-lg" src="/lovable-uploads/8ad954f8-be5e-419a-93f9-f093ab93b0e8.jpg" />
              </div>
              <div className="content-spacing animate-fade-in">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase mb-6">
                  {t('procedurePages.common.recoveryHealing')}
                </h2>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
                  {t('procedurePages.rhinoplasty.recoveryText')}
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded text-sm uppercase tracking-widest font-light hover:bg-gray-800 transition-all duration-300">
                  {t('procedurePages.common.bookConsultation')}
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
              {t('procedurePages.common.idealCandidates')}
            </h2>
            
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {candidates.map((candidate, index) => (
                <div key={index} className="candidate-card-dark text-center" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="candidate-icon-dark">{candidate.emoji}</div>
                  <h3 className="candidate-card-title-dark">{t(`procedurePages.rhinoplasty.${candidate.titleKey}`)}</h3>
                  <p className="candidate-card-text-dark">{t(`procedurePages.rhinoplasty.${candidate.descKey}`)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. SCAR EXPECTATIONS */}
        <section className="section-spacing bg-gray-50">
          <div className="container mx-auto px-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-center mb-8 lg:mb-12 animate-fade-in">
              {t('procedurePages.common.scarExpectations')}
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 lg:p-12 animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <h3 className="text-xl md:text-2xl font-light tracking-wide uppercase">{t('procedurePages.rhinoplasty.scarClosedTitle')}</h3>
                    <p className="text-base md:text-lg text-gray-700">{t('procedurePages.rhinoplasty.scarClosedText')}</p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl md:text-2xl font-light tracking-wide uppercase">{t('procedurePages.rhinoplasty.scarOpenTitle')}</h3>
                    <p className="text-base md:text-lg text-gray-700">{t('procedurePages.rhinoplasty.scarOpenText')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. BEFORE & AFTER CTA */}
        <section className="section-spacing bg-white">
          <div className="container mx-auto px-8 text-center">
            <div className="max-w-3xl mx-auto content-spacing animate-fade-in">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase mb-8">
                {t('procedurePages.rhinoplasty.galleryCta')}
              </h2>
              <Link to="/gallery" className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded text-sm uppercase tracking-widest font-light hover:bg-gray-800 transition-all duration-300">
                {t('procedurePages.common.beforeAfterCta')}
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* 11. GET STARTED CTA */}
        <ContactCTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Rhinoplasty;
