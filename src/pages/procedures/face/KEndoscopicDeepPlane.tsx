import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ChevronRight, Eye, Navigation, Target, Shield, XCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/home/ContactCTASection";
import drKaraaltinLogo from "@/assets/dr-karaaltin-logo-white.svg";

const KEndoscopicDeepPlane = () => {
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
    { emoji: "😊", titleKey: "candidate2Title", descKey: "candidate2Desc" },
    { emoji: "📐", titleKey: "candidate3Title", descKey: "candidate3Desc" },
    { emoji: "🔬", titleKey: "candidate4Title", descKey: "candidate4Desc" }
  ];

  const procedureDetails = [
    { icon: Eye, titleKey: "detail1Title", descKey: "detail1Desc", color: "blue" },
    { icon: Navigation, titleKey: "detail2Title", descKey: "detail2Desc", color: "purple" },
    { icon: Target, titleKey: "detail3Title", descKey: "detail3Desc", color: "pink" },
    { icon: Shield, titleKey: "detail4Title", descKey: "detail4Desc", color: "green" },
    { icon: XCircle, titleKey: "detail5Title", descKey: "detail5Desc", color: "amber" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* 1. HERO SECTION */}
        <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
          <img alt="K Endoscopic Deep Plane Hero" className="absolute inset-0 w-full h-full object-cover animate-[scale-in_1.5s_ease-out]" src="/lovable-uploads/115d5105-e773-4820-8139-d99c9f55b040.jpg" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
          <div className="relative container mx-auto px-8 h-full flex flex-col justify-center items-center text-center pointer-events-none">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-[0.1em] uppercase text-white mb-6 animate-fade-in">
              {t('procedurePages.kEndoscopic.title')}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl font-light animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {t('procedurePages.kEndoscopic.subtitle')}
            </p>
          </div>
        </section>

        {/* 2. INTRO / SEO BLOCK */}
        <section className="section-spacing bg-white">
          <div className="container mx-auto px-8 max-w-4xl text-center content-spacing">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 animate-fade-in">
              {t('procedurePages.kEndoscopic.intro1')}
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed animate-fade-in" style={{ animationDelay: '0.1s' }}>
              {t('procedurePages.kEndoscopic.intro2')}
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
                    {t('procedurePages.kEndoscopic.overviewTitle')}
                  </h2>
                  <p className="overview-subtitle-dark">
                    {t('procedurePages.common.overview')}
                  </p>
                </div>
                <img src={drKaraaltinLogo} alt="Dr. Karaaltin Logo" className="w-48 h-auto opacity-80" />
              </div>

              {/* RIGHT: SCROLLABLE CARDS */}
              <div ref={cardsRef} className="space-y-8 min-h-screen">
                <div className={`overview-card-dark ${activeCard === 0 ? 'shadow-lg border-white/20' : ''}`}>
                  <h3 className="overview-card-title-dark">
                    01 // {t('procedurePages.kEndoscopic.card1Title')}
                  </h3>
                  <p className="overview-card-text-dark">
                    {t('procedurePages.kEndoscopic.card1Text')}
                  </p>
                </div>

                <div className={`overview-card-dark ${activeCard === 1 ? 'shadow-lg border-white/20' : ''}`}>
                  <h3 className="overview-card-title-dark">
                    02 // {t('procedurePages.kEndoscopic.card2Title')}
                  </h3>
                  <p className="overview-card-text-dark">
                    {t('procedurePages.kEndoscopic.card2Text')}
                  </p>
                </div>

                <div className={`overview-card-dark ${activeCard === 2 ? 'shadow-lg border-white/20' : ''}`}>
                  <h3 className="overview-card-title-dark">
                    03 // {t('procedurePages.kEndoscopic.card3Title')}
                  </h3>
                  <p className="overview-card-text-dark mb-4">
                    {t('procedurePages.kEndoscopic.card3Text')}
                  </p>
                  <ul className="overview-card-text-dark space-y-2">
                    <li>• {t('procedurePages.kEndoscopic.card3Item1')}</li>
                    <li>• {t('procedurePages.kEndoscopic.card3Item2')}</li>
                    <li>• {t('procedurePages.kEndoscopic.card3Item3')}</li>
                    <li>• {t('procedurePages.kEndoscopic.card3Item4')}</li>
                  </ul>
                </div>

                <div className={`overview-card-dark ${activeCard === 3 ? 'shadow-lg border-white/20' : ''}`}>
                  <h3 className="overview-card-title-dark">
                    04 // {t('procedurePages.kEndoscopic.card4Title')}
                  </h3>
                  <p className="overview-card-text-dark">
                    {t('procedurePages.kEndoscopic.card4Text')}
                  </p>
                </div>

                <div className={`overview-card-dark ${activeCard === 4 ? 'shadow-lg border-white/20' : ''}`}>
                  <h3 className="overview-card-title-dark">
                    05 // {t('procedurePages.kEndoscopic.card5Title')}
                  </h3>
                  <ul className="overview-card-text-dark space-y-2">
                    <li>✔ {t('procedurePages.kEndoscopic.card5Item1')}</li>
                    <li>✔ {t('procedurePages.kEndoscopic.card5Item2')}</li>
                    <li>✔ {t('procedurePages.kEndoscopic.card5Item3')}</li>
                    <li>✔ {t('procedurePages.kEndoscopic.card5Item4')}</li>
                    <li>✔ {t('procedurePages.kEndoscopic.card5Item5')}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. FEATURED SECTION */}
        <section className="section-spacing bg-white">
          <div className="container mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 animate-fade-in">
                <img alt="K Endoscopic Deep Plane With Dr. Karaaltin" className="w-full h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg" src="/lovable-uploads/6cb6cca6-e706-4e22-844a-003574f139e2.jpg" />
              </div>
              <div className="order-1 lg:order-2 space-y-6 content-spacing animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-gray-900">
                  {t('procedurePages.kEndoscopic.featuredTitle')}
                </h2>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  {t('procedurePages.kEndoscopic.featuredText')}
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 text-xs uppercase tracking-widest font-light rounded hover:bg-gray-800 transition-all duration-300 button-hover">
                  {t('procedurePages.common.bookNow')}
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 5. PROCEDURE DETAILS */}
        <section className="section-spacing bg-[#F5F1E8]">
          <div className="container mx-auto px-8 max-w-6xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-gray-900 text-center mb-4 animate-fade-in">
              {t('procedurePages.common.procedureDetails')}
            </h2>
            <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
              {t('procedurePages.kEndoscopic.detailsSubtitle')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {procedureDetails.map((detail, index) => {
                const Icon = detail.icon;
                return (
                  <div key={index} className={`group relative bg-white/80 backdrop-blur-sm p-8 rounded-xl border-2 border-gray-200/50 hover:border-${detail.color}-300 transition-all duration-300 hover:-translate-y-2 animate-fade-in`} style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className={`absolute top-4 right-4 w-12 h-12 rounded-lg bg-gradient-to-br from-${detail.color}-400 to-${detail.color}-600 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className={`absolute -top-1 -right-1 w-20 h-20 bg-${detail.color}-100 rounded-full opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500`} />
                    <h3 className="text-lg font-semibold text-gray-900 uppercase tracking-wide mb-3 pr-16">
                      {t(`procedurePages.kEndoscopic.${detail.titleKey}`)}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {t(`procedurePages.kEndoscopic.${detail.descKey}`)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 6. SURGICAL JOURNEY */}
        <section className="section-spacing bg-white">
          <div className="container mx-auto px-8 max-w-4xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-gray-900 text-center mb-16 animate-fade-in">
              {t('procedurePages.common.surgicalJourney')}
            </h2>
            
            <div className="space-y-8">
              {journeySteps.map((item, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-6 items-start p-6 bg-gray-50 rounded-lg border border-gray-200 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex-shrink-0 w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center text-xl font-light">
                    {item.step}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl md:text-2xl font-light tracking-wide uppercase text-gray-900 mb-2">
                      {t(`procedurePages.kEndoscopic.${item.titleKey}`)}
                    </h3>
                    <p className="text-base text-gray-700 leading-relaxed">
                      {t(`procedurePages.kEndoscopic.${item.descKey}`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. RECOVERY BLOCK */}
        <section className="section-spacing bg-gray-50">
          <div className="container mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <img alt="Recovery & Healing" className="w-full h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg" src="/lovable-uploads/dd2d3fd4-2b35-45bd-b159-7939c687b7c4.jpg" />
              </div>
              <div className="space-y-6 content-spacing animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-gray-900">
                  {t('procedurePages.common.recoveryHealing')}
                </h2>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  {t('procedurePages.kEndoscopic.recoveryText')}
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 text-xs uppercase tracking-widest font-light rounded hover:bg-gray-800 transition-all duration-300 button-hover">
                  {t('procedurePages.common.bookConsultation')}
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 8. IDEAL CANDIDATES */}
        <section className="candidates-section-dark">
          <div className="container mx-auto px-8 max-w-6xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-center mb-16 animate-fade-in text-white">
              {t('procedurePages.common.idealCandidates')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {candidates.map((candidate, index) => (
                <div key={index} className="candidate-card-dark text-center animate-fade-in" style={{ animationDelay: `${(index + 1) * 0.1}s` }}>
                  <div className="candidate-icon-dark">{candidate.emoji}</div>
                  <h3 className="candidate-card-title-dark">{t(`procedurePages.kEndoscopic.${candidate.titleKey}`)}</h3>
                  <p className="candidate-card-text-dark">{t(`procedurePages.kEndoscopic.${candidate.descKey}`)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. SCAR EXPECTATIONS */}
        <section className="section-spacing bg-gray-50">
          <div className="container mx-auto px-8 max-w-4xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-gray-900 text-center mb-16 animate-fade-in">
              {t('procedurePages.common.scarExpectations')}
            </h2>
            
            <div className="max-w-2xl mx-auto">
              <div className="bg-white p-10 lg:p-12 rounded-lg shadow-lg border-2 border-gray-900 text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="inline-block px-6 py-3 bg-gray-900 text-white rounded-full text-sm font-semibold uppercase tracking-widest mb-6">
                  {t('procedurePages.kEndoscopic.scarBadge')}
                </div>
                
                <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase text-gray-900 mb-6">
                  {t('procedurePages.kEndoscopic.scarTitle')}
                </h3>
                
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  {t('procedurePages.kEndoscopic.scarText')}
                </p>
              </div>
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

export default KEndoscopicDeepPlane;
