import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/home/ContactCTASection";
import drKaraaltinLogo from "@/assets/dr-karaaltin-logo-white.svg";

const KFaceLift = () => {
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
          alt="K Face Lift Hero"
          className="absolute inset-0 w-full h-full object-cover animate-[scale-in_1.5s_ease-out]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="relative container mx-auto px-8 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-[0.1em] uppercase text-white mb-6 animate-fade-in">
            The K Face Lift
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl font-light animate-fade-in" style={{ animationDelay: '0.2s' }}>
            The World's First Dynamic Face Lift — Created by Professor Dr. Karaaltin
          </p>
        </div>
      </section>

      {/* 2. INTRO / SEO BLOCK */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-8 max-w-4xl text-center content-spacing">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 animate-fade-in">
            The K Face Lift is a landmark innovation in facial rejuvenation, created by Professor Dr. Mehmet Veli Karaaltin. This dynamic, anatomically guided technique merges High SMAS and Deep Plane principles with advanced tissue-vector control to achieve long-lasting, naturally expressive results.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Unlike traditional facelifts, the K Face Lift adapts to each patient's individual anatomy, allowing multi-layered elevation, improved safety, and simultaneous face-and-neck enhancement in a single, seamless procedure.
          </p>
        </div>
      </section>

      {/* 3. OVERVIEW — HAKIMI STICKY EFFECT */}
      <section ref={overviewRef} className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16 relative">
            {/* LEFT: STICKY */}
            <div className="lg:sticky lg:top-32 lg:h-fit space-y-8 animate-fade-in">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-gray-900 mb-2">
                  The K Face Lift
                </h2>
                <p className="text-xl md:text-2xl font-light text-gray-600 uppercase tracking-widest">
                  Overview
                </p>
              </div>
              <img
                src={drKaraaltinLogo}
                alt="Dr. Karaaltin Logo"
                className="w-48 h-auto opacity-80 brightness-0"
              />
            </div>

            {/* RIGHT: SCROLLABLE CARDS */}
            <div ref={cardsRef} className="space-y-8 min-h-screen">
              <div
                className={`overview-card bg-white p-8 lg:p-10 rounded-lg shadow-sm border border-gray-200 transition-all duration-500 ${
                  activeCard === 0 ? 'shadow-lg border-gray-300' : ''
                }`}
              >
                <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase text-gray-900 mb-4">
                  01 // What Makes the K Face Lift Revolutionary
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  A dynamic lift designed to preserve facial expression while delivering powerful rejuvenation. Combines High SMAS and Deep Plane concepts for enhanced lifting, optimized safety, and minimal scarring.
                </p>
              </div>

              <div
                className={`overview-card bg-white p-8 lg:p-10 rounded-lg shadow-sm border border-gray-200 transition-all duration-500 ${
                  activeCard === 1 ? 'shadow-lg border-gray-300' : ''
                }`}
                style={{ animationDelay: '0.1s' }}
              >
                <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase text-gray-900 mb-4">
                  02 // Anatomical Landmark Mapping
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                  A proprietary system of surgical zones defining:
                </p>
                <ul className="text-base md:text-lg text-gray-700 leading-relaxed space-y-2">
                  <li>• Frontal nerve protection pathways</li>
                  <li>• Modiolus vascular arcade preservation</li>
                  <li>• Deep plane & SMAS elevation vectors</li>
                </ul>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mt-4">
                  These mappings reduce downtime, improve safety, and maximize aesthetic outcome.
                </p>
              </div>

              <div
                className={`overview-card bg-white p-8 lg:p-10 rounded-lg shadow-sm border border-gray-200 transition-all duration-500 ${
                  activeCard === 2 ? 'shadow-lg border-gray-300' : ''
                }`}
                style={{ animationDelay: '0.2s' }}
              >
                <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase text-gray-900 mb-4">
                  03 // Dual-Vector Rotation–Advancement System
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                  Two independent SMAS flaps deliver true 3D rejuvenation:
                </p>
                <ul className="text-base md:text-lg text-gray-700 leading-relaxed space-y-2">
                  <li>• <span className="font-semibold">Superior vector:</span> rotates and elevates midface, malar region & brow</li>
                  <li>• <span className="font-semibold">Inferior vector:</span> advances toward the mastoid to sharpen jawline & neck</li>
                </ul>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mt-4">
                  Supported by biodegradable PCL mesh to maintain results for months while stimulating collagen.
                </p>
              </div>

              <div
                className={`overview-card bg-white p-8 lg:p-10 rounded-lg shadow-sm border border-gray-200 transition-all duration-500 ${
                  activeCard === 3 ? 'shadow-lg border-gray-300' : ''
                }`}
                style={{ animationDelay: '0.3s' }}
              >
                <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase text-gray-900 mb-4">
                  04 // Integrated Neck Rejuvenation
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Performed simultaneously, addressing platysma bands, digastric muscle issues, submandibular gland prominence, and cervico-mental angle definition.
                </p>
              </div>

              <div
                className={`overview-card bg-white p-8 lg:p-10 rounded-lg shadow-sm border border-gray-200 transition-all duration-500 ${
                  activeCard === 4 ? 'shadow-lg border-gray-300' : ''
                }`}
                style={{ animationDelay: '0.4s' }}
              >
                <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase text-gray-900 mb-4">
                  05 // Advanced Mesh Fixation
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  A CE-certified PCL mesh implant reinforces structural support, integrates naturally over 9–12 months, and dissolves without residue. Manufactured by Bloocell, founded by Dr. Karaaltin.
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
              <img
                src="/placeholder.svg"
                alt="K Face Lift With Dr. Karaaltin"
                className="w-full h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6 content-spacing animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-gray-900">
                K Face Lift With Dr. Karaaltin
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                The K Face Lift represents a new standard in modern facial surgery—uniting scientific precision, artistic detail, and a patient-specific approach. Professor Dr. Karaaltin's unmatched anatomical expertise allows him to deliver deeply natural, expressive, and durable results without distortion or rigidity.
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

      {/* 5. PROCEDURE DETAILS */}
      <section className="section-spacing bg-gray-50">
        <div className="container mx-auto px-8 max-w-6xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-gray-900 text-center mb-16 animate-fade-in">
            Procedure Details
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200 animate-fade-in hover:shadow-lg transition-all duration-300">
              <h3 className="text-lg font-semibold text-gray-900 uppercase tracking-wide mb-3">
                Multi-Layer Elevation
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Respecting nerve and vascular anatomy
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 animate-fade-in hover:shadow-lg transition-all duration-300" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-lg font-semibold text-gray-900 uppercase tracking-wide mb-3">
                Rotation–Advancement
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Flap engineering for natural vectors
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 animate-fade-in hover:shadow-lg transition-all duration-300" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-lg font-semibold text-gray-900 uppercase tracking-wide mb-3">
                Mesh Reinforcement
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Biodegradable support for lasting results
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 animate-fade-in hover:shadow-lg transition-all duration-300" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-lg font-semibold text-gray-900 uppercase tracking-wide mb-3">
                Facial Harmonization
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Simultaneous upper, mid, and lower face
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 animate-fade-in hover:shadow-lg transition-all duration-300" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-lg font-semibold text-gray-900 uppercase tracking-wide mb-3">
                Scar Optimization
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Strategic incision placement for minimal visibility
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
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Comprehensive facial analysis and aesthetic goals discussion"
              },
              {
                step: "02",
                title: "Anatomical Mapping",
                description: "Precise identification of lifting vectors and nerve pathways"
              },
              {
                step: "03",
                title: "Surgical Planning",
                description: "Customized approach tailored to individual anatomy"
              },
              {
                step: "04",
                title: "K Face Lift Procedure",
                description: "Dynamic multi-layer lifting with rotation-advancement technique"
              },
              {
                step: "05",
                title: "Combined Neck Work",
                description: "Simultaneous neck rejuvenation if indicated"
              },
              {
                step: "06",
                title: "Postoperative Care",
                description: "Structured recovery protocol and follow-up visits"
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
                alt="Recovery & Healing"
                className="w-full h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6 content-spacing animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-gray-900">
                Recovery & Healing
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Most patients experience rapid functional recovery due to landmark-guided dissection. Swelling subsides progressively, with results refining over several months as the mesh supports collagen regeneration.
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

      {/* 8. IDEAL CANDIDATES */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-8 max-w-6xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-gray-900 text-center mb-16 animate-fade-in">
            Ideal Candidates
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 text-center animate-fade-in hover:shadow-lg transition-all duration-300" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                ⏳
              </div>
              <h3 className="text-lg font-semibold text-gray-900 uppercase tracking-wide mb-3">
                Facial Aging
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Moderate to advanced facial aging concerns
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 text-center animate-fade-in hover:shadow-lg transition-all duration-300" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                😊
              </div>
              <h3 className="text-lg font-semibold text-gray-900 uppercase tracking-wide mb-3">
                Natural Expression
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Desire for natural expression + long-term lift
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 text-center animate-fade-in hover:shadow-lg transition-all duration-300" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                📐
              </div>
              <h3 className="text-lg font-semibold text-gray-900 uppercase tracking-wide mb-3">
                Neck & Jawline
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Neck laxity or jawline blunting
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 text-center animate-fade-in hover:shadow-lg transition-all duration-300" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                🔬
              </div>
              <h3 className="text-lg font-semibold text-gray-900 uppercase tracking-wide mb-3">
                Anatomical Approach
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Seeking comprehensive, anatomically-driven technique
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
            <div className="bg-white p-10 lg:p-12 rounded-lg shadow-lg border-2 border-gray-900 text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="inline-block px-6 py-3 bg-gray-900 text-white rounded-full text-sm font-semibold uppercase tracking-widest mb-6">
                Minimal Visibility
              </div>
              
              <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase text-gray-900 mb-6">
                Optimized Incision Placement
              </h3>
              
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Incisions are placed along hairline and natural creases for minimal visibility and optimal healing.
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
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Discover real results from advanced lifting techniques.
          </p>
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 text-xs uppercase tracking-widest font-light rounded hover:bg-gray-800 transition-all duration-300 button-hover animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            View Before & After Gallery
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 11. GET STARTED CTA */}
      <ContactCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default KFaceLift;
