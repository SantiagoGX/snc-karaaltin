import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import ContactCTASection from "@/components/home/ContactCTASection";

const ProcedureTemplate = () => {
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
    <div className="min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img
          src="/placeholder.svg"
          alt="Procedure Hero"
          className="absolute inset-0 w-full h-full object-cover animate-[scale-in_1.5s_ease-out]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="relative container mx-auto px-8 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-[0.1em] uppercase text-white mb-6 animate-fade-in">
            PROCEDURE NAME
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl font-light animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Subtitle describing the procedure approach
          </p>
        </div>
      </section>

      {/* 2. INTRO / SEO BLOCK */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-8 max-w-4xl text-center content-spacing">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 animate-fade-in">
            Introductory paragraph explaining what this procedure is and why patients choose it. 
            This section provides context and builds trust with detailed, SEO-friendly content.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Additional paragraph highlighting Dr. Karaaltin's expertise and approach to this specific procedure.
            Emphasize personalization, safety, and aesthetic results.
          </p>
        </div>
      </section>

      {/* 3. OVERVIEW — HAKIMI STICKY EFFECT */}
      <section ref={overviewRef} className="overview-section-dark">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16">
            {/* LEFT: STICKY */}
            <div className="overview-sticky-left animate-fade-in">
              <div>
                <h2 className="overview-title-dark">
                  PROCEDURE NAME
                </h2>
                <p className="overview-subtitle-dark">
                  Overview
                </p>
              </div>
              <img
                src="/placeholder.svg"
                alt="Dr. Karaaltin Logo"
                className="w-48 h-auto opacity-80"
              />
            </div>

            {/* RIGHT: SCROLLABLE CARDS */}
            <div ref={cardsRef} className="space-y-8">
              {[
                {
                  title: "What It Is",
                  content: "Detailed explanation of what the procedure entails, including the surgical approach and techniques used."
                },
                {
                  title: "Anatomy Focus",
                  content: "Description of the anatomical structures involved and how they are addressed during the procedure."
                },
                {
                  title: "Procedure Overview",
                  content: "Step-by-step overview of how the surgery is performed, including incision placement and tissue manipulation."
                },
                {
                  title: "Expected Results",
                  content: "What patients can expect in terms of aesthetic outcomes, functional improvements, and long-term results."
                },
                {
                  title: "Recovery Timeline",
                  content: "General timeline for healing, return to activities, and when final results become visible."
                }
              ].map((card, index) => (
                <div
                  key={index}
                  className={`overview-card-dark ${
                    activeCard === index ? 'shadow-lg border-white/20' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="overview-card-title-dark">
                    {card.title}
                  </h3>
                  <p className="overview-card-text-dark">
                    {card.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED SECTION */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-fade-in">
              <img
                src="/placeholder.svg"
                alt="Featured Image"
                className="w-full h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6 content-spacing animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-gray-900">
                Dr. Karaaltin's Approach
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Explanation of Dr. Karaaltin's unique philosophy and methodology for this procedure.
                Emphasis on personalization, safety, and achieving natural-looking results.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Additional details about the techniques used, patient care, and commitment to excellence.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 text-xs uppercase tracking-widest font-light rounded hover:bg-gray-800 transition-all duration-300 button-hover"
              >
                Book Now
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROCEDURE DETAILS (FLEXIBLE) */}
      <section className="section-spacing bg-gray-50">
        <div className="container mx-auto px-8 max-w-5xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-gray-900 text-center mb-12 animate-fade-in">
            Procedure Details
          </h2>
          
          <div className="space-y-12">
            {/* Flexible content blocks */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase text-gray-900">
                Anatomical Considerations
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Detailed explanation of the anatomical structures involved in this procedure.
                This section is flexible and can be expanded or reduced based on the specific procedure.
              </p>
            </div>

            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase text-gray-900">
                Surgical Technique
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Step-by-step explanation of the surgical technique used.
                Include information about incisions, tissue manipulation, and closure methods.
              </p>
            </div>

            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase text-gray-900">
                Types & Variations
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                If applicable, describe different types or variations of this procedure.
                This section can be removed if not relevant to the specific procedure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SURGICAL JOURNEY (TIMELINE) */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-gray-900 text-center mb-16 animate-fade-in">
            Your Surgical Journey
          </h2>
          
          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Initial Consultation",
                description: "Comprehensive evaluation of your goals, medical history, and suitability for the procedure."
              },
              {
                step: "02",
                title: "Digital Assessment",
                description: "Advanced imaging and measurements to plan your personalized surgical approach."
              },
              {
                step: "03",
                title: "Preoperative Planning",
                description: "Detailed preparation including medical clearance, instructions, and final surgical planning."
              },
              {
                step: "04",
                title: "Surgery Day",
                description: "The procedure is performed with precision in our state-of-the-art surgical facility."
              },
              {
                step: "05",
                title: "Postoperative Care",
                description: "Comprehensive follow-up care to ensure optimal healing and results."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-6 items-start p-6 bg-gray-50 rounded-lg border border-gray-200 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. RECOVERY BLOCK */}
      <section className="section-spacing bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img
                src="/placeholder.svg"
                alt="Recovery"
                className="w-full h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6 content-spacing animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-gray-900">
                Recovery & Healing
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Detailed information about the recovery process, including what to expect in the first days, 
                weeks, and months after surgery.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Timeline for returning to normal activities, work, and exercise. Emphasis on Dr. Karaaltin's 
                comprehensive postoperative care protocol.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 text-xs uppercase tracking-widest font-light rounded hover:bg-gray-800 transition-all duration-300 button-hover"
              >
                Book a Consultation
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. IDEAL CANDIDATES (OPTIONAL) */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-8 max-w-5xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-gray-900 text-center mb-12 animate-fade-in">
            Ideal Candidates
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                type: "Endomorph",
                description: "Higher body fat percentage, rounder physique. May benefit from combined procedures."
              },
              {
                type: "Mesomorph",
                description: "Athletic build with moderate fat. Ideal for sculpting and definition procedures."
              },
              {
                type: "Ectomorph",
                description: "Lean build with low body fat. May focus on enhancement and contouring."
              }
            ].map((candidate, index) => (
              <div
                key={index}
                className="p-8 bg-gray-50 rounded-lg border border-gray-200 text-center animate-fade-in card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl md:text-2xl font-light tracking-wide uppercase text-gray-900 mb-4">
                  {candidate.type}
                </h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  {candidate.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Best results are typically achieved with a BMI under 30. Dr. Karaaltin will assess your 
              individual candidacy during your consultation and recommend the most appropriate approach 
              for your unique anatomy and goals.
            </p>
          </div>
        </div>
      </section>

      {/* 9. SCAR EXPECTATIONS */}
      <section className="section-spacing bg-gray-50">
        <div className="container mx-auto px-8 max-w-5xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-gray-900 text-center mb-12 animate-fade-in">
            Scar Expectations
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                type: "Mini Scar",
                icon: "━",
                description: "Short, discreet incision. Minimal scarring, easily concealed within natural contours."
              },
              {
                type: "Standard Scar",
                icon: "━━━",
                description: "Moderate incision length. Well-hidden placement following natural body lines for optimal concealment."
              },
              {
                type: "Extended Scar",
                icon: "━━━━━",
                description: "Longer incision for comprehensive correction. Strategic placement ensures scars fade over time and remain discreet."
              }
            ].map((scar, index) => (
              <div
                key={index}
                className="p-8 bg-white rounded-lg border border-gray-200 text-center animate-fade-in card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl text-gray-400 mb-4">{scar.icon}</div>
                <h3 className="text-xl md:text-2xl font-light tracking-wide uppercase text-gray-900 mb-4">
                  {scar.type}
                </h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  {scar.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Dr. Karaaltin employs advanced closure techniques to minimize scarring. All incisions are 
              strategically placed to be as inconspicuous as possible, following natural body contours.
            </p>
          </div>
        </div>
      </section>
      {/* 11. CTA FINAL — GET STARTED */}
      <ContactCTASection />
    </div>
  );
};

export default ProcedureTemplate;
