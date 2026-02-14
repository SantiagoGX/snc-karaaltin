import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import ContactCTASection from "@/components/home/ContactCTASection";
import NoPageProcedureCard from "@/components/procedures/NoPageProcedureCard";
import { ChevronRight, ChevronLeft } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Face = () => {
  const { t } = useTranslation();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    skipSnaps: false,
    dragFree: false
  });
  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      const currentIndex = emblaApi.selectedScrollSnap();
      emblaApi.scrollTo(Math.max(0, currentIndex - 3));
    }
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    if (emblaApi) {
      const currentIndex = emblaApi.selectedScrollSnap();
      const slideCount = emblaApi.scrollSnapList().length;
      emblaApi.scrollTo(Math.min(slideCount - 1, currentIndex + 3));
    }
  }, [emblaApi]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);
  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);
  return <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden fade-in">
        <div className="absolute inset-0 z-0">
          <img alt="Face procedures hero" className="w-full h-full object-cover animate-[scale-in_1.2s_ease-out]" src="/lovable-uploads/faa16363-ef19-4c63-b344-dc9f97bac7b2.jpg" />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 fade-in-up pointer-events-none">
          <h1 className="font-serif font-light text-6xl md:text-7xl lg:text-8xl tracking-wider mb-4">
            {t('procedures.face.title')}
          </h1>
          <p className="text-lg md:text-xl tracking-wide font-light">
            {t('procedures.face.subtitle')}
          </p>
        </div>
      </section>

      {/* All Face Procedures Section */}
      <section className="bg-gray-100 py-16 md:py-24 px-4 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <h2 className="font-serif font-light text-4xl md:text-5xl lg:text-6xl tracking-wider mb-12 text-center fade-in">
            {t('procedures.face.allProcedures')}
          </h2>
          
          <div className="relative">
            <button onClick={scrollPrev} className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 w-14 h-14 items-center justify-center rounded-full bg-white border-2 border-gray-900 shadow-lg hover:bg-gray-900 hover:text-white transition-all duration-300" aria-label="Previous procedures">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={scrollNext} className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 w-14 h-14 items-center justify-center rounded-full bg-white border-2 border-gray-900 shadow-lg hover:bg-gray-900 hover:text-white transition-all duration-300" aria-label="Next procedures">
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-6 lg:gap-8">
                
                {/* Card 1 - The K Face Lift */}
                <Link to="/procedures/face/k-face-lift" className="flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_30%] xl:flex-[0_0_23%]">
                  <div className="group relative h-[500px] overflow-hidden fade-in">
                    <img alt={t('procedures.face.carousel.kFaceLift')} className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110 group-hover:scale-105" src="/lovable-uploads/6e06d4e5-7d1b-4a66-872d-146941d597f5.jpg" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-500 group-hover:from-black/90 group-hover:via-black/60 pointer-events-none"></div>
                    <div className="absolute top-6 left-6 backdrop-blur-md bg-white/20 px-4 py-2 border border-white/30 shadow-lg pointer-events-none">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white font-light">{t('procedures.face.signatureTechnique')}</p>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4 pointer-events-none">
                      <div className="min-h-[80px] flex items-end">
                        <h3 className="font-serif font-semibold text-2xl leading-tight">{t('procedures.face.carousel.kFaceLift')}</h3>
                      </div>
                    </div>
                    <div className="absolute inset-0 p-6 text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 flex flex-col justify-end pointer-events-none">
                      <div className="min-h-[80px] flex flex-col justify-end">
                        <h3 className="font-serif font-semibold text-2xl mb-4 leading-tight">{t('procedures.face.carousel.kFaceLift')}</h3>
                        <p className="text-sm leading-relaxed">{t('procedures.face.carousel.kFaceLiftDesc')}</p>
                      </div>
                    </div>
                  </div>
                </Link>

                {/* Card 2 - Dr. K's Endoscopic Face Lift */}
                <Link to="/procedures/face/k-endoscopic-deep-plane" className="flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_30%] xl:flex-[0_0_23%]">
                  <div className="group relative h-[500px] overflow-hidden fade-in" style={{animationDelay: '0.05s'}}>
                    <img alt={t('procedures.face.carousel.kEndoscopic')} className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110 group-hover:scale-105" src="/lovable-uploads/a7937611-c0c8-482c-83f0-c60b056bb707.png" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-500 group-hover:from-black/90 group-hover:via-black/60 pointer-events-none"></div>
                    <div className="absolute top-6 left-6 backdrop-blur-md bg-white/20 px-4 py-2 border border-white/30 shadow-lg pointer-events-none">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white font-light">{t('procedures.face.signatureTechnique')}</p>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4 pointer-events-none">
                      <div className="min-h-[80px] flex items-end">
                        <h3 className="font-serif font-semibold text-2xl leading-tight">{t('procedures.face.carousel.kEndoscopic')}</h3>
                      </div>
                    </div>
                    <div className="absolute inset-0 p-6 text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 flex flex-col justify-end pointer-events-none">
                      <div className="min-h-[80px] flex flex-col justify-end">
                        <h3 className="font-serif font-semibold text-2xl mb-4 leading-tight">{t('procedures.face.carousel.kEndoscopic')}</h3>
                        <p className="text-sm leading-relaxed">{t('procedures.face.carousel.kEndoscopicDesc')}</p>
                      </div>
                    </div>
                  </div>
                </Link>

                {/* Card 3 - EndoChor® Face Lift */}
                <Link to="/procedures/face/endochor-face-lift" className="flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_30%] xl:flex-[0_0_23%]">
                  <div className="group relative h-[500px] overflow-hidden fade-in" style={{animationDelay: '0.1s'}}>
                    <img alt={t('procedures.face.carousel.endochorFaceLift')} className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110 group-hover:scale-105" src="/lovable-uploads/e39fa8b3-89d4-4c4c-8dbc-dcbe6c8c1184.png" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-500 group-hover:from-black/90 group-hover:via-black/60 pointer-events-none"></div>
                    <div className="absolute top-6 left-6 backdrop-blur-md bg-white/20 px-4 py-2 border border-white/30 shadow-lg pointer-events-none">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white font-light">{t('procedures.face.signatureTechnique')}</p>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4 pointer-events-none">
                      <div className="min-h-[80px] flex items-end">
                        <h3 className="font-serif font-semibold text-2xl leading-tight">{t('procedures.face.carousel.endochorFaceLift')}</h3>
                      </div>
                    </div>
                    <div className="absolute inset-0 p-6 text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 flex flex-col justify-end pointer-events-none">
                      <div className="min-h-[80px] flex flex-col justify-end">
                        <h3 className="font-serif font-semibold text-2xl mb-4 leading-tight">{t('procedures.face.carousel.endochorFaceLift')}</h3>
                        <p className="text-sm leading-relaxed">{t('procedures.face.carousel.endochorFaceLiftDesc')}</p>
                      </div>
                    </div>
                  </div>
                </Link>

                <NoPageProcedureCard title={t('procedures.face.carousel.miniFacelift')} imageSrc="/lovable-uploads/09a13097-7fa6-46aa-81cc-f0175ed1291e.png" imageAlt="Mini Facelift" animationDelay="0.15s" />
                <NoPageProcedureCard title={t('procedures.face.carousel.purseString')} imageSrc="/lovable-uploads/22978ced-2ab2-4798-afee-89d17e5238c7.png" imageAlt="Purse-String Vertical Facelift" animationDelay="0.2s" />
                <NoPageProcedureCard title={t('procedures.face.carousel.subperiosteal')} imageSrc="/lovable-uploads/dd5e69f4-9805-4832-bb5e-4e0e1558c4d6.png" imageAlt="Subperiosteal Deep Plane" animationDelay="0.25s" />
                <NoPageProcedureCard title={t('procedures.face.carousel.macsLift')} imageSrc="/lovable-uploads/973c5b76-0f30-47ab-b221-24bbfd601c62.png" imageAlt="MACS Lift" animationDelay="0.3s" />
                <NoPageProcedureCard title={t('procedures.face.carousel.endochorAssisted')} imageSrc="/lovable-uploads/0a10f2b7-ea9f-453b-827e-fb8658416133.png" imageAlt="EndoChor Assisted Mid-Face Lift" animationDelay="0.35s" />
                <NoPageProcedureCard title={t('procedures.face.carousel.highSmas')} imageSrc="/lovable-uploads/1ce92bc6-aebd-4997-b127-edb4463c814a.png" imageAlt="High SMAS Lift" animationDelay="0.4s" />
                <NoPageProcedureCard title={t('procedures.face.carousel.allInOne')} imageSrc="/lovable-uploads/4a1944f2-4749-4029-b5d2-2c5ba2a0b97c.png" imageAlt="All-In-One Facial Rejuvenation" animationDelay="0.45s" />
                <NoPageProcedureCard title={t('procedures.face.carousel.ponytailLift')} imageSrc="/lovable-uploads/392cf1bd-03e7-455d-9dfa-affbfc24989d.jpg" imageAlt="Ponytail Lift" animationDelay="0.5s" />
                <NoPageProcedureCard title={t('procedures.face.carousel.endoscopicBrow')} imageSrc="/lovable-uploads/f93b6d00-b802-48ff-92b2-7b2e0cfb9e42.png" imageAlt="Endoscopic Forehead Brow Lift" animationDelay="0.55s" />
                <NoPageProcedureCard title={t('procedures.face.carousel.blepharoplasty')} imageSrc="/lovable-uploads/0cafffa9-0009-427f-8107-836de19f190e.png" imageAlt="Blepharoplasty" animationDelay="0.6s" />
                <NoPageProcedureCard title={t('procedures.face.carousel.facialImplants')} imageSrc="/lovable-uploads/c0d465a6-42a6-43be-8d52-3e0d2a443948.jpg" imageAlt="Facial Implants" animationDelay="0.65s" />
                <NoPageProcedureCard title={t('procedures.face.carousel.genioplasty')} imageSrc="/lovable-uploads/efa2102f-ceee-461d-b8d6-42cba1415eed.jpg" imageAlt="Genioplasty" animationDelay="0.7s" />
                <NoPageProcedureCard title={t('procedures.face.carousel.orthognathic')} imageSrc="/lovable-uploads/e318f9d9-ab13-4c64-af11-09d4304ee563.jpg" imageAlt="Orthognathic Surgery" animationDelay="0.75s" />

              </div>
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {Array.from({length: Math.ceil(16 / 4)}).map((_, index) => <button key={index} onClick={() => emblaApi?.scrollTo(index * 4)} className={`h-1 rounded-full transition-all duration-300 ${Math.floor(selectedIndex / 4) === index ? "w-12 bg-gray-900" : "w-8 bg-gray-300 hover:bg-gray-400"}`} aria-label={`Go to slide group ${index + 1}`} />)}
            </div>
          </div>
        </div>
      </section>

      {/* Educational Section - Understanding the Philosophy */}
      <section className="py-16 md:py-24 px-4 lg:px-8 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="fade-in-up">
            <h2 className="font-serif font-light text-3xl md:text-4xl lg:text-5xl tracking-wide mb-8">
              {t('procedures.face.philosophy')}
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              <p>{t('procedures.face.philosophyText1')}</p>
              <p>{t('procedures.face.philosophyText2')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Facial Anatomy */}
      <section className="py-20 md:py-32 px-6 md:px-8 lg:px-16 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-serif font-light text-3xl md:text-4xl lg:text-5xl tracking-wide mb-20 text-center fade-in-up">
            {t('procedures.face.anatomy')}
          </h2>
          <div className="relative min-h-[300px] md:min-h-[700px] lg:min-h-[800px] flex items-center justify-center">
            <div className="w-full max-w-md md:max-w-lg aspect-[3/4] fade-in-up" style={{animationDelay: '0.2s'}}>
              <img alt="Facial anatomy illustration" className="w-full h-full object-cover rounded-sm shadow-lg" src="/lovable-uploads/8d30f07b-c239-4e9f-94cc-02b52e8dd0b0.png" />
            </div>
            <div className="hidden md:block absolute top-0 left-0 w-64 md:w-80 space-y-3 fade-in-up" style={{animationDelay: '0.3s'}}>
              <h3 className="font-serif font-semibold text-xl md:text-2xl text-[#0d1f3a]">{t('procedures.face.boneStructure')}</h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">{t('procedures.face.boneStructureDesc')}</p>
            </div>
            <div className="hidden md:block absolute top-0 right-0 w-64 md:w-80 space-y-3 text-right fade-in-up" style={{animationDelay: '0.4s'}}>
              <h3 className="font-serif font-semibold text-xl md:text-2xl text-[#0d1f3a]">{t('procedures.face.fatCompartments')}</h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">{t('procedures.face.fatCompartmentsDesc')}</p>
            </div>
            <div className="hidden md:block absolute bottom-0 left-0 w-64 md:w-80 space-y-3 fade-in-up" style={{animationDelay: '0.5s'}}>
              <h3 className="font-serif font-semibold text-xl md:text-2xl text-[#0d1f3a]">{t('procedures.face.muscleLayer')}</h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">{t('procedures.face.muscleLayerDesc')}</p>
            </div>
            <div className="hidden md:block absolute bottom-0 right-0 w-64 md:w-80 space-y-3 text-right fade-in-up" style={{animationDelay: '0.6s'}}>
              <h3 className="font-serif font-semibold text-xl md:text-2xl text-[#0d1f3a]">{t('procedures.face.skinEnvelope')}</h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">{t('procedures.face.skinEnvelopeDesc')}</p>
            </div>
          </div>
          <div className="md:hidden grid grid-cols-1 gap-4 mt-8">
            <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-sm">
              <h3 className="font-serif font-semibold text-lg text-[#0d1f3a] mb-2">{t('procedures.face.boneStructure')}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{t('procedures.face.boneStructureDesc')}</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-sm">
              <h3 className="font-serif font-semibold text-lg text-[#0d1f3a] mb-2">{t('procedures.face.fatCompartments')}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{t('procedures.face.fatCompartmentsDesc')}</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-sm">
              <h3 className="font-serif font-semibold text-lg text-[#0d1f3a] mb-2">{t('procedures.face.muscleLayer')}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{t('procedures.face.muscleLayerDesc')}</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-sm">
              <h3 className="font-serif font-semibold text-lg text-[#0d1f3a] mb-2">{t('procedures.face.skinEnvelope')}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{t('procedures.face.skinEnvelopeDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* How the Face Ages */}
      <section className="py-16 md:py-24 px-4 lg:px-8 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="fade-in-up">
            <h2 className="font-serif font-light text-3xl md:text-4xl lg:text-5xl tracking-wide mb-12">
              {t('procedures.face.howFaceAges')}
            </h2>
            <div className="space-y-12">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 items-start">
                <h3 className="font-serif font-semibold text-2xl text-[#0d1f3a] lg:sticky lg:top-24">{t('procedures.face.skinChanges')}</h3>
                <div className="space-y-4 text-gray-700 leading-relaxed"><p>{t('procedures.face.skinChangesDesc')}</p></div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 items-start">
                <h3 className="font-serif font-semibold text-2xl text-[#0d1f3a] lg:sticky lg:top-24">{t('procedures.face.fatLigaments')}</h3>
                <div className="space-y-4 text-gray-700 leading-relaxed"><p>{t('procedures.face.fatLigamentsDesc')}</p></div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 items-start">
                <h3 className="font-serif font-semibold text-2xl text-[#0d1f3a] lg:sticky lg:top-24">{t('procedures.face.facialSkeleton')}</h3>
                <div className="space-y-4 text-gray-700 leading-relaxed"><p>{t('procedures.face.facialSkeletonDesc')}</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customized Treatment Planning */}
      <section className="py-16 md:py-24 px-4 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center fade-in-up">
            <div>
              <h2 className="font-serif font-light text-3xl md:text-4xl lg:text-5xl tracking-wide mb-8">
                {t('procedures.face.customizedPlanning')}
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                <p>{t('procedures.face.customizedPlanningText1')}</p>
                <p>{t('procedures.face.customizedPlanningText2')}</p>
              </div>
            </div>
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img alt="Customized treatment planning" className="w-full h-full object-cover" src="/lovable-uploads/2c0a45b3-dadb-4cb9-9521-04c68627d7b2.jpg" />
            </div>
          </div>
        </div>
      </section>

      {/* The Future of Face Section */}
      <section className="py-16 md:py-24 px-4 lg:px-8 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-4xl mx-auto text-center mb-20 fade-in-up">
            <h2 className="font-serif font-light text-4xl md:text-5xl lg:text-6xl tracking-wide mb-8 text-[#0d1f3a]">
              {t('procedures.face.futureOfFace')}
            </h2>
            <div className="space-y-6">
              <h3 className="font-serif font-semibold text-2xl md:text-3xl text-[#0d1f3a]">{t('procedures.face.whatIsEndochor')}</h3>
              <p className="text-gray-700 leading-relaxed text-lg">{t('procedures.face.whatIsEndochorText')}</p>
            </div>
          </div>

          {/* F.A.C.E. Philosophy */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-24 fade-in">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-[#0d1f3a]/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-serif font-bold text-[#0d1f3a]">F</span>
              </div>
              <h4 className="font-serif font-semibold text-xl text-[#0d1f3a]">{t('procedures.face.faceF')}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{t('procedures.face.faceFDesc')}</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-[#0d1f3a]/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-serif font-bold text-[#0d1f3a]">A</span>
              </div>
              <h4 className="font-serif font-semibold text-xl text-[#0d1f3a]">{t('procedures.face.faceA')}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{t('procedures.face.faceADesc')}</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-[#0d1f3a]/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-serif font-bold text-[#0d1f3a]">C</span>
              </div>
              <h4 className="font-serif font-semibold text-xl text-[#0d1f3a]">{t('procedures.face.faceC')}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{t('procedures.face.faceCDesc')}</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-[#0d1f3a]/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-serif font-bold text-[#0d1f3a]">E</span>
              </div>
              <h4 className="font-serif font-semibold text-xl text-[#0d1f3a]">{t('procedures.face.faceE')}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{t('procedures.face.faceEDesc')}</p>
            </div>
          </div>

          {/* 1. Transblepharoplasty Brow Lift */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 fade-in-up">
            <div className="space-y-6">
              <h3 className="font-serif font-light text-3xl md:text-4xl tracking-wide text-[#0d1f3a]">{t('procedures.face.transBrow')}</h3>
              <p className="text-gray-700 leading-relaxed text-lg italic">{t('procedures.face.transBrowSubtitle')}</p>
              <p className="text-gray-700 leading-relaxed">{t('procedures.face.transBrowText')}</p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start"><span className="mr-3 text-[#0d1f3a] font-bold">•</span><span>{t('procedures.face.transBrowItem1')}</span></li>
                <li className="flex items-start"><span className="mr-3 text-[#0d1f3a] font-bold">•</span><span>{t('procedures.face.transBrowItem2')}</span></li>
                <li className="flex items-start"><span className="mr-3 text-[#0d1f3a] font-bold">•</span><span>{t('procedures.face.transBrowItem3')}</span></li>
                <li className="flex items-start"><span className="mr-3 text-[#0d1f3a] font-bold">•</span><span>{t('procedures.face.transBrowItem4')}</span></li>
              </ul>
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-sm">
              <img alt="Transblepharoplasty Brow Lift with Endochor" className="w-full h-full object-cover" src="/lovable-uploads/98d24c4d-6260-4f38-a014-93f51678aca3.jpg" />
            </div>
          </div>

          {/* 2. Endoscopic Forehead & Brow Lift */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 fade-in-up">
            <div className="aspect-[4/3] overflow-hidden rounded-sm lg:order-1">
              <img alt="Endoscopic Forehead Brow Lift using Endochor" className="w-full h-full object-cover" src="/lovable-uploads/5718cc3f-4803-4494-93e1-44a5b1d1fe99.jpg" />
            </div>
            <div className="space-y-6 lg:order-2">
              <h3 className="font-serif font-light text-3xl md:text-4xl tracking-wide text-[#0d1f3a]">{t('procedures.face.endoscopicBrowTitle')}</h3>
              <p className="text-gray-700 leading-relaxed">{t('procedures.face.endoscopicBrowText')}</p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start"><span className="mr-3 text-[#0d1f3a] font-bold">•</span><span>{t('procedures.face.endoscopicBrowItem1')}</span></li>
                <li className="flex items-start"><span className="mr-3 text-[#0d1f3a] font-bold">•</span><span>{t('procedures.face.endoscopicBrowItem2')}</span></li>
                <li className="flex items-start"><span className="mr-3 text-[#0d1f3a] font-bold">•</span><span>{t('procedures.face.endoscopicBrowItem3')}</span></li>
                <li className="flex items-start"><span className="mr-3 text-[#0d1f3a] font-bold">•</span><span>{t('procedures.face.endoscopicBrowItem4')}</span></li>
              </ul>
            </div>
          </div>

          {/* 3. Double-Double */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 fade-in-up">
            <div className="space-y-6">
              <h3 className="font-serif font-light text-3xl md:text-4xl tracking-wide text-[#0d1f3a]">{t('procedures.face.doubleDouble')}</h3>
              <p className="text-gray-700 leading-relaxed">{t('procedures.face.doubleDoubleText')}</p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start"><span className="mr-3 text-[#0d1f3a] font-bold">•</span><span>{t('procedures.face.doubleDoubleItem1')}</span></li>
                <li className="flex items-start"><span className="mr-3 text-[#0d1f3a] font-bold">•</span><span>{t('procedures.face.doubleDoubleItem2')}</span></li>
                <li className="flex items-start"><span className="mr-3 text-[#0d1f3a] font-bold">•</span><span>{t('procedures.face.doubleDoubleItem3')}</span></li>
                <li className="flex items-start"><span className="mr-3 text-[#0d1f3a] font-bold">•</span><span>{t('procedures.face.doubleDoubleItem4')}</span></li>
              </ul>
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-sm">
              <img alt="The Double-Double Implant Technique" className="w-full h-full object-cover" src="/lovable-uploads/727caa4c-42f5-4e3a-8408-633cfaa9b482.jpg" />
            </div>
          </div>

          {/* 4. Ribbon Implant */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center fade-in-up">
            <div className="aspect-[4/3] overflow-hidden rounded-sm lg:order-1">
              <img alt="Ribbon Implant" className="w-full h-full object-cover" src="/lovable-uploads/72f60eea-7064-495f-9a80-eb102e356b30.jpg" />
            </div>
            <div className="space-y-6 lg:order-2">
              <h3 className="font-serif font-light text-3xl md:text-4xl tracking-wide text-[#0d1f3a]">{t('procedures.face.ribbonImplant')}</h3>
              <p className="text-gray-700 leading-relaxed">{t('procedures.face.ribbonImplantText')}</p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start"><span className="mr-3 text-[#0d1f3a] font-bold">•</span><span>{t('procedures.face.ribbonImplantItem1')}</span></li>
                <li className="flex items-start"><span className="mr-3 text-[#0d1f3a] font-bold">•</span><span>{t('procedures.face.ribbonImplantItem2')}</span></li>
                <li className="flex items-start"><span className="mr-3 text-[#0d1f3a] font-bold">•</span><span>{t('procedures.face.ribbonImplantItem3')}</span></li>
                <li className="flex items-start"><span className="mr-3 text-[#0d1f3a] font-bold">•</span><span>{t('procedures.face.ribbonImplantItem4')}</span></li>
                <li className="flex items-start"><span className="mr-3 text-[#0d1f3a] font-bold">•</span><span>{t('procedures.face.ribbonImplantItem5')}</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      
      <ContactCTASection />
      <Footer />
    </div>;
};
export default Face;
