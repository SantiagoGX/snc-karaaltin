import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import ContactCTASection from "@/components/home/ContactCTASection";
import { useTranslation } from "react-i18next";

const Nose = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = Math.ceil(2 / 3);
  const handlePrev = () => { setCurrentSlide(prev => prev > 0 ? prev - 1 : prev); };
  const handleNext = () => { setCurrentSlide(prev => prev < totalSlides - 1 ? prev + 1 : prev); };

  return <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative min-h-[400px] lg:min-h-[500px] flex items-center justify-center bg-gray-900">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img alt="Nose procedures hero" className="absolute inset-0 w-full h-full object-cover" src="/lovable-uploads/35d4aaa7-1484-44e9-9a3e-9af86438f74c.jpg" />
          <div className="relative z-20 container mx-auto px-8 lg:px-16 text-center text-white space-y-4 fade-in pointer-events-none">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide uppercase">{t('procedures.nose.title')}</h1>
            <p className="text-lg md:text-xl lg:text-2xl font-light max-w-3xl mx-auto">{t('procedures.nose.subtitle')}</p>
          </div>
        </section>

        {/* Carousel */}
        <section className="py-16 lg:py-24 px-8 lg:px-16 bg-white relative">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-center mb-12 lg:mb-16 fade-in">{t('procedures.nose.allProcedures')}</h2>
            <div className="relative">
              <div className="overflow-hidden">
                <div className="flex transition-transform duration-500 ease-out" style={{transform: `translateX(-${currentSlide * 100}%)`}}>
                  {/* Card 1 - Smart Template */}
                  <div className="flex-[0_0_100%] md:flex-[0_0_33.333%] px-3 group">
                    <a href="/procedures/nose/smart-template-rhinoplasty" className="block relative h-[500px] rounded-lg overflow-hidden">
                      <img alt={t('procedures.nose.carousel.smartTemplate')} className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110" src="/lovable-uploads/e7cdf915-f79b-46bf-b077-e6fb394accea.jpg" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20 transition-all duration-500 group-hover:from-black/70 group-hover:via-black/30 group-hover:to-transparent" />
                      <div className="absolute top-4 left-4 z-10">
                        <span className="inline-block px-4 py-2 text-xs uppercase tracking-widest font-light bg-white/90 backdrop-blur-md text-gray-900 border border-white/20 rounded">{t('procedures.nose.signatureTechnique')}</span>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                        <div className="space-y-3">
                          <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase text-white">{t('procedures.nose.carousel.smartTemplate')}</h3>
                          <p className="text-white/90 text-sm leading-relaxed max-h-0 opacity-0 overflow-hidden transition-all duration-500 group-hover:max-h-32 group-hover:opacity-100">{t('procedures.nose.carousel.smartTemplateDesc')}</p>
                          <div className="flex items-center gap-2 text-white text-sm uppercase tracking-wider font-light opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">{t('common.viewProcedure')}<span className="text-lg">→</span></div>
                        </div>
                      </div>
                    </a>
                  </div>
                  {/* Card 2 - Rhinoplasty */}
                  <div className="flex-[0_0_100%] md:flex-[0_0_33.333%] px-3 group">
                    <a href="/procedures/nose/rhinoplasty" className="block relative h-[500px] rounded-lg overflow-hidden">
                      <img alt={t('procedures.nose.carousel.rhinoplasty')} className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110" src="/lovable-uploads/1cb9d296-da37-4ec1-a3a0-e1399c4599d0.jpg" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20 transition-all duration-500 group-hover:from-black/70 group-hover:via-black/30 group-hover:to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                        <div className="space-y-3">
                          <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase text-white">{t('procedures.nose.carousel.rhinoplasty')}</h3>
                          <p className="text-white/90 text-sm leading-relaxed max-h-0 opacity-0 overflow-hidden transition-all duration-500 group-hover:max-h-32 group-hover:opacity-100">{t('procedures.nose.carousel.rhinoplastyDesc')}</p>
                          <div className="flex items-center gap-2 text-white text-sm uppercase tracking-wider font-light opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">{t('common.viewProcedure')}<span className="text-lg">→</span></div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <button onClick={handlePrev} disabled={currentSlide === 0} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 flex items-center justify-center hover:bg-gray-900 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 shadow-lg z-10"><ChevronLeft className="w-6 h-6" /></button>
              <button onClick={handleNext} disabled={currentSlide === totalSlides - 1} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 flex items-center justify-center hover:bg-gray-900 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 shadow-lg z-10"><ChevronRight className="w-6 h-6" /></button>
              <div className="flex justify-center gap-2 mt-8">
                {Array.from({length: totalSlides}).map((_, index) => <button key={index} onClick={() => setCurrentSlide(index)} className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide ? "w-8 bg-gray-900" : "w-2 bg-gray-300 hover:bg-gray-400"}`} aria-label={`Go to slide ${index + 1}`} />)}
              </div>
            </div>
          </div>
        </section>

        {/* Educational Blocks */}
        <section className="py-16 lg:py-24 px-8 lg:px-16 bg-gray-50">
          <div className="container mx-auto max-w-5xl space-y-16">
            <div className="space-y-6 fade-in">
              <h2 className="text-3xl md:text-4xl font-light tracking-wide uppercase text-center">{t('procedures.nose.philosophy')}</h2>
              <p className="text-gray-600 text-center leading-relaxed max-w-3xl mx-auto">{t('procedures.nose.philosophyText')}</p>
            </div>

            {/* Anatomy */}
            <div className="space-y-16 fade-in">
              <h2 className="text-3xl md:text-4xl font-light tracking-wide uppercase text-center">{t('procedures.nose.anatomy')}</h2>
              <div className="relative min-h-[300px] md:min-h-[600px] lg:min-h-[700px] flex items-center justify-center">
                <div className="w-full max-w-sm md:max-w-md aspect-[3/4] fade-in-up" style={{animationDelay: '0.2s'}}>
                  <img alt="Nasal anatomy illustration" className="w-full h-full object-cover rounded-sm shadow-lg" src="/lovable-uploads/d2b12318-fc6d-49b4-912e-e93f511ea865.png" />
                </div>
                <div className="hidden md:block absolute top-0 left-0 w-56 md:w-72 space-y-2 fade-in-up" style={{animationDelay: '0.3s'}}>
                  <h3 className="text-lg md:text-xl font-light uppercase tracking-wide text-gray-900">{t('procedures.nose.boneCartilage')}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">{t('procedures.nose.boneCartilageDesc')}</p>
                </div>
                <div className="hidden md:block absolute top-0 right-0 w-56 md:w-72 space-y-2 text-right fade-in-up" style={{animationDelay: '0.4s'}}>
                  <h3 className="text-lg md:text-xl font-light uppercase tracking-wide text-gray-900">{t('procedures.nose.softTissue')}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">{t('procedures.nose.softTissueDesc')}</p>
                </div>
                <div className="hidden md:block absolute bottom-0 left-0 w-56 md:w-72 space-y-2 fade-in-up" style={{animationDelay: '0.5s'}}>
                  <h3 className="text-lg md:text-xl font-light uppercase tracking-wide text-gray-900">{t('procedures.nose.airwaySupport')}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">{t('procedures.nose.airwaySupportDesc')}</p>
                </div>
                <div className="hidden md:block absolute bottom-0 right-0 w-56 md:w-72 space-y-2 text-right fade-in-up" style={{animationDelay: '0.6s'}}>
                  <h3 className="text-lg md:text-xl font-light uppercase tracking-wide text-gray-900">{t('procedures.nose.ethnicVariations')}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">{t('procedures.nose.ethnicVariationsDesc')}</p>
                </div>
              </div>
              <div className="md:hidden grid grid-cols-1 gap-4 mt-8">
                {['boneCartilage', 'softTissue', 'airwaySupport', 'ethnicVariations'].map(key => (
                  <div key={key} className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-sm">
                    <h3 className="text-base font-light uppercase tracking-wide text-gray-900 mb-2">{t(`procedures.nose.${key}`)}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{t(`procedures.nose.${key}Desc`)}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6 fade-in">
              <h2 className="text-3xl md:text-4xl font-light tracking-wide uppercase text-center">{t('procedures.nose.whatCanAddress')}</h2>
              <p className="text-gray-600 text-center leading-relaxed max-w-3xl mx-auto">{t('procedures.nose.whatCanAddressText')}</p>
            </div>
          </div>
        </section>

        {/* Procedure Overview */}
        <section className="py-16 lg:py-24 px-8 lg:px-16 bg-white">
          <div className="container mx-auto max-w-6xl space-y-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-center mb-12 fade-in">{t('procedures.nose.procedureOverview')}</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center fade-in-up">
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase">{t('procedures.nose.primaryTitle')}</h3>
                <p className="text-gray-600 leading-relaxed">{t('procedures.nose.primaryDesc')}</p>
              </div>
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img alt="Rhinoplasty procedure" className="w-full h-full object-cover" src="/lovable-uploads/da0373cc-18cb-46ea-9d74-adf2a5b820ff.jpg" />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center fade-in-up">
              <div className="aspect-[4/3] rounded-lg overflow-hidden order-2 lg:order-1">
                <img alt="Smart Template Rhinoplasty" className="w-full h-full object-cover" src="/lovable-uploads/bdaeeec3-a2ea-4cb8-ad87-f0a85802d860.jpg" />
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase">
                  {t('procedures.nose.smartTemplateTitle')} <span className="text-sm">{t('procedures.nose.smartTemplateSignature')}</span>
                </h3>
                <p className="text-gray-600 leading-relaxed">{t('procedures.nose.smartTemplateDesc')}</p>
              </div>
            </div>
          </div>
        </section>

        
        <ContactCTASection />
      </main>
      <Footer />
    </>;
};
export default Nose;
