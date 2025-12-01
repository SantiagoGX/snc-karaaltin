import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/home/ContactCTASection";
import drKaraaltinLogo from "@/assets/dr-karaaltin-logo-white.svg";
const SmartTemplateRhinoplasty = () => {
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
  const overviewCards = [{
    number: "01",
    title: "What Makes Smart Templates Revolutionary",
    description: "Biodegradable scaffolds act as an internal mold during healing, ensuring predictable shape retention and stable outcomes."
  }, {
    number: "02",
    title: "Biocompatible & Regenerative",
    description: "The material dissolves gradually as the body replaces it with natural, integrated tissue—supporting angiogenesis, cellular repair, and scarless remodeling."
  }, {
    number: "03",
    title: "Precision Healing",
    description: "Templates function like a biological GPS, preventing postoperative drift, collapse, or warping of cartilage."
  }, {
    number: "04",
    title: "Global Recognition",
    description: "Presented by Dr. Karaaltin at the European Society of Rhinoplasty, this technique gained international recognition for its scientific foundation and clinical reliability."
  }, {
    number: "05",
    title: "Powered by Bloocell® Technology",
    description: "Custom-shaped bioscaffolds created with millimetric accuracy. Enhance nasal structure without rigid grafts and integrate safely without inflammatory response."
  }];
  return <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
      {/* 1. HERO SECTION */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img alt="Smart Template Rhinoplasty Hero" className="absolute inset-0 w-full h-full object-cover animate-[scale-in_1.5s_ease-out]" src="/lovable-uploads/d9defe1f-d38c-4c71-b04c-567655f5e954.jpg" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="relative container mx-auto px-8 h-full flex flex-col justify-center items-center text-center pointer-events-none">
          <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1 rounded-full text-xs uppercase tracking-widest text-white mb-6 animate-fade-in">
            Signature Technique
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-[0.1em] uppercase text-white mb-6 animate-fade-in">
            Smart Template Rhinoplasty
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl font-light animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
            Where Innovation Meets Regeneration
          </p>
        </div>
      </section>

      {/* 2. INTRO / SEO BLOCK */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-8 max-w-4xl text-center content-spacing">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 animate-fade-in">
            Smart Template Rhinoplasty, pioneered by Professor Dr. Karaaltin, represents a breakthrough in nasal surgery. These bioengineered, fully absorbable scaffolds guide the healing process after rhinoplasty, stabilizing the nasal framework and enhancing symmetry.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed animate-fade-in" style={{
            animationDelay: '0.1s'
          }}>
            Each template is custom-designed to match the patient's anatomy, supporting long-term regeneration of cartilage, bone, and soft tissue.
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
                  Smart Template Rhinoplasty
                </h2>
                <p className="overview-subtitle-dark">
                  Overview
                </p>
              </div>
              <img src={drKaraaltinLogo} alt="Dr. Karaaltin Logo" className="w-48 h-auto opacity-80" />
            </div>

            {/* RIGHT: SCROLLABLE CARDS */}
            <div ref={cardsRef} className="space-y-8 min-h-screen">
              {overviewCards.map((card, index) => <div key={index} className={`overview-card-dark ${activeCard === index ? 'shadow-lg border-white/20' : ''}`}>
                  <h3 className="overview-card-title-dark">
                    {card.number} // {card.title}
                  </h3>
                  <p className="overview-card-text-dark">
                    {card.description}
                  </p>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED SECTION */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-8 max-w-4xl text-center content-spacing">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed animate-fade-in">
            By aligning regenerative biology with precision engineering, Smart Template Rhinoplasty represents the next evolution of nasal surgery. It offers unmatched stability, predictable outcomes, and natural definition—with reduced risk of postoperative deformities.
          </p>
        </div>
      </section>

      {/* 5. PROCEDURE DETAILS */}
      <section className="section-spacing bg-gray-50">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-center mb-12 lg:mb-16 animate-fade-in">
            Procedure Details
          </h2>
          
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Detail 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1 content-spacing animate-fade-in">
                <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase mb-6">
                  Template Integration
                </h3>
                <ul className="space-y-4 text-base md:text-lg text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-gray-900 font-bold mt-1">•</span>
                    <span>Custom template selection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-900 font-bold mt-1">•</span>
                    <span>Regenerative scaffold placement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-900 font-bold mt-1">•</span>
                    <span>Structural stabilization without rigid grafts</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 lg:order-2 animate-fade-in">
                <img alt="Smart Template Technology" className="w-full aspect-[4/3] object-cover rounded-lg shadow-lg" src="/lovable-uploads/441cd584-7749-4ec3-a4b8-027298e8c86a.jpg" />
              </div>
            </div>

            {/* Detail 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="animate-fade-in">
                <img alt="Regenerative Healing" className="w-full aspect-[4/3] object-cover rounded-lg shadow-lg" src="/lovable-uploads/6a6e10ca-fcd1-4747-98b0-c905333be0ce.jpg" />
              </div>
              <div className="content-spacing animate-fade-in">
                <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase mb-6">
                  Enhanced Outcomes
                </h3>
                <ul className="space-y-4 text-base md:text-lg text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-gray-900 font-bold mt-1">•</span>
                    <span>Enhanced healing vectors & contour preservation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-900 font-bold mt-1">•</span>
                    <span>Synergy with preservation, ultrasonic, or structural techniques</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SURGICAL JOURNEY */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-center mb-12 lg:mb-16 animate-fade-in">
            Your Surgical Journey
          </h2>
          
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
              step: "01",
              title: "Consultation",
              description: "Comprehensive evaluation of nasal structure"
            }, {
              step: "02",
              title: "Anatomical Mapping",
              description: "Detailed analysis for custom template design"
            }, {
              step: "03",
              title: "Template Design",
              description: "Bioengineered scaffold customization"
            }, {
              step: "04",
              title: "Rhinoplasty Procedure",
              description: "Template integration during surgery"
            }, {
              step: "05",
              title: "Regenerative Phase",
              description: "Natural tissue replacement begins"
            }, {
              step: "06",
              title: "Follow-Up",
              description: "Progressive refinement monitoring"
            }].map((item, index) => <div key={index} className="text-center space-y-4 animate-fade-in" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                <div className="text-5xl md:text-6xl font-light text-gray-200">{item.step}</div>
                <h3 className="text-xl md:text-2xl font-light tracking-wide uppercase">{item.title}</h3>
                <p className="text-base text-gray-700 leading-relaxed">{item.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* 7. RECOVERY BLOCK */}
      <section className="section-spacing bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="animate-fade-in">
              <img alt="Recovery Process" className="w-full aspect-[4/3] object-cover rounded-lg shadow-lg" src="/lovable-uploads/e5709e2f-3735-471e-bfcb-7fe8eadcbb56.jpg" />
            </div>
            <div className="content-spacing animate-fade-in">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase mb-6">
                Recovery & Healing
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
                Templates dissolve naturally over time as vascularized tissue replaces them, reducing the risk of asymmetry or collapse during healing.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded text-sm uppercase tracking-widest font-light hover:bg-gray-800 transition-all duration-300">
                Book a Consultation
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. IDEAL CANDIDATES */}
      <section className="candidates-section-dark">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-center mb-12 lg:mb-16 animate-fade-in text-white">
            Ideal Candidates
          </h2>
          
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[{
              emoji: "🏗️",
              title: "Enhanced Support",
              description: "Require structural stability"
            }, {
              emoji: "🌸",
              title: "Delicate Anatomy",
              description: "Thin skin or fragile cartilage"
            }, {
              emoji: "⭐",
              title: "Refined Results",
              description: "Seeking long-term precision"
            }, {
              emoji: "🔄",
              title: "Primary or Revision",
              description: "Any rhinoplasty complexity"
            }].map((candidate, index) => <div key={index} className="candidate-card-dark text-center" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                <div className="text-5xl mb-4">{candidate.emoji}</div>
                <h3 className="text-lg md:text-xl font-light tracking-wide uppercase text-white">{candidate.title}</h3>
                <p className="text-sm md:text-base text-white/80 leading-relaxed">{candidate.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* 9. SCAR EXPECTATIONS */}
      <section className="section-spacing bg-gray-50">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-center mb-8 lg:mb-12 animate-fade-in">
            Scar Expectations
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 lg:p-12 text-center animate-fade-in">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Follows the scar expectations of the selected rhinoplasty technique (open or closed).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. BEFORE & AFTER CTA */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-8 text-center">
          <div className="max-w-3xl mx-auto content-spacing animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase mb-8">
              Explore the stability and definition of Smart Template–supported results
            </h2>
            <Link to="/gallery" className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded text-sm uppercase tracking-widest font-light hover:bg-gray-800 transition-all duration-300">
              View Before & After Gallery
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 11. GET STARTED CTA */}
      <ContactCTASection />
      </main>

      <Footer />
    </div>;
};
export default SmartTemplateRhinoplasty;