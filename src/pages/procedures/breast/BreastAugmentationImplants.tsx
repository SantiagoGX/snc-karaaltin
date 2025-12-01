import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Clock, Droplet, Layers, AlertCircle } from "lucide-react";
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
  return <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
      {/* Hero Section */}
      <section className="procedure-hero">
        <img alt="Breast Augmentation With Implants Hero" className="absolute inset-0 w-full h-full object-cover animate-scale-in" src="/lovable-uploads/7706e823-b551-4658-ad62-b282b7435811.png" />
        <div className="procedure-hero-overlay" />
        <div className="procedure-hero-content">
          <h1 className="procedure-hero-title animate-fade-in">
            Breast Augmentation With Implants
          </h1>
          <p className="procedure-hero-subtitle animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
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
              <img src={drKaraaltinLogo} alt="Dr. Karaaltin Logo" className="w-48 h-auto opacity-80" />
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

              <div className={`overview-card-dark ${activeCard === 1 ? 'shadow-lg border-white/20' : ''}`}>
                <h3 className="overview-card-title-dark">
                  02 // Placement Techniques
                </h3>
                <p className="overview-card-text-dark">
                  Submuscular, subfascial, subglandular, or dual-plane based on soft-tissue support and desired contour.
                </p>
              </div>

              <div className={`overview-card-dark ${activeCard === 2 ? 'shadow-lg border-white/20' : ''}`}>
                <h3 className="overview-card-title-dark">
                  03 // Incision Sites
                </h3>
                <p className="overview-card-text-dark">
                  IMF, periareolar, or transaxillary—chosen for concealment and safety.
                </p>
              </div>

              <div className={`overview-card-dark ${activeCard === 3 ? 'shadow-lg border-white/20' : ''}`}>
                <h3 className="overview-card-title-dark">
                  04 // Addresses Volume Loss
                </h3>
                <p className="overview-card-text-dark">
                  Ideal after pregnancy, weight loss, or congenital asymmetry.
                </p>
              </div>

              <div className={`overview-card-dark ${activeCard === 4 ? 'shadow-lg border-white/20' : ''}`}>
                <h3 className="overview-card-title-dark">
                  05 // Customizable Projection
                </h3>
                <p className="overview-card-text-dark">
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
      <section className="section-spacing bg-[#F5F1E8]">
        <div className="content-spacing">
          <h2 className="text-3xl md:text-4xl font-light uppercase tracking-[0.15em] text-center mb-4">
            Procedure Details
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Essential aspects of breast augmentation with implants
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-xl border-2 border-gray-200/50 hover:border-blue-300 transition-all duration-300 hover:-translate-y-2 animate-fade-in">
              <div className="absolute top-4 right-4 w-12 h-12 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-20 h-20 bg-blue-100 rounded-full opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500" />
              <h3 className="text-lg font-semibold uppercase tracking-wide mb-3 text-foreground pr-16">
                Duration
              </h3>
              <p className="text-foreground/80 text-sm leading-relaxed">1.5–2 hours under general anesthesia</p>
            </div>
            
            <div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-xl border-2 border-gray-200/50 hover:border-purple-300 transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{
              animationDelay: '0.1s'
            }}>
              <div className="absolute top-4 right-4 w-12 h-12 rounded-lg bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <Droplet className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-20 h-20 bg-purple-100 rounded-full opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500" />
              <h3 className="text-lg font-semibold uppercase tracking-wide mb-3 text-foreground pr-16">
                Selection
              </h3>
              <p className="text-foreground/80 text-sm leading-relaxed">Implant type + size selected individually</p>
            </div>
            
            <div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-xl border-2 border-gray-200/50 hover:border-pink-300 transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{
              animationDelay: '0.2s'
            }}>
              <div className="absolute top-4 right-4 w-12 h-12 rounded-lg bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <Layers className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-20 h-20 bg-pink-100 rounded-full opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500" />
              <h3 className="text-lg font-semibold uppercase tracking-wide mb-3 text-foreground pr-16">
                Pocket Creation
              </h3>
              <p className="text-foreground/80 text-sm leading-relaxed">Dual-plane, subfascial, or hybrid</p>
            </div>
            
            <div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-xl border-2 border-gray-200/50 hover:border-green-300 transition-all duration-300 hover:-translate-y-2 animate-fade-in col-span-full" style={{
              animationDelay: '0.3s'
            }}>
              <div className="absolute top-4 right-4 w-12 h-12 rounded-lg bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-20 h-20 bg-green-100 rounded-full opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500" />
              <h3 className="text-lg font-semibold uppercase tracking-wide mb-3 text-foreground pr-16">
                Corrections
              </h3>
              <p className="text-foreground/80 text-sm leading-relaxed">Can correct asymmetry, tuberous breast, or post-cancer reconstruction</p>
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
                {[{
                  title: "Consultation",
                  desc: "Comprehensive assessment and goal setting"
                }, {
                  title: "3D Analysis",
                  desc: "Digital planning and visualization"
                }, {
                  title: "Implant Selection",
                  desc: "Custom sizing and type selection"
                }, {
                  title: "Surgery",
                  desc: "Precise implant placement"
                }, {
                  title: "Aftercare",
                  desc: "Recovery monitoring and support"
                }].map((step, index) => <div key={index} className="relative pl-12">
                    <div className="absolute left-0 w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      {index + 1}
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold uppercase tracking-wide mb-2 text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-foreground/80">{step.desc}</p>
                    </div>
                  </div>)}
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
              <img alt="Recovery" className="w-full aspect-[4/3] rounded-lg object-cover" src="/lovable-uploads/b70a5dbb-f8eb-4b15-925b-c3ce70d737b4.jpg" />
              <div>
                <h2 className="text-3xl md:text-4xl font-light uppercase tracking-[0.15em] mb-6">
                  Recovery
                </h2>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  10–14 days to return to work; 6–8 weeks activity restrictions; scar care begins at 2–3 weeks.
                </p>
                <Link to="/contact" className="btn-primary">
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
              <div className="candidate-icon-dark">📊</div>
              <h3 className="candidate-card-title-dark">
                Volume Enhancement
              </h3>
              <p className="candidate-card-text-dark">
                Desire moderate to significant enhancement
              </p>
            </div>
            <div className="candidate-card-dark text-center">
              <div className="candidate-icon-dark">🎯</div>
              <h3 className="candidate-card-title-dark">
                Predictable Results
              </h3>
              <p className="candidate-card-text-dark">
                Want predictable volume and shape
              </p>
            </div>
            <div className="candidate-card-dark text-center">
              <div className="candidate-icon-dark">⚖️</div>
              <h3 className="candidate-card-title-dark">
                Asymmetry Correction
              </h3>
              <p className="candidate-card-text-dark">
                Correcting asymmetry or congenital issues
              </p>
            </div>
            <div className="candidate-card-dark text-center">
              <div className="candidate-icon-dark">👶</div>
              <h3 className="candidate-card-title-dark">
                Post-Pregnancy
              </h3>
              <p className="candidate-card-text-dark">
                Restoring post-pregnancy fullness
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After CTA */}
      <section className="section-spacing bg-gray-50">
        <div className="content-spacing text-center">
          <Link to="/gallery" className="btn-primary">
            View Before & After Gallery
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <ContactCTASection />
      </main>
      <Footer />
    </div>;
};
export default BreastAugmentationImplants;