import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/home/ContactCTASection";

const SmartTemplateRhinoplasty = () => {
  const [activeCard, setActiveCard] = useState(0);
  const overviewRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!cardsRef.current) return;
      const cards = cardsRef.current.querySelectorAll(".overview-card");
      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          setActiveCard(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const overviewCards = [
    {
      number: "01",
      title: "What Makes Smart Templates Revolutionary",
      description: "Biodegradable scaffolds act as an internal mold during healing, ensuring predictable shape retention and stable outcomes."
    },
    {
      number: "02",
      title: "Biocompatible & Regenerative",
      description: "The material dissolves gradually as the body replaces it with natural, integrated tissue—supporting angiogenesis, cellular repair, and scarless remodeling."
    },
    {
      number: "03",
      title: "Precision Healing",
      description: "Templates function like a biological GPS, preventing postoperative drift, collapse, or warping of cartilage."
    },
    {
      number: "04",
      title: "Global Recognition",
      description: "Presented by Dr. Karaaltin at the European Society of Rhinoplasty, this technique gained international recognition for its scientific foundation and clinical reliability."
    },
    {
      number: "05",
      title: "Powered by Bloocell® Technology",
      description: "Custom-shaped bioscaffolds created with millimetric accuracy. Enhance nasal structure without rigid grafts and integrate safely without inflammatory response."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary">
          <img 
            src="/placeholder.svg" 
            alt="Smart Template Rhinoplasty Hero"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1 rounded-full text-xs uppercase tracking-widest text-white mb-6 animate-fade-in">
            Signature Technique
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 animate-fade-in tracking-wide">
            Smart Template Rhinoplasty
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto animate-fade-in font-light tracking-wide">
            Where Innovation Meets Regeneration
          </p>
        </div>
      </section>

      {/* SEO Intro Block */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed animate-fade-in">
            Smart Template Rhinoplasty, pioneered by Professor Dr. Karaaltin, represents a breakthrough in nasal surgery. These bioengineered, fully absorbable scaffolds guide the healing process after rhinoplasty, stabilizing the nasal framework and enhancing symmetry. Each template is custom-designed to match the patient's anatomy, supporting long-term regeneration of cartilage, bone, and soft tissue.
          </p>
        </div>
      </section>

      {/* Sticky Overview Section */}
      <section ref={overviewRef} className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16">
            {/* Left Column - Sticky */}
            <div className="lg:sticky lg:top-32 lg:self-start space-y-6 animate-fade-in">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-gray-900">
                Overview
              </h2>
              <img 
                src="/placeholder.svg" 
                alt="Dr. Karaaltin Signature"
                className="w-32 h-auto opacity-80"
              />
            </div>

            {/* Right Column - Scrollable Cards */}
            <div ref={cardsRef} className="space-y-8">
              {overviewCards.map((card, index) => (
                <div
                  key={index}
                  className={`overview-card bg-white p-8 rounded-lg shadow-sm transition-all duration-500 ${
                    activeCard === index ? "ring-2 ring-gray-900" : ""
                  } animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-4xl font-light text-gray-300">{card.number}</span>
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                        {card.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              By aligning regenerative biology with precision engineering, Smart Template Rhinoplasty represents the next evolution of nasal surgery. It offers unmatched stability, predictable outcomes, and natural definition—with reduced risk of postoperative deformities.
            </p>
          </div>
        </div>
      </section>

      {/* Procedure Details */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-12 tracking-wide animate-fade-in">
            Procedure Details
          </h2>
          
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Detail 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center animate-fade-in">
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Template Integration
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-900 mt-1">•</span>
                    <span>Custom template selection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-900 mt-1">•</span>
                    <span>Regenerative scaffold placement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-900 mt-1">•</span>
                    <span>Structural stabilization without rigid grafts</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <img 
                  src="/placeholder.svg" 
                  alt="Smart Template Technology"
                  className="w-full h-[300px] object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Detail 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center animate-fade-in">
              <div>
                <img 
                  src="/placeholder.svg" 
                  alt="Regenerative Healing"
                  className="w-full h-[300px] object-cover rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Enhanced Outcomes
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-900 mt-1">•</span>
                    <span>Enhanced healing vectors & contour preservation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-900 mt-1">•</span>
                    <span>Synergy with preservation, ultrasonic, or structural techniques</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Surgical Journey */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-12 tracking-wide animate-fade-in">
            Your Surgical Journey
          </h2>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Consultation", description: "Comprehensive evaluation of nasal structure" },
              { step: "02", title: "Anatomical Mapping", description: "Detailed analysis for custom template design" },
              { step: "03", title: "Template Design", description: "Bioengineered scaffold customization" },
              { step: "04", title: "Rhinoplasty Procedure", description: "Template integration during surgery" },
              { step: "05", title: "Regenerative Phase", description: "Natural tissue replacement begins" },
              { step: "06", title: "Follow-Up", description: "Progressive refinement monitoring" }
            ].map((item, index) => (
              <div 
                key={index} 
                className="text-center space-y-3 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl font-light text-gray-300">{item.step}</div>
                <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recovery Block */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="animate-fade-in">
              <img 
                src="/placeholder.svg" 
                alt="Recovery Process"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-light tracking-wide">Recovery & Healing</h2>
              <p className="text-gray-700 leading-relaxed">
                Templates dissolve naturally over time as vascularized tissue replaces them, reducing the risk of asymmetry or collapse during healing.
              </p>
              <Link 
                to="/contact"
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded hover:bg-gray-800 transition-all duration-300 text-sm uppercase tracking-widest font-light"
              >
                Book a Consultation
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal Candidates */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-12 tracking-wide animate-fade-in">
            Ideal Candidates
          </h2>
          
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { emoji: "🏗️", title: "Enhanced Support", description: "Require structural stability" },
              { emoji: "🌸", title: "Delicate Anatomy", description: "Thin skin or fragile cartilage" },
              { emoji: "⭐", title: "Refined Results", description: "Seeking long-term precision" },
              { emoji: "🔄", title: "Primary or Revision", description: "Any rhinoplasty complexity" }
            ].map((candidate, index) => (
              <div 
                key={index} 
                className="text-center space-y-4 p-6 rounded-lg bg-gray-50 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl">{candidate.emoji}</div>
                <h3 className="text-lg font-semibold text-gray-900">{candidate.title}</h3>
                <p className="text-sm text-gray-700">{candidate.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scar Expectations */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-8 tracking-wide animate-fade-in">
            Scar Expectations
          </h2>
          
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8 lg:p-12 animate-fade-in text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              Follows the scar expectations of the selected rhinoplasty technique (open or closed).
            </p>
          </div>
        </div>
      </section>

      {/* Before & After CTA */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-light tracking-wide">
              Explore the stability and definition of Smart Template–supported results
            </h2>
            <Link 
              to="/gallery"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded hover:bg-gray-800 transition-all duration-300 text-sm uppercase tracking-widest font-light"
            >
              View Before & After Gallery
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Get Started CTA */}
      <ContactCTASection />

      <Footer />
    </div>
  );
};

export default SmartTemplateRhinoplasty;