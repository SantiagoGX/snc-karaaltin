import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/home/ContactCTASection";
import drKaraaltinLogo from "@/assets/dr-karaaltin-logo-white.svg";
const RibCageMolding = () => {
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
        <img alt="Rib Cage Molding Hero" className="absolute inset-0 w-full h-full object-cover animate-[scale-in_1.5s_ease-out]" src="/lovable-uploads/83e12de7-e240-40d3-a6fd-e4c43771334b.jpg" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="relative container mx-auto px-8 h-full flex flex-col justify-center items-center text-center pointer-events-none">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-[0.1em] uppercase text-white mb-6 animate-fade-in">
            {t('procedurePages.ribCageMolding.title')}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl font-light animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
            {t('procedurePages.ribCageMolding.subtitle')}
          </p>
        </div>
      </section>

      {/* 2. INTRO / SEO BLOCK */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-8 max-w-4xl text-center content-spacing">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 animate-fade-in">
            {t('procedurePages.ribCageMolding.intro1')}
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed animate-fade-in" style={{
            animationDelay: '0.1s'
          }}>
            {t('procedurePages.ribCageMolding.intro2')}
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
                  {t('procedurePages.ribCageMolding.overviewTitle')}
                </h2>
                <p className="overview-subtitle-dark">
                  {t('common.overview')}
                </p>
              </div>
              <img src={drKaraaltinLogo} alt="Dr. Karaaltin Logo" className="w-48 h-auto opacity-80" />
            </div>

            {/* RIGHT: SCROLLABLE CARDS */}
            <div ref={cardsRef} className="space-y-8 min-h-screen">
              <div className={`overview-card-dark ${activeCard === 0 ? 'active' : ''}`}>
                <h3 className="overview-card-title-dark">
                  01 // {t('procedurePages.ribCageMolding.card1Title')}
                </h3>
                <p className="overview-card-text-dark">
                  {t('procedurePages.ribCageMolding.card1Text')}
                </p>
              </div>

              <div className={`overview-card-dark ${activeCard === 1 ? 'active' : ''}`} style={{
                animationDelay: '0.1s'
              }}>
                <h3 className="overview-card-title-dark">
                  02 // {t('procedurePages.ribCageMolding.card2Title')}
                </h3>
                <p className="overview-card-text-dark mb-4">
                  {t('procedurePages.ribCageMolding.card2Text')}
                </p>
                <p className="overview-card-text-dark font-semibold mb-2">
                  {t('procedurePages.ribCageMolding.card2Benefits')}
                </p>
                <ul className="overview-card-text-dark space-y-2">
                  <li>• {t('procedurePages.ribCageMolding.card2Benefit1')}</li>
                  <li>• {t('procedurePages.ribCageMolding.card2Benefit2')}</li>
                  <li>• {t('procedurePages.ribCageMolding.card2Benefit3')}</li>
                  <li>• {t('procedurePages.ribCageMolding.card2Benefit4')}</li>
                </ul>
              </div>

              <div className={`overview-card-dark ${activeCard === 2 ? 'active' : ''}`} style={{
                animationDelay: '0.2s'
              }}>
                <h3 className="overview-card-title-dark">
                  03 // {t('procedurePages.ribCageMolding.card3Title')}
                </h3>
                <p className="overview-card-text-dark">
                  {t('procedurePages.ribCageMolding.card3Text')}
                </p>
              </div>

              <div className={`overview-card-dark ${activeCard === 3 ? 'active' : ''}`} style={{
                animationDelay: '0.3s'
              }}>
                <h3 className="overview-card-title-dark">
                  04 // {t('procedurePages.ribCageMolding.card4Title')}
                </h3>
                <p className="overview-card-text-dark">
                  {t('procedurePages.ribCageMolding.card4Text')}
                </p>
              </div>

              <div className={`overview-card-dark ${activeCard === 4 ? 'active' : ''}`} style={{
                animationDelay: '0.4s'
              }}>
                <h3 className="overview-card-title-dark">
                  05 // {t('procedurePages.ribCageMolding.card5Title')}
                </h3>
                <p className="overview-card-text-dark">
                  {t('procedurePages.ribCageMolding.card5Text')}
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
              <img alt="Rib Cage Molding With Dr. Karaaltin" className="w-full h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg" src="/lovable-uploads/aa13781c-05ca-4153-b989-6346a1ce45a2.jpg" />
            </div>
            <div className="order-1 lg:order-2 space-y-6 content-spacing animate-fade-in" style={{
              animationDelay: '0.2s'
            }}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-gray-900">
                {t('procedurePages.ribCageMolding.featuredTitle')}
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                {t('procedurePages.ribCageMolding.featuredText')}
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 text-xs uppercase tracking-widest font-light rounded hover:bg-gray-800 transition-all duration-300 button-hover">
                {t('common.bookNow')}
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
            {t('procedurePages.ribCageMolding.detailsTitle')}
          </h2>
          
          <div className="space-y-16">
            {/* How It Works - Image Left, Text Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <img alt="How It Works" className="w-full h-[350px] lg:h-[400px] object-cover rounded-lg shadow-lg" src="/lovable-uploads/1f446cc4-d72c-4fdc-8d14-96a133e6e7b7.png" />
              </div>
              <div className="space-y-6 animate-fade-in" style={{
                animationDelay: '0.2s'
              }}>
                <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase text-gray-900">
                  {t('procedurePages.ribCageMolding.howItWorksTitle')}
                </h3>
                <ul className="text-base md:text-lg text-gray-700 leading-relaxed space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-gray-900 font-semibold mt-1">01</span>
                    <span>{t('procedurePages.ribCageMolding.howItWorks1')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-900 font-semibold mt-1">02</span>
                    <span>{t('procedurePages.ribCageMolding.howItWorks2')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-900 font-semibold mt-1">03</span>
                    <span>{t('procedurePages.ribCageMolding.howItWorks3')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-900 font-semibold mt-1">04</span>
                    <span>{t('procedurePages.ribCageMolding.howItWorks4')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-900 font-semibold mt-1">05</span>
                    <span>{t('procedurePages.ribCageMolding.howItWorks5')}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Clinical Advantages - Text Left, Image Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 space-y-6 animate-fade-in" style={{
                animationDelay: '0.2s'
              }}>
                <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase text-gray-900">
                  {t('procedurePages.ribCageMolding.advantagesTitle')}
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200">
                    <div className="flex-shrink-0 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                      ✓
                    </div>
                    <div>
                      <p className="text-base md:text-lg text-gray-900 font-semibold">{t('procedurePages.ribCageMolding.advantage1Title')}</p>
                      <p className="text-sm text-gray-600">{t('procedurePages.ribCageMolding.advantage1Desc')}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200">
                    <div className="flex-shrink-0 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                      ✓
                    </div>
                    <div>
                      <p className="text-base md:text-lg text-gray-900 font-semibold">{t('procedurePages.ribCageMolding.advantage2Title')}</p>
                      <p className="text-sm text-gray-600">{t('procedurePages.ribCageMolding.advantage2Desc')}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200">
                    <div className="flex-shrink-0 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                      ✓
                    </div>
                    <div>
                      <p className="text-base md:text-lg text-gray-900 font-semibold">{t('procedurePages.ribCageMolding.advantage3Title')}</p>
                      <p className="text-sm text-gray-600">{t('procedurePages.ribCageMolding.advantage3Desc')}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200">
                    <div className="flex-shrink-0 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                      ✓
                    </div>
                    <div>
                      <p className="text-base md:text-lg text-gray-900 font-semibold">{t('procedurePages.ribCageMolding.advantage4Title')}</p>
                      <p className="text-sm text-gray-600">{t('procedurePages.ribCageMolding.advantage4Desc')}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 animate-fade-in">
                <img alt="Clinical Advantages" className="w-full h-[350px] lg:h-[400px] object-cover rounded-lg shadow-lg" src="/lovable-uploads/4581678e-ceff-4325-8c2c-7e09c384c794.jpg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SURGICAL JOURNEY */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-gray-900 text-center mb-16 animate-fade-in">
            {t('common.yourSurgicalJourney')}
          </h2>
          
          <div className="space-y-8">
            {[{
              step: "01",
              title: t('common.consultation'),
              description: t('procedurePages.ribCageMolding.journey1Desc')
            }, {
              step: "02",
              title: t('procedurePages.ribCageMolding.journey2Title'),
              description: t('procedurePages.ribCageMolding.journey2Desc')
            }, {
              step: "03",
              title: t('procedurePages.ribCageMolding.journey3Title'),
              description: t('procedurePages.ribCageMolding.journey3Desc')
            }, {
              step: "04",
              title: t('procedurePages.ribCageMolding.journey4Title'),
              description: t('procedurePages.ribCageMolding.journey4Desc')
            }, {
              step: "05",
              title: t('common.followUp'),
              description: t('procedurePages.ribCageMolding.journey5Desc')
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
              <img alt="Recovery & Healing" className="w-full h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg" src="/lovable-uploads/1d9be05e-1cf2-4969-8c3f-6506c4f227ad.jpg" />
            </div>
            <div className="space-y-6 content-spacing animate-fade-in" style={{
              animationDelay: '0.2s'
            }}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-gray-900">
                {t('procedurePages.ribCageMolding.recoveryTitle')}
              </h2>
              <ul className="text-base md:text-lg text-gray-700 leading-relaxed space-y-2">
                <li>• {t('procedurePages.ribCageMolding.recoveryItem1')}</li>
                <li>• {t('procedurePages.ribCageMolding.recoveryItem2')}</li>
                <li>• {t('procedurePages.ribCageMolding.recoveryItem3')}</li>
                <li>• {t('procedurePages.ribCageMolding.recoveryItem4')}</li>
                <li>• {t('procedurePages.ribCageMolding.recoveryItem5')}</li>
              </ul>
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
            Ideal Candidates
          </h2>
          
          <div className="candidates-grid">
            <div className="candidate-card-dark" style={{
              animationDelay: '0.1s'
            }}>
              <div className="candidate-icon-dark">
                ⚕
              </div>
              <h3 className="candidate-card-title-dark">
                Wide Rib Cage
              </h3>
              <p className="candidate-card-text-dark">
                Patients with a wide rib cage seeking refined proportions
              </p>
            </div>

            <div className="candidate-card-dark" style={{
              animationDelay: '0.2s'
            }}>
              <div className="candidate-icon-dark">
                ✨
              </div>
              <h3 className="candidate-card-title-dark">
                Stylized Waist
              </h3>
              <p className="candidate-card-text-dark">
                Individuals seeking a more defined and elegant waistline
              </p>
            </div>

            <div className="candidate-card-dark" style={{
              animationDelay: '0.3s'
            }}>
              <div className="candidate-icon-dark">
                🔬
              </div>
              <h3 className="candidate-card-title-dark">
                Minimal Approach
              </h3>
              <p className="candidate-card-text-dark">
                Patients preferring techniques without bone resection
              </p>
            </div>

            <div className="candidate-card-dark" style={{
              animationDelay: '0.4s'
            }}>
              <div className="candidate-icon-dark">
                ⚖
              </div>
              <h3 className="candidate-card-title-dark">
                Body Harmony
              </h3>
              <p className="candidate-card-text-dark">
                Ideal for harmony between thorax, waist, and hips
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. SCAR EXPECTATIONS */}
      <section className="section-spacing bg-gray-50">
        <div className="container mx-auto px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-gray-900 text-center mb-16 animate-fade-in">
            Scar Expectations
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-10 lg:p-12 rounded-lg shadow-lg border-2 border-gray-900 text-center animate-fade-in" style={{
              animationDelay: '0.1s'
            }}>
              <div className="inline-block px-6 py-3 bg-gray-900 text-white rounded-full text-sm font-semibold uppercase tracking-widest mb-6">
                Virtually Invisible
              </div>
              
              <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase text-gray-900 mb-6">
                Single Microincision
              </h3>
              
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
                A 0.5 cm microincision strategically placed in the natural lateral fold of the torso. When healed, it becomes virtually invisible.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-gray-200">
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mx-auto border border-gray-300">
                    <span className="text-xl">📏</span>
                  </div>
                  <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Size</p>
                  <p className="text-sm text-gray-600">0.5 cm</p>
                </div>
                
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mx-auto border border-gray-300">
                    <span className="text-xl">📍</span>
                  </div>
                  <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Location</p>
                  <p className="text-sm text-gray-600">Lateral torso fold</p>
                </div>
                
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mx-auto border border-gray-300">
                    <span className="text-xl">👁️</span>
                  </div>
                  <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Visibility</p>
                  <p className="text-sm text-gray-600">Nearly invisible</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. BEFORE & AFTER */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-8 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-gray-900 mb-8 animate-fade-in">
            Before & After
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8 animate-fade-in" style={{
            animationDelay: '0.1s'
          }}>
            Natural, refined, and proportional results.
          </p>
          <Link to="/gallery" className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 text-xs uppercase tracking-widest font-light rounded hover:bg-gray-800 transition-all duration-300 button-hover animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
            View Before & After Gallery
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 11. GET STARTED CTA */}
      <ContactCTASection />
      </main>
      <Footer />
    </div>;
};
export default RibCageMolding;