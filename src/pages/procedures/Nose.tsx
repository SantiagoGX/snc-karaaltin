import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BeforeAfterSection from "@/components/home/BeforeAfterSection";
import ContactCTASection from "@/components/home/ContactCTASection";
const Nose = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const procedures = [{
    id: 1,
    title: "Rhinoplasty",
    description: "Refines nasal shape, improves balance, and enhances airway function with natural, long-lasting results.",
    image: "/placeholder.svg",
    isSignature: false,
    hasPage: true,
    link: "/procedures/nose/rhinoplasty"
  }, {
    id: 2,
    title: "Smart Template Rhinoplasty",
    description: "Signature method designed by Dr. Karaaltin using advanced anatomical templates to optimize projection, symmetry, and long-term nasal support.",
    image: "/placeholder.svg",
    isSignature: true,
    hasPage: true,
    link: "/procedures/nose/smart-template-rhinoplasty"
  }];
  const totalSlides = Math.ceil(procedures.length / 3);
  const handlePrev = () => {
    setCurrentSlide(prev => prev > 0 ? prev - 1 : prev);
  };
  const handleNext = () => {
    setCurrentSlide(prev => prev < totalSlides - 1 ? prev + 1 : prev);
  };
  return <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[400px] lg:min-h-[500px] flex items-center justify-center bg-gray-900">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img src="/placeholder.svg" alt="Nose procedures hero" className="absolute inset-0 w-full h-full object-cover" />
          <div className="relative z-20 container mx-auto px-8 lg:px-16 text-center text-white space-y-4 fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide uppercase">
              NOSE
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl font-light max-w-3xl mx-auto">
              Precision-driven nasal surgery combining structure, function, and refined aesthetics.
            </p>
          </div>
        </section>

        {/* All Nose Procedures Carousel */}
        <section className="py-16 lg:py-24 px-8 lg:px-16 bg-white relative">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-center mb-12 lg:mb-16 fade-in">
              ALL NOSE PROCEDURES
            </h2>

            <div className="relative">
              {/* Carousel Container */}
              <div className="overflow-hidden">
                <div className="flex transition-transform duration-500 ease-out" style={{
                transform: `translateX(-${currentSlide * 100}%)`
              }}>
                  {procedures.map(procedure => <div key={procedure.id} className="flex-[0_0_100%] md:flex-[0_0_33.333%] px-3 group">
                      <a href={procedure.hasPage ? procedure.link : undefined} className={`block relative h-[500px] rounded-lg overflow-hidden ${!procedure.hasPage ? "cursor-default" : ""}`}>
                        {/* Background Image */}
                        <img src={procedure.image} alt={procedure.title} className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110" />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20 transition-all duration-500 group-hover:from-black/70 group-hover:via-black/30 group-hover:to-transparent" />

                        {/* Signature Badge */}
                        {procedure.isSignature && <div className="absolute top-4 left-4 z-10">
                            <span className="inline-block px-4 py-2 text-xs uppercase tracking-widest font-light bg-white/90 backdrop-blur-md text-gray-900 border border-white/20 rounded">
                              Signature Technique
                            </span>
                          </div>}

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                          <div className="space-y-3">
                            <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase text-white">
                              {procedure.title}
                            </h3>

                            {/* Description - shows on hover */}
                            <p className="text-white/90 text-sm leading-relaxed max-h-0 opacity-0 overflow-hidden transition-all duration-500 group-hover:max-h-32 group-hover:opacity-100">
                              {procedure.description}
                            </p>

                            {procedure.hasPage && <div className="flex items-center gap-2 text-white text-sm uppercase tracking-wider font-light opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                                View Procedure
                                <span className="text-lg">→</span>
                              </div>}
                          </div>
                        </div>
                      </a>
                    </div>)}
                </div>
              </div>

              {/* Navigation Arrows */}
              <button onClick={handlePrev} disabled={currentSlide === 0} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 flex items-center justify-center hover:bg-gray-900 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 shadow-lg z-10" aria-label="Previous procedures">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button onClick={handleNext} disabled={currentSlide === totalSlides - 1} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 flex items-center justify-center hover:bg-gray-900 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 shadow-lg z-10" aria-label="Next procedures">
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Progress Indicators */}
              <div className="flex justify-center gap-2 mt-8">
                {Array.from({
                length: totalSlides
              }).map((_, index) => <button key={index} onClick={() => setCurrentSlide(index)} className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide ? "w-8 bg-gray-900" : "w-2 bg-gray-300 hover:bg-gray-400"}`} aria-label={`Go to slide ${index + 1}`} />)}
              </div>
            </div>
          </div>
        </section>

        {/* Educational Blocks */}
        <section className="py-16 lg:py-24 px-8 lg:px-16 bg-gray-50">
          <div className="container mx-auto max-w-5xl space-y-16">
            {/* Philosophy */}
            <div className="space-y-6 fade-in">
              <h2 className="text-3xl md:text-4xl font-light tracking-wide uppercase text-center">
                Philosophy of Nasal Aesthetics
              </h2>
              <p className="text-gray-600 text-center leading-relaxed max-w-3xl mx-auto">
                The nose is the central anchor of facial harmony. Professor Dr. Karaaltin approaches nasal aesthetics with a philosophy rooted in balance, structure, and natural beauty—prioritizing both functional breathing and refined visual proportions.
              </p>
            </div>

            {/* Understanding Nasal Anatomy - Redesigned */}
            <div className="space-y-16 fade-in">
              <h2 className="text-3xl md:text-4xl font-light tracking-wide uppercase text-center">
                Understanding Nasal Anatomy
              </h2>
              
              {/* Premium Layout: Central Image with Corner Items */}
              <div className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center justify-center">
                {/* Central Anatomical Image - Editable */}
                <div className="w-full max-w-sm md:max-w-md aspect-[3/4] fade-in-up" style={{ animationDelay: '0.2s' }}>
                  <img
                    src="/placeholder.svg"
                    alt="Nasal anatomy illustration"
                    className="w-full h-full object-cover rounded-sm shadow-lg"
                  />
                </div>
                
                {/* 4 Corner Items */}
                {/* Top Left - Bone & Cartilage Framework */}
                <div className="absolute top-0 left-0 w-56 md:w-72 space-y-2 fade-in-up" style={{ animationDelay: '0.3s' }}>
                  <h3 className="text-lg md:text-xl font-light uppercase tracking-wide text-gray-900">
                    Bone & Cartilage Framework
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    Defines projection, bridge shape, and support.
                  </p>
                </div>
                
                {/* Top Right - Soft Tissue Envelope */}
                <div className="absolute top-0 right-0 w-56 md:w-72 space-y-2 text-right fade-in-up" style={{ animationDelay: '0.4s' }}>
                  <h3 className="text-lg md:text-xl font-light uppercase tracking-wide text-gray-900">
                    Soft Tissue Envelope
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    Thickness and elasticity influence refinement.
                  </p>
                </div>
                
                {/* Bottom Left - Airway Support */}
                <div className="absolute bottom-0 left-0 w-56 md:w-72 space-y-2 fade-in-up" style={{ animationDelay: '0.5s' }}>
                  <h3 className="text-lg md:text-xl font-light uppercase tracking-wide text-gray-900">
                    Airway Support
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    Septum and valve integrity determine breathing quality.
                  </p>
                </div>
                
                {/* Bottom Right - Ethnic & Structural Variations */}
                <div className="absolute bottom-0 right-0 w-56 md:w-72 space-y-2 text-right fade-in-up" style={{ animationDelay: '0.6s' }}>
                  <h3 className="text-lg md:text-xl font-light uppercase tracking-wide text-gray-900">
                    Ethnic & Structural Variations
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    Essential for personalized planning.
                  </p>
                </div>
              </div>
            </div>

            {/* What Can Rhinoplasty Address */}
            <div className="space-y-6 fade-in">
              <h2 className="text-3xl md:text-4xl font-light tracking-wide uppercase text-center">
                What Can Rhinoplasty Address?
              </h2>
              <p className="text-gray-600 text-center leading-relaxed max-w-3xl mx-auto">
                Bridge irregularities, tip refinement, crooked septum, drooping tip, nasal base width, structural asymmetries, breathing difficulties, and revision cases.
              </p>
            </div>
          </div>
        </section>

        {/* Procedure Overview */}
        <section className="py-16 lg:py-24 px-8 lg:px-16 bg-white">
          <div className="container mx-auto max-w-6xl space-y-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-center mb-12 fade-in">
              Nose Procedure Overview
            </h2>

            {/* Rhinoplasty (Primary) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center fade-in-up">
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase">
                  Rhinoplasty (Primary)
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Refines nasal shape, improves balance, and enhances airway function with natural, long-lasting results.
                </p>
              </div>
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img src="/placeholder.svg" alt="Rhinoplasty procedure" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Smart Template Rhinoplasty */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center fade-in-up">
              <div className="aspect-[4/3] rounded-lg overflow-hidden order-2 lg:order-1">
                <img src="/placeholder.svg" alt="Smart Template Rhinoplasty" className="w-full h-full object-cover" />
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase">
                  Smart Template Rhinoplasty <span className="text-sm">(Signature)</span>
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Signature method designed by Dr. Karaaltin using advanced anatomical templates to optimize projection, symmetry, and long-term nasal support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Before & After Section */}
        <BeforeAfterSection />

        {/* Contact CTA Section */}
        <ContactCTASection />
      </main>
      <Footer />
    </>;
};
export default Nose;