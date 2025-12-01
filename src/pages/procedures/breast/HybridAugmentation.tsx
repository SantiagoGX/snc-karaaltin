import { Button } from "@/components/ui/button";
import { ArrowRight, Layers, Droplet, Beaker, Syringe } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/home/ContactCTASection";
import drKaraaltinLogo from "@/assets/dr-karaaltin-logo-white.svg";
const HybridAugmentation = () => {
  return <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img alt="Hybrid Augmentation" className="w-full h-full object-cover" src="/lovable-uploads/3509dc30-f576-4cd8-87f7-15809e237b5c.jpg" />
        </div>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 animate-fade-in pointer-events-none">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 uppercase tracking-[0.2em]">
            HYBRID BREAST AUGMENTATION
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-light tracking-wide">
            Structural Volume Meets Natural Softness.
          </p>
        </div>
      </section>

      {/* SEO Intro Block */}
      <section className="section-spacing">
        <div className="content-spacing max-w-3xl mx-auto text-center">
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
            Hybrid (composite) breast augmentation combines the structural support of an implant with the natural softness of fat grafting. This dual-modality approach refines cleavage, masks implant edges, corrects asymmetry, and enhances upper-pole fullness with unmatched customization.
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
                  HYBRID BREAST AUGMENTATION
                </h2>
                <p className="overview-subtitle-dark">Overview</p>
              </div>
              <img src={drKaraaltinLogo} alt="Dr. Karaaltin Signature" className="w-48 h-auto opacity-80" />
            </div>

            <div className="space-y-6">
              <div className="overview-card-dark">
                <h3 className="overview-card-title-dark">
                  01 // DUAL-LAYER ENHANCEMENT
                </h3>
                <p className="overview-card-text-dark">
                  Implant provides structure; fat provides softness and contour refinement.
                </p>
              </div>

              <div className="overview-card-dark">
                <h3 className="overview-card-title-dark">
                  02 // IDEAL FOR THIN PATIENTS
                </h3>
                <p className="overview-card-text-dark">
                  Masks edges, reduces rippling, and improves palpability.
                </p>
              </div>

              <div className="overview-card-dark">
                <h3 className="overview-card-title-dark">
                  03 // PRECISION FAT GRAFTING
                </h3>
                <p className="overview-card-text-dark">
                  Micro-droplet technique improves survival and symmetry.
                </p>
              </div>

              <div className="overview-card-dark">
                <h3 className="overview-card-title-dark">
                  04 // UPPER POLE ENHANCEMENT
                </h3>
                <p className="overview-card-text-dark">
                  Achieves natural, full upper-pole contour.
                </p>
              </div>

              <div className="overview-card-dark">
                <h3 className="overview-card-title-dark">
                  05 // REVISION-FRIENDLY
                </h3>
                <p className="overview-card-text-dark">
                  Ideal for replacing old implants or correcting irregularities.
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
              Hybrid augmentation offers the most customizable aesthetic control over brightness, symmetry, and softness.
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
            Dual-modality approach combining structure and softness
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-xl border-2 border-gray-200/50 hover:border-blue-300 transition-all duration-300 hover:-translate-y-2 animate-fade-in">
              <div className="absolute top-4 right-4 w-12 h-12 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <Layers className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-20 h-20 bg-blue-100 rounded-full opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500" />
              <h3 className="text-lg font-semibold uppercase tracking-wide mb-3 text-foreground pr-16">
                Implant Placement
              </h3>
              <p className="text-foreground/80 text-sm leading-relaxed">Subfascial implant placement</p>
            </div>
            
            <div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-xl border-2 border-gray-200/50 hover:border-purple-300 transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{
            animationDelay: '0.1s'
          }}>
              <div className="absolute top-4 right-4 w-12 h-12 rounded-lg bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <Droplet className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-20 h-20 bg-purple-100 rounded-full opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500" />
              <h3 className="text-lg font-semibold uppercase tracking-wide mb-3 text-foreground pr-16">
                Fat Harvest
              </h3>
              <p className="text-foreground/80 text-sm leading-relaxed">Liposuction harvest</p>
            </div>
            
            <div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-xl border-2 border-gray-200/50 hover:border-pink-300 transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
              <div className="absolute top-4 right-4 w-12 h-12 rounded-lg bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <Beaker className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-20 h-20 bg-pink-100 rounded-full opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500" />
              <h3 className="text-lg font-semibold uppercase tracking-wide mb-3 text-foreground pr-16">
                Purification
              </h3>
              <p className="text-foreground/80 text-sm leading-relaxed">Fat purification</p>
            </div>
            
            <div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-xl border-2 border-gray-200/50 hover:border-amber-300 transition-all duration-300 hover:-translate-y-2 animate-fade-in col-span-full" style={{
            animationDelay: '0.3s'
          }}>
              <div className="absolute top-4 right-4 w-12 h-12 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <Syringe className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-20 h-20 bg-amber-100 rounded-full opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500" />
              <h3 className="text-lg font-semibold uppercase tracking-wide mb-3 text-foreground pr-16">
                Fat Injection
              </h3>
              <p className="text-foreground/80 text-sm leading-relaxed">Layered fat injection for refinement</p>
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
                title: "Implant + Fat Planning",
                desc: "Combined technique selection"
              }, {
                title: "Surgery",
                desc: "Implant placement and fat grafting"
              }, {
                title: "Controlled Recovery",
                desc: "Monitoring and support"
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
              <img src="/placeholder.svg" alt="Recovery" className="w-full aspect-[4/3] rounded-lg object-cover" />
              <div>
                <h2 className="text-3xl md:text-4xl font-light uppercase tracking-[0.15em] mb-6">
                  Recovery
                </h2>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  Return to work in 1 week; swelling improves 4–6 weeks; final shape by 3 months.
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
              <div className="text-4xl mb-4">🧵</div>
              <h3 className="text-lg font-semibold uppercase tracking-wide mb-3 text-white">
                Thin Coverage
              </h3>
              <p className="text-white/80 text-sm">
                Thin soft-tissue coverage
              </p>
            </div>
            <div className="candidate-card-dark text-center">
              <div className="candidate-icon-dark">🌿</div>
              <h3 className="candidate-card-title-dark">
                Natural Feel
              </h3>
              <p className="candidate-card-text-dark">
                Seeking natural feel with structural support
              </p>
            </div>
            <div className="candidate-card-dark text-center">
              <div className="candidate-icon-dark">🔄</div>
              <h3 className="candidate-card-title-dark">
                Revision Cases
              </h3>
              <p className="candidate-card-text-dark">
                Revising old implants
              </p>
            </div>
            <div className="candidate-card-dark text-center">
              <div className="candidate-icon-dark">✨</div>
              <h3 className="candidate-card-title-dark">
                Upper Pole
              </h3>
              <p className="candidate-card-text-dark">
                Wanting upper-pole enhancement
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
export default HybridAugmentation;