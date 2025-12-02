import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/home/ContactCTASection";
import drKaraaltinLogo from "@/assets/dr-karaaltin-logo-white.svg";
const TwirlInternalBra = () => {
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
        <img alt="Twirl Internal Bra Technique Hero" className="absolute inset-0 w-full h-full object-cover animate-[scale-in_1.5s_ease-out]" src="/lovable-uploads/0f56d8cf-545e-45e7-b857-7a2511b905d8.jpg" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="relative container mx-auto px-8 h-full flex flex-col justify-center items-center text-center pointer-events-none">
          <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1 rounded-full text-xs uppercase tracking-widest text-white mb-6 animate-fade-in">
            Signature Technique
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-[0.1em] uppercase text-white mb-6 animate-fade-in">
            Twirl Internal Bra Technique™
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl font-light animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
            Long-Lasting Lift, Projection & Upper Pole Fullness — Without Implants
          </p>
        </div>
      </section>

      {/* 2. INTRO / SEO BLOCK */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-8 max-w-4xl text-center content-spacing">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed animate-fade-in">
            The Twirl Internal Bra Technique™, created and perfected over more than a decade by Professor Dr. Karaaltin, redefines breast lifting and reduction outcomes. This innovative method restores long-term projection, upper pole fullness, and shape stability through a biologically engineered internal support system—achieving augmentation-like results without implants.
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
                  Twirl Internal Bra™
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
                  01 // A Structural, Vascularly Safe Lift
                </h3>
                <p className="overview-card-text-dark">
                  The pedicle is designed to align with the pectoralis major muscle's natural vector, producing a biomechanically stable result with strong long-term support.
                </p>
              </div>

              <div className={`overview-card-dark ${activeCard === 1 ? 'shadow-lg border-white/20' : ''}`}>
                <h3 className="overview-card-title-dark">
                  02 // Upper Pole Fullness Without Implants
                </h3>
                <p className="overview-card-text-dark">
                  Strategic tissue rotation rejuvenates the upper breast—restoring youthful contour and roundness naturally.
                </p>
              </div>

              <div className={`overview-card-dark ${activeCard === 2 ? 'shadow-lg border-white/20' : ''}`}>
                <h3 className="overview-card-title-dark">
                  03 // The Twirl Maneuver
                </h3>
                <p className="overview-card-text-dark">
                  A signature rotation-tightening technique that enhances projection, mimicking the effect of augmentation using the patient's own tissue.
                </p>
              </div>

              <div className={`overview-card-dark ${activeCard === 3 ? 'shadow-lg border-white/20' : ''}`}>
                <h3 className="overview-card-title-dark">
                  04 // Internal Fibrosis Support Belt
                </h3>
                <p className="overview-card-text-dark">
                  A 270° internal dissection creates a natural, collagen-rich "internal bra" that prevents bottoming out over time.
                </p>
              </div>

              <div className={`overview-card-dark ${activeCard === 4 ? 'shadow-lg border-white/20' : ''}`}>
                <h3 className="overview-card-title-dark">
                  05 // Safe Pedicle Design
                </h3>
                <p className="overview-card-text-dark">
                  A lateral pedicle with central extension preserves vascularity and protects nipple sensation.
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
            This technique offers safe, reliable, and implant-free enhancement with superior long-term stability. It is ideal for patients wanting a lifted, youthful breast without implant dependency.
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
                  Innovative Technique
                </h3>
                <ul className="space-y-4 text-base md:text-lg text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-gray-900 font-bold mt-1">•</span>
                    <span>Vascularly safe pedicle design</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-900 font-bold mt-1">•</span>
                    <span>Twirl Maneuver for enhanced projection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-900 font-bold mt-1">•</span>
                    <span>Internal fibrosis creation for biological support</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 lg:order-2 animate-fade-in">
                <img alt="Twirl Technique" className="w-full aspect-[4/3] object-cover rounded-lg shadow-lg" src="/lovable-uploads/3e03a256-b7da-4f18-8459-1ed615501a86.jpg" />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="animate-fade-in">
                <img alt="Long-Term Stability" className="w-full aspect-[4/3] object-cover rounded-lg shadow-lg" src="/lovable-uploads/b46bf345-79d9-4186-8870-21be5838722d.jpg" />
              </div>
              <div className="content-spacing animate-fade-in">
                <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase mb-6">
                  Long-Term Benefits
                </h3>
                <ul className="space-y-4 text-base md:text-lg text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-gray-900 font-bold mt-1">•</span>
                    <span>Long-term upper pole stability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-900 font-bold mt-1">•</span>
                    <span>Can be combined with mommy makeover or contouring techniques</span>
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
              description: "Comprehensive breast assessment"
            }, {
              step: "02",
              title: "Pedicle Planning",
              description: "Anatomical mapping for optimal vectors"
            }, {
              step: "03",
              title: "Tissue Rotation",
              description: "Twirl Maneuver execution"
            }, {
              step: "04",
              title: "Internal Support",
              description: "Fibrosis creation"
            }, {
              step: "05",
              title: "Final Shaping",
              description: "Contour refinement"
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
              <img alt="Recovery Process" className="w-full aspect-[4/3] object-cover rounded-lg shadow-lg" src="/lovable-uploads/f4a2efd1-80e0-4131-bcf4-f95ee630d2df.jpg" />
            </div>
            <div className="content-spacing animate-fade-in">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase mb-6">
                Recovery & Healing
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
                Typical recovery includes controlled swelling reduction and stable shape retention due to internal support mechanics.
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
              emoji: "⬆️",
              title: "Lift or Reduction",
              description: "Breast lift or reduction patients"
            }, {
              emoji: "🚫",
              title: "Avoiding Implants",
              description: "Those seeking natural solutions"
            }, {
              emoji: "📐",
              title: "Projection Concerns",
              description: "Addressing sagging or loss of volume"
            }, {
              emoji: "⏳",
              title: "Long-Lasting Results",
              description: "Wanting stable upper pole fullness"
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
              See lift and reshaping outcomes
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
export default TwirlInternalBra;