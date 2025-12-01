import { Button } from "@/components/ui/button";
import { ArrowRight, Droplet, Scissors, ArrowUpCircle, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/home/ContactCTASection";
import drKaraaltinLogo from "@/assets/dr-karaaltin-logo-white.svg";
const Gynecomastia = () => {
  return <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img alt="Gynecomastia" className="w-full h-full object-cover" src="/lovable-uploads/5d290cd2-0835-47b5-9caf-52fd1f8432c3.jpg" />
        </div>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 animate-fade-in pointer-events-none">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 uppercase tracking-[0.2em]">
            GYNECOMASTIA SURGERY
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-light tracking-wide">
            Masculine Contour. Defined Chest. Renewed Confidence.
          </p>
        </div>
      </section>

      {/* SEO Intro Block */}
      <section className="section-spacing">
        <div className="content-spacing max-w-3xl mx-auto text-center">
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
            Gynecomastia surgery reduces enlarged male breast tissue through liposuction, gland excision, or combined techniques. Dr. Karaaltin uses advanced anatomical mapping and vibration-assisted liposuction to sculpt a flatter, more athletic chest with minimal scarring and fast recovery.
          </p>
        </div>
      </section>

      {/* Sticky Overview Section */}
      <section className="overview-section-dark">
        <div className="content-spacing">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-8 lg:gap-16">
            <div className="overview-sticky-left">
              <div>
                <h2 className="overview-title-dark">
                  GYNECOMASTIA SURGERY
                </h2>
                <p className="overview-subtitle-dark">Overview</p>
              </div>
              <img src={drKaraaltinLogo} alt="Dr. Karaaltin Signature" className="w-48 h-auto opacity-80" />
            </div>

            <div className="space-y-6">
              <div className="overview-card-dark">
                <h3 className="overview-card-title-dark">
                  01 // WHAT GYNECOMASTIA IS
                </h3>
                <p className="overview-card-text-dark">
                  Enlargement of male breast tissue due to fatty, glandular, or mixed causes.
                </p>
              </div>

              <div className="overview-card-dark">
                <h3 className="overview-card-title-dark">
                  02 // TECHNIQUE MATCHING
                </h3>
                <p className="overview-card-text-dark">
                  Liposuction for fatty tissue; gland excision for dense tissue; lifts for severe cases.
                </p>
              </div>

              <div className="overview-card-dark">
                <h3 className="overview-card-title-dark">
                  03 // ZONE-BASED CHEST MAPPING
                </h3>
                <p className="overview-card-text-dark">
                  Zones 0–4 guide precise reduction for a natural, masculine contour.
                </p>
              </div>

              <div className="overview-card-dark">
                <h3 className="overview-card-title-dark">
                  04 // VIBROSAT PRO ADVANTAGE
                </h3>
                <p className="overview-card-text-dark">
                  High-definition liposuction for safe, smooth fat removal and pectoral definition.
                </p>
              </div>

              <div className="overview-card-dark">
                <h3 className="overview-card-title-dark">
                  05 // FAST, PREDICTABLE RECOVERY
                </h3>
                <p className="overview-card-text-dark">
                  Compression + early mobility with minimal pain.
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
              This procedure restores chest confidence while allowing for athletic refinement and muscular definition.
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
            Comprehensive gynecomastia treatment techniques
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-xl border-2 border-gray-200/50 hover:border-blue-300 transition-all duration-300 hover:-translate-y-2 animate-fade-in">
              <div className="absolute top-4 right-4 w-12 h-12 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <Droplet className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-20 h-20 bg-blue-100 rounded-full opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500" />
              <h3 className="text-lg font-semibold uppercase tracking-wide mb-3 text-foreground pr-16">
                Liposuction
              </h3>
              <p className="text-foreground/80 text-sm leading-relaxed">Fat removal with Vibrosat Pro</p>
            </div>
            
            <div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-xl border-2 border-gray-200/50 hover:border-purple-300 transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{
            animationDelay: '0.1s'
          }}>
              <div className="absolute top-4 right-4 w-12 h-12 rounded-lg bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <Scissors className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-20 h-20 bg-purple-100 rounded-full opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500" />
              <h3 className="text-lg font-semibold uppercase tracking-wide mb-3 text-foreground pr-16">
                Gland Excision
              </h3>
              <p className="text-foreground/80 text-sm leading-relaxed">Periareolar gland excision</p>
            </div>
            
            <div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-xl border-2 border-gray-200/50 hover:border-pink-300 transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
              <div className="absolute top-4 right-4 w-12 h-12 rounded-lg bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <ArrowUpCircle className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-20 h-20 bg-pink-100 rounded-full opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500" />
              <h3 className="text-lg font-semibold uppercase tracking-wide mb-3 text-foreground pr-16">
                Skin Tightening
              </h3>
              <p className="text-foreground/80 text-sm leading-relaxed">Lift if needed</p>
            </div>
            
            <div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-xl border-2 border-gray-200/50 hover:border-amber-300 transition-all duration-300 hover:-translate-y-2 animate-fade-in col-span-full" style={{
            animationDelay: '0.3s'
          }}>
              <div className="absolute top-4 right-4 w-12 h-12 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-20 h-20 bg-amber-100 rounded-full opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500" />
              <h3 className="text-lg font-semibold uppercase tracking-wide mb-3 text-foreground pr-16">
                Enhancement Options
              </h3>
              <p className="text-foreground/80 text-sm leading-relaxed">Option for chest etching or fat grafting</p>
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
                title: "Chest Zone Analysis",
                desc: "Anatomical mapping and planning"
              }, {
                title: "Procedure Selection",
                desc: "Custom technique selection"
              }, {
                title: "Surgery",
                desc: "Tissue removal and contouring"
              }, {
                title: "Support Garment",
                desc: "Compression garment placement"
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
              <img alt="Recovery" className="w-full aspect-[4/3] rounded-lg object-cover" src="/lovable-uploads/3940edc3-0fef-4cb0-bfa8-e81d6031944b.jpg" />
              <div>
                <h2 className="text-3xl md:text-4xl font-light uppercase tracking-[0.15em] mb-6">
                  Recovery
                </h2>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  3–5 days to light activity; garment worn several weeks; swelling resolves by 4–6 weeks.
                </p>
                <Link to="/contact">
                  <Button className="bg-gray-900 text-white hover:bg-gray-800 uppercase tracking-widest text-xs px-8 py-6">
                    Book a Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
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
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-lg font-semibold uppercase tracking-wide mb-3 text-white">
                Puffy Nipples
              </h3>
              <p className="text-white/80 text-sm">
                Puffy nipples
              </p>
            </div>
            <div className="candidate-card-dark text-center">
              <div className="candidate-icon-dark">👁️</div>
              <h3 className="candidate-card-title-dark">
                Visible Tissue
              </h3>
              <p className="candidate-card-text-dark">
                Visible breast tissue
              </p>
            </div>
            <div className="candidate-card-dark text-center">
              <div className="candidate-icon-dark">⚖️</div>
              <h3 className="candidate-card-title-dark">
                Asymmetry
              </h3>
              <p className="candidate-card-text-dark">
                Asymmetry or fullness
              </p>
            </div>
            <div className="candidate-card-dark text-center">
              <div className="candidate-icon-dark">💪</div>
              <h3 className="candidate-card-title-dark">
                Masculine Contour
              </h3>
              <p className="candidate-card-text-dark">
                Desire for defined, masculine contour
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After CTA */}
      <section className="section-spacing bg-gray-50">
        <div className="content-spacing text-center">
          <Link to="/gallery">
            <Button className="bg-gray-900 text-white hover:bg-gray-800 uppercase tracking-widest text-xs px-8 py-6">
              View Before & After Gallery
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <ContactCTASection />
      <Footer />
    </div>;
};
export default Gynecomastia;