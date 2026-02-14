import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ChevronRight, Clock, Droplet, Layers, AlertCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/home/ContactCTASection";
import drKaraaltinLogo from "@/assets/dr-karaaltin-logo-white.svg";
const BreastAugmentationImplants = () => {
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
      {/* Hero Section */}
      <section className="procedure-hero">
        <img alt="Breast Augmentation With Implants Hero" className="absolute inset-0 w-full h-full object-cover animate-scale-in" src="/lovable-uploads/7706e823-b551-4658-ad62-b282b7435811.png" />
        <div className="procedure-hero-overlay" />
        <div className="procedure-hero-content">
          <h1 className="procedure-hero-title animate-fade-in">
            {t('procedurePages.breastAugmentationImplants.title', 'Breast Augmentation With Implants')}
          </h1>
          <p className="procedure-hero-subtitle animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
            {t('procedurePages.breastAugmentationImplants.subtitle', 'Sculpted Volume. Precision Planning. Long-Lasting Results.')}
          </p>
        </div>
      </section>

      {/* SEO Intro Block */}
      <section className="section-spacing">
        <div className="content-spacing max-w-3xl mx-auto text-center">
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
            {t('procedurePages.breastAugmentationImplants.intro', 'Breast augmentation with implants remains the gold standard for achieving significant volume enhancement and upper-pole fullness. Dr. Karaaltin combines advanced planning, anatomical mapping, and tailored implant selection to deliver balanced, natural-looking results that complement every patient\'s physique and aesthetic goals.')}
          </p>
        </div>
      </section>

      {/* Sticky Overview Section */}
      <section ref={overviewRef} className="overview-section-dark">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16 relative">
            <div className="overview-sticky-left animate-fade-in">
              <div>
                <h2 className="overview-title-dark">
                  {t('procedurePages.breastAugmentationImplants.title', 'Breast Augmentation')}
                </h2>
                <p className="overview-subtitle-dark">
                  {t('procedurePages.common.overview')}
                </p>
              </div>
              <img src={drKaraaltinLogo} alt="Dr. Karaaltin Logo" className="w-48 h-auto opacity-80" />
            </div>

            <div ref={cardsRef} className="space-y-8 min-h-screen">
              <div className={`overview-card-dark ${activeCard === 0 ? 'shadow-lg border-white/20' : ''}`}>
                <h3 className="overview-card-title-dark">
                  01 // {t('procedurePages.breastAugmentationImplants.card1Title')}
                </h3>
                <p className="overview-card-text-dark">
                  {t('procedurePages.breastAugmentationImplants.card1Text')}
                </p>
              </div>

              <div className={`overview-card-dark ${activeCard === 1 ? 'shadow-lg border-white/20' : ''}`}>
                <h3 className="overview-card-title-dark">
                  02 // {t('procedurePages.breastAugmentationImplants.card2Title')}
                </h3>
                <p className="overview-card-text-dark">
                  {t('procedurePages.breastAugmentationImplants.card2Text')}
                </p>
              </div>

              <div className={`overview-card-dark ${activeCard === 2 ? 'shadow-lg border-white/20' : ''}`}>
                <h3 className="overview-card-title-dark">
                  03 // {t('procedurePages.breastAugmentationImplants.card3Title')}
                </h3>
                <p className="overview-card-text-dark">
                  {t('procedurePages.breastAugmentationImplants.card3Text')}
                </p>
              </div>

              <div className={`overview-card-dark ${activeCard === 3 ? 'shadow-lg border-white/20' : ''}`}>
                <h3 className="overview-card-title-dark">
                  04 // {t('procedurePages.breastAugmentationImplants.card4Title')}
                </h3>
                <p className="overview-card-text-dark">
                  {t('procedurePages.breastAugmentationImplants.card4Text')}
                </p>
              </div>

              <div className={`overview-card-dark ${activeCard === 4 ? 'shadow-lg border-white/20' : ''}`}>
                <h3 className="overview-card-title-dark">
                  05 // {t('procedurePages.breastAugmentationImplants.card5Title')}
                </h3>
                <p className="overview-card-text-dark">
                  {t('procedurePages.breastAugmentationImplants.card5Text')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="section-spacing">
        <div className="content-spacing max-w-4xl mx-auto">
          <div className="bg-gray-50 p-8 lg:p-12 rounded-lg">
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed text-center">
              {t('procedurePages.breastAugmentationImplants.featuredText')}
            </p>
          </div>
        </div>
      </section>

      {/* Procedure Details */}
      <section className="section-spacing bg-[#F5F1E8]">
        <div className="content-spacing">
          <h2 className="text-3xl md:text-4xl font-light uppercase tracking-[0.15em] text-center mb-4">
            {t('procedurePages.common.procedureDetails')}
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            {t('procedurePages.breastAugmentationImplants.detailsSubtitle')}
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-xl border-2 border-gray-200/50 hover:border-blue-300 transition-all duration-300 hover:-translate-y-2 animate-fade-in">
              <div className="absolute top-4 right-4 w-12 h-12 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-20 h-20 bg-blue-100 rounded-full opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500" />
              <h3 className="text-lg font-semibold uppercase tracking-wide mb-3 text-foreground pr-16">
                {t('procedurePages.breastAugmentationImplants.durationTitle')}
              </h3>
              <p className="text-foreground/80 text-sm leading-relaxed">{t('procedurePages.breastAugmentationImplants.durationValue')}</p>
            </div>
            
            <div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-xl border-2 border-gray-200/50 hover:border-purple-300 transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{
              animationDelay: '0.1s'
            }}>
              <div className="absolute top-4 right-4 w-12 h-12 rounded-lg bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <Droplet className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-20 h-20 bg-purple-100 rounded-full opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500" />
              <h3 className="text-lg font-semibold uppercase tracking-wide mb-3 text-foreground pr-16">
                {t('procedurePages.breastAugmentationImplants.selectionTitle')}
              </h3>
              <p className="text-foreground/80 text-sm leading-relaxed">{t('procedurePages.breastAugmentationImplants.selectionValue')}</p>
            </div>
            
            <div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-xl border-2 border-gray-200/50 hover:border-pink-300 transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{
              animationDelay: '0.2s'
            }}>
              <div className="absolute top-4 right-4 w-12 h-12 rounded-lg bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <Layers className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-20 h-20 bg-pink-100 rounded-full opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500" />
              <h3 className="text-lg font-semibold uppercase tracking-wide mb-3 text-foreground pr-16">
                {t('procedurePages.breastAugmentationImplants.pocketTitle')}
              </h3>
              <p className="text-foreground/80 text-sm leading-relaxed">{t('procedurePages.breastAugmentationImplants.pocketValue')}</p>
            </div>
            
            <div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-xl border-2 border-gray-200/50 hover:border-green-300 transition-all duration-300 hover:-translate-y-2 animate-fade-in col-span-full" style={{
              animationDelay: '0.3s'
            }}>
              <div className="absolute top-4 right-4 w-12 h-12 rounded-lg bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-20 h-20 bg-green-100 rounded-full opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500" />
              <h3 className="text-lg font-semibold uppercase tracking-wide mb-3 text-foreground pr-16">
                {t('procedurePages.breastAugmentationImplants.correctionsTitle')}
              </h3>
              <p className="text-foreground/80 text-sm leading-relaxed">{t('procedurePages.breastAugmentationImplants.correctionsValue')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Surgical Journey */}
      <section className="section-spacing">
        <div className="content-spacing">
          <h2 className="text-3xl md:text-4xl font-light uppercase tracking-[0.15em] text-center mb-12">
            {t('procedurePages.common.surgicalJourney')}
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300" />
              <div className="space-y-8">
                {[{
                  title: t('procedurePages.breastAugmentationImplants.journey1Title'),
                  desc: t('procedurePages.breastAugmentationImplants.journey1Desc')
                }, {
                  title: t('procedurePages.breastAugmentationImplants.journey2Title'),
                  desc: t('procedurePages.breastAugmentationImplants.journey2Desc')
                }, {
                  title: t('procedurePages.breastAugmentationImplants.journey3Title'),
                  desc: t('procedurePages.breastAugmentationImplants.journey3Desc')
                }, {
                  title: t('procedurePages.breastAugmentationImplants.journey4Title'),
                  desc: t('procedurePages.breastAugmentationImplants.journey4Desc')
                }, {
                  title: t('procedurePages.breastAugmentationImplants.journey5Title'),
                  desc: t('procedurePages.breastAugmentationImplants.journey5Desc')
                }].map((step, index) => <div key={index} className="relative pl-12">
                    <div className="absolute left-0 w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      {index + 1}
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold uppercase tracking-wide mb-2 text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-foreground/80">{step.desc}</p>
                    </div>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recovery Block */}
      <section className="section-spacing bg-gray-50">
        <div className="content-spacing">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <img alt={t('procedurePages.common.recoveryHealing')} className="w-full aspect-[4/3] rounded-lg object-cover" src="/lovable-uploads/b70a5dbb-f8eb-4b15-925b-c3ce70d737b4.jpg" />
              <div>
                <h2 className="text-3xl md:text-4xl font-light uppercase tracking-[0.15em] mb-6">
                  {t('procedurePages.common.recoveryHealing')}
                </h2>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  {t('procedurePages.breastAugmentationImplants.recoveryText')}
                </p>
                <Link to="/contact" className="btn-primary">
                  {t('procedurePages.common.bookConsultation')}
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal Candidates */}
      <section className="candidates-section-dark">
        <div className="content-spacing">
          <h2 className="text-3xl md:text-4xl font-light uppercase tracking-[0.15em] text-center mb-12 text-white">
            {t('procedurePages.common.idealCandidates')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="candidate-card-dark text-center">
              <div className="candidate-icon-dark">📊</div>
              <h3 className="candidate-card-title-dark">
                {t('procedurePages.breastAugmentationImplants.candidate1Title')}
              </h3>
              <p className="candidate-card-text-dark">
                {t('procedurePages.breastAugmentationImplants.candidate1Desc')}
              </p>
            </div>
            <div className="candidate-card-dark text-center">
              <div className="candidate-icon-dark">🎯</div>
              <h3 className="candidate-card-title-dark">
                {t('procedurePages.breastAugmentationImplants.candidate2Title')}
              </h3>
              <p className="candidate-card-text-dark">
                {t('procedurePages.breastAugmentationImplants.candidate2Desc')}
              </p>
            </div>
            <div className="candidate-card-dark text-center">
              <div className="candidate-icon-dark">⚖️</div>
              <h3 className="candidate-card-title-dark">
                {t('procedurePages.breastAugmentationImplants.candidate3Title')}
              </h3>
              <p className="candidate-card-text-dark">
                {t('procedurePages.breastAugmentationImplants.candidate3Desc')}
              </p>
            </div>
            <div className="candidate-card-dark text-center">
              <div className="candidate-icon-dark">👶</div>
              <h3 className="candidate-card-title-dark">
                {t('procedurePages.breastAugmentationImplants.candidate4Title')}
              </h3>
              <p className="candidate-card-text-dark">
                {t('procedurePages.breastAugmentationImplants.candidate4Desc')}
              </p>
            </div>
          </div>
        </div>
      </section>
      <ContactCTASection />
      </main>
      <Footer />
    </div>;
};
export default BreastAugmentationImplants;