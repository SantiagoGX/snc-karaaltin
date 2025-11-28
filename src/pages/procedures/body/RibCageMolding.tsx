import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/home/ContactCTASection";
import drKaraaltinLogo from "@/assets/dr-karaaltin-logo-white.svg";
const RibCageMolding = () => {
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
        <img alt="Rib Cage Molding Hero" className="absolute inset-0 w-full h-full object-cover animate-[scale-in_1.5s_ease-out]" src="/lovable-uploads/83e12de7-e240-40d3-a6fd-e4c43771334b.jpg" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="relative container mx-auto px-8 h-full flex flex-col justify-center items-center text-center pointer-events-none">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-[0.1em] uppercase text-white mb-6 animate-fade-in">
            Rib Cage Molding with Piezo Technology
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl font-light animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
            Precision Waist Contouring — Without Rib Removal
          </p>
        </div>
      </section>

      {/* 2. INTRO / SEO BLOCK */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-8 max-w-4xl text-center content-spacing">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 animate-fade-in">
            Rib Cage Molding with Piezo Technology is an advanced technique created by Prof. Dr. Karaaltin that redefines waist contouring without resorting to traditional rib resection. Through 0.5 cm microincisions and piezoelectric remodeling of the floating ribs, the procedure allows visible reduction of thoracic width with safety, elegance, and minimal recovery.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed animate-fade-in" style={{
            animationDelay: '0.1s'
          }}>
            This innovation combines controlled vibration technology, anatomical approach, and functional preservation to achieve a slimmer silhouette without compromising bone structure.
          </p>
        </div>
      </section>

      {/* 3. OVERVIEW — HAKIMI STICKY EFFECT */}
      <section ref={overviewRef} className="overview-section-dark">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16 relative">
            {/* LEFT: STICKY */}
            <div className="overview-sticky-left">
              <div>
                <h2 className="overview-title-dark">
                  Rib Cage Molding
                </h2>
                <p className="overview-subtitle-dark">
                  Overview
                </p>
              </div>
              <img src={drKaraaltinLogo} alt="Dr. Karaaltin Logo" className="w-48 h-auto opacity-80" />
            </div>

            {/* RIGHT: SCROLLABLE CARDS */}
            <div ref={cardsRef} className="space-y-8 min-h-screen">
              <div className={`overview-card-dark ${activeCard === 0 ? 'active' : ''}`}>
                <h3 className="overview-card-title-dark">
                  01 // What Is Rib Cage Molding
                </h3>
                <p className="overview-card-text-dark">
                  A minimally invasive procedure that gently reshapes the floating ribs using piezoelectric technology. It does not involve rib extraction, does not alter deep anatomy, and maintains complete structural safety.
                </p>
              </div>

              <div className={`overview-card-dark ${activeCard === 1 ? 'active' : ''}`} style={{
                animationDelay: '0.1s'
              }}>
                <h3 className="overview-card-title-dark">
                  02 // Why Piezo Technology
                </h3>
                <p className="overview-card-text-dark mb-4">
                  Piezoelectric energy allows sculpting the costal edge with precision micro-movements, avoiding heat, trauma, or aggressive vibrations.
                </p>
                <p className="overview-card-text-dark font-semibold mb-2">
                  Benefits:
                </p>
                <ul className="overview-card-text-dark space-y-2">
                  <li>• Millimetric control</li>
                  <li>• Zero damage to soft tissues</li>
                  <li>• Smooth and natural results</li>
                  <li>• Accelerated recovery</li>
                </ul>
              </div>

              <div className={`overview-card-dark ${activeCard === 2 ? 'active' : ''}`} style={{
                animationDelay: '0.2s'
              }}>
                <h3 className="overview-card-title-dark">
                  03 // Micro-Incision Approach
                </h3>
                <p className="overview-card-text-dark">
                  The technique uses a single 0.5 cm microincision — virtually invisible once healed. Through this minimal window, the piezoelectric instrument is introduced to reshape the ribs with maximum precision and minimal aggression.
                </p>
              </div>

              <div className={`overview-card-dark ${activeCard === 3 ? 'active' : ''}`} style={{
                animationDelay: '0.3s'
              }}>
                <h3 className="overview-card-title-dark">
                  04 // Ideal Candidates
                </h3>
                <p className="overview-card-text-dark">
                  Patients who desire a narrower waist without major surgery, individuals with a wide rib cage that affects proportions, and patients seeking natural results without visible scars or extensive recovery time.
                </p>
              </div>

              <div className={`overview-card-dark ${activeCard === 4 ? 'active' : ''}`} style={{
                animationDelay: '0.4s'
              }}>
                <h3 className="overview-card-title-dark">
                  05 // Why Dr. Karaaltin
                </h3>
                <p className="overview-card-text-dark">
                  Recognized for his mastery of advanced anatomical techniques and minimally invasive procedures, Dr. Karaaltin combines scientific innovation, surgical safety, and premium aesthetics. His approach is backed by research, advanced experimentation, and consistent results.
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
              <img alt="Rib Cage Molding With Dr. Karaaltin" className="w-full h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg" src="/lovable-uploads/aa13781c-05ca-4153-b989-6346a1ce45a2.jpg" />
            </div>
            <div className="order-1 lg:order-2 space-y-6 content-spacing animate-fade-in" style={{
              animationDelay: '0.2s'
            }}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-gray-900">
                Rib Cage Molding With Dr. Karaaltin
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Rib Cage Molding with Piezo Technology is a modern and safe alternative to rib resection. Through controlled ultrasonic vibration, Dr. Karaaltin reshapes the costal edge to refine the silhouette, reduce lateral width, and harmonize proportions. The technique maintains thoracic stability and avoids risks associated with more invasive bone surgeries.
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
      <section className="section-spacing bg-gray-50">
        <div className="container mx-auto px-8 max-w-6xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-gray-900 text-center mb-16 animate-fade-in">
            Procedure Details
          </h2>
          
          <div className="space-y-16">
            {/* How It Works - Image Left, Text Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <img src="/placeholder.svg" alt="How It Works" className="w-full h-[350px] lg:h-[400px] object-cover rounded-lg shadow-lg" />
              </div>
              <div className="space-y-6 animate-fade-in" style={{
                animationDelay: '0.2s'
              }}>
                <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase text-gray-900">
                  How It Works
                </h3>
                <ul className="text-base md:text-lg text-gray-700 leading-relaxed space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-gray-900 font-semibold mt-1">01</span>
                    <span>0.5 cm microincision</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-900 font-semibold mt-1">02</span>
                    <span>Safe subperiosteal access</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-900 font-semibold mt-1">03</span>
                    <span>Precise piezoelectric remodeling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-900 font-semibold mt-1">04</span>
                    <span>Symmetry verification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-900 font-semibold mt-1">05</span>
                    <span>Virtually invisible closure</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Clinical Advantages - Text Left, Image Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 space-y-6 animate-fade-in" style={{
                animationDelay: '0.2s'
              }}>
                <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase text-gray-900">
                  Clinical Advantages
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200">
                    <div className="flex-shrink-0 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                      ✓
                    </div>
                    <div>
                      <p className="text-base md:text-lg text-gray-900 font-semibold">No rib extraction</p>
                      <p className="text-sm text-gray-600">Complete structural preservation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200">
                    <div className="flex-shrink-0 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                      ✓
                    </div>
                    <div>
                      <p className="text-base md:text-lg text-gray-900 font-semibold">No visible scars</p>
                      <p className="text-sm text-gray-600">Virtually invisible 0.5 cm incision</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200">
                    <div className="flex-shrink-0 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                      ✓
                    </div>
                    <div>
                      <p className="text-base md:text-lg text-gray-900 font-semibold">Natural results</p>
                      <p className="text-sm text-gray-600">Progressive and harmonious outcomes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200">
                    <div className="flex-shrink-0 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                      ✓
                    </div>
                    <div>
                      <p className="text-base md:text-lg text-gray-900 font-semibold">Micrometric control</p>
                      <p className="text-sm text-gray-600">Safety through vibrational precision</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 animate-fade-in">
                <img alt="Clinical Advantages" className="w-full h-[350px] lg:h-[400px] object-cover rounded-lg shadow-lg" src="/lovable-uploads/4581678e-ceff-4325-8c2c-7e09c384c794.jpg" />
              </div>
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
              description: "Anatomical analysis, proportion study, and expectations."
            }, {
              step: "02",
              title: "Preoperative Planning",
              description: "Rib cage evaluation, projection, and symmetry assessment."
            }, {
              step: "03",
              title: "Surgery Day",
              description: "Piezoelectric remodeling through microincision."
            }, {
              step: "04",
              title: "Postoperative Care",
              description: "Minimal bandaging and quick return to activities."
            }, {
              step: "05",
              title: "Follow-Up",
              description: "Healing control and proportion adjustment."
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
              <img alt="Recovery & Healing" className="w-full h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg" src="/lovable-uploads/1d9be05e-1cf2-4969-8c3f-6506c4f227ad.jpg" />
            </div>
            <div className="space-y-6 content-spacing animate-fade-in" style={{
              animationDelay: '0.2s'
            }}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-gray-900">
                Recovery & Healing
              </h2>
              <ul className="text-base md:text-lg text-gray-700 leading-relaxed space-y-2">
                <li>• Minimal inflammation</li>
                <li>• 0.5 cm incision almost imperceptible</li>
                <li>• Quick return to daily activities</li>
                <li>• Avoid direct pressure the first week</li>
                <li>• Results most visible in 4–8 weeks</li>
              </ul>
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
          <h2 className="candidates-title-dark">
            Ideal Candidates
          </h2>
          
          <div className="candidates-grid">
            <div className="candidate-card-dark" style={{
              animationDelay: '0.1s'
            }}>
              <div className="candidate-icon-dark">
                ⚕
              </div>
              <h3 className="candidate-card-title-dark">
                Wide Rib Cage
              </h3>
              <p className="candidate-card-text-dark">
                Patients with a wide rib cage seeking refined proportions
              </p>
            </div>

            <div className="candidate-card-dark" style={{
              animationDelay: '0.2s'
            }}>
              <div className="candidate-icon-dark">
                ✨
              </div>
              <h3 className="candidate-card-title-dark">
                Stylized Waist
              </h3>
              <p className="candidate-card-text-dark">
                Individuals seeking a more defined and elegant waistline
              </p>
            </div>

            <div className="candidate-card-dark" style={{
              animationDelay: '0.3s'
            }}>
              <div className="candidate-icon-dark">
                🔬
              </div>
              <h3 className="candidate-card-title-dark">
                Minimal Approach
              </h3>
              <p className="candidate-card-text-dark">
                Patients preferring techniques without bone resection
              </p>
            </div>

            <div className="candidate-card-dark" style={{
              animationDelay: '0.4s'
            }}>
              <div className="candidate-icon-dark">
                ⚖
              </div>
              <h3 className="candidate-card-title-dark">
                Body Harmony
              </h3>
              <p className="candidate-card-text-dark">
                Ideal for harmony between thorax, waist, and hips
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
                Virtually Invisible
              </div>
              
              <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase text-gray-900 mb-6">
                Single Microincision
              </h3>
              
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
                A 0.5 cm microincision strategically placed in the natural lateral fold of the torso. When healed, it becomes virtually invisible.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-gray-200">
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mx-auto border border-gray-300">
                    <span className="text-xl">📏</span>
                  </div>
                  <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Size</p>
                  <p className="text-sm text-gray-600">0.5 cm</p>
                </div>
                
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mx-auto border border-gray-300">
                    <span className="text-xl">📍</span>
                  </div>
                  <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Location</p>
                  <p className="text-sm text-gray-600">Lateral torso fold</p>
                </div>
                
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mx-auto border border-gray-300">
                    <span className="text-xl">👁️</span>
                  </div>
                  <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Visibility</p>
                  <p className="text-sm text-gray-600">Nearly invisible</p>
                </div>
              </div>
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
            Natural, refined, and proportional results.
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
export default RibCageMolding;