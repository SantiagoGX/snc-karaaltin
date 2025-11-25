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

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
      {/* 1. HERO SECTION */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img
          src="/placeholder.svg"
          alt="Rib Cage Molding Hero"
          className="absolute inset-0 w-full h-full object-cover animate-[scale-in_1.5s_ease-out]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="relative container mx-auto px-8 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-[0.1em] uppercase text-white mb-6 animate-fade-in">
            Rib Cage Molding with Piezo Technology
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl font-light animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Precision Waist Contouring — Without Rib Removal
          </p>
        </div>
      </section>

      {/* 2. INTRO / SEO BLOCK */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-8 max-w-4xl text-center content-spacing">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed animate-fade-in">
            Rib Cage Molding with Piezo Technology is an advanced technique created by Prof. Dr. Karaaltin that redefines waist contouring without resorting to traditional rib resection. Through 0.5 cm microincisions and piezoelectric remodeling of the floating ribs, the procedure allows visible reduction of thoracic width with safety, elegance, and minimal recovery. This innovation combines controlled vibration technology, anatomical approach, and functional preservation to achieve a slimmer silhouette without compromising bone structure.
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
                  Rib Cage Molding
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
                  01 // What Is Rib Cage Molding
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  A minimally invasive procedure that gently reshapes the floating ribs using piezoelectric technology. It does not involve rib extraction, does not alter deep anatomy, and maintains complete structural safety.
                </p>
              </div>

              <div
                className={`overview-card bg-white p-8 lg:p-10 rounded-lg shadow-sm border border-gray-200 transition-all duration-500 ${
                  activeCard === 1 ? 'shadow-lg border-gray-300' : ''
                }`}
                style={{ animationDelay: '0.1s' }}
              >
                <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase text-gray-900 mb-4">
                  02 // Why Piezo Technology
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                  Piezoelectric energy allows sculpting the costal edge with precision micro-movements, avoiding heat, trauma, or aggressive vibrations.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed font-semibold mb-2">
                  Benefits:
                </p>
                <ul className="text-base md:text-lg text-gray-700 leading-relaxed space-y-2">
                  <li>• Millimetric control</li>
                  <li>• Zero damage to soft tissues</li>
                  <li>• Smooth and natural results</li>
                  <li>• Accelerated recovery</li>
                </ul>
              </div>

              <div
                className={`overview-card bg-white p-8 lg:p-10 rounded-lg shadow-sm border border-gray-200 transition-all duration-500 ${
                  activeCard === 2 ? 'shadow-lg border-gray-300' : ''
                }`}
                style={{ animationDelay: '0.2s' }}
              >
                <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase text-gray-900 mb-4">
                  03 // Micro-Incision Approach
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  The technique uses a single 0.5 cm microincision — virtually invisible once healed. Through this minimal window, the piezoelectric instrument is introduced to reshape the ribs with maximum precision and minimal aggression.
                </p>
              </div>

              <div
                className={`overview-card bg-white p-8 lg:p-10 rounded-lg shadow-sm border border-gray-200 transition-all duration-500 ${
                  activeCard === 3 ? 'shadow-lg border-gray-300' : ''
                }`}
                style={{ animationDelay: '0.3s' }}
              >
                <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase text-gray-900 mb-4">
                  04 // Ideal Candidates
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Patients who desire a narrower waist without major surgery, individuals with a wide rib cage that affects proportions, and patients seeking natural results without visible scars or extensive recovery time.
                </p>
              </div>

              <div
                className={`overview-card bg-white p-8 lg:p-10 rounded-lg shadow-sm border border-gray-200 transition-all duration-500 ${
                  activeCard === 4 ? 'shadow-lg border-gray-300' : ''
                }`}
                style={{ animationDelay: '0.4s' }}
              >
                <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase text-gray-900 mb-4">
                  05 // Why Dr. Karaaltin
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
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
              <img
                src="/placeholder.svg"
                alt="Rib Cage Molding With Dr. Karaaltin"
                className="w-full h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6 content-spacing animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-gray-900">
                Rib Cage Molding With Dr. Karaaltin
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Rib Cage Molding with Piezo Technology is a modern and safe alternative to rib resection. Through controlled ultrasonic vibration, Dr. Karaaltin reshapes the costal edge to refine the silhouette, reduce lateral width, and harmonize proportions. The technique maintains thoracic stability and avoids risks associated with more invasive bone surgeries.
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
        <div className="container mx-auto px-8 max-w-5xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-gray-900 text-center mb-12 animate-fade-in">
            Procedure Details
          </h2>
          
          <div className="space-y-12">
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase text-gray-900">
                How It Works
              </h3>
              <ul className="text-base md:text-lg text-gray-700 leading-relaxed space-y-2">
                <li>• 0.5 cm microincision</li>
                <li>• Safe subperiosteal access</li>
                <li>• Precise piezoelectric remodeling</li>
                <li>• Symmetry verification</li>
                <li>• Virtually invisible closure</li>
              </ul>
            </div>

            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase text-gray-900">
                Clinical Advantages
              </h3>
              <ul className="text-base md:text-lg text-gray-700 leading-relaxed space-y-2">
                <li>• No rib extraction</li>
                <li>• No visible scars</li>
                <li>• No functional alteration</li>
                <li>• Natural and progressive results</li>
                <li>• Safety based on micrometric vibrational control</li>
              </ul>
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
                description: "Anatomical analysis, proportion study, and expectations."
              },
              {
                step: "02",
                title: "Preoperative Planning",
                description: "Rib cage evaluation, projection, and symmetry assessment."
              },
              {
                step: "03",
                title: "Surgery Day",
                description: "Piezoelectric remodeling through microincision."
              },
              {
                step: "04",
                title: "Postoperative Care",
                description: "Minimal bandaging and quick return to activities."
              },
              {
                step: "05",
                title: "Follow-Up",
                description: "Healing control and proportion adjustment."
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
              <ul className="text-base md:text-lg text-gray-700 leading-relaxed space-y-2">
                <li>• Minimal inflammation</li>
                <li>• 0.5 cm incision almost imperceptible</li>
                <li>• Quick return to daily activities</li>
                <li>• Avoid direct pressure the first week</li>
                <li>• Results most visible in 4–8 weeks</li>
              </ul>
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
        <div className="container mx-auto px-8 max-w-5xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-gray-900 text-center mb-12 animate-fade-in">
            Ideal Candidates
          </h2>
          
          <div className="space-y-6 text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <ul className="space-y-3">
              <li>• Patients with a wide rib cage</li>
              <li>• Individuals seeking a more stylized waist</li>
              <li>• Patients who prefer techniques without bone resection</li>
              <li>• Ideal for those desiring harmony between thorax, waist, and hips</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 9. SCAR EXPECTATIONS */}
      <section className="section-spacing bg-gray-50">
        <div className="container mx-auto px-8 max-w-5xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-gray-900 text-center mb-12 animate-fade-in">
            Scar Expectations
          </h2>
          
          <div className="max-w-3xl mx-auto text-base md:text-lg text-gray-700 leading-relaxed text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <p>
              A 0.5 cm microincision strategically placed in the natural lateral fold of the torso. When healed, it becomes virtually invisible.
            </p>
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
            Natural, refined, and proportional results.
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

export default RibCageMolding;
