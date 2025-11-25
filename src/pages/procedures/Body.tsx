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

  const allProcedures = [
    { id: '', name: "Body Lifting (Upper & Lower)", hasPage: false, subtitle: '', description: '' },
    { id: '', name: "360° Liposculpture", hasPage: false, subtitle: '', description: '' },
    { id: '', name: "Tummy Tuck (Abdominoplasty)", hasPage: false, subtitle: '', description: '' },
    { id: '', name: "Arm & Thigh Contouring", hasPage: false, subtitle: '', description: '' },
    { id: '', name: "Brazilian Butt Lift (BBL)", hasPage: false, subtitle: '', description: '' },
    { id: '', name: "Fat Transfer & Volume Enhancement", hasPage: false, subtitle: '', description: '' },
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
            src="/placeholder.svg"
            alt="Body procedures hero"
            className="w-full h-full object-cover animate-[scale-in_1.2s_ease-out]"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 fade-in-up">
          <h1 className="font-serif font-light text-5xl md:text-6xl lg:text-7xl tracking-wider mb-4">
            BODY AESTHETIC & CONTOURING PROCEDURES
          </h1>
          <p className="text-lg md:text-xl tracking-wide font-light max-w-3xl mx-auto">
            Advanced surgical artistry for reshaping, redefining, and rejuvenating the human form.
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
                        src="/placeholder.svg"
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
                      to={`/procedures/body/${procedure.id}`}
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

      {/* Educational Section - Understanding Body Aesthetics */}
      <section className="py-16 md:py-24 px-4 lg:px-8 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="fade-in-up">
            <h2 className="font-serif font-light text-3xl md:text-4xl lg:text-5xl tracking-wide mb-8">
              Understanding Body Aesthetics
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              <p>
                Achieving harmonious body aesthetics requires far more than fat removal or tissue tightening—it demands a deep understanding of anatomy, biomechanics, body proportions, and individual morphology.
              </p>
              <p>
                At My Medi Expert, Professor Dr. Karaaltin applies a precision-based approach to contouring and body rejuvenation, ensuring every outcome is balanced, safe, and anatomically intelligent.
              </p>
              <p>
                Most patients seek improvement, not transformation. For this reason, each treatment plan is tailored to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Enhance natural curves</li>
                <li>Restore youthful proportions</li>
                <li>Correct age- or weight-related changes</li>
                <li>Improve symmetry and silhouette</li>
                <li>Support long-lasting results with advanced surgical and regenerative techniques</li>
              </ul>
              <p className="font-semibold">
                Your body journey is shaped by a philosophy where science, safety, and aesthetics meet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Section - The Art & Science of Body Contouring */}
      <section className="py-16 md:py-24 px-4 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <div className="fade-in-up">
            <h2 className="font-serif font-light text-3xl md:text-4xl lg:text-5xl tracking-wide mb-8">
              The Art & Science of Body Contouring
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              <p>
                Modern body contouring goes beyond sculpting—it involves strategic restructuring guided by:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Understanding fat compartments</li>
                <li>Muscle and fascia dynamics</li>
                <li>Tissue elasticity</li>
                <li>Visceral vs. subcutaneous fat distribution</li>
                <li>Skin quality and its response to energy-based technologies</li>
              </ul>
              <p>
                Evidence-based aesthetic surgery has repeatedly shown improvements not only in physical appearance but also in self-confidence, emotional well-being, and overall quality of life.
              </p>
              <p className="font-semibold">
                At My Medi Expert, your body goals are approached with respect, precision, and a commitment to natural, elegant outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Section - How the Body Ages */}
      <section className="py-16 md:py-24 px-4 lg:px-8 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="fade-in-up">
            <h2 className="font-serif font-light text-3xl md:text-4xl lg:text-5xl tracking-wide mb-12">
              How the Body Ages
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif font-semibold text-2xl mb-3 text-[#0d1f3a]">Skin</h3>
                  <ul className="text-gray-700 leading-relaxed space-y-2">
                    <li>• Loss of elasticity and firmness</li>
                    <li>• Laxity after weight changes</li>
                    <li>• Stretching and texture irregularities</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-serif font-semibold text-2xl mb-3 text-[#0d1f3a]">Fat</h3>
                  <ul className="text-gray-700 leading-relaxed space-y-2">
                    <li>• Redistribution or loss of volume</li>
                    <li>• Stubborn deposits resistant to diet and exercise</li>
                    <li>• Asymmetric accumulation</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif font-semibold text-2xl mb-3 text-[#0d1f3a]">Muscle & Fascia</h3>
                  <ul className="text-gray-700 leading-relaxed space-y-2">
                    <li>• Weakening tone</li>
                    <li>• Soft tissue descent</li>
                    <li>• Altered contour lines</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-serif font-semibold text-2xl mb-3 text-[#0d1f3a]">Skeleton</h3>
                  <ul className="text-gray-700 leading-relaxed space-y-2">
                    <li>• Postural changes</li>
                    <li>• Ribcage, waist, and pelvic adjustments over time</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <p className="text-gray-700 leading-relaxed text-lg mt-8">
              Understanding these elements allows for personalized treatment planning that respects anatomical truth and aesthetic balance.
            </p>
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
                  Body contouring is not a one-size-fits-all procedure—it is a tailored system designed around:
                </p>
                
                <div>
                  <h3 className="font-serif font-semibold text-xl mb-3 text-[#0d1f3a]">Patient Factors</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Body type</li>
                    <li>Goals & expectations</li>
                    <li>Skin elasticity</li>
                    <li>Weight changes</li>
                    <li>Lifestyle</li>
                    <li>Anatomy & silhouette</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-serif font-semibold text-xl mb-3 text-[#0d1f3a]">Surgeon Factors</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Advanced surgical technique</li>
                    <li>Use of energy-assisted technologies</li>
                    <li>Safety protocols</li>
                    <li>Artistic vision</li>
                    <li>Experience in multi-layer contouring</li>
                  </ul>
                </div>
                
                <p className="font-semibold">
                  Your plan may include single or combined procedures to ensure a holistic, coordinated improvement.
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

      {/* Detailed Procedure Overview Section */}
      <section className="py-16 md:py-24 px-4 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-serif font-light text-4xl md:text-5xl lg:text-6xl tracking-wider mb-16 text-center fade-in">
            Overview of Body Procedures
          </h2>
          
          <div className="space-y-32">
            {/* Liposuction & Liposculpture */}
            <div className="fade-in-up">
              <h3 className="font-serif font-semibold text-4xl mb-8 text-[#0d1f3a]">
                Liposuction & Liposculpture
              </h3>
              
              <div className="space-y-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="aspect-[4/5] overflow-hidden rounded-sm">
                    <img
                      src="/placeholder.svg"
                      alt="Standard Liposuction"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-serif font-semibold text-2xl mb-4 text-[#0d1f3a]">
                      Standard Liposuction
                    </h4>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Targets stubborn fat deposits using power-, laser-, or ultrasound-assisted technologies. Not a weight-loss method but a contouring technique.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="order-2 lg:order-1">
                    <h4 className="font-serif font-semibold text-2xl mb-4 text-[#0d1f3a]">
                      High Definition Liposculpture
                    </h4>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Accentuates muscle borders, creating sculpted, athletic definition for patients with good skin tone.
                    </p>
                  </div>
                  <div className="aspect-[4/5] overflow-hidden rounded-sm order-1 lg:order-2">
                    <img
                      src="/placeholder.svg"
                      alt="High Definition Liposculpture"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="bg-gray-50 p-8 rounded-sm">
                  <h4 className="font-serif font-semibold text-2xl mb-4 text-[#0d1f3a]">
                    Technologies Used
                  </h4>
                  <ul className="text-gray-700 leading-relaxed text-lg space-y-2">
                    <li>• VASER™ ultrasound for fibrous areas</li>
                    <li>• J-Plasma™ / Renuvion for skin tightening</li>
                    <li>• Argon Plasma RF for improved tissue retraction</li>
                    <li>• Vibrosat Pro™ for vibration-assisted contouring & collagen stimulation</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Tummy Tuck (Abdominoplasty) */}
            <div className="fade-in-up">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="aspect-[4/5] overflow-hidden rounded-sm">
                  <img
                    src="/placeholder.svg"
                    alt="Tummy Tuck (Abdominoplasty)"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-4xl mb-6 text-[#0d1f3a]">
                    Tummy Tuck (Abdominoplasty)
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Removes excess skin, restores abdominal wall integrity, and enhances waist definition—often combined with liposuction for comprehensive results.
                  </p>
                </div>
              </div>
            </div>

            {/* Body Lifting (Upper & Lower) */}
            <div className="fade-in-up">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <h3 className="font-serif font-semibold text-4xl mb-6 text-[#0d1f3a]">
                    Body Lifting (Upper & Lower)
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Ideal after weight loss or age-related laxity:
                  </p>
                  <ul className="text-gray-700 leading-relaxed text-lg space-y-2">
                    <li>• Back lift</li>
                    <li>• Thigh lift</li>
                    <li>• Belt lipectomy</li>
                    <li>• Lower body lift</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed text-lg mt-6">
                    Provides circumferential tightening and contour restoration.
                  </p>
                </div>
                <div className="aspect-[4/5] overflow-hidden rounded-sm order-1 lg:order-2">
                  <img
                    src="/placeholder.svg"
                    alt="Body Lifting (Upper & Lower)"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Brazilian Butt Lift (BBL) */}
            <div className="fade-in-up">
              <h3 className="font-serif font-semibold text-4xl mb-8 text-[#0d1f3a]">
                Brazilian Butt Lift (BBL)
              </h3>
              
              <div className="space-y-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="aspect-[4/5] overflow-hidden rounded-sm">
                    <img
                      src="/placeholder.svg"
                      alt="Brazilian Butt Lift (BBL)"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Fat grafting technique to enhance shape, projection, and volume, using advanced closed-system fat processing for safety and symmetric outcomes.
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 p-8 rounded-sm">
                  <h4 className="font-serif font-semibold text-2xl mb-4 text-[#0d1f3a]">
                    BBL vs. Skin Laxity
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Fat grafting alone does not correct sagging; staged or combined lifting techniques may be required.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="order-2 lg:order-1">
                    <h4 className="font-serif font-semibold text-2xl mb-4 text-[#0d1f3a]">
                      Supercharged BBL (Implant + Fat)
                    </h4>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Performed in stages to ensure safety and avoid vascular compromise.
                    </p>
                  </div>
                  <div className="aspect-[4/5] overflow-hidden rounded-sm order-1 lg:order-2">
                    <img
                      src="/placeholder.svg"
                      alt="Supercharged BBL"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Fat Transfer & Volume Enhancement */}
            <div className="fade-in-up">
              <h3 className="font-serif font-semibold text-4xl mb-8 text-[#0d1f3a]">
                Fat Transfer & Volume Enhancement
              </h3>
              
              <div className="space-y-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="aspect-[4/5] overflow-hidden rounded-sm">
                    <img
                      src="/placeholder.svg"
                      alt="Fat Transfer & Volume Enhancement"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-gray-700 leading-relaxed text-lg mb-6">
                      Used for:
                    </p>
                    <ul className="text-gray-700 leading-relaxed text-lg space-y-2">
                      <li>• Hip dips</li>
                      <li>• Buttocks</li>
                      <li>• Breasts</li>
                      <li>• Hands</li>
                      <li>• Calves</li>
                      <li>• Scarring or irregularities</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 p-8 rounded-sm">
                  <h4 className="font-serif font-semibold text-2xl mb-4 text-[#0d1f3a]">
                    Macro/Micro Fat Cell Enriched Grafting (Signature Innovation)
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Developed by Dr. Karaaltin for treating severe contour irregularities and fibrosis using stem cell–enriched fat. Enhances integration, volume retention, and tissue quality.
                  </p>
                </div>
              </div>
            </div>

            {/* Arm & Thigh Contouring */}
            <div className="fade-in-up">
              <h3 className="font-serif font-semibold text-4xl mb-8 text-[#0d1f3a]">
                Arm & Thigh Contouring
              </h3>
              
              <div className="space-y-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="aspect-[4/5] overflow-hidden rounded-sm">
                    <img
                      src="/placeholder.svg"
                      alt="Arm Lift (Brachioplasty)"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-serif font-semibold text-2xl mb-4 text-[#0d1f3a]">
                      Arm Lift (Brachioplasty / Scarless Options)
                    </h4>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Targets excess skin due to aging or weight loss. Includes traditional or minimally invasive RF approaches.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="order-2 lg:order-1">
                    <h4 className="font-serif font-semibold text-2xl mb-4 text-[#0d1f3a]">
                      Thigh Lift
                    </h4>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Improves inner thigh laxity with or without skin excision.
                    </p>
                  </div>
                  <div className="aspect-[4/5] overflow-hidden rounded-sm order-1 lg:order-2">
                    <img
                      src="/placeholder.svg"
                      alt="Thigh Lift"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Combination Procedures */}
            <div className="fade-in-up">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="aspect-[4/5] overflow-hidden rounded-sm">
                  <img
                    src="/placeholder.svg"
                    alt="Combination Procedures"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-4xl mb-6 text-[#0d1f3a]">
                    Combination Procedures
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Common combinations include:
                  </p>
                  <ul className="text-gray-700 leading-relaxed text-lg space-y-2">
                    <li>• Mommy Makeover</li>
                    <li>• Tummy Tuck + Liposculpture</li>
                    <li>• BBL + Abdomen definition</li>
                    <li>• Lower body lift + flanks</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recovery & Safety Section */}
      <section className="py-16 md:py-24 px-4 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <div className="fade-in-up">
            <h2 className="font-serif font-light text-4xl md:text-5xl lg:text-6xl tracking-wide mb-12 text-center">
              Recovery, Safety & Postoperative Care
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#0d1f3a] mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Compression garments (4–6 weeks)
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#0d1f3a] mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Manual Lymphatic Drainage for swelling
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#0d1f3a] mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    V.A.C (negative pressure therapy) in lifting procedures
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#0d1f3a] mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Gradual return to activity
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#0d1f3a] mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Focus on minimizing downtime & maximizing long-term stability
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <BeforeAfterSection />

      {/* Get Started Section */}
      <ContactCTASection />

      <Footer />
    </div>
  );
};

export default Body;