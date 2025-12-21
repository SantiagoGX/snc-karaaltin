import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/home/ContactCTASection";
import drKaraaltinLogo from "@/assets/dr-karaaltin-logo-white.svg";

const InvertedNippleRepair = () => {
  const { t } = useTranslation();
  
  const overviewCards = [
    { id: "01", titleKey: "procedurePages.invertedNipple.card1Title", descKey: "procedurePages.invertedNipple.card1Desc" },
    { id: "02", titleKey: "procedurePages.invertedNipple.card2Title", descKey: "procedurePages.invertedNipple.card2Desc" },
    { id: "03", titleKey: "procedurePages.invertedNipple.card3Title", descKey: "procedurePages.invertedNipple.card3Desc" },
    { id: "04", titleKey: "procedurePages.invertedNipple.card4Title", descKey: "procedurePages.invertedNipple.card4Desc" },
    { id: "05", titleKey: "procedurePages.invertedNipple.card5Title", descKey: "procedurePages.invertedNipple.card5Desc" },
    { id: "06", titleKey: "procedurePages.invertedNipple.card6Title", descKey: "procedurePages.invertedNipple.card6Desc" },
  ];

  const anatomyCallouts = [
    { position: "top-left", textKey: "procedurePages.invertedNipple.anatomy1" },
    { position: "top-right", textKey: "procedurePages.invertedNipple.anatomy2" },
    { position: "bottom-left", textKey: "procedurePages.invertedNipple.anatomy3" },
    { position: "bottom-right", textKey: "procedurePages.invertedNipple.anatomy4" },
  ];

  const procedureSteps = [
    "procedurePages.invertedNipple.step1",
    "procedurePages.invertedNipple.step2",
    "procedurePages.invertedNipple.step3",
    "procedurePages.invertedNipple.step4",
    "procedurePages.invertedNipple.step5",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
        <img alt={t('procedurePages.invertedNipple.title')} className="absolute inset-0 w-full h-full object-cover animate-fade-in" src="/lovable-uploads/4dc7e20f-ed3a-43fb-b416-e9011ce2dfa0.jpg" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="relative h-full max-w-7xl mx-auto px-8 flex flex-col justify-center items-start pointer-events-none">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-4 uppercase tracking-wide animate-fade-in">
            {t('procedurePages.invertedNipple.title')}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light tracking-wide animate-fade-in" style={{ animationDelay: "0.1s" }}>
            {t('procedurePages.invertedNipple.subtitle')}
          </p>
        </div>
      </section>

      {/* SEO Intro Section */}
      <section className="section-spacing">
        <div className="content-spacing">
          <div className="max-w-4xl mx-auto space-y-6 text-center animate-fade-in">
            <p className="text-lg text-foreground/80 leading-relaxed">
              {t('procedurePages.invertedNipple.intro')}
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="overview-section-dark">
        <div className="content-spacing">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16">
            <div className="overview-sticky-left animate-fade-in">
              <h2 className="overview-title-dark">
                {t('procedurePages.invertedNipple.title')}
              </h2>
              <p className="overview-subtitle-dark">
                {t('procedurePages.common.overview')}
              </p>
              <img src={drKaraaltinLogo} alt="Dr. Karaaltin Signature" className="w-48 h-auto opacity-80" />
            </div>

            <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              {overviewCards.map(card => (
                <div key={card.id} className="overview-card-dark">
                  <h3 className="overview-card-title-dark">
                    {card.id} // {t(card.titleKey)}
                  </h3>
                  <p className="overview-card-text-dark">
                    {t(card.descKey)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Anatomy Block */}
      <section className="section-spacing">
        <div className="content-spacing">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-light uppercase tracking-wide text-foreground mb-4">
              {t('procedurePages.invertedNipple.anatomyTitle')}
            </h2>
          </div>

          <div className="relative max-w-5xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative aspect-square md:aspect-video">
              <img alt={t('procedurePages.invertedNipple.anatomyTitle')} className="w-full h-full object-cover rounded-lg" src="/lovable-uploads/04fa44d1-1355-49df-82a3-730e067b1b2c.png" />

              {anatomyCallouts.map((callout, index) => (
                <div key={index} className={`hidden md:block absolute ${
                  callout.position === 'top-left' ? 'top-4 left-4' :
                  callout.position === 'top-right' ? 'top-4 right-4' :
                  callout.position === 'bottom-left' ? 'bottom-4 left-4' :
                  'bottom-4 right-4'
                } bg-white/95 backdrop-blur-sm px-4 py-3 rounded-lg shadow-lg max-w-[200px]`}>
                  <p className="text-sm font-light text-foreground">
                    {t(callout.textKey)}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="md:hidden grid grid-cols-1 gap-3 mt-6">
              {anatomyCallouts.map((callout, index) => (
                <div key={index} className="bg-white/95 backdrop-blur-sm px-4 py-3 rounded-lg shadow-sm">
                  <p className="text-sm font-light text-foreground">
                    {t(callout.textKey)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Procedure Steps */}
      <section className="section-spacing bg-gray-50">
        <div className="content-spacing">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-light uppercase tracking-wide text-foreground mb-4">
              {t('procedurePages.invertedNipple.stepsTitle')}
            </h2>
          </div>

          <div className="max-w-4xl mx-auto grid gap-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {procedureSteps.map((stepKey, index) => (
              <div key={index} className="bg-white p-6 lg:p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center text-xl font-light">
                  {index + 1}
                </div>
                <p className="text-lg text-foreground/80 leading-relaxed flex items-center">
                  {t(stepKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results & Recovery */}
      <section className="section-spacing">
        <div className="content-spacing">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-light uppercase tracking-wide text-foreground">
                {t('procedurePages.common.recoveryHealing')}
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                {t('procedurePages.invertedNipple.recoveryText1')}
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                {t('procedurePages.invertedNipple.recoveryText2')}
              </p>
              <Link to="/gallery">
                <Button className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-6 text-sm uppercase tracking-widest rounded-md group">
                  {t('procedurePages.invertedNipple.viewBreast')}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <img alt={t('procedurePages.common.recoveryHealing')} src="/lovable-uploads/47ad5d43-cd7b-40e4-a7c3-398d8cc8802b.jpg" className="w-full h-[400px] rounded-lg shadow-lg object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Before & After CTA */}
      <section className="section-spacing bg-gray-50">
        <div className="content-spacing">
          <div className="text-center max-w-3xl mx-auto space-y-8 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-light uppercase tracking-wide text-foreground">
              {t('procedurePages.invertedNipple.seeResults')}
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              {t('procedurePages.invertedNipple.seeResultsDesc')}
            </p>
            <Link to="/gallery">
              <Button className="bg-gray-900 text-white hover:bg-gray-800 px-10 py-6 text-sm uppercase tracking-widest rounded-md group">
                {t('procedurePages.common.beforeAfterCta')}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <ContactCTASection />
      <Footer />
    </div>
  );
};

export default InvertedNippleRepair;
