import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/home/ContactCTASection";
import drKaraaltinLogo from "@/assets/dr-karaaltin-logo-white.svg";

const HybridAugmentation = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gray-200">
          <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-gray-500">
            Hero Image Placeholder
          </div>
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
              <img 
                src={drKaraaltinLogo} 
                alt="Dr. Karaaltin Signature" 
                className="w-48 h-auto opacity-80"
              />
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
                <p className="text-foreground/80 leading-relaxed">
                  Masks edges, reduces rippling, and improves palpability.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-lg font-semibold uppercase tracking-wide mb-3 text-foreground">
                  03 // PRECISION FAT GRAFTING
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Micro-droplet technique improves survival and symmetry.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-lg font-semibold uppercase tracking-wide mb-3 text-foreground">
                  04 // UPPER POLE ENHANCEMENT
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Achieves natural, full upper-pole contour.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-lg font-semibold uppercase tracking-wide mb-3 text-foreground">
                  05 // REVISION-FRIENDLY
                </h3>
                <p className="text-foreground/80 leading-relaxed">
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
      <section className="section-spacing bg-gray-50">
        <div className="content-spacing">
          <h2 className="text-3xl md:text-4xl font-light uppercase tracking-[0.15em] text-center mb-12">
            Procedure Details
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold uppercase tracking-wide mb-3 text-foreground">
                Implant Placement
              </h3>
              <p className="text-foreground/80">Subfascial implant placement</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold uppercase tracking-wide mb-3 text-foreground">
                Fat Harvest
              </h3>
              <p className="text-foreground/80">Liposuction harvest</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold uppercase tracking-wide mb-3 text-foreground">
                Purification
              </h3>
              <p className="text-foreground/80">Fat purification</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm col-span-full">
              <h3 className="text-lg font-semibold uppercase tracking-wide mb-3 text-foreground">
                Fat Injection
              </h3>
              <p className="text-foreground/80">Layered fat injection for refinement</p>
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
                  { title: "Implant + Fat Planning", desc: "Combined technique selection" },
                  { title: "Surgery", desc: "Implant placement and fat grafting" },
                  { title: "Controlled Recovery", desc: "Monitoring and support" }
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
              <h3 className="text-lg font-semibold uppercase tracking-wide mb-3">
                Thin Coverage
              </h3>
              <p className="text-foreground/80 text-sm">
                Thin soft-tissue coverage
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-lg font-semibold uppercase tracking-wide mb-3">
                Natural Feel
              </h3>
              <p className="text-foreground/80 text-sm">
                Seeking natural feel with structural support
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-lg font-semibold uppercase tracking-wide mb-3">
                Revision Cases
              </h3>
              <p className="text-foreground/80 text-sm">
                Revising old implants
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-lg font-semibold uppercase tracking-wide mb-3">
                Upper Pole
              </h3>
              <p className="text-foreground/80 text-sm">
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
    </div>
  );
};

export default HybridAugmentation;