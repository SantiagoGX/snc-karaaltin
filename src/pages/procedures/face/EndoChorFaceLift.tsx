import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/home/ContactCTASection";
import drKaraaltinLogo from "@/assets/dr-karaaltin-logo-white.svg";
const EndoChorFaceLift = () => {
  const [activeCard, setActiveCard] = useState(0);
  const overviewRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      if (!cardsRef.current) return;
      const cards = cardsRef.current.querySelectorAll('.overview-card');
      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
          setActiveCard(index);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
      {/* 1. HERO SECTION */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img src="/placeholder.svg" alt="Endochor Face Lift Hero" className="absolute inset-0 w-full h-full object-cover animate-[scale-in_1.5s_ease-out]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="relative container mx-auto px-8 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-[0.1em] uppercase text-white mb-6 animate-fade-in">
            The Endochor® Face Lift
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl font-light animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
            Minimally Invasive. Maximally Effective.
          </p>
        </div>
      </section>

      {/* 2. INTRO / SEO BLOCK */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-8 max-w-4xl text-center content-spacing">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 animate-fade-in">
            The Endochor® Face Lift is a cutting-edge endoscopic lifting system designed by Professor Dr. Karaaltin. It blends minimally invasive access with custom-engineered biodegradable implants that reposition deep facial structures without visible scars.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed animate-fade-in" style={{
            animationDelay: '0.1s'
          }}>
            Ideal for rejuvenating the brow, midface, and neck, this system reduces downtime while delivering stable, natural-looking elevation.
          </p>
        </div>
      </section>

      {/* 3. OVERVIEW — HAKIMI STICKY EFFECT */}
      <section ref={overviewRef} className="overview-section-dark">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16 relative">
            {/* LEFT: STICKY */}
            <div className="overview-sticky-left animate-fade-in">
              <div>
                <h2 className="overview-title-dark">
                  Endochor® Face Lift
                </h2>
                <p className="overview-subtitle-dark">
                  Overview
                </p>
              </div>
              <img src={drKaraaltinLogo} alt="Dr. Karaaltin Logo" className="w-48 h-auto opacity-80" />
            </div>

            {/* RIGHT: SCROLLABLE CARDS */}
            <div ref={cardsRef} className="space-y-8 min-h-screen">
              <div className={`overview-card-dark ${activeCard === 0 ? 'shadow-lg border-white/20' : ''}`}>
                <h3 className="overview-card-title-dark">
                  01 // What Makes Endochor® Unique
                </h3>
                <p className="overview-card-text-dark">
                  Biodegradable PCL implants engineered for optimal vectors, soft-tissue integration, and long-term support—without permanent foreign material.
                </p>
              </div>

              <div className={`overview-card bg-white p-8 lg:p-10 rounded-lg shadow-sm border border-gray-200 transition-all duration-500 ${activeCard === 1 ? 'shadow-lg border-gray-300' : ''}`} style={{
                animationDelay: '0.1s'
              }}>
                <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase text-gray-900 mb-4">
                  02 // Endochor® Forehead Lift
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Enhances brow, temporal, and upper-face zones using discreet scalp incisions and vertical/oblique lift vectors—completely scarless.
                </p>
              </div>

              <div className={`overview-card bg-white p-8 lg:p-10 rounded-lg shadow-sm border border-gray-200 transition-all duration-500 ${activeCard === 2 ? 'shadow-lg border-gray-300' : ''}`} style={{
                animationDelay: '0.2s'
              }}>
                <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase text-gray-900 mb-4">
                  03 // Endochor® Mid-Face Lift
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Elevates malar and nasolabial structures, restoring contour and midface volume without the need for fillers or extensive dissection.
                </p>
              </div>

              <div className={`overview-card bg-white p-8 lg:p-10 rounded-lg shadow-sm border border-gray-200 transition-all duration-500 ${activeCard === 3 ? 'shadow-lg border-gray-300' : ''}`} style={{
                animationDelay: '0.3s'
              }}>
                <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase text-gray-900 mb-4">
                  04 // Endochor® Ribbon
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                  A versatile bioanchor supporting:
                </p>
                <ul className="text-base md:text-lg text-gray-700 leading-relaxed space-y-2">
                  <li>• Neck rejuvenation</li>
                  <li>• Lower face lift</li>
                  <li>• Temporal & midface anchoring</li>
                </ul>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mt-4">
                  Offers secure, customizable lifting planes.
                </p>
              </div>

              <div className={`overview-card bg-white p-8 lg:p-10 rounded-lg shadow-sm border border-gray-200 transition-all duration-500 ${activeCard === 4 ? 'shadow-lg border-gray-300' : ''}`} style={{
                animationDelay: '0.4s'
              }}>
                <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase text-gray-900 mb-4">
                  05 // Reduced Operative Time
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Endoscopic access + pre-shaped implants shorten operative duration, minimize trauma, and accelerate recovery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED SECTION */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-fade-in">
              <img alt="Endochor Face Lift With Dr. Karaaltin" className="w-full h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg" src="/lovable-uploads/a5bd4849-ba9a-4a1d-ad98-029a6037e00d.jpg" />
            </div>
            <div className="order-1 lg:order-2 space-y-6 content-spacing animate-fade-in" style={{
              animationDelay: '0.2s'
            }}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-gray-900">
                Endochor® With Dr. Karaaltin
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                The Endochor® system is backed by decades of anatomical research and bioengineering excellence. Each implant is CE-certified and clinically validated, making this one of the safest and most advanced scarless lifting solutions available.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 text-xs uppercase tracking-widest font-light rounded hover:bg-gray-800 transition-all duration-300 button-hover">
                Book Now
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROCEDURE DETAILS */}
      <section className="section-spacing bg-gray-50">
        <div className="container mx-auto px-8 max-w-6xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-gray-900 text-center mb-16 animate-fade-in">
            Procedure Details
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200 animate-fade-in hover:shadow-lg transition-all duration-300">
              <h3 className="text-lg font-semibold text-gray-900 uppercase tracking-wide mb-3">
                Endoscopic Access
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Through hidden scalp incisions
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 animate-fade-in hover:shadow-lg transition-all duration-300" style={{
              animationDelay: '0.1s'
            }}>
              <h3 className="text-lg font-semibold text-gray-900 uppercase tracking-wide mb-3">
                No Skin Tension
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Or distortion of facial features
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 animate-fade-in hover:shadow-lg transition-all duration-300" style={{
              animationDelay: '0.2s'
            }}>
              <h3 className="text-lg font-semibold text-gray-900 uppercase tracking-wide mb-3">
                Internal Lifting
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                With biodegradable implants
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 animate-fade-in hover:shadow-lg transition-all duration-300" style={{
              animationDelay: '0.3s'
            }}>
              <h3 className="text-lg font-semibold text-gray-900 uppercase tracking-wide mb-3">
                Multi-Zone Elevation
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Comprehensive brow, midface & neck
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 animate-fade-in hover:shadow-lg transition-all duration-300" style={{
              animationDelay: '0.4s'
            }}>
              <h3 className="text-lg font-semibold text-gray-900 uppercase tracking-wide mb-3">
                Controlled Vectors
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Tailored to each patient
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SURGICAL JOURNEY */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-gray-900 text-center mb-16 animate-fade-in">
            Your Surgical Journey
          </h2>
          
          <div className="space-y-8">
            {[{
              step: "01",
              title: "Consultation",
              description: "Comprehensive assessment of facial anatomy and rejuvenation goals"
            }, {
              step: "02",
              title: "Endoscopic Mapping",
              description: "Precise identification of lift vectors and implant placement"
            }, {
              step: "03",
              title: "Implant Selection",
              description: "Custom Endochor® implant configuration for optimal results"
            }, {
              step: "04",
              title: "Multi-Zone Lift",
              description: "Endoscopic elevation of brow, midface, and/or neck"
            }, {
              step: "05",
              title: "Postoperative Care",
              description: "Minimal downtime protocol with structured follow-ups"
            }].map((item, index) => <div key={index} className="flex flex-col md:flex-row gap-6 items-start p-6 bg-gray-50 rounded-lg border border-gray-200 animate-fade-in" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                <div className="flex-shrink-0 w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center text-xl font-light">
                  {item.step}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl md:text-2xl font-light tracking-wide uppercase text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-base text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* 7. RECOVERY BLOCK */}
      <section className="section-spacing bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img alt="Recovery & Healing" className="w-full h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg" src="/lovable-uploads/c4d3b907-1413-4370-b29d-f53bc1849450.jpg" />
            </div>
            <div className="space-y-6 content-spacing animate-fade-in" style={{
              animationDelay: '0.2s'
            }}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-gray-900">
                Recovery & Healing
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Minimal swelling, rapid return to daily activity, and no visible facial scars. Implant integration enhances long-term support.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 text-xs uppercase tracking-widest font-light rounded hover:bg-gray-800 transition-all duration-300 button-hover">
                Book a Consultation
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. IDEAL CANDIDATES */}
      <section className="candidates-section-dark">
        <div className="container mx-auto px-8 max-w-6xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-center mb-16 animate-fade-in text-white">
            Ideal Candidates
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="candidate-card-dark text-center animate-fade-in" style={{
              animationDelay: '0.1s'
            }}>
              <div className="candidate-icon-dark">
                👁️
              </div>
              <h3 className="candidate-card-title-dark">
                Brow Ptosis
              </h3>
              <p className="candidate-card-text-dark">
                Drooping brow requiring elevation
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 text-center animate-fade-in hover:shadow-lg transition-all duration-300" style={{
              animationDelay: '0.2s'
            }}>
              <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                😌
              </div>
              <h3 className="text-lg font-semibold text-gray-900 uppercase tracking-wide mb-3">
                Midface Descent
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Loss of cheek volume and contour
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 text-center animate-fade-in hover:shadow-lg transition-all duration-300" style={{
              animationDelay: '0.3s'
            }}>
              <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                🦢
              </div>
              <h3 className="text-lg font-semibold text-gray-900 uppercase tracking-wide mb-3">
                Neck Laxity
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Loose skin or bands in neck area
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 text-center animate-fade-in hover:shadow-lg transition-all duration-300" style={{
              animationDelay: '0.4s'
            }}>
              <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                ✨
              </div>
              <h3 className="text-lg font-semibold text-gray-900 uppercase tracking-wide mb-3">
                Scarless Solution
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Desire for minimal visible scarring
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. SCAR EXPECTATIONS */}
      <section className="section-spacing bg-gray-50">
        <div className="container mx-auto px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-gray-900 text-center mb-16 animate-fade-in">
            Scar Expectations
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-10 lg:p-12 rounded-lg shadow-lg border-2 border-gray-900 text-center animate-fade-in" style={{
              animationDelay: '0.1s'
            }}>
              <div className="inline-block px-6 py-3 bg-gray-900 text-white rounded-full text-sm font-semibold uppercase tracking-widest mb-6">
                Completely Scarless
              </div>
              
              <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase text-gray-900 mb-6">
                Hidden Scalp Incisions
              </h3>
              
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                All incisions remain hidden in the scalp—no visible scars on face, jawline, or neck.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. BEFORE & AFTER */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-8 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-gray-900 mb-8 animate-fade-in">
            Before & After
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8 animate-fade-in" style={{
            animationDelay: '0.1s'
          }}>
            Explore natural scarless lifting transformations.
          </p>
          <Link to="/gallery" className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 text-xs uppercase tracking-widest font-light rounded hover:bg-gray-800 transition-all duration-300 button-hover animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
            View Before & After Gallery
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 11. GET STARTED CTA */}
      <ContactCTASection />
      </main>
      <Footer />
    </div>;
};
export default EndoChorFaceLift;