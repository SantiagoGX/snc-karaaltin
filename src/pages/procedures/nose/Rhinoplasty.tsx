import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/home/ContactCTASection";
import drKaraaltinLogo from "@/assets/dr-karaaltin-logo-white.svg";
const Rhinoplasty = () => {
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
    title: "What Rhinoplasty Achieves",
    description: "Rhinoplasty reshapes and refines nasal form, improves airflow, and corrects structural deviations. Dr. Karaaltin combines aesthetic balance with functional enhancement for natural, stable results."
  }, {
    number: "02",
    title: "Preservation Rhinoplasty",
    description: "Reshaping bone and cartilage while preserving native support. Benefits include reduced swelling, fewer revisions, and a naturally refined appearance. Can be performed open, closed, or hybrid."
  }, {
    number: "03",
    title: "Structural Primary Rhinoplasty",
    description: "Customized techniques anticipating long-term healing forces. Includes cephalic trim, cartilage grafting for support, and tailored bridge/tip correction."
  }, {
    number: "04",
    title: "Closed (Endonasal) Rhinoplasty",
    description: "All incisions inside the nostrils. No visible scars, shorter recovery, and refined access with micro-instruments."
  }, {
    number: "05",
    title: "Open Rhinoplasty",
    description: "Ideal for complex and revision cases. Provides full visualization for precise correction of aesthetic and functional issues."
  }, {
    number: "06",
    title: "Piezo (Ultrasonic) Rhinoplasty",
    description: "Ultrasonic bone sculpting with zero surrounding tissue trauma. Allows ultra-smooth bone reshaping and more predictable healing."
  }, {
    number: "07",
    title: "Endoscopy-Assisted Rhinoplasty",
    description: "High-definition visualization for delicate steps such as dorsal work and osteotomies. Enhances safety in complex anatomical regions."
  }, {
    number: "08",
    title: "SMART Template Support (Optional)",
    description: "Bioengineered absorbable scaffolds that guide postoperative healing, improve symmetry, and stabilize long-term results."
  }, {
    number: "09",
    title: "Functional Procedures",
    description: "Breathing-focused corrections (Septoplasty, Turbinate Reduction, FESS) that can be combined with rhinoplasty for comprehensive airway restoration."
  }];
  return <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
      {/* 1. HERO SECTION */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img src="/placeholder.svg" alt="Rhinoplasty Hero" className="absolute inset-0 w-full h-full object-cover animate-[scale-in_1.5s_ease-out]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="relative container mx-auto px-8 h-full flex flex-col justify-center items-center text-center pointer-events-none">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-[0.1em] uppercase text-white mb-6 animate-fade-in">
            Rhinoplasty
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl font-light animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
            Advanced Nasal Aesthetics & Functional Restoration
          </p>
        </div>
      </section>

      {/* 2. INTRO / SEO BLOCK */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-8 max-w-4xl text-center content-spacing">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 animate-fade-in">
            Rhinoplasty with Professor Dr. Mehmet Veli Karaaltin blends artistic refinement, functional precision, and scientifically guided techniques. Performed in Istanbul, Doha, Dubai, and London, his approach elevates nasal harmony while ensuring optimal breathing and long-term structural stability.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed animate-fade-in" style={{
            animationDelay: '0.1s'
          }}>
            Every surgery is planned using advanced anatomical mapping and tailored to the patient's unique proportions, goals, and airway needs.
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
                  Rhinoplasty
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
            Dr. Karaaltin's rhinoplasty philosophy unites aesthetics, airway optimization, and cutting-edge regenerative technologies. His work with ultrasonic techniques, endoscopic visualization, and bioengineered templates places him among the global leaders reshaping the future of nasal surgery.
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
                  Advanced Approaches
                </h3>
                <ul className="space-y-4 text-base md:text-lg text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-gray-900 font-bold mt-1">•</span>
                    <span>Preservation, structural, ultrasonic, and hybrid approaches</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-900 font-bold mt-1">•</span>
                    <span>Open and closed methods based on complexity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-900 font-bold mt-1">•</span>
                    <span>Advanced grafting & scaffold support when indicated</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 lg:order-2 animate-fade-in">
                <img alt="Rhinoplasty Approaches" className="w-full aspect-[4/3] object-cover rounded-lg shadow-lg" src="/lovable-uploads/c828ce1c-212b-4c24-b0f7-2b145abdd83f.jpg" />
              </div>
            </div>

            {/* Detail 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="animate-fade-in">
                <img alt="Airway Optimization" className="w-full aspect-[4/3] object-cover rounded-lg shadow-lg" src="/lovable-uploads/a81a8973-c97d-43de-901d-9d52c3cdb28e.jpg" />
              </div>
              <div className="content-spacing animate-fade-in">
                <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase mb-6">
                  Integrated Excellence
                </h3>
                <ul className="space-y-4 text-base md:text-lg text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-gray-900 font-bold mt-1">•</span>
                    <span>Airway optimization integrated into cosmetic planning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-900 font-bold mt-1">•</span>
                    <span>High-definition endoscopic assistance for precision</span>
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
              description: "Comprehensive assessment of aesthetic goals and functional needs"
            }, {
              step: "02",
              title: "3D Planning",
              description: "Advanced imaging and anatomical mapping"
            }, {
              step: "03",
              title: "Technique Selection",
              description: "Customized approach based on your unique anatomy"
            }, {
              step: "04",
              title: "Rhinoplasty Procedure",
              description: "Precision surgery with chosen techniques"
            }, {
              step: "05",
              title: "Functional Enhancements",
              description: "Airway optimization if needed"
            }, {
              step: "06",
              title: "Recovery & Follow-Up",
              description: "Guided healing with progressive refinement"
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
              <img alt="Recovery Process" className="w-full aspect-[4/3] object-cover rounded-lg shadow-lg" src="/lovable-uploads/8ad954f8-be5e-419a-93f9-f093ab93b0e8.jpg" />
            </div>
            <div className="content-spacing animate-fade-in">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase mb-6">
                Recovery & Healing
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
                Most swelling resolves in weeks; full definition evolves over months. Piezo and preservation methods significantly reduce trauma and recovery time.
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
              emoji: "✨",
              title: "Cosmetic Refinement",
              description: "Seeking enhanced nasal aesthetics"
            }, {
              emoji: "💨",
              title: "Breathing Issues",
              description: "Experiencing functional difficulties"
            }, {
              emoji: "🔄",
              title: "Revision Work",
              description: "Needing corrective procedures"
            }, {
              emoji: "⏳",
              title: "Long-Term Stability",
              description: "Wanting natural, lasting results"
            }].map((candidate, index) => <div key={index} className="candidate-card-dark text-center" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                <div className="text-5xl mb-4">{candidate.emoji}</div>
                <h3 className="text-lg md:text-xl font-light tracking-wide uppercase">{candidate.title}</h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">{candidate.description}</p>
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
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 lg:p-12 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-light tracking-wide uppercase">Closed Rhinoplasty</h3>
                  <p className="text-base md:text-lg text-gray-700">No visible scars</p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-light tracking-wide uppercase">Open Rhinoplasty</h3>
                  <p className="text-base md:text-lg text-gray-700">A fine, barely perceptible columellar line</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. BEFORE & AFTER CTA */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-8 text-center">
          <div className="max-w-3xl mx-auto content-spacing animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase mb-8">
              See nasal transformations and functional improvements
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
export default Rhinoplasty;