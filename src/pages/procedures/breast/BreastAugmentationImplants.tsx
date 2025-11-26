import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/home/ContactCTASection";
import drKaraaltinLogo from "@/assets/dr-karaaltin-logo-white.svg";

const BreastAugmentationImplants = () => {
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
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 uppercase tracking-[0.2em]">
            BREAST AUGMENTATION WITH IMPLANTS
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-light tracking-wide">
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
      <section className="section-spacing bg-gray-50">
        <div className="content-spacing">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-8 lg:gap-16">
            <div className="lg:sticky lg:top-24 lg:self-start space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-light uppercase tracking-[0.15em] text-foreground mb-2">
                  BREAST AUGMENTATION WITH IMPLANTS
                </h2>
                <p className="text-sm uppercase tracking-widest text-foreground/60">Overview</p>
              </div>
              <img 
                src={drKaraaltinLogo} 
                alt="Dr. Karaaltin Signature" 
                className="w-48 brightness-0 opacity-60"
              />
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-lg font-semibold uppercase tracking-wide mb-3 text-foreground">
                  01 // IMPLANT OPTIONS
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Silicone or saline; round or anatomical; smooth or textured; selected for your anatomy and goals.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-lg font-semibold uppercase tracking-wide mb-3 text-foreground">
                  02 // PLACEMENT TECHNIQUES
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Submuscular, subfascial, subglandular, or dual-plane based on soft-tissue support and desired contour.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-lg font-semibold uppercase tracking-wide mb-3 text-foreground">
                  03 // INCISION SITES
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  IMF, periareolar, or transaxillary—chosen for concealment and safety.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-lg font-semibold uppercase tracking-wide mb-3 text-foreground">
                  04 // ADDRESSES VOLUME LOSS
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Ideal after pregnancy, weight loss, or congenital asymmetry.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-lg font-semibold uppercase tracking-wide mb-3 text-foreground">
                  05 // CUSTOMIZABLE PROJECTION
                </h3>
                <p className="text-foreground/80 leading-relaxed">
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
      <section className="section-spacing">
        <div className="content-spacing">
          <h2 className="text-3xl md:text-4xl font-light uppercase tracking-[0.15em] text-center mb-12">
            Ideal Candidates
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
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

export default BreastAugmentationImplants;