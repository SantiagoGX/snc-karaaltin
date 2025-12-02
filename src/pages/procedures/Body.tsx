import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BeforeAfterSection from "@/components/home/BeforeAfterSection";
import ContactCTASection from "@/components/home/ContactCTASection";
import { ChevronRight, ChevronLeft } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
const Body = () => {
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
          <img alt="Body procedures hero" className="w-full h-full object-cover animate-[scale-in_1.2s_ease-out]" src="/lovable-uploads/5ad0ab74-098e-453e-bca1-4dea9a56d20a.jpg" />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        {/* Hero Content - pointer-events-none to allow image selection */}
        <div className="relative z-10 text-center text-white px-4 fade-in-up pointer-events-none">
          <h1 className="font-serif font-light text-6xl md:text-7xl lg:text-8xl tracking-wider mb-4">
            BODY
          </h1>
          <p className="text-lg md:text-xl tracking-wide font-light">
            Body Contouring & Aesthetic Procedures
          </p>
        </div>
      </section>

      {/* All Body Procedures Section */}
      <section className="bg-gray-100 py-16 md:py-24 px-4 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <h2 className="font-serif font-light text-4xl md:text-5xl lg:text-6xl tracking-wider mb-12 text-center fade-in">
            ALL BODY PROCEDURES
          </h2>
          
          {/* Carousel Container */}
          <div className="relative">
            {/* Navigation Arrows - Desktop Only */}
            <button onClick={scrollPrev} className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 w-14 h-14 items-center justify-center rounded-full bg-white border-2 border-gray-900 shadow-lg hover:bg-gray-900 hover:text-white transition-all duration-300" aria-label="Previous procedures">
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button onClick={scrollNext} className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 w-14 h-14 items-center justify-center rounded-full bg-white border-2 border-gray-900 shadow-lg hover:bg-gray-900 hover:text-white transition-all duration-300" aria-label="Next procedures">
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Embla Carousel */}
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-6 lg:gap-8">
                
                {/* Card 1 - Advanced Safe BBL */}
                <Link to="/procedures/body/advanced-safe-bbl" className="flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_30%] xl:flex-[0_0_23%]">
                  <div className="group relative h-[500px] overflow-hidden fade-in">
                    <img alt="Advanced Safe BBL" className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110 group-hover:scale-105" src="/lovable-uploads/459ee6c0-8aa5-4d41-891b-9c08a5df6a6c.png" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-500 group-hover:from-black/90 group-hover:via-black/60 pointer-events-none"></div>
                    <div className="absolute top-6 left-6 backdrop-blur-md bg-white/20 px-4 py-2 border border-white/30 shadow-lg pointer-events-none">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white font-light">Signature Technique</p>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4 pointer-events-none">
                      <div className="min-h-[80px] flex items-end">
                        <h3 className="font-serif font-semibold text-2xl leading-tight">Advanced Safe BBL</h3>
                      </div>
                    </div>
                    <div className="absolute inset-0 p-6 text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 flex flex-col justify-end pointer-events-none">
                      <div className="min-h-[80px] flex flex-col justify-end">
                        <h3 className="font-serif font-semibold text-2xl mb-4 leading-tight">Advanced Safe BBL</h3>
                        <p className="text-sm leading-relaxed">Revolutionary fat transfer technique prioritizing safety and natural, lasting results.</p>
                      </div>
                    </div>
                  </div>
                </Link>

                {/* Card 2 - Tummy Tuck (Abdominoplasty) */}
                <div className="flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_30%] xl:flex-[0_0_23%]">
                  <div className="group relative h-[500px] overflow-hidden fade-in" style={{
                  animationDelay: '0.05s'
                }}>
                    <img alt="Tummy Tuck (Abdominoplasty)" className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110 group-hover:scale-105" src="/lovable-uploads/aef95e97-4b6c-444e-a6f4-a180992d7466.png" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-500 group-hover:from-black/90 group-hover:via-black/60 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4 pointer-events-none">
                      <div className="min-h-[80px] flex items-end">
                        <h3 className="font-serif font-semibold text-2xl leading-tight">Tummy Tuck (Abdominoplasty)</h3>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 3 - Liposuction */}
                <div className="flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_30%] xl:flex-[0_0_23%]">
                  <div className="group relative h-[500px] overflow-hidden fade-in" style={{
                  animationDelay: '0.1s'
                }}>
                    <img src="/placeholder.svg" alt="Liposuction" className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-500 group-hover:from-black/90 group-hover:via-black/60 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4 pointer-events-none">
                      <div className="min-h-[80px] flex items-end">
                        <h3 className="font-serif font-semibold text-2xl leading-tight">Liposuction</h3>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 4 - Body Lift */}
                <div className="flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_30%] xl:flex-[0_0_23%]">
                  <div className="group relative h-[500px] overflow-hidden fade-in" style={{
                  animationDelay: '0.15s'
                }}>
                    <img src="/placeholder.svg" alt="Body Lift" className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-500 group-hover:from-black/90 group-hover:via-black/60 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4 pointer-events-none">
                      <div className="min-h-[80px] flex items-end">
                        <h3 className="font-serif font-semibold text-2xl leading-tight">Body Lift</h3>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 5 - Arm Lift (Brachioplasty) */}
                <div className="flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_30%] xl:flex-[0_0_23%]">
                  <div className="group relative h-[500px] overflow-hidden fade-in" style={{
                  animationDelay: '0.2s'
                }}>
                    <img src="/placeholder.svg" alt="Arm Lift (Brachioplasty)" className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-500 group-hover:from-black/90 group-hover:via-black/60 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4 pointer-events-none">
                      <div className="min-h-[80px] flex items-end">
                        <h3 className="font-serif font-semibold text-2xl leading-tight">Arm Lift (Brachioplasty)</h3>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 6 - Thigh Lift */}
                <div className="flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_30%] xl:flex-[0_0_23%]">
                  <div className="group relative h-[500px] overflow-hidden fade-in" style={{
                  animationDelay: '0.25s'
                }}>
                    <img src="/placeholder.svg" alt="Thigh Lift" className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-500 group-hover:from-black/90 group-hover:via-black/60 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4 pointer-events-none">
                      <div className="min-h-[80px] flex items-end">
                        <h3 className="font-serif font-semibold text-2xl leading-tight">Thigh Lift</h3>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 7 - Mommy Makeover */}
                <div className="flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_30%] xl:flex-[0_0_23%]">
                  <div className="group relative h-[500px] overflow-hidden fade-in" style={{
                  animationDelay: '0.3s'
                }}>
                    <img src="/placeholder.svg" alt="Mommy Makeover" className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-500 group-hover:from-black/90 group-hover:via-black/60 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4 pointer-events-none">
                      <div className="min-h-[80px] flex items-end">
                        <h3 className="font-serif font-semibold text-2xl leading-tight">Mommy Makeover</h3>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 8 - Post-Weight Loss Body Contouring */}
                <div className="flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_30%] xl:flex-[0_0_23%]">
                  <div className="group relative h-[500px] overflow-hidden fade-in" style={{
                  animationDelay: '0.35s'
                }}>
                    <img src="/placeholder.svg" alt="Post-Weight Loss Body Contouring" className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-500 group-hover:from-black/90 group-hover:via-black/60 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4 pointer-events-none">
                      <div className="min-h-[80px] flex items-end">
                        <h3 className="font-serif font-semibold text-2xl leading-tight">Post-Weight Loss Body Contouring</h3>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 9 - Fat Transfer */}
                <div className="flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_30%] xl:flex-[0_0_23%]">
                  <div className="group relative h-[500px] overflow-hidden fade-in" style={{
                  animationDelay: '0.4s'
                }}>
                    <img src="/placeholder.svg" alt="Fat Transfer" className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-500 group-hover:from-black/90 group-hover:via-black/60 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4 pointer-events-none">
                      <div className="min-h-[80px] flex items-end">
                        <h3 className="font-serif font-semibold text-2xl leading-tight">Fat Transfer</h3>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Progress Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({
              length: Math.ceil(9 / 4)
            }).map((_, index) => <button key={index} onClick={() => emblaApi?.scrollTo(index * 4)} className={`h-1 rounded-full transition-all duration-300 ${Math.floor(selectedIndex / 4) === index ? "w-12 bg-gray-900" : "w-8 bg-gray-300 hover:bg-gray-400"}`} aria-label={`Go to slide group ${index + 1}`} />)}
            </div>
          </div>
        </div>
      </section>

      {/* Educational Section - Understanding the Philosophy */}
      <section className="py-16 md:py-24 px-4 lg:px-8 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="fade-in-up">
            <h2 className="font-serif font-light text-3xl md:text-4xl lg:text-5xl tracking-wide mb-8">
              Understanding the Philosophy
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              <p>
                Body contouring at Dr. Karaaltın's practice focuses on revealing your natural form through 
                precise sculpting and harmonious proportions. Each treatment plan is designed to address 
                your unique anatomy and aesthetic vision.
              </p>
              <p>
                Our comprehensive approach considers skin quality, underlying musculature, and fat distribution 
                to create results that are balanced, natural, and lasting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Section - Body Anatomy - Redesigned */}
      <section className="py-20 md:py-32 px-6 md:px-8 lg:px-16 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-serif font-light text-3xl md:text-4xl lg:text-5xl tracking-wide mb-20 text-center fade-in-up">
            Body Anatomy
          </h2>
          
          {/* Premium Layout: Central Image with Corner Items */}
          <div className="relative min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex items-center justify-center">
            {/* Central Anatomical Image - Editable */}
            <div className="w-full max-w-md md:max-w-lg aspect-[3/4] fade-in-up" style={{
            animationDelay: '0.2s'
          }}>
              <img alt="Body anatomy illustration" className="w-full h-full object-cover rounded-sm shadow-lg" src="/lovable-uploads/af203118-5e11-448c-935e-52b1f419c7cf.png" />
            </div>
            
            {/* 4 Corner Items */}
            {/* Top Left - Skin & Tissue */}
            <div className="absolute top-0 left-0 w-64 md:w-80 space-y-3 fade-in-up" style={{
            animationDelay: '0.3s'
          }}>
              <h3 className="font-serif font-semibold text-xl md:text-2xl text-[#0d1f3a]">Skin & Tissue</h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Skin elasticity and quality determine the success of body contouring. Understanding 
                tissue characteristics guides treatment planning.
              </p>
            </div>
            
            {/* Top Right - Fat Distribution */}
            <div className="absolute top-0 right-0 w-64 md:w-80 space-y-3 text-right fade-in-up" style={{
            animationDelay: '0.4s'
          }}>
              <h3 className="font-serif font-semibold text-xl md:text-2xl text-[#0d1f3a]">Fat Distribution</h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Subcutaneous fat patterns vary by genetics, age, and lifestyle. Strategic removal 
                and repositioning create balanced contours.
              </p>
            </div>
            
            {/* Bottom Left - Muscle Foundation */}
            <div className="absolute bottom-0 left-0 w-64 md:w-80 space-y-3 fade-in-up" style={{
            animationDelay: '0.5s'
          }}>
              <h3 className="font-serif font-semibold text-xl md:text-2xl text-[#0d1f3a]">Muscle Foundation</h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Underlying musculature provides structural support. Addressing muscle separation 
                enhances results in body contouring procedures.
              </p>
            </div>
            
            {/* Bottom Right - Body Proportions */}
            <div className="absolute bottom-0 right-0 w-64 md:w-80 space-y-3 text-right fade-in-up" style={{
            animationDelay: '0.6s'
          }}>
              <h3 className="font-serif font-semibold text-xl md:text-2xl text-[#0d1f3a]">Body Proportions</h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Natural aesthetic proportions guide surgical planning to create harmonious, 
                balanced results that enhance your silhouette.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Section - How the Body Changes */}
      <section className="py-16 md:py-24 px-4 lg:px-8 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="fade-in-up">
            <h2 className="font-serif font-light text-3xl md:text-4xl lg:text-5xl tracking-wide mb-12">
              How the Body Changes
            </h2>
            
            <div className="space-y-12">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 items-start">
                <h3 className="font-serif font-semibold text-2xl text-[#0d1f3a] lg:sticky lg:top-24">
                  Weight Fluctuation
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Weight gain and loss create changes in fat distribution and skin elasticity. Pregnancy, 
                    aging, and lifestyle factors contribute to stubborn areas resistant to diet and exercise.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 items-start">
                <h3 className="font-serif font-semibold text-2xl text-[#0d1f3a] lg:sticky lg:top-24">
                  Skin Laxity
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Aging and volume changes reduce skin elasticity, leading to sagging and loss of firmness. 
                    Addressing both skin and underlying structures ensures comprehensive rejuvenation.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 items-start">
                <h3 className="font-serif font-semibold text-2xl text-[#0d1f3a] lg:sticky lg:top-24">
                  Muscle Changes
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Pregnancy and weight fluctuation can cause abdominal muscle separation (diastasis recti), 
                    affecting core strength and contour. Surgical repair restores function and appearance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Section - Customized Treatment Planning */}
      <section className="py-16 md:py-24 px-4 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center fade-in-up">
            <div>
              <h2 className="font-serif font-light text-3xl md:text-4xl lg:text-5xl tracking-wide mb-8">
                Customized Treatment Planning
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                <p>
                  Every patient receives a comprehensive body analysis addressing skin quality, fat distribution, 
                  muscle tone, and aesthetic goals. Dr. Karaaltın combines techniques to achieve natural, 
                  harmonious results.
                </p>
                <p>
                  Treatment plans may incorporate multiple procedures performed simultaneously for comprehensive 
                  transformation with optimal recovery and results.
                </p>
              </div>
            </div>
            
            {/* Image - Editable */}
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img alt="Customized treatment planning" className="w-full h-full object-cover" src="/lovable-uploads/5d483c38-1a6e-41ad-af88-1d33fb311138.jpg" />
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
export default Body;