import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/home/ContactCTASection";
import drKaraaltinLogo from "@/assets/dr-karaaltin-logo-white.svg";
const AdvancedSafeBBL = () => {
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
  return <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
      {/* 1. HERO SECTION */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img alt="Advanced Safe BBL Hero" className="absolute inset-0 w-full h-full object-cover animate-[scale-in_1.5s_ease-out]" src="/lovable-uploads/81d5d4d7-076e-4080-860c-7901001c8d2f.jpg" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="relative container mx-auto px-8 h-full flex flex-col justify-center items-center text-center pointer-events-none">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-[0.1em] uppercase text-white mb-6 animate-fade-in">
            {t('procedurePages.advancedSafeBBL.title')}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl font-light animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
            {t('procedurePages.advancedSafeBBL.subtitle')}
          </p>
        </div>
      </section>

      {/* 2. INTRO / SEO BLOCK */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-8 max-w-4xl text-center content-spacing">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed animate-fade-in">
            {t('procedurePages.advancedSafeBBL.intro')}
          </p>
        </div>
      </section>

      {/* 3. OVERVIEW — HAKIMI STICKY EFFECT */}
      <section ref={overviewRef} className="overview-section-dark">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16 relative">
            {/* LEFT: STICKY */}
            <div className="overview-sticky-left">
              <div>
              <h2 className="overview-title-dark">
                  {t('procedurePages.advancedSafeBBL.overviewTitle')}
                </h2>
                <p className="overview-subtitle-dark">
                  {t('procedurePages.advancedSafeBBL.overview')}
                </p>
              </div>
              <img src={drKaraaltinLogo} alt="Dr. Karaaltin Logo" className="w-48 h-auto opacity-80" />
            </div>

            {/* RIGHT: SCROLLABLE CARDS */}
            <div ref={cardsRef} className="space-y-8 min-h-screen">
              <div className={`overview-card-dark ${activeCard === 0 ? 'active' : ''}`}>
                <h3 className="overview-card-title-dark">
                  {t('procedurePages.advancedSafeBBL.card1Title')}
                </h3>
                <p className="overview-card-text-dark">
                  {t('procedurePages.advancedSafeBBL.card1Text')}
                </p>
              </div>

              <div className={`overview-card-dark ${activeCard === 1 ? 'active' : ''}`} style={{
                animationDelay: '0.1s'
              }}>
                <h3 className="overview-card-title-dark">
                  {t('procedurePages.advancedSafeBBL.card2Title')}
                </h3>
                <p className="overview-card-text-dark">
                  {t('procedurePages.advancedSafeBBL.card2Text')}
                </p>
              </div>

              <div className={`overview-card-dark ${activeCard === 2 ? 'active' : ''}`} style={{
                animationDelay: '0.2s'
              }}>
                <h3 className="overview-card-title-dark">
                  {t('procedurePages.advancedSafeBBL.card3Title')}
                </h3>
                <p className="overview-card-text-dark">
                  {t('procedurePages.advancedSafeBBL.card3Text')}
                </p>
              </div>

              <div className={`overview-card-dark ${activeCard === 3 ? 'active' : ''}`} style={{
                animationDelay: '0.3s'
              }}>
                <h3 className="overview-card-title-dark">
                  {t('procedurePages.advancedSafeBBL.card4Title')}
                </h3>
                <p className="overview-card-text-dark mb-4">
                  {t('procedurePages.advancedSafeBBL.card4Text')}
                </p>
                <p className="overview-card-text-dark font-semibold">
                  {t('procedurePages.advancedSafeBBL.card4Benefits')}
                </p>
                <ul className="overview-card-text-dark space-y-2 mt-2">
                  <li>• {t('procedurePages.advancedSafeBBL.card4Benefit1')}</li>
                  <li>• {t('procedurePages.advancedSafeBBL.card4Benefit2')}</li>
                  <li>• {t('procedurePages.advancedSafeBBL.card4Benefit3')}</li>
                  <li>• {t('procedurePages.advancedSafeBBL.card4Benefit4')}</li>
                </ul>
              </div>

              <div className={`overview-card-dark ${activeCard === 4 ? 'active' : ''}`} style={{
                animationDelay: '0.4s'
              }}>
                <h3 className="overview-card-title-dark">
                  {t('procedurePages.advancedSafeBBL.card5Title')}
                </h3>
                <p className="overview-card-text-dark">
                  {t('procedurePages.advancedSafeBBL.card5Text')}
                </p>
              </div>

              <div className={`overview-card-dark ${activeCard === 5 ? 'active' : ''}`} style={{
                animationDelay: '0.5s'
              }}>
                <h3 className="overview-card-title-dark">
                  {t('procedurePages.advancedSafeBBL.card6Title')}
                </h3>
                <p className="overview-card-text-dark mb-4">
                  {t('procedurePages.advancedSafeBBL.card6Text')}
                </p>
                <ul className="overview-card-text-dark space-y-2">
                  <li>• {t('procedurePages.advancedSafeBBL.card6Item1')}</li>
                  <li>• {t('procedurePages.advancedSafeBBL.card6Item2')}</li>
                  <li>• {t('procedurePages.advancedSafeBBL.card6Item3')}</li>
                  <li>• {t('procedurePages.advancedSafeBBL.card6Item4')}</li>
                  <li>• {t('procedurePages.advancedSafeBBL.card6Item5')}</li>
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
              {/* YouTube Video Integration */}
              <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/eSdiWtaQ9yk" title="Advanced Safe BBL Explanation" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full"></iframe>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6 content-spacing animate-fade-in" style={{
              animationDelay: '0.2s'
            }}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-gray-900">
                {t('procedurePages.advancedSafeBBL.featuredTitle')}
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                {t('procedurePages.advancedSafeBBL.featuredText')}
              </p>

              <Link to="/contact" className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 text-xs uppercase tracking-widest font-light rounded hover:bg-gray-800 transition-all duration-300 button-hover">
                {t('procedurePages.advancedSafeBBL.bookNow')}
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROCEDURE DETAILS */}
      <section className="section-spacing bg-gray-50">
        <div className="container mx-auto px-8 max-w-6xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-gray-900 text-center mb-16 animate-fade-in">
            {t('procedurePages.advancedSafeBBL.detailsTitle')}
          </h2>
          
          <div className="space-y-16">
            {/* How the Protocol Works */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in" style={{
              animationDelay: '0.1s'
            }}>
              <div className="order-2 lg:order-1">
                <img alt="Protocol Components" className="w-full h-[350px] object-cover rounded-lg shadow-lg" src="/lovable-uploads/a3e4adab-a99c-4616-b289-fc1ab1c65b63.jpg" />
              </div>
              <div className="order-1 lg:order-2 space-y-4">
                <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase text-gray-900 mb-4">
                  {t('procedurePages.advancedSafeBBL.protocolTitle')}
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                  {t('procedurePages.advancedSafeBBL.protocolIntro')}
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-light mt-1">
                      1
                    </div>
                    <div>
                      <p className="text-base md:text-lg text-gray-700">{t('procedurePages.advancedSafeBBL.protocol1')}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-light mt-1">
                      2
                    </div>
                    <div>
                      <p className="text-base md:text-lg text-gray-700">{t('procedurePages.advancedSafeBBL.protocol2')}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-light mt-1">
                      3
                    </div>
                    <div>
                      <p className="text-base md:text-lg text-gray-700">{t('procedurePages.advancedSafeBBL.protocol3')}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-light mt-1">
                      4
                    </div>
                    <div>
                      <p className="text-base md:text-lg text-gray-700">{t('procedurePages.advancedSafeBBL.protocol4')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* The Karaaltin Sponge Experiment */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in" style={{
              animationDelay: '0.2s'
            }}>
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase text-gray-900">
                  {t('procedurePages.advancedSafeBBL.spongeTitle')}
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  {t('procedurePages.advancedSafeBBL.spongeText')}
                </p>
              </div>
              <div>
                <img alt="Sponge Experiment Results" className="w-full h-[350px] object-cover rounded-lg shadow-lg" src="/lovable-uploads/4678f6e3-fac3-449e-b300-451ab5ec9859.png" />
              </div>
            </div>

            {/* Complex Revisions */}
            <div className="bg-white p-8 lg:p-10 rounded-lg shadow-md border border-gray-200 animate-fade-in" style={{
              animationDelay: '0.3s'
            }}>
              <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-8 items-center">
                <div>
                  <img alt="Complex Revisions" className="w-full h-[300px] object-cover rounded-lg" src="/lovable-uploads/88525988-b116-461b-b29a-2477f1b6d622.jpg" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase text-gray-900">
                    {t('procedurePages.advancedSafeBBL.revisionsTitle')}
                  </h3>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    {t('procedurePages.advancedSafeBBL.revisionsText')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SURGICAL JOURNEY */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-gray-900 text-center mb-16 animate-fade-in">
            {t('procedurePages.advancedSafeBBL.journeyTitle')}
          </h2>
          
          <div className="space-y-8">
            {[{
              step: "01",
              title: t('procedurePages.advancedSafeBBL.journey1Title'),
              description: t('procedurePages.advancedSafeBBL.journey1Desc')
            }, {
              step: "02",
              title: t('procedurePages.advancedSafeBBL.journey2Title'),
              description: t('procedurePages.advancedSafeBBL.journey2Desc')
            }, {
              step: "03",
              title: t('procedurePages.advancedSafeBBL.journey3Title'),
              description: t('procedurePages.advancedSafeBBL.journey3Desc')
            }, {
              step: "04",
              title: t('procedurePages.advancedSafeBBL.journey4Title'),
              description: t('procedurePages.advancedSafeBBL.journey4Desc')
            }, {
              step: "05",
              title: t('procedurePages.advancedSafeBBL.journey5Title'),
              description: t('procedurePages.advancedSafeBBL.journey5Desc')
            }].map((item, index) => <div key={index} className="flex flex-col md:flex-row gap-6 items-start p-6 bg-gray-50 rounded-lg border border-gray-200 animate-fade-in" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                <div className="flex-shrink-0 w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center text-xl font-light">
                  {item.step}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl md:text-2xl font-light tracking-wide uppercase text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-base text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* 7. RECOVERY BLOCK */}
      <section className="section-spacing bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img alt="Recovery & Healing" className="w-full h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg" src="/lovable-uploads/2c351911-efa2-49bd-a560-83ea26c1447d.jpg" />
            </div>
            <div className="space-y-6 content-spacing animate-fade-in" style={{
              animationDelay: '0.2s'
            }}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-gray-900">
                {t('procedurePages.advancedSafeBBL.recoveryTitle')}
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                {t('procedurePages.advancedSafeBBL.recoveryText')}
              </p>
              <ul className="text-base md:text-lg text-gray-700 leading-relaxed space-y-2">
                <li>• {t('procedurePages.advancedSafeBBL.recoveryItem1')}</li>
                <li>• {t('procedurePages.advancedSafeBBL.recoveryItem2')}</li>
                <li>• {t('procedurePages.advancedSafeBBL.recoveryItem3')}</li>
                <li>• {t('procedurePages.advancedSafeBBL.recoveryItem4')}</li>
              </ul>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 text-xs uppercase tracking-widest font-light rounded hover:bg-gray-800 transition-all duration-300 button-hover">
                {t('procedurePages.advancedSafeBBL.bookConsultation')}
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. IDEAL CANDIDATES */}
      <section className="candidates-section-dark">
        <div className="container mx-auto px-8 max-w-6xl">
          <h2 className="candidates-title-dark">
            {t('procedurePages.advancedSafeBBL.candidatesTitle')}
          </h2>
          
          <div className="candidates-grid">
            <div className="candidate-card-dark" style={{
              animationDelay: '0.1s'
            }}>
              <div className="candidate-icon-dark">
                🧍
              </div>
              <h3 className="candidate-card-title-dark">
                {t('procedurePages.advancedSafeBBL.candidate1Title')}
              </h3>
              <p className="candidate-card-text-dark">
                {t('procedurePages.advancedSafeBBL.candidate1Desc')}
              </p>
            </div>

            <div className="candidate-card-dark" style={{
              animationDelay: '0.2s'
            }}>
              <div className="candidate-icon-dark">
                🎯
              </div>
              <h3 className="candidate-card-title-dark">
                {t('procedurePages.advancedSafeBBL.candidate2Title')}
              </h3>
              <p className="candidate-card-text-dark">
                {t('procedurePages.advancedSafeBBL.candidate2Desc')}
              </p>
            </div>

            <div className="candidate-card-dark" style={{
              animationDelay: '0.3s'
            }}>
              <div className="candidate-icon-dark">
                🚭
              </div>
              <h3 className="candidate-card-title-dark">
                {t('procedurePages.advancedSafeBBL.candidate3Title')}
              </h3>
              <p className="candidate-card-text-dark">
                {t('procedurePages.advancedSafeBBL.candidate3Desc')}
              </p>
            </div>

            <div className="candidate-card-dark" style={{
              animationDelay: '0.4s'
            }}>
              <div className="candidate-icon-dark">
                📊
              </div>
              <h3 className="candidate-card-title-dark">
                {t('procedurePages.advancedSafeBBL.candidate4Title')}
              </h3>
              <p className="candidate-card-text-dark">
                {t('procedurePages.advancedSafeBBL.candidate4Desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. SCAR EXPECTATIONS */}
      <section className="scar-section">
        <div className="container mx-auto px-8 max-w-5xl">
          <h2 className="scar-title">
            {t('procedurePages.common.scarExpectations')}
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-10 lg:p-12 rounded-lg shadow-md border border-gray-200 text-center animate-fade-in" style={{
              animationDelay: '0.1s'
            }}>
              <div className="scar-badge">
                {t('procedurePages.advancedSafeBBL.scarBadge')}
              </div>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
                {t('procedurePages.advancedSafeBBL.scarText')}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h4 className="text-sm uppercase tracking-widest font-light text-gray-900 mb-2">{t('procedurePages.advancedSafeBBL.scarSize')}</h4>
                  <p className="text-base text-gray-700">{t('procedurePages.advancedSafeBBL.scarSizeValue')}</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h4 className="text-sm uppercase tracking-widest font-light text-gray-900 mb-2">{t('procedurePages.advancedSafeBBL.scarLocation')}</h4>
                  <p className="text-base text-gray-700">{t('procedurePages.advancedSafeBBL.scarLocationValue')}</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h4 className="text-sm uppercase tracking-widest font-light text-gray-900 mb-2">{t('procedurePages.advancedSafeBBL.scarVisibility')}</h4>
                  <p className="text-base text-gray-700">{t('procedurePages.advancedSafeBBL.scarVisibilityValue')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. GET STARTED CTA */}
      <ContactCTASection />
      </main>
      <Footer />
    </div>;
};
export default AdvancedSafeBBL;