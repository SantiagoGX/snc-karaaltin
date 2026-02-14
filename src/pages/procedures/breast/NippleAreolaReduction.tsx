import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/home/ContactCTASection";
import drKaraaltinLogo from "@/assets/dr-karaaltin-logo-white.svg";

const NippleAreolaReduction = () => {
  const { t } = useTranslation();
  
  const overviewCards = [
    { id: "01", titleKey: "procedurePages.nippleAreola.card1Title", descKey: "procedurePages.nippleAreola.card1Desc" },
    { id: "02", titleKey: "procedurePages.nippleAreola.card2Title", descKey: "procedurePages.nippleAreola.card2Desc" },
    { id: "03", titleKey: "procedurePages.nippleAreola.card3Title", descKey: "procedurePages.nippleAreola.card3Desc" },
    { id: "04", titleKey: "procedurePages.nippleAreola.card4Title", descKey: "procedurePages.nippleAreola.card4Desc" },
    { id: "05", titleKey: "procedurePages.nippleAreola.card5Title", descKey: "procedurePages.nippleAreola.card5Desc" },
    { id: "06", titleKey: "procedurePages.nippleAreola.card6Title", descKey: "procedurePages.nippleAreola.card6Desc" },
  ];

  const anatomyCallouts = [
    { position: "top-left", textKey: "procedurePages.nippleAreola.anatomy1" },
    { position: "top-right", textKey: "procedurePages.nippleAreola.anatomy2" },
    { position: "bottom-left", textKey: "procedurePages.nippleAreola.anatomy3" },
    { position: "bottom-right", textKey: "procedurePages.nippleAreola.anatomy4" },
  ];

  const procedureSteps = [
    "procedurePages.nippleAreola.step1",
    "procedurePages.nippleAreola.step2",
    "procedurePages.nippleAreola.step3",
    "procedurePages.nippleAreola.step4",
    "procedurePages.nippleAreola.step5",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
        <img alt={t('procedurePages.nippleAreola.title')} className="absolute inset-0 w-full h-full object-cover animate-fade-in" src="/lovable-uploads/cc8566ab-4fe7-483d-a164-6c35c09344a6.jpg" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="relative h-full max-w-7xl mx-auto px-8 flex flex-col justify-center items-start pointer-events-none">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-4 uppercase tracking-wide animate-fade-in">
            {t('procedurePages.nippleAreola.title')}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light tracking-wide animate-fade-in" style={{ animationDelay: "0.1s" }}>
            {t('procedurePages.nippleAreola.subtitle')}
          </p>
        </div>
      </section>

      {/* SEO Intro Section */}
      <section className="section-spacing">
        <div className="content-spacing">
          <div className="max-w-4xl mx-auto space-y-6 text-center animate-fade-in">
            <p className="text-lg text-foreground/80 leading-relaxed">
              {t('procedurePages.nippleAreola.intro')}
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
                {t('procedurePages.nippleAreola.title')}
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
              {t('procedurePages.nippleAreola.anatomyTitle')}
            </h2>
          </div>

          <div className="relative max-w-5xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative aspect-square md:aspect-video">
              <img alt={t('procedurePages.nippleAreola.anatomyTitle')} className="w-full h-full object-cover rounded-lg" src="/lovable-uploads/7bbe7b52-c088-4b83-b09b-cab8a0377521.jpg" />

              {anatomyCallouts.map((callout, index) => (
                <div key={index} className={`hidden md:block pointer-events-none absolute ${
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
              {t('procedurePages.nippleAreola.stepsTitle')}
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
                {t('procedurePages.nippleAreola.recoveryText1')}
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                {t('procedurePages.nippleAreola.recoveryText2')}
              </p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <img alt={t('procedurePages.common.recoveryHealing')} className="w-full h-[400px] object-cover rounded-lg shadow-lg" src="/lovable-uploads/5e0f196a-c1e8-413e-b4d6-497c440bddae.jpg" />
            </div>
          </div>
        </div>
      </section>
      <ContactCTASection />
      <Footer />
    </div>
  );
};

export default NippleAreolaReduction;
