import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Target, Droplet, TrendingUp, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/home/ContactCTASection";
import drKaraaltinLogo from "@/assets/dr-karaaltin-logo-white.svg";

const BreastAugmentationFatGrafting = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img alt={t('procedurePages.breastAugmentationFatGrafting.title')} className="w-full h-full object-cover" src="/lovable-uploads/46b4ccc1-3118-44e3-b57c-2a9c4222056d.jpg" />
        </div>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 animate-fade-in pointer-events-none">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 uppercase tracking-[0.2em]">
            {t('procedurePages.breastAugmentationFatGrafting.title')}
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-light tracking-wide">
            {t('procedurePages.breastAugmentationFatGrafting.subtitle')}
          </p>
        </div>
      </section>

      {/* SEO Intro Block */}
      <section className="section-spacing">
        <div className="content-spacing max-w-3xl mx-auto text-center">
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
            {t('procedurePages.breastAugmentationFatGrafting.intro')}
          </p>
        </div>
      </section>

      {/* Sticky Overview Section */}
      <section className="overview-section-dark">
        <div className="content-spacing">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-8 lg:gap-16">
            {/* Left Column - Sticky */}
            <div className="overview-sticky-left">
              <div>
                <h2 className="overview-title-dark">
                  {t('procedurePages.breastAugmentationFatGrafting.overviewTitle')}
                </h2>
                <p className="overview-subtitle-dark">{t('procedurePages.common.overview')}</p>
              </div>
              <img src={drKaraaltinLogo} alt="Dr. Karaaltin Signature" className="w-48 h-auto opacity-80" />
            </div>

            {/* Right Column - Scrollable Cards */}
            <div className="space-y-6">
              <div className="overview-card-dark">
                <h3 className="overview-card-title-dark">
                  01 // {t('procedurePages.breastAugmentationFatGrafting.card1Title')}
                </h3>
                <p className="overview-card-text-dark">
                  {t('procedurePages.breastAugmentationFatGrafting.card1Text')}
                </p>
              </div>

              <div className="overview-card-dark">
                <h3 className="overview-card-title-dark">
                  02 // {t('procedurePages.breastAugmentationFatGrafting.card2Title')}
                </h3>
                <p className="overview-card-text-dark">
                  {t('procedurePages.breastAugmentationFatGrafting.card2Text')}
                </p>
              </div>

              <div className="overview-card-dark">
                <h3 className="overview-card-title-dark">
                  03 // {t('procedurePages.breastAugmentationFatGrafting.card3Title')}
                </h3>
                <p className="overview-card-text-dark">
                  {t('procedurePages.breastAugmentationFatGrafting.card3Text')}
                </p>
              </div>

              <div className="overview-card-dark">
                <h3 className="overview-card-title-dark">
                  04 // {t('procedurePages.breastAugmentationFatGrafting.card4Title')}
                </h3>
                <p className="overview-card-text-dark">
                  {t('procedurePages.breastAugmentationFatGrafting.card4Text')}
                </p>
              </div>

              <div className="overview-card-dark">
                <h3 className="overview-card-title-dark">
                  05 // {t('procedurePages.breastAugmentationFatGrafting.card5Title')}
                </h3>
                <p className="overview-card-text-dark">
                  {t('procedurePages.breastAugmentationFatGrafting.card5Text')}
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
              {t('procedurePages.breastAugmentationFatGrafting.featuredText')}
            </p>
          </div>
        </div>
      </section>

      {/* Procedure Details */}
      <section className="section-spacing bg-[#F5F1E8]">
        <div className="content-spacing">
          <h2 className="text-3xl md:text-4xl font-light uppercase tracking-[0.15em] text-center mb-4 text-gray-900 animate-fade-in">
            {t('procedurePages.breastAugmentationFatGrafting.detailsTitle')}
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: "0.1s"}}>
            {t('procedurePages.breastAugmentationFatGrafting.detailsSubtitle')}
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group relative bg-white/80 backdrop-blur-sm border-2 border-gray-200/50 p-8 rounded-2xl shadow-md hover:shadow-2xl hover:border-blue-300/50 hover:-translate-y-2 transition-all duration-500 animate-fade-in overflow-hidden" style={{animationDelay: "0.2s"}}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100/40 to-transparent rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Clock className="w-8 h-8 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-semibold uppercase tracking-wide mb-3 text-gray-900">
                  {t('procedurePages.breastAugmentationFatGrafting.durationTitle')}
                </h3>
                <p className="text-gray-700 text-lg font-light">{t('procedurePages.breastAugmentationFatGrafting.durationValue')}</p>
              </div>
            </div>

            <div className="group relative bg-white/80 backdrop-blur-sm border-2 border-gray-200/50 p-8 rounded-2xl shadow-md hover:shadow-2xl hover:border-purple-300/50 hover:-translate-y-2 transition-all duration-500 animate-fade-in overflow-hidden" style={{animationDelay: "0.3s"}}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100/40 to-transparent rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Target className="w-8 h-8 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-semibold uppercase tracking-wide mb-3 text-gray-900">
                  {t('procedurePages.breastAugmentationFatGrafting.donorZonesTitle')}
                </h3>
                <p className="text-gray-700 text-lg font-light">{t('procedurePages.breastAugmentationFatGrafting.donorZonesValue')}</p>
              </div>
            </div>

            <div className="group relative bg-white/80 backdrop-blur-sm border-2 border-gray-200/50 p-8 rounded-2xl shadow-md hover:shadow-2xl hover:border-pink-300/50 hover:-translate-y-2 transition-all duration-500 animate-fade-in overflow-hidden" style={{animationDelay: "0.4s"}}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-100/40 to-transparent rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Droplet className="w-8 h-8 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-semibold uppercase tracking-wide mb-3 text-gray-900">
                  {t('procedurePages.breastAugmentationFatGrafting.injectionTitle')}
                </h3>
                <p className="text-gray-700 text-lg font-light">{t('procedurePages.breastAugmentationFatGrafting.injectionValue')}</p>
              </div>
            </div>

            <div className="group relative bg-white/80 backdrop-blur-sm border-2 border-gray-200/50 p-8 rounded-2xl shadow-md hover:shadow-2xl hover:border-emerald-300/50 hover:-translate-y-2 transition-all duration-500 animate-fade-in overflow-hidden" style={{animationDelay: "0.5s"}}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-100/40 to-transparent rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <TrendingUp className="w-8 h-8 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-semibold uppercase tracking-wide mb-3 text-gray-900">
                  {t('procedurePages.breastAugmentationFatGrafting.volumeTitle')}
                </h3>
                <p className="text-gray-700 text-lg font-light">{t('procedurePages.breastAugmentationFatGrafting.volumeValue')}</p>
              </div>
            </div>

            <div className="group relative bg-white/80 backdrop-blur-sm border-2 border-gray-200/50 p-8 rounded-2xl shadow-md hover:shadow-2xl hover:border-amber-300/50 hover:-translate-y-2 transition-all duration-500 animate-fade-in overflow-hidden md:col-span-2 lg:col-span-1" style={{animationDelay: "0.6s"}}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-100/40 to-transparent rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Sparkles className="w-8 h-8 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-semibold uppercase tracking-wide mb-3 text-gray-900">
                  {t('procedurePages.breastAugmentationFatGrafting.enhancementTitle')}
                </h3>
                <p className="text-gray-700 text-lg font-light">{t('procedurePages.breastAugmentationFatGrafting.enhancementValue')}</p>
              </div>
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
                {[
                  { title: t('procedurePages.breastAugmentationFatGrafting.journey1Title'), desc: t('procedurePages.breastAugmentationFatGrafting.journey1Desc') },
                  { title: t('procedurePages.breastAugmentationFatGrafting.journey2Title'), desc: t('procedurePages.breastAugmentationFatGrafting.journey2Desc') },
                  { title: t('procedurePages.breastAugmentationFatGrafting.journey3Title'), desc: t('procedurePages.breastAugmentationFatGrafting.journey3Desc') },
                  { title: t('procedurePages.breastAugmentationFatGrafting.journey4Title'), desc: t('procedurePages.breastAugmentationFatGrafting.journey4Desc') },
                  { title: t('procedurePages.breastAugmentationFatGrafting.journey5Title'), desc: t('procedurePages.breastAugmentationFatGrafting.journey5Desc') },
                  { title: t('procedurePages.breastAugmentationFatGrafting.journey6Title'), desc: t('procedurePages.breastAugmentationFatGrafting.journey6Desc') }
                ].map((step, index) => (
                  <div key={index} className="relative pl-12">
                    <div className="absolute left-0 w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      {index + 1}
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold uppercase tracking-wide mb-2 text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-foreground/80">{step.desc}</p>
                    </div>
                  </div>
                ))}
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
              <img alt={t('procedurePages.breastAugmentationFatGrafting.recoveryTitle')} className="w-full aspect-[4/3] rounded-lg object-cover" src="/lovable-uploads/23ef9a88-8789-4ede-a397-f26b9f17803f.jpg" />
              <div>
                <h2 className="text-3xl md:text-4xl font-light uppercase tracking-[0.15em] mb-6">
                  {t('procedurePages.breastAugmentationFatGrafting.recoveryTitle')}
                </h2>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  {t('procedurePages.breastAugmentationFatGrafting.recoveryText')}
                </p>
                <Link to="/contact">
                  <Button className="bg-gray-900 text-white hover:bg-gray-800 uppercase tracking-widest text-xs px-8 py-6">
                    {t('procedurePages.common.bookConsultation')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
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
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-lg font-semibold uppercase tracking-wide mb-3 text-white">
                {t('procedurePages.breastAugmentationFatGrafting.candidate1Title')}
              </h3>
              <p className="text-white/80 text-sm">
                {t('procedurePages.breastAugmentationFatGrafting.candidate1Desc')}
              </p>
            </div>
            <div className="candidate-card-dark text-center">
              <div className="candidate-icon-dark">📏</div>
              <h3 className="candidate-card-title-dark">
                {t('procedurePages.breastAugmentationFatGrafting.candidate2Title')}
              </h3>
              <p className="candidate-card-text-dark">
                {t('procedurePages.breastAugmentationFatGrafting.candidate2Desc')}
              </p>
            </div>
            <div className="candidate-card-dark text-center">
              <div className="candidate-icon-dark">💪</div>
              <h3 className="candidate-card-title-dark">
                {t('procedurePages.breastAugmentationFatGrafting.candidate3Title')}
              </h3>
              <p className="candidate-card-text-dark">
                {t('procedurePages.breastAugmentationFatGrafting.candidate3Desc')}
              </p>
            </div>
            <div className="candidate-card-dark text-center">
              <div className="candidate-icon-dark">✨</div>
              <h3 className="candidate-card-title-dark">
                {t('procedurePages.breastAugmentationFatGrafting.candidate4Title')}
              </h3>
              <p className="candidate-card-text-dark">
                {t('procedurePages.breastAugmentationFatGrafting.candidate4Desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After CTA */}
      <section className="section-spacing bg-gray-50">
        <div className="content-spacing text-center">
          <Link to="/gallery">
            <Button className="bg-gray-900 text-white hover:bg-gray-800 uppercase tracking-widest text-xs px-8 py-6">
              {t('procedurePages.common.beforeAfterCta')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Get Started CTA */}
      <ContactCTASection />

      <Footer />
    </div>
  );
};

export default BreastAugmentationFatGrafting;
