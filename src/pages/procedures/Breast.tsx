import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BeforeAfterSection from "@/components/home/BeforeAfterSection";
import ContactCTASection from "@/components/home/ContactCTASection";
import { ChevronRight, ChevronLeft } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
const Breast = () => {
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
        {/* Background Image - Editable */}
        <div className="absolute inset-0 z-0">
          <img alt="Breast aesthetic procedures hero" className="w-full h-full object-cover animate-[scale-in_1.2s_ease-out]" src="/lovable-uploads/388e884e-b3f1-4960-8dc4-ad1174e71eeb.jpg" />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 fade-in-up max-w-5xl mx-auto pointer-events-none">
          <h1 className="font-serif font-light text-5xl md:text-6xl lg:text-7xl tracking-wider mb-6 uppercase">BREAST</h1>
          <p className="text-lg md:text-xl tracking-wide font-light max-w-3xl mx-auto">
            Refined enhancement, structural harmony, and natural results through advanced surgical precision.
          </p>
        </div>
      </section>

      {/* All Breast Procedures Section - Premium Carousel */}
      <section className="bg-gray-100 py-16 md:py-24 px-4 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <h2 className="font-serif font-light text-4xl md:text-5xl lg:text-6xl tracking-wider mb-12 text-center fade-in uppercase">
            ALL BREAST PROCEDURES
          </h2>
          
          {/* Carousel Container */}
          <div className="relative px-16 lg:px-20">
            {/* Navigation Arrows - Desktop Only */}
            <button onClick={scrollPrev} className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 shadow-lg hover:bg-gray-900 hover:text-white transition-all duration-300" aria-label="Previous procedures">
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button onClick={scrollNext} className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 shadow-lg hover:bg-gray-900 hover:text-white transition-all duration-300" aria-label="Next procedures">
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Embla Carousel */}
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-6 lg:gap-8">
                
                {/* Card 1 - Breast Augmentation with Fat Grafting */}
                <div className="flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_30%] xl:flex-[0_0_23%]">
                  <div className="group relative h-[500px] overflow-hidden fade-in">
                    <img alt="Breast Augmentation with Fat Grafting" className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110 group-hover:scale-105" src="/lovable-uploads/1fde5cba-4ea6-4847-938b-8f4660be6f83.png" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20 transition-all duration-500 group-hover:from-black/70 group-hover:via-black/40 group-hover:to-transparent pointer-events-none"></div>
                    <div className="absolute top-6 left-6 backdrop-blur-md bg-white/20 px-4 py-2 border border-white/30 shadow-lg pointer-events-none">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white font-light">Signature Technique</p>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4 pointer-events-none">
                      <div className="min-h-[80px] flex items-end">
                        <h3 className="font-serif font-semibold text-2xl leading-tight">Breast Augmentation with Fat Grafting</h3>
                      </div>
                    </div>
                    <div className="absolute inset-0 p-6 text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 flex flex-col justify-end pointer-events-none">
                      <div className="min-h-[80px] flex flex-col justify-end">
                        <h3 className="font-serif font-semibold text-2xl mb-4 leading-tight">Breast Augmentation with Fat Grafting</h3>
                        <p className="text-sm leading-relaxed">Natural enhancement using your own fat for soft, lasting volume without implants.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 2 - Breast Augmentation with Implant */}
                <div className="flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_30%] xl:flex-[0_0_23%]">
                  <div className="group relative h-[500px] overflow-hidden fade-in" style={{
                  animationDelay: '0.05s'
                }}>
                    <img alt="Breast Augmentation with Implant" className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110 group-hover:scale-105" src="/lovable-uploads/f44fb3b1-f070-49ef-89c5-72a0b369c124.png" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20 transition-all duration-500 group-hover:from-black/70 group-hover:via-black/40 group-hover:to-transparent pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4 pointer-events-none">
                      <div className="min-h-[80px] flex items-end">
                        <h3 className="font-serif font-semibold text-2xl leading-tight">Breast Augmentation with Implant</h3>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 3 - Breast Reduction */}
                <div className="flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_30%] xl:flex-[0_0_23%]">
                  <div className="group relative h-[500px] overflow-hidden fade-in" style={{
                  animationDelay: '0.1s'
                }}>
                    <img alt="Breast Reduction" className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110 group-hover:scale-105" src="/lovable-uploads/4f21999a-1620-45ba-93a6-d4260d1f9923.png" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20 transition-all duration-500 group-hover:from-black/70 group-hover:via-black/40 group-hover:to-transparent pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4 pointer-events-none">
                      <div className="min-h-[80px] flex items-end">
                        <h3 className="font-serif font-semibold text-2xl leading-tight">Breast Reduction</h3>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 4 - Breast Uplift (Mastopexy) */}
                <div className="flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_30%] xl:flex-[0_0_23%]">
                  <div className="group relative h-[500px] overflow-hidden fade-in" style={{
                  animationDelay: '0.15s'
                }}>
                    <img alt="Breast Uplift (Mastopexy)" className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110 group-hover:scale-105" src="/lovable-uploads/51f9f41d-08ff-4de0-b3dd-d9006d3d4297.jpg" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20 transition-all duration-500 group-hover:from-black/70 group-hover:via-black/40 group-hover:to-transparent pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4 pointer-events-none">
                      <div className="min-h-[80px] flex items-end">
                        <h3 className="font-serif font-semibold text-2xl leading-tight">Breast Uplift (Mastopexy)</h3>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 5 - Gynecomastia */}
                <div className="flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_30%] xl:flex-[0_0_23%]">
                  <div className="group relative h-[500px] overflow-hidden fade-in" style={{
                  animationDelay: '0.2s'
                }}>
                    <img src="/placeholder.svg" alt="Gynecomastia" className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20 transition-all duration-500 group-hover:from-black/70 group-hover:via-black/40 group-hover:to-transparent pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4 pointer-events-none">
                      <div className="min-h-[80px] flex items-end">
                        <h3 className="font-serif font-semibold text-2xl leading-tight">Gynecomastia</h3>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 6 - Hybrid Augmentation (Implant + Fat) */}
                <div className="flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_30%] xl:flex-[0_0_23%]">
                  <div className="group relative h-[500px] overflow-hidden fade-in" style={{
                  animationDelay: '0.25s'
                }}>
                    <img src="/placeholder.svg" alt="Hybrid Augmentation (Implant + Fat)" className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20 transition-all duration-500 group-hover:from-black/70 group-hover:via-black/40 group-hover:to-transparent pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4 pointer-events-none">
                      <div className="min-h-[80px] flex items-end">
                        <h3 className="font-serif font-semibold text-2xl leading-tight">Hybrid Augmentation (Implant + Fat)</h3>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 7 - Implant Removal */}
                <div className="flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_30%] xl:flex-[0_0_23%]">
                  <div className="group relative h-[500px] overflow-hidden fade-in" style={{
                  animationDelay: '0.3s'
                }}>
                    <img src="/placeholder.svg" alt="Implant Removal" className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20 transition-all duration-500 group-hover:from-black/70 group-hover:via-black/40 group-hover:to-transparent pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4 pointer-events-none">
                      <div className="min-h-[80px] flex items-end">
                        <h3 className="font-serif font-semibold text-2xl leading-tight">Implant Removal</h3>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 8 - Inverted Nipple Correction */}
                <div className="flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_30%] xl:flex-[0_0_23%]">
                  <div className="group relative h-[500px] overflow-hidden fade-in" style={{
                  animationDelay: '0.35s'
                }}>
                    <img src="/placeholder.svg" alt="Inverted Nipple Correction" className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20 transition-all duration-500 group-hover:from-black/70 group-hover:via-black/40 group-hover:to-transparent pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4 pointer-events-none">
                      <div className="min-h-[80px] flex items-end">
                        <h3 className="font-serif font-semibold text-2xl leading-tight">Inverted Nipple Correction</h3>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 9 - Nipple & Areola Reduction */}
                <div className="flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_30%] xl:flex-[0_0_23%]">
                  <div className="group relative h-[500px] overflow-hidden fade-in" style={{
                  animationDelay: '0.4s'
                }}>
                    <img src="/placeholder.svg" alt="Nipple & Areola Reduction" className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20 transition-all duration-500 group-hover:from-black/70 group-hover:via-black/40 group-hover:to-transparent pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4 pointer-events-none">
                      <div className="min-h-[80px] flex items-end">
                        <h3 className="font-serif font-semibold text-2xl leading-tight">Nipple & Areola Reduction</h3>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 10 - K-Glide™ Breast Augmentation */}
                <div className="flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_30%] xl:flex-[0_0_23%]">
                  <div className="group relative h-[500px] overflow-hidden fade-in" style={{
                  animationDelay: '0.45s'
                }}>
                    <img src="/placeholder.svg" alt="K-Glide™ Breast Augmentation" className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20 transition-all duration-500 group-hover:from-black/70 group-hover:via-black/40 group-hover:to-transparent pointer-events-none"></div>
                    <div className="absolute top-6 left-6 backdrop-blur-md bg-white/20 px-4 py-2 border border-white/30 shadow-lg pointer-events-none">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white font-light">Signature Technique</p>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4 pointer-events-none">
                      <div className="min-h-[80px] flex items-end">
                        <h3 className="font-serif font-semibold text-2xl leading-tight">K-Glide™ Breast Augmentation</h3>
                      </div>
                    </div>
                    <div className="absolute inset-0 p-6 text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 flex flex-col justify-end pointer-events-none">
                      <div className="min-h-[80px] flex flex-col justify-end">
                        <h3 className="font-serif font-semibold text-2xl mb-4 leading-tight">K-Glide™ Breast Augmentation</h3>
                        <p className="text-sm leading-relaxed">Rapid, minimally invasive technique for precise implant placement with faster recovery.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 11 - Twirl Internal Bra Technique™ */}
                <div className="flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_30%] xl:flex-[0_0_23%]">
                  <div className="group relative h-[500px] overflow-hidden fade-in" style={{
                  animationDelay: '0.5s'
                }}>
                    <img src="/placeholder.svg" alt="Twirl Internal Bra Technique™" className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20 transition-all duration-500 group-hover:from-black/70 group-hover:via-black/40 group-hover:to-transparent pointer-events-none"></div>
                    <div className="absolute top-6 left-6 backdrop-blur-md bg-white/20 px-4 py-2 border border-white/30 shadow-lg pointer-events-none">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white font-light">Signature Technique</p>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4 pointer-events-none">
                      <div className="min-h-[80px] flex items-end">
                        <h3 className="font-serif font-semibold text-2xl leading-tight">Twirl Internal Bra Technique™</h3>
                      </div>
                    </div>
                    <div className="absolute inset-0 p-6 text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 flex flex-col justify-end pointer-events-none">
                      <div className="min-h-[80px] flex flex-col justify-end">
                        <h3 className="font-serif font-semibold text-2xl mb-4 leading-tight">Twirl Internal Bra Technique™</h3>
                        <p className="text-sm leading-relaxed">Revolutionary internal support system for long-lasting lift and natural shape.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 12 - Smart BRA / Bloocell Scaffold */}
                <div className="flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_30%] xl:flex-[0_0_23%]">
                  <div className="group relative h-[500px] overflow-hidden fade-in" style={{
                  animationDelay: '0.55s'
                }}>
                    <img src="/placeholder.svg" alt="Smart BRA / Bloocell Scaffold" className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20 transition-all duration-500 group-hover:from-black/70 group-hover:via-black/40 group-hover:to-transparent pointer-events-none"></div>
                    <div className="absolute top-6 left-6 backdrop-blur-md bg-white/20 px-4 py-2 border border-white/30 shadow-lg pointer-events-none">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white font-light">Signature Technique</p>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4 pointer-events-none">
                      <div className="min-h-[80px] flex items-end">
                        <h3 className="font-serif font-semibold text-2xl leading-tight">Smart BRA / Bloocell Scaffold</h3>
                      </div>
                    </div>
                    <div className="absolute inset-0 p-6 text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 flex flex-col justify-end pointer-events-none">
                      <div className="min-h-[80px] flex flex-col justify-end">
                        <h3 className="font-serif font-semibold text-2xl mb-4 leading-tight">Smart BRA / Bloocell Scaffold</h3>
                        <p className="text-sm leading-relaxed">Advanced biologic scaffold technology for enhanced support and natural contouring.</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Progress Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({
              length: Math.ceil(12 / 4)
            }).map((_, index) => <button key={index} onClick={() => emblaApi?.scrollTo(index * 4)} className={`h-1 rounded-full transition-all duration-300 ${Math.floor(selectedIndex / 4) === index ? "w-12 bg-gray-900" : "w-8 bg-gray-300 hover:bg-gray-400"}`} aria-label={`Go to slide group ${index + 1}`} />)}
            </div>
          </div>
        </div>
      </section>

      {/* Educational Section - The Philosophy of Breast Aesthetics */}
      <section className="py-16 md:py-24 px-4 lg:px-8 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="fade-in-up">
            <h2 className="font-serif font-light text-3xl md:text-4xl lg:text-5xl tracking-wide mb-8">
              The Philosophy of Breast Aesthetics
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              <p>
                Your chest is a defining part of body harmony. At My Medi Expert, Professor Dr. Karaaltin approaches breast aesthetics with a balance of artistry, anatomical precision, and advanced surgical technique.
              </p>
              <p>
                Whether seeking enhancement, lift, reduction, or reconstruction, each treatment plan is tailored to your proportions, goals, and long-term well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Section - Understanding Breast Anatomy & Aging - Redesigned */}
      <section className="py-20 md:py-32 px-6 md:px-8 lg:px-16 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-serif font-light text-3xl md:text-4xl lg:text-5xl tracking-wide mb-20 text-center fade-in-up">
            Understanding Breast Anatomy & Aging
          </h2>
          
          {/* Premium Layout: Central Image with Corner Items */}
          <div className="relative min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex items-center justify-center">
            {/* Central Anatomical Image - Editable */}
            <div className="w-full max-w-md md:max-w-lg aspect-[3/4] fade-in-up" style={{
            animationDelay: '0.2s'
          }}>
              <img alt="Breast anatomy illustration" className="w-full h-full object-cover rounded-sm shadow-lg" src="/lovable-uploads/6f798aee-3b2a-42e6-b2c6-05fbfb0547df.png" />
            </div>
            
            {/* 4 Corner Items */}
            {/* Top Left - Skin & Soft Tissue */}
            <div className="absolute top-0 left-0 w-64 md:w-80 space-y-3 fade-in-up" style={{
            animationDelay: '0.3s'
          }}>
              <h3 className="font-serif font-semibold text-xl md:text-2xl text-[#0d1f3a]">Skin & Soft Tissue</h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Changes in elasticity, firmness, and projection over time.
              </p>
            </div>
            
            {/* Top Right - Fat Volume */}
            <div className="absolute top-0 right-0 w-64 md:w-80 space-y-3 text-right fade-in-up" style={{
            animationDelay: '0.4s'
          }}>
              <h3 className="font-serif font-semibold text-xl md:text-2xl text-[#0d1f3a]">Fat Volume</h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Redistribution or loss that alters shape and fullness.
              </p>
            </div>
            
            {/* Bottom Left - Glandular Tissue */}
            <div className="absolute bottom-0 left-0 w-64 md:w-80 space-y-3 fade-in-up" style={{
            animationDelay: '0.5s'
          }}>
              <h3 className="font-serif font-semibold text-xl md:text-2xl text-[#0d1f3a]">Glandular Tissue</h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Drooping, asymmetry, or density changes.
              </p>
            </div>
            
            {/* Bottom Right - Chest Wall & Structure */}
            <div className="absolute bottom-0 right-0 w-64 md:w-80 space-y-3 text-right fade-in-up" style={{
            animationDelay: '0.6s'
          }}>
              <h3 className="font-serif font-semibold text-xl md:text-2xl text-[#0d1f3a]">Chest Wall & Structure</h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Variations in ribcage and posture influence final results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Section - Customized Treatment Planning */}
      <section className="py-16 md:py-24 px-4 lg:px-8 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="fade-in-up">
            <h2 className="font-serif font-light text-3xl md:text-4xl lg:text-5xl tracking-wide mb-8">
              Customized Treatment Planning
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              <p>
                Planning is based on anatomy, footprint, projection goals, implant selection vs. fat grafting, symmetry, and lifestyle. Dr. Karaaltin uses precise measurements and 3D evaluation to recommend safe, natural outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Breast Procedure Overview - Split Layout Sections */}
      <section className="py-16 md:py-24 px-4 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-serif font-light text-4xl md:text-5xl lg:text-6xl tracking-wider mb-16 text-center fade-in uppercase">
            Breast Procedure Overview
          </h2>

          {/* 1. Breast Augmentation with Fat Grafting */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 fade-in-up">
            <div className="order-2 lg:order-1">
              <h3 className="font-serif font-light text-3xl md:text-4xl tracking-wide mb-6">
                Breast Augmentation with Fat Grafting
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                <p>
                  Natural enhancement using your own fat harvested from donor areas. Results in soft, natural-looking volume without implants.
                </p>
                <p>
                  Ideal for patients seeking modest enhancement with the added benefit of body contouring through liposuction.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 aspect-[4/5] overflow-hidden rounded-sm">
              <img alt="Breast augmentation with fat grafting" className="w-full h-full object-cover" src="/lovable-uploads/0d169825-885a-4a94-be48-de8a06bcfdf5.jpg" />
            </div>
          </div>

          {/* 2. Breast Augmentation with Implant */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 fade-in-up">
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img alt="Breast augmentation with implant" className="w-full h-full object-cover" src="/lovable-uploads/45a2611a-b89a-441d-a3b6-1699f7920038.png" />
            </div>
            <div>
              <h3 className="font-serif font-light text-3xl md:text-4xl tracking-wide mb-6">
                Breast Augmentation with Implant
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                <p>
                  Silicone or saline implants placed to enhance volume, projection, and shape. Customized to your anatomy and aesthetic goals.
                </p>
                <p>
                  Multiple placement options (subglandular, submuscular, dual-plane) and incision approaches available.
                </p>
              </div>
            </div>
          </div>

          {/* 3. Breast Reduction */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 fade-in-up">
            <div className="order-2 lg:order-1">
              <h3 className="font-serif font-light text-3xl md:text-4xl tracking-wide mb-6">
                Breast Reduction
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                <p>
                  Removes excess tissue, fat, and skin to create proportionate, comfortable breasts. Alleviates physical discomfort and improves quality of life.
                </p>
                <p>
                  Advanced techniques minimize scarring while achieving natural, lifted contours.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 aspect-[4/5] overflow-hidden rounded-sm">
              <img alt="Breast reduction" className="w-full h-full object-cover" src="/lovable-uploads/a787b0fe-d985-4978-883a-ffe8ddab1014.jpg" />
            </div>
          </div>

          {/* 4. Breast Lift (Mastopexy) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 fade-in-up">
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img alt="Breast lift mastopexy" className="w-full h-full object-cover" src="/lovable-uploads/3af8a907-7e20-4424-bd3a-31959936419e.png" />
            </div>
            <div>
              <h3 className="font-serif font-light text-3xl md:text-4xl tracking-wide mb-6">
                Breast Lift (Mastopexy)
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                <p>
                  Elevates and reshapes sagging breasts by removing excess skin and tightening surrounding tissue. Restores youthful contour and position.
                </p>
                <p>
                  Can be combined with augmentation for enhanced volume and lift in one procedure.
                </p>
              </div>
            </div>
          </div>

          {/* 5. Gynecomastia */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 fade-in-up">
            <div className="order-2 lg:order-1">
              <h3 className="font-serif font-light text-3xl md:text-4xl tracking-wide mb-6">
                Gynecomastia
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                <p>
                  Corrects enlarged male breast tissue through liposuction, tissue excision, or combination techniques. Creates masculine, sculpted chest contours.
                </p>
                <p>
                  Minimal scarring with natural-looking results that restore confidence.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 aspect-[4/5] overflow-hidden rounded-sm">
              <img alt="Gynecomastia surgery" className="w-full h-full object-cover" src="/lovable-uploads/2f24b8ca-65ed-4d5d-a499-8b01a656a64f.jpg" />
            </div>
          </div>

          {/* 6. Hybrid Augmentation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 fade-in-up">
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img alt="Hybrid augmentation" className="w-full h-full object-cover" src="/lovable-uploads/5b7d328a-6747-4cd6-a3e0-573c26c54ca5.jpg" />
            </div>
            <div>
              <h3 className="font-serif font-light text-3xl md:text-4xl tracking-wide mb-6">
                Hybrid Augmentation (Implant + Fat)
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                <p>
                  Combines implant placement with strategic fat grafting for enhanced naturalness, improved contour transitions, and optimized coverage.
                </p>
                <p>
                  Delivers the volume benefits of implants with the soft, natural feel of fat transfer.
                </p>
              </div>
            </div>
          </div>

          {/* 7. Implant Removal or Replacement */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 fade-in-up">
            <div className="order-2 lg:order-1">
              <h3 className="font-serif font-light text-3xl md:text-4xl tracking-wide mb-6">
                Implant Removal or Replacement
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                <p>
                  Safe removal or exchange of existing implants. Can include capsulectomy, tissue repair, and optional replacement with new implants or fat grafting.
                </p>
                <p>
                  Restores natural appearance or achieves revised aesthetic goals with modern techniques.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 aspect-[4/5] overflow-hidden rounded-sm">
              <img alt="Implant removal" className="w-full h-full object-cover" src="/lovable-uploads/d1865d19-9a49-46fa-8ae8-b87ba1569348.png" />
            </div>
          </div>

          {/* 8. Nipple & Areola Refinement */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center fade-in-up">
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img alt="Nipple and areola refinement" className="w-full h-full object-cover" src="/lovable-uploads/9dec19c0-a1bd-4599-9ad6-1f5833dd3672.png" />
            </div>
            <div>
              <h3 className="font-serif font-light text-3xl md:text-4xl tracking-wide mb-6">
                Nipple & Areola Refinement
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                <p>
                  Corrects inverted nipples, reduces oversized areolas, or adjusts asymmetry. Performed as standalone procedures or combined with other breast surgeries.
                </p>
                <p>
                  Minimal scarring with natural, proportionate results that enhance overall breast aesthetics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <BeforeAfterSection />

      {/* CTA Section */}
      <ContactCTASection />

      <Footer />
    </div>;
};
export default Breast;