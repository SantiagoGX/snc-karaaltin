import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BeforeAfterSection from "@/components/home/BeforeAfterSection";
import ContactCTASection from "@/components/home/ContactCTASection";
import { ChevronRight, ChevronLeft } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

const Nose = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: "start",
    loop: false,
    skipSnaps: false,
    dragFree: false,
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

  const proceduresWithPages = [
    { 
      id: "smart-template-rhinoplasty", 
      name: "Smart Template Rhinoplasty", 
      subtitle: "Signature Technique",
      description: "Precision-guided approach for consistent, natural results using personalized surgical templates.",
      image: "/procedures/nose/smart-template-rhinoplasty.jpg"
    },
  ];

  const proceduresWithoutPages = [
    { name: "Primary Rhinoplasty", image: "/procedures/nose/primary-rhinoplasty.jpg" },
    { name: "Revision Rhinoplasty", image: "/procedures/nose/primary-rhinoplasty.jpg" },
    { name: "Ethnic Rhinoplasty", image: "/procedures/nose/primary-rhinoplasty.jpg" },
    { name: "Septoplasty", image: "/procedures/nose/primary-rhinoplasty.jpg" },
    { name: "Turbinate Reduction", image: "/procedures/nose/primary-rhinoplasty.jpg" },
    { name: "Functional Rhinoplasty", image: "/procedures/nose/primary-rhinoplasty.jpg" },
    { name: "Non-Surgical Rhinoplasty", image: "/procedures/nose/smart-template-rhinoplasty.jpg" },
  ];

  const allProcedures = [
    ...proceduresWithPages.map(p => ({ ...p, hasPage: true })),
    ...proceduresWithoutPages.map(proc => ({ id: '', name: proc.name, hasPage: false, subtitle: '', description: '', image: proc.image }))
  ];

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

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden fade-in">
        {/* Background Image - Editable */}
        <div className="absolute inset-0 z-0">
          <img
            src="/procedures/nose/hero-nose.jpg"
            alt="Nose procedures hero"
            className="w-full h-full object-cover animate-[scale-in_1.2s_ease-out]"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 fade-in-up">
          <h1 className="font-serif font-light text-6xl md:text-7xl lg:text-8xl tracking-wider mb-4">
            NOSE
          </h1>
          <p className="text-lg md:text-xl tracking-wide font-light">
            Rhinoplasty & Nasal Reconstruction Procedures
          </p>
        </div>
      </section>

      {/* All Nose Procedures Section */}
      <section className="bg-gray-100 py-16 md:py-24 px-4 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <h2 className="font-serif font-light text-4xl md:text-5xl lg:text-6xl tracking-wider mb-12 text-center fade-in">
            ALL NOSE PROCEDURES
          </h2>
          
          {/* Carousel Container */}
          <div className="relative">
            {/* Navigation Arrows - Desktop Only */}
            <button
              onClick={scrollPrev}
              className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 w-14 h-14 items-center justify-center rounded-full bg-white border-2 border-gray-900 shadow-lg hover:bg-gray-900 hover:text-white transition-all duration-300"
              aria-label="Previous procedures"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={scrollNext}
              className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 w-14 h-14 items-center justify-center rounded-full bg-white border-2 border-gray-900 shadow-lg hover:bg-gray-900 hover:text-white transition-all duration-300"
              aria-label="Next procedures"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Embla Carousel */}
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-6 lg:gap-8">
                {allProcedures.map((procedure, index) => {
                  const CardContent = (
                    <div className="group relative h-[500px] overflow-hidden fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                      {/* Background Image */}
                      <img
                        src={procedure.image || "/placeholder.svg"}
                        alt={procedure.name}
                        className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110 group-hover:scale-105"
                      />
                      
                      {/* Gradient Overlay - Darkens on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-500 group-hover:from-black/90 group-hover:via-black/60"></div>
                      
                      {/* Signature Badge - Top Left with Glassmorphism */}
                      {procedure.subtitle && (
                        <div className="absolute top-6 left-6 backdrop-blur-md bg-white/20 px-4 py-2 border border-white/30 shadow-lg">
                          <p className="text-[10px] uppercase tracking-[0.2em] text-white font-light">
                            {procedure.subtitle}
                          </p>
                        </div>
                      )}
                      
                      {/* Text Content - Default State */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4">
                        <div className="min-h-[80px] flex items-end">
                          <h3 className="font-serif font-semibold text-2xl leading-tight">
                            {procedure.name}
                          </h3>
                        </div>
                      </div>

                      {/* Description - Hover State */}
                      {procedure.description && (
                        <div className="absolute inset-0 p-6 text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 flex flex-col justify-end">
                          <div className="min-h-[80px] flex flex-col justify-end">
                            <h3 className="font-serif font-semibold text-2xl mb-4 leading-tight">
                              {procedure.name}
                            </h3>
                            <p className="text-sm leading-relaxed">
                              {procedure.description}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  );

                  return procedure.hasPage ? (
                    <Link
                      key={procedure.id}
                      to={`/procedures/nose/${procedure.id}`}
                      className="flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_30%] xl:flex-[0_0_23%]"
                    >
                      {CardContent}
                    </Link>
                  ) : (
                    <div
                      key={procedure.name}
                      className="flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_30%] xl:flex-[0_0_23%]"
                    >
                      {CardContent}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Progress Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: Math.ceil(allProcedures.length / 4) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index * 4)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    Math.floor(selectedIndex / 4) === index
                      ? "w-12 bg-gray-900"
                      : "w-8 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide group ${index + 1}`}
                />
              ))}
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
                Rhinoplasty at Dr. Karaaltın's practice is approached as both an artistic and functional 
                endeavor. The goal is to create a nose that harmonizes with your facial features while 
                ensuring optimal breathing and long-term structural integrity.
              </p>
              <p>
                Our comprehensive approach considers not only aesthetic appearance but also internal anatomy, 
                airway function, and the unique characteristics of your nasal structure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Section - Nasal Anatomy */}
      <section className="py-16 md:py-24 px-4 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <div className="fade-in-up">
            <h2 className="font-serif font-light text-3xl md:text-4xl lg:text-5xl tracking-wide mb-12">
              Nasal Anatomy
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif font-semibold text-2xl mb-3 text-[#0d1f3a]">Nasal Framework</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Bone and cartilage create the nasal structure. Understanding their relationship is 
                    essential for achieving both aesthetic and functional outcomes.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-serif font-semibold text-2xl mb-3 text-[#0d1f3a]">Skin Envelope</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Skin thickness and elasticity affect surgical results and healing. Thicker skin 
                    requires different techniques than thin skin.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif font-semibold text-2xl mb-3 text-[#0d1f3a]">Airway Structures</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Internal valves, turbinates, and septum determine breathing function. Surgical planning 
                    addresses both form and airflow.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-serif font-semibold text-2xl mb-3 text-[#0d1f3a]">Facial Harmony</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The nose exists in relationship to other facial features. Surgical planning considers 
                    proportions and balance with the entire face.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Section - Common Nasal Concerns */}
      <section className="py-16 md:py-24 px-4 lg:px-8 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="fade-in-up">
            <h2 className="font-serif font-light text-3xl md:text-4xl lg:text-5xl tracking-wide mb-12">
              Common Nasal Concerns
            </h2>
            
            <div className="space-y-12">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 items-start">
                <h3 className="font-serif font-semibold text-2xl text-[#0d1f3a] lg:sticky lg:top-24">
                  Structural Issues
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Dorsal humps, wide bridges, bulbous tips, or asymmetries affect both appearance and 
                    self-confidence. Surgical correction reshapes these features while maintaining natural proportions.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 items-start">
                <h3 className="font-serif font-semibold text-2xl text-[#0d1f3a] lg:sticky lg:top-24">
                  Breathing Problems
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Deviated septums, valve collapse, or turbinate hypertrophy obstruct airflow. Functional 
                    rhinoplasty addresses these issues while improving nasal appearance.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 items-start">
                <h3 className="font-serif font-semibold text-2xl text-[#0d1f3a] lg:sticky lg:top-24">
                  Revision Cases
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Previous surgeries may result in aesthetic or functional concerns. Revision rhinoplasty 
                    corrects these issues using advanced techniques and careful structural reconstruction.
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
                  Every patient receives a comprehensive nasal analysis using advanced imaging and facial 
                  proportion assessment. Dr. Karaaltın creates a surgical plan that addresses your specific 
                  anatomy, concerns, and aesthetic goals.
                </p>
                <p>
                  Treatment considers skin type, nasal structure, airway function, and facial harmony to 
                  achieve results that are natural, balanced, and long-lasting.
                </p>
              </div>
            </div>
            
            {/* Image - Editable */}
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src="/placeholder.svg"
                alt="Customized treatment planning"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <BeforeAfterSection />

      {/* CTA Section */}
      <ContactCTASection />

      <Footer />
    </div>
  );
};

export default Nose;