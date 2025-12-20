import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ChevronRight, Eye, Navigation, Target, Shield, XCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/home/ContactCTASection";
import drKaraaltinLogo from "@/assets/dr-karaaltin-logo-white.svg";
const KEndoscopicDeepPlane = () => {
  const { t } = useTranslation();
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
        <img alt="K Endoscopic Deep Plane Hero" className="absolute inset-0 w-full h-full object-cover animate-[scale-in_1.5s_ease-out]" src="/lovable-uploads/115d5105-e773-4820-8139-d99c9f55b040.jpg" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="relative container mx-auto px-8 h-full flex flex-col justify-center items-center text-center pointer-events-none">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-[0.1em] uppercase text-white mb-6 animate-fade-in">
            K Endoscopic Deep Plane Face Lift
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl font-light animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
            Lifted. Natural. Scarless.
          </p>
        </div>
      </section>

      {/* 2. INTRO / SEO BLOCK */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-8 max-w-4xl text-center content-spacing">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 animate-fade-in">
            The K Endoscopic Deep Plane Face Lift is an advanced minimally invasive lifting technique designed by Dr. Karaaltin to reposition deep facial structures with absolute precision—through tiny scalp-hidden incisions and without external scars.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed animate-fade-in" style={{
            animationDelay: '0.1s'
          }}>
            This approach elevates the brows, midface, jowls, and neck as a unified anatomical block, creating natural, long-lasting rejuvenation without skin tension or distortion.
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
                  K Endoscopic Deep Plane
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
                  01 // What Makes It Different
                </h3>
                <p className="overview-card-text-dark">
                  No visible scars, no ear or chin incisions, and no skin-pulling. All access points remain hidden in hair-bearing scalp.
                </p>
              </div>

              <div className={`overview-card-dark ${activeCard === 1 ? 'shadow-lg border-white/20' : ''}`} style={{
                animationDelay: '0.1s'
              }}>
                <h3 className="overview-card-title-dark">
                  02 // The "Crane Arm" Fascial Flap
                </h3>
                <p className="overview-card-text-dark">
                  A specially prepared temporal fascial flap lifts multiple facial zones simultaneously—brow, midface, jowls, and neck—for cohesive 3D rejuvenation.
                </p>
              </div>

              <div className={`overview-card-dark ${activeCard === 2 ? 'shadow-lg border-white/20' : ''}`} style={{
                animationDelay: '0.2s'
              }}>
                <h3 className="overview-card-title-dark">
                  03 // Precision Endoscopic Control
                </h3>
                <p className="overview-card-text-dark mb-4">
                  Tiny access points + endoscopic camera allow:
                </p>
                <ul className="overview-card-text-dark space-y-2">
                  <li>• Ligament release</li>
                  <li>• Nerve-safe dissection</li>
                  <li>• Customized lift direction</li>
                  <li>• Preservation of expression</li>
                </ul>
              </div>

              <div className={`overview-card-dark ${activeCard === 3 ? 'shadow-lg border-white/20' : ''}`} style={{
                animationDelay: '0.3s'
              }}>
                <h3 className="overview-card-title-dark">
                  04 // EndoChor® Bio-Lifting System
                </h3>
                <p className="overview-card-text-dark">
                  Biodegradable barbed mesh ribbons secure the lifted tissues to stable bone points. They dissolve gradually as your own collagen forms new support.
                </p>
              </div>

              <div className={`overview-card-dark ${activeCard === 4 ? 'shadow-lg border-white/20' : ''}`} style={{
                animationDelay: '0.4s'
              }}>
                <h3 className="overview-card-title-dark">
                  05 // Key Advantages
                </h3>
                <ul className="overview-card-text-dark space-y-2">
                  <li>✔ No visible scars</li>
                  <li>✔ Natural, unpulled results</li>
                  <li>✔ Faster recovery</li>
                  <li>✔ Long-lasting structural support</li>
                  <li>✔ Multi-zone rejuvenation in one session</li>
                </ul>
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
              <img alt="K Endoscopic Deep Plane With Dr. Karaaltin" className="w-full h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg" src="/lovable-uploads/6cb6cca6-e706-4e22-844a-003574f139e2.jpg" />
            </div>
            <div className="order-1 lg:order-2 space-y-6 content-spacing animate-fade-in" style={{
              animationDelay: '0.2s'
            }}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-gray-900">
                K Endoscopic Deep Plane With Dr. Karaaltin
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Designed for patients seeking powerful yet scarless rejuvenation, the K Endoscopic Deep Plane Face Lift blends deep-layer elevation with minimally invasive access. It is ideal for individuals wanting natural refinement without compromising nerve safety or facial harmony.
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
      <section className="section-spacing bg-[#F5F1E8]">
        <div className="container mx-auto px-8 max-w-6xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-gray-900 text-center mb-4 animate-fade-in">
            Procedure Details
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Scarless lifting with endoscopic precision
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-xl border-2 border-gray-200/50 hover:border-blue-300 transition-all duration-300 hover:-translate-y-2 animate-fade-in">
              <div className="absolute top-4 right-4 w-12 h-12 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-20 h-20 bg-blue-100 rounded-full opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500" />
              <h3 className="text-lg font-semibold text-gray-900 uppercase tracking-wide mb-3 pr-16">
                Endoscopic Deep Plane
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Minimally invasive access through scalp
              </p>
            </div>
            <div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-xl border-2 border-gray-200/50 hover:border-purple-300 transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="absolute top-4 right-4 w-12 h-12 rounded-lg bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <Navigation className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-20 h-20 bg-purple-100 rounded-full opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500" />
              <h3 className="text-lg font-semibold text-gray-900 uppercase tracking-wide mb-3 pr-16">
                Multidirectional Vectors
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Customized lifting in multiple directions
              </p>
            </div>
            <div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-xl border-2 border-gray-200/50 hover:border-pink-300 transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="absolute top-4 right-4 w-12 h-12 rounded-lg bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-20 h-20 bg-pink-100 rounded-full opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500" />
              <h3 className="text-lg font-semibold text-gray-900 uppercase tracking-wide mb-3 pr-16">
                Simultaneous Elevation
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Brow, midface & neck in one procedure
              </p>
            </div>
            <div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-xl border-2 border-gray-200/50 hover:border-green-300 transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="absolute top-4 right-4 w-12 h-12 rounded-lg bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-20 h-20 bg-green-100 rounded-full opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500" />
              <h3 className="text-lg font-semibold text-gray-900 uppercase tracking-wide mb-3 pr-16">
                Bio-Lifting Support
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Implant-based structural reinforcement
              </p>
            </div>
            <div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-xl border-2 border-gray-200/50 hover:border-amber-300 transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="absolute top-4 right-4 w-12 h-12 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <XCircle className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-20 h-20 bg-amber-100 rounded-full opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500" />
              <h3 className="text-lg font-semibold text-gray-900 uppercase tracking-wide mb-3 pr-16">
                No External Sutures
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Zero visible stitches on face
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
              description: "Comprehensive facial assessment and surgical planning"
            }, {
              step: "02",
              title: "Endoscopic Planning",
              description: "Mapping of lift vectors and access points"
            }, {
              step: "03",
              title: "Deep Plane Elevation",
              description: "Endoscopic release and repositioning of deep structures"
            }, {
              step: "04",
              title: "Crane-Arm Lift",
              description: "Fascial flap elevation for multi-zone rejuvenation"
            }, {
              step: "05",
              title: "Bio-Lifting Fixation",
              description: "EndoChor® implant placement for long-term support"
            }, {
              step: "06",
              title: "Postoperative Care",
              description: "Minimal downtime recovery protocol"
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
              <img alt="Recovery & Healing" className="w-full h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg" src="/lovable-uploads/dd2d3fd4-2b35-45bd-b159-7939c687b7c4.jpg" />
            </div>
            <div className="space-y-6 content-spacing animate-fade-in" style={{
              animationDelay: '0.2s'
            }}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-gray-900">
                Recovery & Healing
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Quick recovery, reduced swelling, and zero visible scarring. Results refine as implants integrate and collagen support develops.
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
                ✨
              </div>
              <h3 className="candidate-card-title-dark">
                Scarless Solution
              </h3>
              <p className="candidate-card-text-dark">
                Seeking rejuvenation without visible scars
              </p>
            </div>

            <div className="candidate-card-dark text-center animate-fade-in" style={{
              animationDelay: '0.2s'
            }}>
              <div className="candidate-icon-dark">
                😊
              </div>
              <h3 className="candidate-card-title-dark">
                Natural Expression
              </h3>
              <p className="candidate-card-text-dark">
                Maintaining natural facial animation
              </p>
            </div>

            <div className="candidate-card-dark text-center animate-fade-in" style={{
              animationDelay: '0.3s'
            }}>
              <div className="candidate-icon-dark">
                📐
              </div>
              <h3 className="candidate-card-title-dark">
                Multi-Zone Aging
              </h3>
              <p className="candidate-card-text-dark">
                Jowl, midface or neck descent
              </p>
            </div>

            <div className="candidate-card-dark text-center animate-fade-in" style={{
              animationDelay: '0.4s'
            }}>
              <div className="candidate-icon-dark">
                🔬
              </div>
              <h3 className="candidate-card-title-dark">
                Minimally Invasive
              </h3>
              <p className="candidate-card-text-dark">
                Preference for advanced minimal access
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
                Zero Visible Scars
              </div>
              
              <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase text-gray-900 mb-6">
                Completely Hidden
              </h3>
              
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                All incisions are hidden within the scalp — no visible facial scars.
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
            See scarless deep-plane rejuvenation.
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
export default KEndoscopicDeepPlane;