import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/home/ContactCTASection";
import drKaraaltinLogo from "@/assets/dr-karaaltin-logo-white.svg";

const BreastReduction = () => {
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
            BREAST REDUCTION SURGERY
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-light tracking-wide">
            Relief, Balance & Beautiful Proportion.
          </p>
        </div>
      </section>

      {/* SEO Intro Block */}
      <section className="section-spacing">
        <div className="content-spacing max-w-3xl mx-auto text-center">
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
            Breast reduction reshapes and lifts overly large breasts to achieve balanced aesthetics, long-lasting comfort, and improved posture. Dr. Karaaltin's technique prioritizes both functional relief and refined cosmetic outcome, offering life-changing improvement for women struggling with the physical and emotional burden of heavy breasts.
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
                  BREAST REDUCTION SURGERY
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
                  01 // WHY REDUCTION HELPS
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Relieves back, neck, and shoulder pain; improves posture; eliminates bra-strap grooves.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-lg font-semibold uppercase tracking-wide mb-3 text-foreground">
                  02 // FUNCTIONAL + AESTHETIC BENEFITS
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Reduces volume, reshapes the breast, and lifts the nipple-areolar complex.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-lg font-semibold uppercase tracking-wide mb-3 text-foreground">
                  03 // CUSTOMIZED INCISION PATTERNS
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Anchor, vertical, or peri-areolar—selected based on degree of ptosis.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-lg font-semibold uppercase tracking-wide mb-3 text-foreground">
                  04 // YOUTHFUL, BALANCED CONTOUR
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Breast mound is reshaped for optimal symmetry and proportions.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-lg font-semibold uppercase tracking-wide mb-3 text-foreground">
                  05 // FAST, COMFORTABLE RECOVERY
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Multimodal pain control minimizes narcotic use.
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
              Patients consistently report this as one of the most satisfying procedures due to improvements in comfort, confidence, and overall lifestyle.
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
              <p className="text-foreground/80">2–5 hours under general anesthesia</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold uppercase tracking-wide mb-3 text-foreground">
                Removal
              </h3>
              <p className="text-foreground/80">Tissue, fat, and skin removal</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold uppercase tracking-wide mb-3 text-foreground">
                Repositioning
              </h3>
              <p className="text-foreground/80">Nipple repositioning</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold uppercase tracking-wide mb-3 text-foreground">
                Contouring
              </h3>
              <p className="text-foreground/80">Comprehensive lift and contouring</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm col-span-full lg:col-span-2">
              <h3 className="text-lg font-semibold uppercase tracking-wide mb-3 text-foreground">
                Scarring
              </h3>
              <p className="text-foreground/80">Scars fade significantly with aftercare</p>
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
                  { title: "Markings", desc: "Preoperative planning and marking" },
                  { title: "Surgery", desc: "Tissue removal and reshaping" },
                  { title: "Dressing + Support Bra", desc: "Immediate postoperative care" },
                  { title: "Recovery", desc: "Monitoring and follow-up" }
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
                  Return to work in 1–2 weeks; bras worn 4–6 weeks; swelling improves significantly in 2 weeks.
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
              <div className="text-4xl mb-4">💪</div>
              <h3 className="text-lg font-semibold uppercase tracking-wide mb-3">
                Physical Discomfort
              </h3>
              <p className="text-foreground/80 text-sm">
                Physical discomfort from large breasts
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🩹</div>
              <h3 className="text-lg font-semibold uppercase tracking-wide mb-3">
                Chronic Pain
              </h3>
              <p className="text-foreground/80 text-sm">
                Chronic pain or skin irritation
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🏃</div>
              <h3 className="text-lg font-semibold uppercase tracking-wide mb-3">
                Activity Limitation
              </h3>
              <p className="text-foreground/80 text-sm">
                Difficulty exercising or dressing
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="text-lg font-semibold uppercase tracking-wide mb-3">
                Proportion
              </h3>
              <p className="text-foreground/80 text-sm">
                Desire for proportionate contour
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

export default BreastReduction;