import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/home/ContactCTASection";
import drKaraaltinLogo from "@/assets/dr-karaaltin-logo-white.svg";
const KGlide = () => {
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
        <img alt="K-Glide Breast Augmentation Hero" className="absolute inset-0 w-full h-full object-cover animate-[scale-in_1.5s_ease-out]" src="/lovable-uploads/bdf1e8c7-0935-449c-b925-17d8716f8255.jpg" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="relative container mx-auto px-8 h-full flex flex-col justify-center items-center text-center pointer-events-none">
          <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1 rounded-full text-xs uppercase tracking-widest text-white mb-6 animate-fade-in">
            Signature Technique
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-[0.1em] uppercase text-white mb-6 animate-fade-in">
            K-Glide™ Rapid Breast Augmentation
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl font-light animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
            30-Minute Precision With Natural, Long-Lasting Results
          </p>
        </div>
      </section>

      {/* 2. INTRO / SEO BLOCK */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-8 max-w-4xl text-center content-spacing">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed animate-fade-in">
            K-Glide™ Rapid Breast Augmentation, developed by Professor Dr. Mehmet Veli Karaaltin, is a groundbreaking technique engineered for speed, comfort, and unparalleled safety. Using custom-designed vibration-assisted dissection instruments, the procedure preserves nerves, vessels, and breast architecture—creating a perfectly formed implant pocket with minimal trauma and remarkably fast recovery.
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
                  K-Glide™
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
                  01 // Why K-Glide™ Is Different
                </h3>
                <p className="overview-card-text-dark">
                  Motor-assisted gliding instruments separate tissue planes gently, without cautery or blunt-force trauma—meaning less pain, less bleeding, and a pristine anatomical pocket.
                </p>
              </div>

              <div className={`overview-card-dark ${activeCard === 1 ? 'shadow-lg border-white/20' : ''}`}>
                <h3 className="overview-card-title-dark">
                  02 // 30-Minute Procedure Time
                </h3>
                <p className="overview-card-text-dark">
                  Efficient anatomical pathways allow the full augmentation to be completed in as little as 30 minutes, minimizing anesthesia exposure while maximizing precision.
                </p>
              </div>

              <div className={`overview-card-dark ${activeCard === 2 ? 'shadow-lg border-white/20' : ''}`}>
                <h3 className="overview-card-title-dark">
                  03 // No Drains Required
                </h3>
                <p className="overview-card-text-dark">
                  By preserving tissue integrity and reducing intraoperative bleeding, K-Glide™ eliminates the need for postoperative drains entirely.
                </p>
              </div>

              <div className={`overview-card-dark ${activeCard === 3 ? 'shadow-lg border-white/20' : ''}`}>
                <h3 className="overview-card-title-dark">
                  04 // Preserves Sensation & Vascularity
                </h3>
                <p className="overview-card-text-dark">
                  Sensory nerves and vascular networks are protected through gentle vibration-guided expansion.
                </p>
              </div>

              <div className={`overview-card-dark ${activeCard === 4 ? 'shadow-lg border-white/20' : ''}`}>
                <h3 className="overview-card-title-dark">
                  05 // Minimal Pain, Fast Recovery
                </h3>
                <p className="overview-card-text-dark">
                  Most patients return to light activity within 24–48 hours with little to no discomfort.
                </p>
              </div>

              <div className={`overview-card-dark ${activeCard === 5 ? 'shadow-lg border-white/20' : ''}`}>
                <h3 className="overview-card-title-dark">
                  06 // Natural-Looking Long-Term Results
                </h3>
                <p className="overview-card-text-dark">
                  The implant rests in a clean, anatomically precise pocket—supporting a soft, balanced, and stable breast contour.
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
            K-Glide™ represents the evolution of breast augmentation: a safe, fast, and tissue-preserving technique built on years of surgical innovation. The system enhances patient comfort while elevating the standard for natural aesthetic outcomes.
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
                    <span>Motor-assisted dissection instruments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-900 font-bold mt-1">•</span>
                    <span>Tissue-preserving technique (no cautery)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-900 font-bold mt-1">•</span>
                    <span>Submuscular, subfascial, or dual-plane implant placement</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 lg:order-2 animate-fade-in">
                <img alt="K-Glide Technology" className="w-full aspect-[4/3] object-cover rounded-lg shadow-lg" src="/lovable-uploads/34701841-4653-4973-acfd-4ec767fff02f.jpg" />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="animate-fade-in">
                <img alt="Precision Pocket Creation" className="w-full aspect-[4/3] object-cover rounded-lg shadow-lg" src="/lovable-uploads/f2901edc-7f2d-4168-ad67-262a7f1de4a7.jpg" />
              </div>
              <div className="content-spacing animate-fade-in">
                <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase mb-6">
                  Precision Technique
                </h3>
                <ul className="space-y-4 text-base md:text-lg text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-gray-900 font-bold mt-1">•</span>
                    <span>Small hidden incision in the fold</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-900 font-bold mt-1">•</span>
                    <span>Precision pocket creation with minimal trauma</span>
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
              description: "Comprehensive assessment and goal setting"
            }, {
              step: "02",
              title: "Anatomical Mapping",
              description: "Precise pocket planning"
            }, {
              step: "03",
              title: "K-Glide™ Augmentation",
              description: "Motor-assisted dissection"
            }, {
              step: "04",
              title: "Immediate Recovery",
              description: "No drains, minimal discomfort"
            }, {
              step: "05",
              title: "Fast Return",
              description: "Back to daily activities in 24-48 hours"
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
              <img alt="Recovery Process" className="w-full aspect-[4/3] object-cover rounded-lg shadow-lg" src="/lovable-uploads/d3827c64-8e99-4121-9a26-be2826b51137.jpg" />
            </div>
            <div className="content-spacing animate-fade-in">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase mb-6">
                Recovery & Healing
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
                Rapid-return method: minimal pain, no drains, and a quick transition back to routine movement within 24–48 hours.
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
          
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
              emoji: "✨",
              title: "Primary Augmentation",
              description: "First-time breast enhancement patients"
            }, {
              emoji: "⚡",
              title: "Minimal Downtime",
              description: "Those who want quick recovery"
            }, {
              emoji: "🛡️",
              title: "Tissue Preservation",
              description: "Prioritizing nerve & vessel safety"
            }, {
              emoji: "🌸",
              title: "Natural Results",
              description: "Seeking soft, balanced contours"
            }, {
              emoji: "⏱️",
              title: "Fast Recovery",
              description: "Back to routine in 24-48 hours"
            }].map((candidate, index) => <div key={index} className="candidate-card-dark text-center" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                <div className="candidate-icon-dark">{candidate.emoji}</div>
                <h3 className="candidate-card-title-dark">{candidate.title}</h3>
                <p className="candidate-card-text-dark">{candidate.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* 9. BEFORE & AFTER CTA */}
      <section className="section-spacing bg-gray-50">
        <div className="container mx-auto px-8 text-center">
          <div className="max-w-3xl mx-auto content-spacing animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase mb-8">
              Explore natural augmentation results
            </h2>
            <Link to="/gallery" className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded text-sm uppercase tracking-widest font-light hover:bg-gray-800 transition-all duration-300">
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
    </div>;
};
export default KGlide;