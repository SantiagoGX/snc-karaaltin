import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/home/ContactCTASection";
import drKaraaltinLogo from "@/assets/dr-karaaltin-logo-white.svg";
const TummyTuck = () => {
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
        <img alt="Tummy Tuck Hero" className="absolute inset-0 w-full h-full object-cover animate-[scale-in_1.5s_ease-out]" src="/lovable-uploads/c64ffd97-7b3e-4755-a1a4-e9bfc4067f13.jpg" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="relative container mx-auto px-8 h-full flex flex-col justify-center items-center text-center pointer-events-none">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-[0.1em] uppercase text-white mb-6 animate-fade-in">
            {t('procedurePages.tummyTuck.title')}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl font-light animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
            {t('procedurePages.tummyTuck.subtitle')}
          </p>
        </div>
      </section>

      {/* 2. INTRO / SEO BLOCK */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-8 max-w-4xl text-center content-spacing">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 animate-fade-in">
            {t('procedurePages.tummyTuck.intro1')}
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed animate-fade-in" style={{
            animationDelay: '0.1s'
          }}>
            {t('procedurePages.tummyTuck.intro2')}
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
                  {t('procedurePages.tummyTuck.overviewTitle')}
                </h2>
                <p className="overview-subtitle-dark">
                  {t('procedurePages.tummyTuck.overview')}
                </p>
              </div>
              <img src={drKaraaltinLogo} alt="Dr. Karaaltin Logo" className="w-48 h-auto opacity-80" />
            </div>

            {/* RIGHT: SCROLLABLE CARDS */}
            <div ref={cardsRef} className="space-y-8 min-h-screen">
              <div className={`overview-card-dark ${activeCard === 0 ? 'active' : ''}`}>
                <h3 className="overview-card-title-dark">
                  {t('procedurePages.tummyTuck.card1Title')}
                </h3>
                <p className="overview-card-text-dark">
                  {t('procedurePages.tummyTuck.card1Text')}
                </p>
              </div>

              <div className={`overview-card-dark ${activeCard === 1 ? 'active' : ''}`} style={{
                animationDelay: '0.1s'
              }}>
                <h3 className="overview-card-title-dark">
                  {t('procedurePages.tummyTuck.card2Title')}
                </h3>
                <ul className="overview-card-text-dark space-y-2">
                  <li>• {t('procedurePages.tummyTuck.card2Item1')}</li>
                  <li>• {t('procedurePages.tummyTuck.card2Item2')}</li>
                  <li>• {t('procedurePages.tummyTuck.card2Item3')}</li>
                </ul>
              </div>

              <div className={`overview-card-dark ${activeCard === 2 ? 'active' : ''}`} style={{
                animationDelay: '0.2s'
              }}>
                <h3 className="overview-card-title-dark">
                  {t('procedurePages.tummyTuck.card3Title')}
                </h3>
                <p className="overview-card-text-dark mb-4">
                  {t('procedurePages.tummyTuck.card3Text')}
                </p>
                <ul className="overview-card-text-dark space-y-2">
                  <li>• {t('procedurePages.tummyTuck.card3Option1')}</li>
                  <li>• {t('procedurePages.tummyTuck.card3Option2')}</li>
                  <li>• {t('procedurePages.tummyTuck.card3Option3')}</li>
                  <li>• {t('procedurePages.tummyTuck.card3Option4')}</li>
                  <li>• {t('procedurePages.tummyTuck.card3Option5')}</li>
                  <li>• {t('procedurePages.tummyTuck.card3Option6')}</li>
                  <li>• {t('procedurePages.tummyTuck.card3Option7')}</li>
                </ul>
                <p className="overview-card-text-dark mt-4">
                  {t('procedurePages.tummyTuck.card3Conclusion')}
                </p>
              </div>

              <div className={`overview-card-dark ${activeCard === 3 ? 'active' : ''}`} style={{
                animationDelay: '0.3s'
              }}>
                <h3 className="overview-card-title-dark">
                  {t('procedurePages.tummyTuck.card4Title')}
                </h3>
                <p className="overview-card-text-dark">
                  {t('procedurePages.tummyTuck.card4Text')}
                </p>
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
              <img alt={t('procedurePages.tummyTuck.featuredTitle')} className="w-full h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg" src="/lovable-uploads/f10624e8-341d-4c86-978a-ec79f7132c8d.jpg" />
            </div>
            <div className="order-1 lg:order-2 space-y-6 content-spacing animate-fade-in" style={{
              animationDelay: '0.2s'
            }}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-gray-900">
                {t('procedurePages.tummyTuck.featuredTitle')}
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                {t('procedurePages.tummyTuck.featuredText1')}
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                {t('procedurePages.tummyTuck.featuredText2')}
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 text-xs uppercase tracking-widest font-light rounded hover:bg-gray-800 transition-all duration-300 button-hover">
                {t('common.bookNow')}
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROCEDURE DETAILS (FLEXIBLE) */}
      <section className="section-spacing bg-gray-50">
        <div className="container mx-auto px-8 max-w-5xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-gray-900 text-center mb-12 animate-fade-in">
            {t('procedurePages.tummyTuck.detailsTitle')}
          </h2>
          
          <div className="space-y-12">
            <div className="space-y-6 animate-fade-in" style={{
              animationDelay: '0.1s'
            }}>
              <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase text-gray-900">
                {t('procedurePages.tummyTuck.muscleRepairTitle')}
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                {t('procedurePages.tummyTuck.muscleRepairText')}
              </p>
            </div>

            <div className="space-y-6 animate-fade-in" style={{
              animationDelay: '0.2s'
            }}>
              <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase text-gray-900">
                {t('procedurePages.tummyTuck.skinFatTitle')}
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                {t('procedurePages.tummyTuck.skinFatText')}
              </p>
            </div>

            <div className="space-y-6 animate-fade-in" style={{
              animationDelay: '0.3s'
            }}>
              <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase text-gray-900">
                {t('procedurePages.tummyTuck.umbilicalTitle')}
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                {t('procedurePages.tummyTuck.umbilicalText')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SURGICAL JOURNEY (TIMELINE) */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-gray-900 text-center mb-16 animate-fade-in">
            {t('procedurePages.tummyTuck.journeyTitle')}
          </h2>
          
          <div className="space-y-8">
            {[{
              step: "01",
              title: t('procedurePages.tummyTuck.journey1Title'),
              description: t('procedurePages.tummyTuck.journey1Desc')
            }, {
              step: "02",
              title: t('procedurePages.tummyTuck.journey2Title'),
              description: t('procedurePages.tummyTuck.journey2Desc')
            }, {
              step: "03",
              title: t('procedurePages.tummyTuck.journey3Title'),
              description: t('procedurePages.tummyTuck.journey3Desc')
            }, {
              step: "04",
              title: t('procedurePages.tummyTuck.journey4Title'),
              description: t('procedurePages.tummyTuck.journey4Desc')
            }, {
              step: "05",
              title: t('procedurePages.tummyTuck.journey5Title'),
              description: t('procedurePages.tummyTuck.journey5Desc')
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
              <img alt={t('procedurePages.tummyTuck.recoveryTitle')} className="w-full h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg" src="/lovable-uploads/3ea4db42-7b16-4f50-ad14-23ab3a17f9a3.jpg" />
            </div>
            <div className="space-y-6 content-spacing animate-fade-in" style={{
              animationDelay: '0.2s'
            }}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-gray-900">
                {t('procedurePages.tummyTuck.recoveryTitle')}
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                {t('procedurePages.tummyTuck.recoveryIntro')}
              </p>
              <ul className="text-base md:text-lg text-gray-700 leading-relaxed space-y-2">
                <li>• {t('procedurePages.tummyTuck.recoveryItem1')}</li>
                <li>• {t('procedurePages.tummyTuck.recoveryItem2')}</li>
                <li>• {t('procedurePages.tummyTuck.recoveryItem3')}</li>
                <li>• {t('procedurePages.tummyTuck.recoveryItem4')}</li>
                <li>• {t('procedurePages.tummyTuck.recoveryItem5')}</li>
              </ul>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                {t('procedurePages.tummyTuck.recoveryConclusion')}
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 text-xs uppercase tracking-widest font-light rounded hover:bg-gray-800 transition-all duration-300 button-hover">
                {t('common.bookConsultation')}
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
            {t('procedurePages.tummyTuck.candidatesTitle')}
          </h2>
          
          <div className="candidates-grid">
            <div className="candidate-card-dark" style={{
              animationDelay: '0.1s'
            }}>
              <div className="candidate-icon-dark">
                ⚖️
              </div>
              <h3 className="candidate-card-title-dark">
                {t('procedurePages.tummyTuck.candidate1Title')}
              </h3>
              <p className="candidate-card-text-dark">
                {t('procedurePages.tummyTuck.candidate1Desc')}
              </p>
            </div>

            <div className="candidate-card-dark" style={{
              animationDelay: '0.2s'
            }}>
              <div className="candidate-icon-dark">
                🎯
              </div>
              <h3 className="candidate-card-title-dark">
                {t('procedurePages.tummyTuck.candidate2Title')}
              </h3>
              <p className="candidate-card-text-dark">
                {t('procedurePages.tummyTuck.candidate2Desc')}
              </p>
            </div>

            <div className="candidate-card-dark" style={{
              animationDelay: '0.3s'
            }}>
              <div className="candidate-icon-dark">
                🚭
              </div>
              <h3 className="candidate-card-title-dark">
                {t('procedurePages.tummyTuck.candidate3Title')}
              </h3>
              <p className="candidate-card-text-dark">
                {t('procedurePages.tummyTuck.candidate3Desc')}
              </p>
            </div>

            <div className="candidate-card-dark" style={{
              animationDelay: '0.4s'
            }}>
              <div className="candidate-icon-dark">
                💭
              </div>
              <h3 className="candidate-card-title-dark">
                {t('procedurePages.tummyTuck.candidate4Title')}
              </h3>
              <p className="candidate-card-text-dark">
                {t('procedurePages.tummyTuck.candidate4Desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. SCAR EXPECTATIONS */}
      <section className="section-spacing bg-gray-50">
        <div className="container mx-auto px-8 max-w-5xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-gray-900 text-center mb-12 animate-fade-in">
            {t('procedurePages.tummyTuck.scarTitle')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-lg border border-gray-200 text-center animate-fade-in card-hover">
              <div className="text-4xl text-gray-400 mb-4">━</div>
              <h3 className="text-xl md:text-2xl font-light tracking-wide uppercase text-gray-900 mb-4">
                {t('procedurePages.tummyTuck.miniScarTitle')}
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                {t('procedurePages.tummyTuck.miniScarText')}
              </p>
            </div>

            <div className="p-8 bg-white rounded-lg border border-gray-200 text-center animate-fade-in card-hover" style={{
              animationDelay: '0.1s'
            }}>
              <div className="text-4xl text-gray-400 mb-4">━━━</div>
              <h3 className="text-xl md:text-2xl font-light tracking-wide uppercase text-gray-900 mb-4">
                {t('procedurePages.tummyTuck.fullScarTitle')}
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                {t('procedurePages.tummyTuck.fullScarText')}
              </p>
            </div>

            <div className="p-8 bg-white rounded-lg border border-gray-200 text-center animate-fade-in card-hover" style={{
              animationDelay: '0.2s'
            }}>
              <div className="text-4xl text-gray-400 mb-4">━━━━━</div>
              <h3 className="text-xl md:text-2xl font-light tracking-wide uppercase text-gray-900 mb-4">
                {t('procedurePages.tummyTuck.fleurScarTitle')}
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                {t('procedurePages.tummyTuck.fleurScarText')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. BEFORE & AFTER (SIMPLIFIED) */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-8 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-gray-900 mb-6 animate-fade-in">
            {t('procedurePages.tummyTuck.resultsTitle')}
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8 max-w-2xl mx-auto animate-fade-in" style={{
            animationDelay: '0.1s'
          }}>
            {t('procedurePages.tummyTuck.resultsText')}
          </p>
          <Link to="/gallery" className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 text-xs uppercase tracking-widest font-light rounded hover:bg-gray-800 transition-all duration-300 button-hover animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
            {t('common.viewGallery')}
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 11. CTA FINAL — GET STARTED */}
      <ContactCTASection />
      </main>
      <Footer />
    </div>;
};
export default TummyTuck;