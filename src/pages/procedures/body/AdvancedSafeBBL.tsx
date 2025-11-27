import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/home/ContactCTASection";
import drKaraaltinLogo from "@/assets/dr-karaaltin-logo-white.svg";

const AdvancedSafeBBL = () => {
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
          alt="Advanced Safe BBL Hero"
          className="absolute inset-0 w-full h-full object-cover animate-[scale-in_1.5s_ease-out]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="relative container mx-auto px-8 h-full flex flex-col justify-center items-center text-center pointer-events-none">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-[0.1em] uppercase text-white mb-6 animate-fade-in">
            Advanced Safe BBL™
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl font-light animate-fade-in" style={{ animationDelay: '0.2s' }}>
            A New Era of Safe, Scientific Gluteal Augmentation
          </p>
        </div>
      </section>

      {/* 2. INTRO / SEO BLOCK */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-8 max-w-4xl text-center content-spacing">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed animate-fade-in">
            The Advanced Safe BBL™ developed by Professor Dr. Mehmet Veli Karaaltin represents the safest, most scientifically validated, and technologically advanced version of the modern Brazilian Butt Lift. Based on more than 543 audited patients, 20 cadaveric dissections, and real-time monitoring systems, this protocol drastically reduces the risks of fat embolism and serious complications while achieving natural projection, stable results, and controlled recovery.
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
                  Advanced Safe BBL™
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
                className={`overview-card-dark ${activeCard === 0 ? 'active' : ''}`}
              >
                <h3 className="overview-card-title-dark">
                  01 // What Is the Advanced Safe BBL™
                </h3>
                <p className="overview-card-text-dark">
                  The Advanced Safe BBL™ is a comprehensive fat gluteoplasty system designed to maximize safety and precision. It uses real-time ultrasound monitoring, vascular Doppler, controlled fat injection, and stem-cell-enriched technology for consistent and long-lasting results.
                </p>
              </div>

              <div
                className={`overview-card-dark ${activeCard === 1 ? 'active' : ''}`}
                style={{ animationDelay: '0.1s' }}
              >
                <h3 className="overview-card-title-dark">
                  02 // Real-Time Ultrasound Safety Monitoring
                </h3>
                <p className="overview-card-text-dark">
                  Injection is performed exclusively above the muscle, verified in real-time using wireless Clarius AI™ technology. This eliminates the risk of deep injections near major gluteal vessels and completely avoids "blind" technique.
                </p>
              </div>

              <div
                className={`overview-card-dark ${activeCard === 2 ? 'active' : ''}`}
                style={{ animationDelay: '0.2s' }}
              >
                <h3 className="overview-card-title-dark">
                  03 // Vascular Doppler Mapping
                </h3>
                <p className="overview-card-text-dark">
                  Before and during surgery, all relevant vascular perforators are mapped to avoid critical vessels. This guides safe trajectories for fat, reducing trauma risk and improving graft survival.
                </p>
              </div>

              <div
                className={`overview-card-dark ${activeCard === 3 ? 'active' : ''}`}
                style={{ animationDelay: '0.3s' }}
              >
                <h3 className="overview-card-title-dark">
                  04 // Controlled Fat Injection (Liposat™ + Vibrosat Pro™)
                </h3>
                <p className="overview-card-text-dark mb-4">
                  The dual Vibrosat Pro™ + Liposat Pump™ system allows uniform mechanical tissue expansion and controlled injection in ml/min.
                </p>
                <p className="overview-card-text-dark font-semibold">
                  Benefits:
                </p>
                <ul className="overview-card-text-dark space-y-2 mt-2">
                  <li>• Homogeneous distribution</li>
                  <li>• Lower pressure</li>
                  <li>• Less tissue trauma</li>
                  <li>• Better graft integration</li>
                </ul>
              </div>

              <div
                className={`overview-card-dark ${activeCard === 4 ? 'active' : ''}`}
                style={{ animationDelay: '0.4s' }}
              >
                <h3 className="overview-card-title-dark">
                  05 // Stem-Cell Enriched Fat Grafting
                </h3>
                <p className="overview-card-text-dark">
                  Using Stempia™ technology, the graft combines macro and micro fat with fat-derived stem cells, increasing vascularity, improving graft survival, and generating a smoother, more natural and stable result.
                </p>
              </div>

              <div
                className={`overview-card-dark ${activeCard === 5 ? 'active' : ''}`}
                style={{ animationDelay: '0.5s' }}
              >
                <h3 className="overview-card-title-dark">
                  06 // Audit-Proven Safety
                </h3>
                <p className="overview-card-text-dark mb-4">
                  In 543 patients, the use of the complete protocol reduced major complications by more than 90%:
                </p>
                <ul className="overview-card-text-dark space-y-2">
                  <li>• 0 cases of fat embolism</li>
                  <li>• 0 lipoid pneumonia</li>
                  <li>• Seromas drastically reduced</li>
                  <li>• Less postoperative pain</li>
                  <li>• Lower incidence of fat necrosis</li>
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
              {/* YouTube Video Integration */}
              <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/eSdiWtaQ9yk"
                  title="Advanced Safe BBL Explanation"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6 content-spacing animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-gray-900">
                Advanced Safe BBL™ With Dr. Karaaltin
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                The Advanced Safe BBL™ is not just an aesthetic procedure: it is a surgical system based on science, advanced anatomy, and continuous monitoring technology. Designed by Prof. Dr. Karaaltin—a pioneer in reconstructive and microsurgical surgery—this method redefines the modern standard of safe gluteal augmentation, achieving smooth curves, natural proportions, and results that respect vascular integrity.
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
          
          <div className="space-y-16">
            {/* How the Protocol Works */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="order-2 lg:order-1">
                <img
                  src="/placeholder.svg"
                  alt="Protocol Components"
                  className="w-full h-[350px] object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="order-1 lg:order-2 space-y-4">
                <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase text-gray-900 mb-4">
                  How the Protocol Works
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                  The protocol combines four pillars:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-light mt-1">
                      1
                    </div>
                    <div>
                      <p className="text-base md:text-lg text-gray-700"><span className="font-semibold">Real-time ultrasound:</span> ensures safe plane.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-light mt-1">
                      2
                    </div>
                    <div>
                      <p className="text-base md:text-lg text-gray-700"><span className="font-semibold">Controlled injection:</span> precise flow, no pressure spikes.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-light mt-1">
                      3
                    </div>
                    <div>
                      <p className="text-base md:text-lg text-gray-700"><span className="font-semibold">Doppler mapping:</span> avoids critical vessels.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-light mt-1">
                      4
                    </div>
                    <div>
                      <p className="text-base md:text-lg text-gray-700"><span className="font-semibold">Stem cell-enriched fat:</span> better integration and projection.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* The Karaaltin Sponge Experiment */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase text-gray-900">
                  The Karaaltin Sponge Experiment™
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  In a comparative study with five leading technologies, Vibrosat Pro™ + Liposat Pump™ produced the most uniform dispersion, without dead zones or tissue damage. This evidence supports the biomechanical superiority of the system.
                </p>
              </div>
              <div>
                <img
                  src="/placeholder.svg"
                  alt="Sponge Experiment Results"
                  className="w-full h-[350px] object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Complex Revisions */}
            <div className="bg-white p-8 lg:p-10 rounded-lg shadow-md border border-gray-200 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-8 items-center">
                <div>
                  <img
                    src="/placeholder.svg"
                    alt="Complex Revisions"
                    className="w-full h-[300px] object-cover rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase text-gray-900">
                    Complex Revisions — Macro/Micro Fat Grafting
                  </h3>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    For cases of fibrosis or previous BBL failures, the macro/micro fat cell technique invented by Dr. Karaaltin allows correction of contour deformities in one or two sessions, using precise layers of enriched grafting.
                  </p>
                </div>
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
            {[
              {
                step: "01",
                title: "Consultation",
                description: "3D analysis, anatomical evaluation, and proportion definition."
              },
              {
                step: "02",
                title: "Preoperative Mapping",
                description: "Doppler + projection vector planning."
              },
              {
                step: "03",
                title: "Surgery Day",
                description: "Extraction, purification, enrichment, and ultrasound-guided reinjection."
              },
              {
                step: "04",
                title: "Immediate Post-Op",
                description: "Specialized compression and early monitoring."
              },
              {
                step: "05",
                title: "Follow-Up",
                description: "Critical reviews during the first 10 days for maximum safety."
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
                <li>• Specialized compression designed by Dr. Karaaltin to reduce seroma.</li>
                <li>• MLD from postoperative day 3 to control inflammation.</li>
                <li>• Progressive return to activity according to graft response.</li>
                <li>• Avoid direct pressure on the treated area during the first weeks.</li>
              </ul>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed font-semibold">
                Expected result: natural projection, uniform smoothness, and curves proportional to bone structure.
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
      <section className="candidates-section-dark">
        <div className="container mx-auto px-8 max-w-6xl">
          <h2 className="candidates-title-dark">
            Ideal Candidates
          </h2>
          
          <div className="candidates-grid">
            <div className="candidate-card-dark" style={{ animationDelay: '0.1s' }}>
              <div className="candidate-icon-dark">
                🧍
              </div>
              <h3 className="candidate-card-title-dark">
                Sufficient Fat Reserves
              </h3>
              <p className="candidate-card-text-dark">
                Individuals with adequate fat for transfer
              </p>
            </div>

            <div className="candidate-card-dark" style={{ animationDelay: '0.2s' }}>
              <div className="candidate-icon-dark">
                🎯
              </div>
              <h3 className="candidate-card-title-dark">
                Natural Results
              </h3>
              <p className="candidate-card-text-dark">
                Seeking harmonious, safe, and natural outcomes
              </p>
            </div>

            <div className="candidate-card-dark" style={{ animationDelay: '0.3s' }}>
              <div className="candidate-icon-dark">
                🚭
              </div>
              <h3 className="candidate-card-title-dark">
                Non-Smokers
              </h3>
              <p className="candidate-card-text-dark">
                Non-smokers or willing to pause the habit
              </p>
            </div>

            <div className="candidate-card-dark" style={{ animationDelay: '0.4s' }}>
              <div className="candidate-icon-dark">
                📊
              </div>
              <h3 className="candidate-card-title-dark">
                Evidence-Based Priority
              </h3>
              <p className="candidate-card-text-dark">
                Prioritize advanced monitoring and proven techniques
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. SCAR EXPECTATIONS */}
      <section className="scar-section">
        <div className="container mx-auto px-8 max-w-5xl">
          <h2 className="scar-title">
            Scar Expectations
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-10 lg:p-12 rounded-lg shadow-md border border-gray-200 text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="scar-badge">
                Minimal Scarring
              </div>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
                The Advanced Safe BBL™ uses 2–3 mm microincisions, strategically placed to remain virtually invisible when healed. There is no visible gluteal scar, as the graft is performed through these minimal access points.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h4 className="text-sm uppercase tracking-widest font-light text-gray-900 mb-2">Size</h4>
                  <p className="text-base text-gray-700">2–3 mm microincisions</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h4 className="text-sm uppercase tracking-widest font-light text-gray-900 mb-2">Location</h4>
                  <p className="text-base text-gray-700">Hidden in natural creases</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h4 className="text-sm uppercase tracking-widest font-light text-gray-900 mb-2">Visibility</h4>
                  <p className="text-base text-gray-700">Virtually invisible when healed</p>
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
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Discover real results achieved with safe and scientific techniques.
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

export default AdvancedSafeBBL;
