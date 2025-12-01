import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/home/ContactCTASection";
import drKaraaltinLogo from "@/assets/dr-karaaltin-logo-white.svg";

const VibrasatPro = () => {
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

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
      {/* 1. HERO SECTION */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img
          src="/placeholder.svg"
          alt="Vibrasat Pro Technology Hero"
          className="absolute inset-0 w-full h-full object-cover animate-[scale-in_1.5s_ease-out]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="relative container mx-auto px-8 h-full flex flex-col justify-center items-center text-center pointer-events-none">
          <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1 rounded-full text-xs uppercase tracking-widest text-white mb-6 animate-fade-in">
            Signature Technology
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-[0.1em] uppercase text-white mb-6 animate-fade-in">
            Vibrasat Pro Technology™
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl font-light animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Advanced Power-Assisted Liposuction & Fat Grafting Precision
          </p>
        </div>
      </section>

      {/* 2. INTRO / SEO BLOCK */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-8 max-w-4xl text-center content-spacing">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed animate-fade-in">
            Vibrasat Pro Technology™, supported by Möller Medical's Workstation Pro Plus, is an advanced vibration-expansion liposuction and fat grafting system trusted by Dr. Karaaltin after more than a decade of high-definition body contouring experience. With superior tissue preservation, smoother fat distribution, and significantly reduced trauma, it offers elite performance for both aesthetic liposuction and high-precision grafting procedures.
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
                  Vibrasat Pro™
                </h2>
                <p className="overview-subtitle-dark">
                  Overview
                </p>
              </div>
              <img
                src={drKaraaltinLogo}
                alt="Dr. Karaaltin Logo"
                className="w-48 h-auto opacity-80"
              />
            </div>

            {/* RIGHT: SCROLLABLE CARDS */}
            <div ref={cardsRef} className="space-y-8 min-h-screen">
              <div
                className={`overview-card-dark ${
                  activeCard === 0 ? 'shadow-lg border-white/20' : ''
                }`}
              >
                <h3 className="overview-card-title-dark">
                  01 // Vibration-Expansion Technology
                </h3>
                <p className="overview-card-text-dark">
                  Operates at 3,000–6,000 strokes/min, gliding through fat with minimal trauma and superior control.
                </p>
              </div>

              <div
                className={`overview-card-dark ${
                  activeCard === 1 ? 'shadow-lg border-white/20' : ''
                }`}
              >
                <h3 className="overview-card-title-dark">
                  02 // Smoother Skin Retraction
                </h3>
                <p className="overview-card-text-dark">
                  Vibration stimulates collagen, resulting in tighter, smoother contours during healing.
                </p>
              </div>

              <div
                className={`overview-card-dark ${
                  activeCard === 2 ? 'shadow-lg border-white/20' : ''
                }`}
              >
                <h3 className="overview-card-title-dark">
                  03 // Liposat Pro Plus Peristaltic Pump
                </h3>
                <p className="overview-card-text-dark">
                  Provides controlled, low-pressure, cell-preserving fat delivery (50–1,000 ml/min).
                </p>
              </div>

              <div
                className={`overview-card-dark ${
                  activeCard === 3 ? 'shadow-lg border-white/20' : ''
                }`}
              >
                <h3 className="overview-card-title-dark">
                  04 // High-Fidelity Fat Survival
                </h3>
                <p className="overview-card-text-dark">
                  Up to 92–96% viable fat retention due to gentle infusion and minimized shear forces.
                </p>
              </div>

              <div
                className={`overview-card-dark ${
                  activeCard === 4 ? 'shadow-lg border-white/20' : ''
                }`}
              >
                <h3 className="overview-card-title-dark">
                  05 // Dr. Karaaltin's Sponge Experiment™
                </h3>
                <p className="overview-card-text-dark">
                  Lab studies show Vibrasat Pro produces uniform, trauma-free fat distribution superior to VASER, lipomatic, and laser-based systems.
                </p>
              </div>

              <div
                className={`overview-card-dark ${
                  activeCard === 5 ? 'shadow-lg border-white/20' : ''
                }`}
              >
                <h3 className="overview-card-title-dark">
                  06 // Clinically Proven Patient Benefits
                </h3>
                <p className="overview-card-text-dark">
                  Less pain, faster recovery, low bruising, and highly predictable aesthetic results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED SECTION */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-8 max-w-4xl text-center content-spacing">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed animate-fade-in">
            These technologies—combined with Dr. Karaaltin's high-definition contouring expertise—represent the future of safe, smooth, and high-quality fat removal and reinjection.
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1 content-spacing animate-fade-in">
                <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase mb-6">
                  Advanced Technology
                </h3>
                <ul className="space-y-4 text-base md:text-lg text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-gray-900 font-bold mt-1">•</span>
                    <span>Vibration-assisted liposuction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-900 font-bold mt-1">•</span>
                    <span>Peristaltic pump-assisted fat grafting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-900 font-bold mt-1">•</span>
                    <span>Silent aspiration systems</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 lg:order-2 animate-fade-in">
                <img 
                  src="/placeholder.svg" 
                  alt="Vibrasat Pro Technology"
                  className="w-full aspect-[4/3] object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="animate-fade-in">
                <img 
                  src="/placeholder.svg" 
                  alt="Precision Contouring"
                  className="w-full aspect-[4/3] object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="content-spacing animate-fade-in">
                <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase mb-6">
                  Applications
                </h3>
                <ul className="space-y-4 text-base md:text-lg text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-gray-900 font-bold mt-1">•</span>
                    <span>Precision contouring with minimal trauma</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-900 font-bold mt-1">•</span>
                    <span>Ideal for BBL, breast grafting, and 360° liposuction</span>
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
            {[
              { step: "01", title: "Consultation", description: "Comprehensive body analysis" },
              { step: "02", title: "Fat Removal", description: "Vibrasat Pro liposuction" },
              { step: "03", title: "Purification", description: "Cell-preserving processing" },
              { step: "04", title: "Fat Grafting", description: "Liposat Pro Plus reinjection" },
              { step: "05", title: "Contour Refinement", description: "Final sculpting" }
            ].map((item, index) => (
              <div 
                key={index} 
                className="text-center space-y-4 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl md:text-6xl font-light text-gray-200">{item.step}</div>
                <h3 className="text-xl md:text-2xl font-light tracking-wide uppercase">{item.title}</h3>
                <p className="text-base text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. RECOVERY BLOCK */}
      <section className="section-spacing bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="animate-fade-in">
              <img 
                src="/placeholder.svg" 
                alt="Recovery Process"
                className="w-full aspect-[4/3] object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="content-spacing animate-fade-in">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase mb-6">
                Recovery & Healing
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
                Less bruising, reduced swelling, enhanced collagen response, and smoother postoperative retraction.
              </p>
              <Link 
                to="/contact"
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded text-sm uppercase tracking-widest font-light hover:bg-gray-800 transition-all duration-300"
              >
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
            {[
              { emoji: "💎", title: "HD Liposuction", description: "High-definition contouring patients" },
              { emoji: "🍑", title: "BBL / Breast Grafting", description: "Fat transfer procedures" },
              { emoji: "✨", title: "Smooth Contours", description: "Seeking superior skin retraction" },
              { emoji: "⚡", title: "Fast Healing", description: "Minimal pain and bruising" }
            ].map((candidate, index) => (
              <div 
                key={index} 
                className="candidate-card-dark text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl mb-4">{candidate.emoji}</div>
                <h3 className="text-lg md:text-xl font-light tracking-wide uppercase text-white">{candidate.title}</h3>
                <p className="text-sm md:text-base text-white/80 leading-relaxed">{candidate.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. BEFORE & AFTER CTA */}
      <section className="section-spacing bg-gray-50">
        <div className="container mx-auto px-8 text-center">
          <div className="max-w-3xl mx-auto content-spacing animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase mb-8">
              See smooth contouring & grafting results
            </h2>
            <Link 
              to="/gallery"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded text-sm uppercase tracking-widest font-light hover:bg-gray-800 transition-all duration-300"
            >
              View Before & After Gallery
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 10. GET STARTED CTA */}
      <ContactCTASection />
      </main>

      <Footer />
    </div>
  );
};

export default VibrasatPro;