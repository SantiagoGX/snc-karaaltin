import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BeforeAfterSection from "@/components/home/BeforeAfterSection";
import ContactCTASection from "@/components/home/ContactCTASection";
import { ChevronRight, ChevronLeft } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
const Face = () => {
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
          <img alt="Face procedures hero" className="w-full h-full object-cover animate-[scale-in_1.2s_ease-out]" src="/lovable-uploads/faa16363-ef19-4c63-b344-dc9f97bac7b2.jpg" />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        {/* Hero Content - pointer-events-none to allow image selection */}
        <div className="relative z-10 text-center text-white px-4 fade-in-up pointer-events-none">
          <h1 className="font-serif font-light text-6xl md:text-7xl lg:text-8xl tracking-wider mb-4">
            FACE
          </h1>
          <p className="text-lg md:text-xl tracking-wide font-light">
            Facial Aesthetic & Reconstructive Procedures
          </p>
        </div>
      </section>

      {/* All Face Procedures Section */}
      <section className="bg-gray-100 py-16 md:py-24 px-4 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <h2 className="font-serif font-light text-4xl md:text-5xl lg:text-6xl tracking-wider mb-12 text-center fade-in">
            ALL FACE PROCEDURES
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
                
                {/* Card 1 - The K Face Lift */}
                <Link to="/procedures/face/k-face-lift" className="flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_30%] xl:flex-[0_0_23%]">
                  <div className="group relative h-[500px] overflow-hidden fade-in">
                    <img alt="The K Face Lift" className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110 group-hover:scale-105" src="/lovable-uploads/6e06d4e5-7d1b-4a66-872d-146941d597f5.jpg" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-500 group-hover:from-black/90 group-hover:via-black/60 pointer-events-none"></div>
                    <div className="absolute top-6 left-6 backdrop-blur-md bg-white/20 px-4 py-2 border border-white/30 shadow-lg pointer-events-none">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white font-light">Signature Technique</p>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4 pointer-events-none">
                      <div className="min-h-[80px] flex items-end">
                        <h3 className="font-serif font-semibold text-2xl leading-tight">The K Face Lift</h3>
                      </div>
                    </div>
                    <div className="absolute inset-0 p-6 text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 flex flex-col justify-end pointer-events-none">
                      <div className="min-h-[80px] flex flex-col justify-end">
                        <h3 className="font-serif font-semibold text-2xl mb-4 leading-tight">The K Face Lift</h3>
                        <p className="text-sm leading-relaxed">Dynamic multi-vector facelift for long-lasting, natural rejuvenation.</p>
                      </div>
                    </div>
                  </div>
                </Link>

                {/* Card 2 - Dr. K's Endoscopic Face Lift */}
                <Link to="/procedures/face/k-endoscopic-face-lift" className="flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_30%] xl:flex-[0_0_23%]">
                  <div className="group relative h-[500px] overflow-hidden fade-in" style={{
                  animationDelay: '0.05s'
                }}>
                    <img alt="Dr. K's Endoscopic Face Lift" className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110 group-hover:scale-105" src="/lovable-uploads/a7937611-c0c8-482c-83f0-c60b056bb707.png" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-500 group-hover:from-black/90 group-hover:via-black/60 pointer-events-none"></div>
                    <div className="absolute top-6 left-6 backdrop-blur-md bg-white/20 px-4 py-2 border border-white/30 shadow-lg pointer-events-none">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white font-light">Signature Technique</p>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4 pointer-events-none">
                      <div className="min-h-[80px] flex items-end">
                        <h3 className="font-serif font-semibold text-2xl leading-tight">Dr. K's Endoscopic Face Lift</h3>
                      </div>
                    </div>
                    <div className="absolute inset-0 p-6 text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 flex flex-col justify-end pointer-events-none">
                      <div className="min-h-[80px] flex flex-col justify-end">
                        <h3 className="font-serif font-semibold text-2xl mb-4 leading-tight">Dr. K's Endoscopic Face Lift</h3>
                        <p className="text-sm leading-relaxed">Scarless endoscopic lift that elevates brow, midface, jowls, and neck through hidden incisions.</p>
                      </div>
                    </div>
                  </div>
                </Link>

                {/* Card 3 - EndoChor® Face Lift */}
                <Link to="/procedures/face/endochor-face-lift" className="flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_30%] xl:flex-[0_0_23%]">
                  <div className="group relative h-[500px] overflow-hidden fade-in" style={{
                  animationDelay: '0.1s'
                }}>
                    <img alt="EndoChor® Face Lift" className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110 group-hover:scale-105" src="/lovable-uploads/e39fa8b3-89d4-4c4c-8dbc-dcbe6c8c1184.png" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-500 group-hover:from-black/90 group-hover:via-black/60 pointer-events-none"></div>
                    <div className="absolute top-6 left-6 backdrop-blur-md bg-white/20 px-4 py-2 border border-white/30 shadow-lg pointer-events-none">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white font-light">Signature Technique</p>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4 pointer-events-none">
                      <div className="min-h-[80px] flex items-end">
                        <h3 className="font-serif font-semibold text-2xl leading-tight">EndoChor® Face Lift</h3>
                      </div>
                    </div>
                    <div className="absolute inset-0 p-6 text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 flex flex-col justify-end pointer-events-none">
                      <div className="min-h-[80px] flex flex-col justify-end">
                        <h3 className="font-serif font-semibold text-2xl mb-4 leading-tight">EndoChor® Face Lift</h3>
                        <p className="text-sm leading-relaxed">Minimally invasive lift supported by biodegradable implants for natural, durable elevation.</p>
                      </div>
                    </div>
                  </div>
                </Link>

                {/* Card 4 - Mini Facelift */}
                <div className="flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_30%] xl:flex-[0_0_23%]">
                  <div className="group relative h-[500px] overflow-hidden fade-in" style={{
                  animationDelay: '0.15s'
                }}>
                    <img alt="Mini Facelift" className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110 group-hover:scale-105" src="/lovable-uploads/09a13097-7fa6-46aa-81cc-f0175ed1291e.png" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-500 group-hover:from-black/90 group-hover:via-black/60 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4 pointer-events-none">
                      <div className="min-h-[80px] flex items-end">
                        <h3 className="font-serif font-semibold text-2xl leading-tight">Mini Facelift</h3>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 5 - Purse-String Vertical Facelift */}
                <div className="flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_30%] xl:flex-[0_0_23%]">
                  <div className="group relative h-[500px] overflow-hidden fade-in" style={{
                  animationDelay: '0.2s'
                }}>
                    <img alt="Purse-String Vertical Facelift" className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110 group-hover:scale-105" src="/lovable-uploads/22978ced-2ab2-4798-afee-89d17e5238c7.png" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-500 group-hover:from-black/90 group-hover:via-black/60 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4 pointer-events-none">
                      <div className="min-h-[80px] flex items-end">
                        <h3 className="font-serif font-semibold text-2xl leading-tight">Purse-String Vertical Facelift</h3>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 6 - Subperiosteal Deep Plane / Composite Midface Lift */}
                <div className="flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_30%] xl:flex-[0_0_23%]">
                  <div className="group relative h-[500px] overflow-hidden fade-in" style={{
                  animationDelay: '0.25s'
                }}>
                    <img alt="Subperiosteal Deep Plane / Composite Midface Lift" className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110 group-hover:scale-105" src="/lovable-uploads/dd5e69f4-9805-4832-bb5e-4e0e1558c4d6.png" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-500 group-hover:from-black/90 group-hover:via-black/60 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4 pointer-events-none">
                      <div className="min-h-[80px] flex items-end">
                        <h3 className="font-serif font-semibold text-2xl leading-tight">Subperiosteal Deep Plane / Composite Midface Lift</h3>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 7 - MACS Lift */}
                <div className="flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_30%] xl:flex-[0_0_23%]">
                  <div className="group relative h-[500px] overflow-hidden fade-in" style={{
                  animationDelay: '0.3s'
                }}>
                    <img alt="MACS Lift" className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110 group-hover:scale-105" src="/lovable-uploads/973c5b76-0f30-47ab-b221-24bbfd601c62.png" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-500 group-hover:from-black/90 group-hover:via-black/60 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4 pointer-events-none">
                      <div className="min-h-[80px] flex items-end">
                        <h3 className="font-serif font-semibold text-2xl leading-tight">MACS Lift</h3>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 8 - EndoChor™-Assisted Mid-Face Lift */}
                <div className="flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_30%] xl:flex-[0_0_23%]">
                  <div className="group relative h-[500px] overflow-hidden fade-in" style={{
                  animationDelay: '0.35s'
                }}>
                    <img alt="EndoChor™-Assisted Mid-Face Lift" className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110 group-hover:scale-105" src="/lovable-uploads/0a10f2b7-ea9f-453b-827e-fb8658416133.png" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-500 group-hover:from-black/90 group-hover:via-black/60 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4 pointer-events-none">
                      <div className="min-h-[80px] flex items-end">
                        <h3 className="font-serif font-semibold text-2xl leading-tight">EndoChor™-Assisted Mid-Face Lift</h3>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 9 - High SMAS / Extended High SMAS Lift */}
                <div className="flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_30%] xl:flex-[0_0_23%]">
                  <div className="group relative h-[500px] overflow-hidden fade-in" style={{
                  animationDelay: '0.4s'
                }}>
                    <img alt="High SMAS / Extended High SMAS Lift" className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110 group-hover:scale-105" src="/lovable-uploads/1ce92bc6-aebd-4997-b127-edb4463c814a.png" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-500 group-hover:from-black/90 group-hover:via-black/60 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4 pointer-events-none">
                      <div className="min-h-[80px] flex items-end">
                        <h3 className="font-serif font-semibold text-2xl leading-tight">High SMAS / Extended High SMAS Lift</h3>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 10 - All-In-One Facial Rejuvenation */}
                <div className="flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_30%] xl:flex-[0_0_23%]">
                  <div className="group relative h-[500px] overflow-hidden fade-in" style={{
                  animationDelay: '0.45s'
                }}>
                    <img alt="All-In-One Facial Rejuvenation" className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110 group-hover:scale-105" src="/lovable-uploads/4a1944f2-4749-4029-b5d2-2c5ba2a0b97c.png" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-500 group-hover:from-black/90 group-hover:via-black/60 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4 pointer-events-none">
                      <div className="min-h-[80px] flex items-end">
                        <h3 className="font-serif font-semibold text-2xl leading-tight">All-In-One Facial Rejuvenation</h3>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 11 - Ponytail Lift */}
                <div className="flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_30%] xl:flex-[0_0_23%]">
                  <div className="group relative h-[500px] overflow-hidden fade-in" style={{
                  animationDelay: '0.5s'
                }}>
                    <img alt="Ponytail Lift" className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110 group-hover:scale-105" src="/lovable-uploads/392cf1bd-03e7-455d-9dfa-affbfc24989d.jpg" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-500 group-hover:from-black/90 group-hover:via-black/60 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4 pointer-events-none">
                      <div className="min-h-[80px] flex items-end">
                        <h3 className="font-serif font-semibold text-2xl leading-tight">Ponytail Lift</h3>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 12 - Endoscopic Forehead & Brow Lift */}
                <div className="flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_30%] xl:flex-[0_0_23%]">
                  <div className="group relative h-[500px] overflow-hidden fade-in" style={{
                  animationDelay: '0.55s'
                }}>
                    <img alt="Endoscopic Forehead & Brow Lift" className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110 group-hover:scale-105" src="/lovable-uploads/f93b6d00-b802-48ff-92b2-7b2e0cfb9e42.png" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-500 group-hover:from-black/90 group-hover:via-black/60 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4 pointer-events-none">
                      <div className="min-h-[80px] flex items-end">
                        <h3 className="font-serif font-semibold text-2xl leading-tight">Endoscopic Forehead & Brow Lift</h3>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 13 - Blepharoplasty (Upper & Lower) */}
                <div className="flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_30%] xl:flex-[0_0_23%]">
                  <div className="group relative h-[500px] overflow-hidden fade-in" style={{
                  animationDelay: '0.6s'
                }}>
                    <img alt="Blepharoplasty (Upper & Lower)" className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110 group-hover:scale-105" src="/lovable-uploads/0cafffa9-0009-427f-8107-836de19f190e.png" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-500 group-hover:from-black/90 group-hover:via-black/60 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4 pointer-events-none">
                      <div className="min-h-[80px] flex items-end">
                        <h3 className="font-serif font-semibold text-2xl leading-tight">Blepharoplasty (Upper & Lower)</h3>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 14 - Facial Implants */}
                <div className="flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_30%] xl:flex-[0_0_23%]">
                  <div className="group relative h-[500px] overflow-hidden fade-in" style={{
                  animationDelay: '0.65s'
                }}>
                    <img alt="Facial Implants" className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110 group-hover:scale-105" src="/lovable-uploads/c0d465a6-42a6-43be-8d52-3e0d2a443948.jpg" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-500 group-hover:from-black/90 group-hover:via-black/60 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4 pointer-events-none">
                      <div className="min-h-[80px] flex items-end">
                        <h3 className="font-serif font-semibold text-2xl leading-tight">Facial Implants</h3>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 15 - Genioplasty */}
                <div className="flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_30%] xl:flex-[0_0_23%]">
                  <div className="group relative h-[500px] overflow-hidden fade-in" style={{
                  animationDelay: '0.7s'
                }}>
                    <img alt="Genioplasty" className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110 group-hover:scale-105" src="/lovable-uploads/efa2102f-ceee-461d-b8d6-42cba1415eed.jpg" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-500 group-hover:from-black/90 group-hover:via-black/60 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4 pointer-events-none">
                      <div className="min-h-[80px] flex items-end">
                        <h3 className="font-serif font-semibold text-2xl leading-tight">Genioplasty</h3>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 16 - Orthognathic Surgery */}
                <div className="flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_30%] xl:flex-[0_0_23%]">
                  <div className="group relative h-[500px] overflow-hidden fade-in" style={{
                  animationDelay: '0.75s'
                }}>
                    <img alt="Orthognathic Surgery" className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110 group-hover:scale-105" src="/lovable-uploads/e318f9d9-ab13-4c64-af11-09d4304ee563.jpg" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-500 group-hover:from-black/90 group-hover:via-black/60 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4 pointer-events-none">
                      <div className="min-h-[80px] flex items-end">
                        <h3 className="font-serif font-semibold text-2xl leading-tight">Orthognathic Surgery</h3>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Progress Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({
              length: Math.ceil(16 / 4)
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
                At Dr. Karaaltın's practice, facial rejuvenation is approached as both an art and a science. 
                Each face tells a unique story, and our goal is to restore and enhance natural beauty while 
                respecting individual anatomical features and aesthetic goals.
              </p>
              <p>
                Our comprehensive approach considers not just the surface appearance, but the underlying 
                structural changes that occur with aging. This deep understanding allows us to create results 
                that are natural, harmonious, and long-lasting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Section - Facial Anatomy - Redesigned */}
      <section className="py-20 md:py-32 px-6 md:px-8 lg:px-16 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-serif font-light text-3xl md:text-4xl lg:text-5xl tracking-wide mb-20 text-center fade-in-up">
            Facial Anatomy
          </h2>
          
          {/* Premium Layout: Central Image with Corner Items */}
          <div className="relative min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex items-center justify-center">
            {/* Central Anatomical Image - Editable */}
            <div className="w-full max-w-md md:max-w-lg aspect-[3/4] fade-in-up" style={{
            animationDelay: '0.2s'
          }}>
              <img alt="Facial anatomy illustration" className="w-full h-full object-cover rounded-sm shadow-lg" src="/lovable-uploads/8d30f07b-c239-4e9f-94cc-02b52e8dd0b0.png" />
            </div>
            
            {/* 4 Corner Items */}
            {/* Top Left - Bone Structure */}
            <div className="absolute top-0 left-0 w-64 md:w-80 space-y-3 fade-in-up" style={{
            animationDelay: '0.3s'
          }}>
              <h3 className="font-serif font-semibold text-xl md:text-2xl text-[#0d1f3a]">Bone Structure</h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                The foundation of facial architecture. Understanding bone resorption patterns is crucial 
                for comprehensive rejuvenation planning.
              </p>
            </div>
            
            {/* Top Right - Fat Compartments */}
            <div className="absolute top-0 right-0 w-64 md:w-80 space-y-3 text-right fade-in-up" style={{
            animationDelay: '0.4s'
          }}>
              <h3 className="font-serif font-semibold text-xl md:text-2xl text-[#0d1f3a]">Fat Compartments</h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Facial fat exists in distinct compartments that change volume and position with age, 
                affecting contours and fullness.
              </p>
            </div>
            
            {/* Bottom Left - Ligaments & SMAS */}
            <div className="absolute bottom-0 left-0 w-64 md:w-80 space-y-3 fade-in-up" style={{
            animationDelay: '0.5s'
          }}>
              <h3 className="font-serif font-semibold text-xl md:text-2xl text-[#0d1f3a]">Ligaments & SMAS</h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                The superficial musculoaponeurotic system and retaining ligaments provide structural 
                support that weakens over time.
              </p>
            </div>
            
            {/* Bottom Right - Skin & Dermis */}
            <div className="absolute bottom-0 right-0 w-64 md:w-80 space-y-3 text-right fade-in-up" style={{
            animationDelay: '0.6s'
          }}>
              <h3 className="font-serif font-semibold text-xl md:text-2xl text-[#0d1f3a]">Skin & Dermis</h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                The visible layer that reflects underlying structural changes and environmental effects 
                accumulated over years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Section - How the Face Ages */}
      <section className="py-16 md:py-24 px-4 lg:px-8 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="fade-in-up">
            <h2 className="font-serif font-light text-3xl md:text-4xl lg:text-5xl tracking-wide mb-12">
              How the Face Ages
            </h2>
            
            <div className="space-y-12">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 items-start">
                <h3 className="font-serif font-semibold text-2xl text-[#0d1f3a] lg:sticky lg:top-24">
                  Skin Changes
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Loss of collagen and elastin leads to decreased firmness and elasticity. Fine lines deepen 
                    into wrinkles, and skin texture becomes less smooth. Sun damage and environmental factors 
                    accelerate these changes, creating pigmentation irregularities and surface roughness.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 items-start">
                <h3 className="font-serif font-semibold text-2xl text-[#0d1f3a] lg:sticky lg:top-24">
                  Fat & Ligaments
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Facial fat compartments deflate and descend, creating hollowing in some areas and fullness 
                    in others. Retaining ligaments weaken, allowing tissues to migrate downward. This creates 
                    jowling, nasolabial folds, and loss of definition along the jawline.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 items-start">
                <h3 className="font-serif font-semibold text-2xl text-[#0d1f3a] lg:sticky lg:top-24">
                  Facial Skeleton
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Bone resorption occurs in key areas including the maxilla, mandible, and orbital rims. 
                    This skeletal framework loss reduces support for overlying soft tissues, contributing to 
                    an aged appearance that cannot be addressed by skin treatments alone.
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
                  Every patient receives a comprehensive facial analysis addressing their unique anatomy, 
                  aging patterns, and aesthetic goals. Dr. Karaaltın combines multiple techniques to achieve 
                  harmonious, natural-looking results that enhance rather than change your inherent beauty.
                </p>
                <p>
                  Our treatment plans may incorporate various procedures addressing different facial layers 
                  simultaneously, ensuring comprehensive rejuvenation with optimal outcomes and recovery.
                </p>
              </div>
            </div>
            
            {/* Image - Editable */}
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img alt="Customized treatment planning" className="w-full h-full object-cover" src="/lovable-uploads/2c0a45b3-dadb-4cb9-9521-04c68627d7b2.jpg" />
            </div>
          </div>
        </div>
      </section>

      {/* The Future of Face Section */}
      <section className="py-16 md:py-24 px-4 lg:px-8 bg-white">
        <div className="container mx-auto max-w-7xl">
          {/* Introduction - What is Endochor */}
          <div className="max-w-4xl mx-auto text-center mb-20 fade-in-up">
            <h2 className="font-serif font-light text-4xl md:text-5xl lg:text-6xl tracking-wide mb-8 text-[#0d1f3a]">
              THE FUTURE OF FACE
            </h2>
            <div className="space-y-6">
              <h3 className="font-serif font-semibold text-2xl md:text-3xl text-[#0d1f3a]">
                What is Endochor?
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Endochor is a groundbreaking line of biodegradable, 3D-engineered implants uniquely designed 
                for dynamic facial rejuvenation. Contributed by Professor Dr. Karaaltin, Endochor implants 
                integrate seamlessly with soft tissue planes and serve as intelligent scaffolds, enhancing 
                long-term surgical outcomes while respecting facial anatomy.
              </p>
            </div>
          </div>

          {/* F.A.C.E. Philosophy - 4 Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-24 fade-in">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-[#0d1f3a]/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-serif font-bold text-[#0d1f3a]">F</span>
              </div>
              <h4 className="font-serif font-semibold text-xl text-[#0d1f3a]">Fascial Anchoring</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Strategic fixation points that respect anatomical planes for lasting results
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-[#0d1f3a]/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-serif font-bold text-[#0d1f3a]">A</span>
              </div>
              <h4 className="font-serif font-semibold text-xl text-[#0d1f3a]">Anatomical Harmony</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Preserving natural facial dynamics and expressions through intelligent design
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-[#0d1f3a]/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-serif font-bold text-[#0d1f3a]">C</span>
              </div>
              <h4 className="font-serif font-semibold text-xl text-[#0d1f3a]">Contoured Lifting</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Multi-vector elevation addressing all dimensions of facial aging
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-[#0d1f3a]/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-serif font-bold text-[#0d1f3a]">E</span>
              </div>
              <h4 className="font-serif font-semibold text-xl text-[#0d1f3a]">Engineered Support</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Biodegradable scaffolds that integrate with tissue for enhanced longevity
              </p>
            </div>
          </div>

          {/* Technical Subsections - Split Layouts */}
          
          {/* 1. Transblepharoplasty Brow Lift */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 fade-in-up">
            <div className="space-y-6">
              <h3 className="font-serif font-light text-3xl md:text-4xl tracking-wide text-[#0d1f3a]">
                Transblepharoplasty Brow Lift with Endochor
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg italic">
                A minimally invasive innovation for upper facial rejuvenation.
              </p>
              <p className="text-gray-700 leading-relaxed">
                With a single upper eyelid incision, Dr. K's transblepharoplasty approach allows:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-3 text-[#0d1f3a] font-bold">•</span>
                  <span>Upper blepharoplasty and brow elevation in one session</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-[#0d1f3a] font-bold">•</span>
                  <span>Use of a small Endochor anchor implant to elevate and stabilize the lateral brow</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-[#0d1f3a] font-bold">•</span>
                  <span>Entirely performed under local anesthesia, with rapid recovery and no visible scars</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-[#0d1f3a] font-bold">•</span>
                  <span>Enhanced longevity and symmetry due to the implant's engineered retention zones</span>
                </li>
              </ul>
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-sm">
              <img alt="Transblepharoplasty Brow Lift with Endochor" className="w-full h-full object-cover" src="/lovable-uploads/98d24c4d-6260-4f38-a014-93f51678aca3.jpg" />
            </div>
          </div>

          {/* 2. Endoscopic Forehead & Brow Lift */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 fade-in-up">
            <div className="aspect-[4/3] overflow-hidden rounded-sm lg:order-1">
              <img alt="Endoscopic Forehead & Brow Lift using Endochor" className="w-full h-full object-cover" src="/lovable-uploads/5718cc3f-4803-4494-93e1-44a5b1d1fe99.jpg" />
            </div>
            <div className="space-y-6 lg:order-2">
              <h3 className="font-serif font-light text-3xl md:text-4xl tracking-wide text-[#0d1f3a]">
                Endoscopic Forehead & Brow Lift using Endochor
              </h3>
              <p className="text-gray-700 leading-relaxed">
                For patients desiring a more global upper facial lift:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-3 text-[#0d1f3a] font-bold">•</span>
                  <span>Scarless approach via small incisions in the hair-bearing scalp</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-[#0d1f3a] font-bold">•</span>
                  <span>Lifting and repositioning of frontalis, brow complex, and temporal structures</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-[#0d1f3a] font-bold">•</span>
                  <span>Strategic anchoring of tissues to Endochor implants fixed at stable periosteal points</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-[#0d1f3a] font-bold">•</span>
                  <span>Reduces recurrence of brow ptosis and improves longevity</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 3. Double-Double Implant Technique */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 fade-in-up">
            <div className="space-y-6">
              <h3 className="font-serif font-light text-3xl md:text-4xl tracking-wide text-[#0d1f3a]">
                The Double-Double Implant Technique — By Dr. K
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Professor Karaaltin's signature innovation uses dual Endochor implants per side to:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-3 text-[#0d1f3a] font-bold">•</span>
                  <span>Elevate lateral brow + temporal region simultaneously</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-[#0d1f3a] font-bold">•</span>
                  <span>Achieve a monobloc lifting effect without visible incisions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-[#0d1f3a] font-bold">•</span>
                  <span>Support both vertical and posterior vectors of tissue repositioning</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-[#0d1f3a] font-bold">•</span>
                  <span>Maximize lift while minimizing nerve risk and tissue trauma</span>
                </li>
              </ul>
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-sm">
              <img alt="The Double-Double Implant Technique by Dr. K" className="w-full h-full object-cover" src="/lovable-uploads/727caa4c-42f5-4e3a-8408-633cfaa9b482.jpg" />
            </div>
          </div>

          {/* 4. Ribbon Implant */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center fade-in-up">
            <div className="aspect-[4/3] overflow-hidden rounded-sm lg:order-1">
              <img alt="Ribbon Implant: For Neck Lift & SEAS Lift Support" className="w-full h-full object-cover" src="/lovable-uploads/72f60eea-7064-495f-9a80-eb102e356b30.jpg" />
            </div>
            <div className="space-y-6 lg:order-2">
              <h3 className="font-serif font-light text-3xl md:text-4xl tracking-wide text-[#0d1f3a]">
                Ribbon Implant: For Neck Lift & SEAS Lift Support
              </h3>
              <p className="text-gray-700 leading-relaxed">
                The Endochor Ribbon Implant serves as a versatile reinforcement matrix for:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-3 text-[#0d1f3a] font-bold">•</span>
                  <span>Submental neck lifts</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-[#0d1f3a] font-bold">•</span>
                  <span>Acting as a suspension hammock for the platysma and neck muscles</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-[#0d1f3a] font-bold">•</span>
                  <span>Reinforcement of SEAS Lift in facelift procedures</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-[#0d1f3a] font-bold">•</span>
                  <span>Anchoring deep layers to fixed fascial points</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-[#0d1f3a] font-bold">•</span>
                  <span>Enhancing vertical lift outcomes</span>
                </li>
              </ul>
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
export default Face;