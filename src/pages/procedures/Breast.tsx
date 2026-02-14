import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import ContactCTASection from "@/components/home/ContactCTASection";
import { ChevronRight, ChevronLeft } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Breast = () => {
  const { t } = useTranslation();
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: false, skipSnaps: false, dragFree: false });
  const scrollPrev = useCallback(() => {if (emblaApi) {emblaApi.scrollTo(Math.max(0, emblaApi.selectedScrollSnap() - 3));}}, [emblaApi]);
  const scrollNext = useCallback(() => {if (emblaApi) {const s = emblaApi.scrollSnapList().length;emblaApi.scrollTo(Math.min(s - 1, emblaApi.selectedScrollSnap() + 3));}}, [emblaApi]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const onSelect = useCallback(() => {if (!emblaApi) return;setSelectedIndex(emblaApi.selectedScrollSnap());}, [emblaApi]);
  useEffect(() => {if (!emblaApi) return;onSelect();emblaApi.on("select", onSelect);return () => {emblaApi.off("select", onSelect);};}, [emblaApi, onSelect]);

  return <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden fade-in">
        <div className="absolute inset-0 z-0">
          <img alt="Breast aesthetic procedures hero" className="w-full h-full object-cover animate-[scale-in_1.2s_ease-out]" src="/lovable-uploads/388e884e-b3f1-4960-8dc4-ad1174e71eeb.jpg" />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 fade-in-up max-w-5xl mx-auto pointer-events-none">
          <h1 className="font-serif font-light text-5xl md:text-6xl lg:text-7xl tracking-wider mb-6 uppercase">{t('procedures.breast.title')}</h1>
          <p className="text-lg md:text-xl tracking-wide font-light max-w-3xl mx-auto">{t('procedures.breast.subtitle')}</p>
        </div>
      </section>

      {/* Carousel */}
      <section className="bg-gray-100 py-16 md:py-24 px-4 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <h2 className="font-serif font-light text-4xl md:text-5xl lg:text-6xl tracking-wider mb-12 text-center fade-in uppercase">{t('procedures.breast.allProcedures')}</h2>
          <div className="relative px-16 lg:px-20">
            <button onClick={scrollPrev} className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 shadow-lg hover:bg-gray-900 hover:text-white transition-all duration-300" aria-label="Previous"><ChevronLeft className="w-6 h-6" /></button>
            <button onClick={scrollNext} className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 shadow-lg hover:bg-gray-900 hover:text-white transition-all duration-300" aria-label="Next"><ChevronRight className="w-6 h-6" /></button>

            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-6 lg:gap-8">
                {/* Signature cards with hover desc */}
                {[
              { key: "augmentationFat", path: "/procedures/breast/augmentation-fat-grafting", img: "/lovable-uploads/1fde5cba-4ea6-4847-938b-8f4660be6f83.png", signature: true },
              { key: "kGlide", path: "/procedures/breast/k-glide", img: "/lovable-uploads/9485ec6b-07fb-485d-b862-4904a7c6e2a7.jpg", signature: true },
              { key: "twirlBra", path: "/procedures/breast/twirl-internal-bra", img: "/lovable-uploads/bddff33e-2eb6-4176-9eec-7d4311b5459e.png", signature: true },
              { key: "smartBra", path: "/procedures/breast/smart-bra", img: "/lovable-uploads/a905f802-c73d-411c-bc3f-6e685c568acb.png", signature: true }].
              map((item, idx) =>
              <Link key={item.key} to={item.path} className="flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_30%] xl:flex-[0_0_23%]">
                    <div className="group relative h-[500px] overflow-hidden fade-in" style={{ animationDelay: `${idx * 0.05}s` }}>
                      <img alt={t(`procedures.breast.carousel.${item.key}`)} className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110 group-hover:scale-105" src={item.img} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20 transition-all duration-500 group-hover:from-black/70 group-hover:via-black/40 group-hover:to-transparent pointer-events-none"></div>
                      {item.signature && <div className="absolute top-6 left-6 backdrop-blur-md bg-white/20 px-4 py-2 border border-white/30 shadow-lg pointer-events-none"><p className="text-[10px] uppercase tracking-[0.2em] text-white font-light">{t('procedures.breast.signatureTechnique')}</p></div>}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4 pointer-events-none">
                        <div className="min-h-[80px] flex items-end"><h3 className="font-serif font-semibold text-2xl leading-tight">{t(`procedures.breast.carousel.${item.key}`)}</h3></div>
                      </div>
                      <div className="absolute inset-0 p-6 text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 flex flex-col justify-end pointer-events-none">
                        <div className="min-h-[80px] flex flex-col justify-end">
                          <h3 className="font-serif font-semibold text-2xl mb-4 leading-tight">{t(`procedures.breast.carousel.${item.key}`)}</h3>
                          <p className="text-sm leading-relaxed">{t(`procedures.breast.carousel.${item.key}Desc`)}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
              )}

                {/* Non-signature cards */}
                {[
              { key: "augmentationImplant", path: "/procedures/breast/augmentation-implants", img: "/lovable-uploads/f44fb3b1-f070-49ef-89c5-72a0b369c124.png" },
              { key: "breastReduction", path: "/procedures/breast/reduction", img: "/lovable-uploads/4f21999a-1620-45ba-93a6-d4260d1f9923.png" },
              { key: "breastLift", path: "/procedures/breast/lift", img: "/lovable-uploads/51f9f41d-08ff-4de0-b3dd-d9006d3d4297.jpg" },
              { key: "gynecomastia", path: "/procedures/breast/gynecomastia", img: "/lovable-uploads/4faf1a02-e6cf-4c7e-be59-56a1b395e100.png" },
              { key: "hybridAugmentation", path: "/procedures/breast/hybrid-augmentation", img: "/lovable-uploads/f8114801-106e-48a5-99c4-600f1916cc98.jpg" },
              { key: "implantRemoval", path: "/procedures/breast/implant-removal", img: "/lovable-uploads/ff43138e-ee92-4452-be91-c8c6841af38a.png" },
              { key: "invertedNipple", path: "/procedures/breast/inverted-nipple-repair", img: "/lovable-uploads/1f6cc8eb-4ec7-4ad2-b6ef-22d9f8f1c5e5.png" },
              { key: "nippleAreola", path: "/procedures/breast/nipple-areola-reduction", img: "/lovable-uploads/b725dc29-d4f4-4331-87e9-9c9da97e38b4.png" }].
              map((item, idx) =>
              <Link key={item.key} to={item.path} className="flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_30%] xl:flex-[0_0_23%]">
                    <div className="group relative h-[500px] overflow-hidden fade-in" style={{ animationDelay: `${(idx + 4) * 0.05}s` }}>
                      <img alt={t(`procedures.breast.carousel.${item.key}`)} className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110 group-hover:scale-105" src={item.img} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20 transition-all duration-500 group-hover:from-black/70 group-hover:via-black/40 group-hover:to-transparent pointer-events-none"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4 pointer-events-none">
                        <div className="min-h-[80px] flex items-end"><h3 className="font-serif font-semibold text-2xl leading-tight">{t(`procedures.breast.carousel.${item.key}`)}</h3></div>
                      </div>
                    </div>
                  </Link>
              )}
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: Math.ceil(12 / 4) }).map((_, index) => <button key={index} onClick={() => emblaApi?.scrollTo(index * 4)} className={`h-1 rounded-full transition-all duration-300 ${Math.floor(selectedIndex / 4) === index ? "w-12 bg-gray-900" : "w-8 bg-gray-300 hover:bg-gray-400"}`} aria-label={`Go to slide group ${index + 1}`} />)}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 md:py-24 px-4 lg:px-8 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="fade-in-up">
            <h2 className="font-serif font-light text-3xl md:text-4xl lg:text-5xl tracking-wide mb-8">{t('procedures.breast.breastPhilosophy')}</h2>
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              <p>{t('procedures.breast.breastPhilosophyText1')}</p>
              <p>{t('procedures.breast.breastPhilosophyText2')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Anatomy */}
      <section className="py-20 md:py-32 px-6 md:px-8 lg:px-16 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-serif font-light text-3xl md:text-4xl lg:text-5xl tracking-wide mb-20 text-center fade-in-up">{t('procedures.breast.anatomyTitle')}</h2>
          <div className="relative min-h-[300px] md:min-h-[700px] lg:min-h-[800px] flex items-center justify-center">
            <div className="w-full max-w-md md:max-w-lg aspect-[3/4] fade-in-up" style={{ animationDelay: '0.2s' }}>
              <img alt="Breast anatomy illustration" className="w-full h-full object-cover rounded-sm shadow-lg" src="/lovable-uploads/68ad2a42-0062-4347-ba6d-9cd37e2e6d97.jpg" />
            </div>
            <div className="hidden md:block absolute top-0 left-0 w-64 md:w-80 space-y-3 fade-in-up" style={{ animationDelay: '0.3s' }}>
              <h3 className="font-serif font-semibold text-xl md:text-2xl text-[#0d1f3a]">{t('procedures.breast.skinSoftTissue')}</h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base my-0">{t('procedures.breast.skinSoftTissueDesc')}</p>
            </div>
            <div className="hidden md:block absolute top-0 right-0 w-64 md:w-80 space-y-3 text-right fade-in-up" style={{ animationDelay: '0.4s' }}>
              <h3 className="font-serif font-semibold text-xl md:text-2xl text-[#0d1f3a]">{t('procedures.breast.fatVolume')}</h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base my-0">{t('procedures.breast.fatVolumeDesc')}</p>
            </div>
            <div className="hidden md:block absolute bottom-0 left-0 w-64 md:w-80 space-y-3 fade-in-up" style={{ animationDelay: '0.5s' }}>
              <h3 className="font-serif font-semibold text-xl md:text-2xl text-[#0d1f3a]">{t('procedures.breast.glandularTissue')}</h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">{t('procedures.breast.glandularTissueDesc')}</p>
            </div>
            <div className="hidden md:block absolute bottom-0 right-0 w-64 md:w-80 space-y-3 text-right fade-in-up" style={{ animationDelay: '0.6s' }}>
              <h3 className="font-serif font-semibold text-xl md:text-2xl text-[#0d1f3a] my-0">{t('procedures.breast.chestWall')}</h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">{t('procedures.breast.chestWallDesc')}</p>
            </div>
          </div>
          <div className="md:hidden grid grid-cols-1 gap-4 mt-8">
            {['skinSoftTissue', 'fatVolume', 'glandularTissue', 'chestWall'].map((key) =>
          <div key={key} className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-sm">
                <h3 className="font-serif font-semibold text-lg text-[#0d1f3a] mb-2">{t(`procedures.breast.${key}`)}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{t(`procedures.breast.${key}Desc`)}</p>
              </div>
          )}
          </div>
        </div>
      </section>

      {/* Customized Treatment Planning */}
      <section className="py-16 md:py-24 px-4 lg:px-8 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="fade-in-up">
            <h2 className="font-serif font-light text-3xl md:text-4xl lg:text-5xl tracking-wide mb-8">{t('procedures.breast.customizedPlanning')}</h2>
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              <p>{t('procedures.breast.customizedPlanningText')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Breast Procedure Overview */}
      <section className="py-16 md:py-24 px-4 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-serif font-light text-4xl md:text-5xl lg:text-6xl tracking-wider mb-16 text-center fade-in uppercase">{t('procedures.breast.procedureOverview')}</h2>

          {[
        { titleKey: "overviewFatGraftingTitle", text1Key: "overviewFatGraftingText1", text2Key: "overviewFatGraftingText2", img: "/lovable-uploads/0d169825-885a-4a94-be48-de8a06bcfdf5.jpg", imgFirst: false },
        { titleKey: "overviewImplantTitle", text1Key: "overviewImplantText1", text2Key: "overviewImplantText2", img: "/lovable-uploads/45a2611a-b89a-441d-a3b6-1699f7920038.png", imgFirst: true },
        { titleKey: "overviewReductionTitle", text1Key: "overviewReductionText1", text2Key: "overviewReductionText2", img: "/lovable-uploads/a787b0fe-d985-4978-883a-ffe8ddab1014.jpg", imgFirst: false },
        { titleKey: "overviewLiftTitle", text1Key: "overviewLiftText1", text2Key: "overviewLiftText2", img: "/lovable-uploads/3af8a907-7e20-4424-bd3a-31959936419e.png", imgFirst: true },
        { titleKey: "overviewGynecomastiaTitle", text1Key: "overviewGynecomastiaText1", text2Key: "overviewGynecomastiaText2", img: "/lovable-uploads/2f24b8ca-65ed-4d5d-a499-8b01a656a64f.jpg", imgFirst: false },
        { titleKey: "overviewHybridTitle", text1Key: "overviewHybridText1", text2Key: "overviewHybridText2", img: "/lovable-uploads/5b7d328a-6747-4cd6-a3e0-573c26c54ca5.jpg", imgFirst: true },
        { titleKey: "overviewImplantRemovalTitle", text1Key: "overviewImplantRemovalText1", text2Key: "overviewImplantRemovalText2", img: "/lovable-uploads/d1865d19-9a49-46fa-8ae8-b87ba1569348.png", imgFirst: false },
        { titleKey: "overviewNippleTitle", text1Key: "overviewNippleText1", text2Key: "overviewNippleText2", img: "/lovable-uploads/9dec19c0-a1bd-4599-9ad6-1f5833dd3672.png", imgFirst: true }].
        map((item, idx) =>
        <div key={idx} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 fade-in-up">
              <div className={item.imgFirst ? "" : "order-2 lg:order-1"}>
                <h3 className="font-serif font-light text-3xl md:text-4xl tracking-wide mb-6">{t(`procedures.breast.${item.titleKey}`)}</h3>
                <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                  <p>{t(`procedures.breast.${item.text1Key}`)}</p>
                  <p>{t(`procedures.breast.${item.text2Key}`)}</p>
                </div>
              </div>
              <div className={`aspect-[4/5] overflow-hidden rounded-sm ${item.imgFirst ? "" : "order-1 lg:order-2"}`}>
                <img alt={t(`procedures.breast.${item.titleKey}`)} className="w-full h-full object-cover" src={item.img} />
              </div>
            </div>
        )}
        </div>
      </section>

      
      <ContactCTASection />
      <Footer />
    </div>;
};
export default Breast;