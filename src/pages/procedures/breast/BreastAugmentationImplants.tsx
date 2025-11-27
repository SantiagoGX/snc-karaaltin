import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/home/ContactCTASection";
import drKaraaltinLogo from "@/assets/dr-karaaltin-logo-white.svg";

const BreastAugmentationImplants = () => {
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
      {/* Hero Section */}
      <section className="procedure-hero">
        <img
          src="/placeholder.svg"
          alt="Breast Augmentation With Implants Hero"
          className="absolute inset-0 w-full h-full object-cover animate-scale-in"
        />
        <div className="procedure-hero-overlay" />
        <div className="procedure-hero-content">
          <h1 className="procedure-hero-title animate-fade-in">
            Breast Augmentation With Implants
          </h1>
          <p className="procedure-hero-subtitle animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Sculpted Volume. Precision Planning. Long-Lasting Results.
          </p>
        </div>
      </section>

      {/* SEO Intro Block */}
      <section className="section-spacing">
        <div className="content-spacing max-w-3xl mx-auto text-center">
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
            Breast augmentation with implants remains the gold standard for achieving significant volume enhancement and upper-pole fullness. Dr. Karaaltin combines advanced planning, anatomical mapping, and tailored implant selection to deliver balanced, natural-looking results that complement every patient's physique and aesthetic goals.
          </p>
        </div>
      </section>

      {/* Sticky Overview Section */}
      <section ref={overviewRef} className="overview-section-dark">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16 relative">
            <div className="overview-sticky-left animate-fade-in">
              <div>
                <h2 className="overview-title-dark">
                  Breast Augmentation
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

            <div ref={cardsRef} className="space-y-8 min-h-screen">
              <div className={`overview-card-dark ${activeCard === 0 ? 'shadow-lg border-white/20' : ''}`}>
                <h3 className="overview-card-title-dark">
                  01 // Implant Options
                </h3>
                <p className="overview-card-text-dark">
                  Silicone or saline; round or anatomical; smooth or textured; selected for your anatomy and goals.
                </p>
              </div>

              <div className={`overview-card ${activeCard === 1 ? 'shadow-lg border-gray-300' : ''}`}>
                <h3 className="overview-card-title">
                  02 // Placement Techniques
                </h3>
                <p className="overview-card-content">
                  Submuscular, subfascial, subglandular, or dual-plane based on soft-tissue support and desired contour.
                </p>
              </div>

              <div className={`overview-card ${activeCard === 2 ? 'shadow-lg border-gray-300' : ''}`}>
                <h3 className="overview-card-title">
                  03 // Incision Sites
                </h3>
                <p className="overview-card-content">
                  IMF, periareolar, or transaxillary—chosen for concealment and safety.
                </p>
              </div>

              <div className={`overview-card ${activeCard === 3 ? 'shadow-lg border-gray-300' : ''}`}>
                <h3 className="overview-card-title">
                  04 // Addresses Volume Loss
                </h3>
                <p className="overview-card-content">
                  Ideal after pregnancy, weight loss, or congenital asymmetry.
                </p>
              </div>

              <div className={`overview-card ${activeCard === 4 ? 'shadow-lg border-gray-300' : ''}`}>
                <h3 className="overview-card-title">
                  05 // Customizable Projection
                </h3>
                <p className="overview-card-content">
                  Implant sizes measured in cc for precise volumetric control.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="section-spacing">
        <div className="content-spacing max-w-4xl mx-auto">
          <div className="bg-gray-50 p-8 lg:p-12 rounded-lg">
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed text-center">
              This procedure offers predictable size enhancement, enhanced cleavage, and upper-pole definition with long-lasting implant stability.
            </p>
          </div>
        </div>
      </section>

      {/* Procedure Details */}
      <section className="section-spacing bg-gray-50">
        <div className="content-spacing">
          <h2 className="text-3xl md:text-4xl font-light uppercase tracking-[0.15em] text-center mb-12">
            Procedure Details
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold uppercase tracking-wide mb-3 text-foreground">
                Duration
              </h3>
              <p className="text-foreground/80">1.5–2 hours under general anesthesia</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold uppercase tracking-wide mb-3 text-foreground">
                Selection
              </h3>
              <p className="text-foreground/80">Implant type + size selected individually</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold uppercase tracking-wide mb-3 text-foreground">
                Pocket Creation
              </h3>
              <p className="text-foreground/80">Dual-plane, subfascial, or hybrid</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm col-span-full">
              <h3 className="text-lg font-semibold uppercase tracking-wide mb-3 text-foreground">
                Corrections
              </h3>
              <p className="text-foreground/80">Can correct asymmetry, tuberous breast, or post-cancer reconstruction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Surgical Journey */}
      <section className="section-spacing">
        <div className="content-spacing">
          <h2 className="text-3xl md:text-4xl font-light uppercase tracking-[0.15em] text-center mb-12">
            Surgical Journey
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300" />
              <div className="space-y-8">
                {[
                  { title: "Consultation", desc: "Comprehensive assessment and goal setting" },
                  { title: "3D Analysis", desc: "Digital planning and visualization" },
                  { title: "Implant Selection", desc: "Custom sizing and type selection" },
                  { title: "Surgery", desc: "Precise implant placement" },
                  { title: "Aftercare", desc: "Recovery monitoring and support" }
                ].map((step, index) => (
                  <div key={index} className="relative pl-12">
                    <div className="absolute left-0 w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      {index + 1}
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold uppercase tracking-wide mb-2 text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-foreground/80">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recovery Block */}
      <section className="section-spacing bg-gray-50">
        <div className="content-spacing">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-gray-200 aspect-[4/3] rounded-lg flex items-center justify-center text-gray-500">
                Recovery Image Placeholder
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-light uppercase tracking-[0.15em] mb-6">
                  Recovery
                </h2>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  10–14 days to return to work; 6–8 weeks activity restrictions; scar care begins at 2–3 weeks.
                </p>
                <Link 
                  to="/contact"
                  className="btn-primary"
                >
                  Book a Consultation
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal Candidates */}
      <section className="candidates-section-dark">
        <div className="content-spacing">
          <h2 className="text-3xl md:text-4xl font-light uppercase tracking-[0.15em] text-center mb-12 text-white">
            Ideal Candidates
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="candidate-card-dark text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-lg font-semibold uppercase tracking-wide mb-3">
                Volume Enhancement
              </h3>
              <p className="text-foreground/80 text-sm">
                Desire moderate to significant enhancement
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-lg font-semibold uppercase tracking-wide mb-3">
                Predictable Results
              </h3>
              <p className="text-foreground/80 text-sm">
                Want predictable volume and shape
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="text-lg font-semibold uppercase tracking-wide mb-3">
                Asymmetry Correction
              </h3>
              <p className="text-foreground/80 text-sm">
                Correcting asymmetry or congenital issues
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">👶</div>
              <h3 className="text-lg font-semibold uppercase tracking-wide mb-3">
                Post-Pregnancy
              </h3>
              <p className="text-foreground/80 text-sm">
                Restoring post-pregnancy fullness
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After CTA */}
      <section className="section-spacing bg-gray-50">
        <div className="content-spacing text-center">
          <Link 
            to="/gallery"
            className="btn-primary"
          >
            View Before & After Gallery
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <ContactCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default BreastAugmentationImplants;