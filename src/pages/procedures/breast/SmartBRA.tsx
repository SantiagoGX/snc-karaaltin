import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/home/ContactCTASection";
import drKaraaltinLogo from "@/assets/dr-karaaltin-logo-white.svg";

const SmartBRA = () => {
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
          alt="Smart BRA Bioscaffold Hero"
          className="absolute inset-0 w-full h-full object-cover animate-[scale-in_1.5s_ease-out]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="relative container mx-auto px-8 h-full flex flex-col justify-center items-center text-center pointer-events-none">
          <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1 rounded-full text-xs uppercase tracking-widest text-white mb-6 animate-fade-in">
            Signature Technique
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-[0.1em] uppercase text-white mb-6 animate-fade-in">
            Smart BRA / Bloocell Bioscaffold
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl font-light animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Internal Support for Long-Lasting Breast Shape & Stability
          </p>
        </div>
      </section>

      {/* 2. INTRO / SEO BLOCK */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-8 max-w-4xl text-center content-spacing">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed animate-fade-in">
            Powered by Bloocell's bioengineered Smart Template™ technology and designed by Professor Dr. Karaaltin, the Smart BRA bioscaffold provides advanced internal support for breast implants or natural tissue. This absorbable matrix reinforces the lower breast pole, preventing bottoming out, supporting upper pole fullness, and ensuring long-term aesthetic stability.
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
                  Smart BRA
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
                  01 // What the Bioscaffold Does
                </h3>
                <p className="overview-card-text-dark">
                  Reinforces lower pole support, stabilizes implants, and maintains upper pole fullness.
                </p>
              </div>

              <div
                className={`overview-card bg-white p-8 lg:p-10 rounded-lg shadow-sm border border-gray-200 transition-all duration-500 ${
                  activeCard === 1 ? 'shadow-lg border-gray-300' : ''
                }`}
              >
                <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase text-gray-900 mb-4">
                  02 // Biocompatible & Bioresorbable
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Integrates into tissue, stimulates angiogenesis, and dissolves safely over time.
                </p>
              </div>

              <div
                className={`overview-card bg-white p-8 lg:p-10 rounded-lg shadow-sm border border-gray-200 transition-all duration-500 ${
                  activeCard === 2 ? 'shadow-lg border-gray-300' : ''
                }`}
              >
                <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase text-gray-900 mb-4">
                  03 // Prevents Bottoming Out
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Maintains structural lift and reduces long-term complications in augmentation and revision surgery.
                </p>
              </div>

              <div
                className={`overview-card bg-white p-8 lg:p-10 rounded-lg shadow-sm border border-gray-200 transition-all duration-500 ${
                  activeCard === 3 ? 'shadow-lg border-gray-300' : ''
                }`}
              >
                <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase text-gray-900 mb-4">
                  04 // 3D Tension-Mapped Architecture
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Designed with Smart Template™ technology to match natural tension lines.
                </p>
              </div>

              <div
                className={`overview-card bg-white p-8 lg:p-10 rounded-lg shadow-sm border border-gray-200 transition-all duration-500 ${
                  activeCard === 4 ? 'shadow-lg border-gray-300' : ''
                }`}
              >
                <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase text-gray-900 mb-4">
                  05 // High-Precision Engineering
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Promotes cellular ingrowth and soft-tissue harmony for natural results.
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
            The Smart BRA system offers durable internal support engineered for longevity—making it ideal for augmentation, hybrid techniques, and revision cases where stability is critical.
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
                  Advanced Support System
                </h3>
                <ul className="space-y-4 text-base md:text-lg text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-gray-900 font-bold mt-1">•</span>
                    <span>Scaffold insertion to reinforce lower pole</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-900 font-bold mt-1">•</span>
                    <span>Supports implants or natural tissue</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-900 font-bold mt-1">•</span>
                    <span>Dynamic soft-tissue integration</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 lg:order-2 animate-fade-in">
                <img 
                  src="/placeholder.svg" 
                  alt="Smart BRA Technology"
                  className="w-full aspect-[4/3] object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="animate-fade-in">
                <img 
                  src="/placeholder.svg" 
                  alt="Long-Term Stability"
                  className="w-full aspect-[4/3] object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="content-spacing animate-fade-in">
                <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase mb-6">
                  Enhanced Outcomes
                </h3>
                <ul className="space-y-4 text-base md:text-lg text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-gray-900 font-bold mt-1">•</span>
                    <span>Improves projection and long-term shape</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-900 font-bold mt-1">•</span>
                    <span>Ideal for thin tissue envelopes</span>
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
              { step: "01", title: "Consultation", description: "Comprehensive assessment" },
              { step: "02", title: "Scaffold Selection", description: "Custom template design" },
              { step: "03", title: "Surgical Placement", description: "Bioscaffold integration" },
              { step: "04", title: "Integration Period", description: "Tissue incorporation" },
              { step: "05", title: "Long-Term Stability", description: "Sustained lift support" }
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
                Patients benefit from enhanced support, reduced risk of displacement, and stable long-term outcomes.
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
              { emoji: "📏", title: "Thin Tissue Coverage", description: "Requiring additional support" },
              { emoji: "🔄", title: "Revision Surgery", description: "Correcting previous outcomes" },
              { emoji: "⬇️", title: "Bottoming Out", description: "Preventing displacement" },
              { emoji: "🌟", title: "Hybrid Techniques", description: "Fat + implant combinations" }
            ].map((candidate, index) => (
              <div 
                key={index} 
                className="candidate-card-dark text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl mb-4">{candidate.emoji}</div>
                <h3 className="text-lg md:text-xl font-light tracking-wide uppercase">{candidate.title}</h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">{candidate.description}</p>
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
              Discover reinforced aesthetic outcomes
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

export default SmartBRA;