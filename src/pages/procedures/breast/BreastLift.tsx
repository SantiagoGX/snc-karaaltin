import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/home/ContactCTASection";
import drKaraaltinLogo from "@/assets/dr-karaaltin-logo-white.svg";

const BreastLift = () => {
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
            BREAST LIFT (MASTOPEXY)
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-light tracking-wide">
            Restore Youthful Shape, Position & Confidence.
          </p>
        </div>
      </section>

      {/* SEO Intro Block */}
      <section className="section-spacing">
        <div className="content-spacing max-w-3xl mx-auto text-center">
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
            A breast lift elevates sagging breasts, restores contour, and repositions the nipple-areolar complex for a youthful, harmonious appearance. Dr. Karaaltin tailors every mastopexy to individual anatomy, ensuring natural projection and long-lasting upper-pole refinement.
          </p>
        </div>
      </section>

      {/* Sticky Overview Section */}
      <section className="overview-section-dark">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16">
            <div className="overview-sticky-left">
              <div>
                <h2 className="overview-title-dark">
                  BREAST LIFT (MASTOPEXY)
                </h2>
                <p className="overview-subtitle-dark">Overview</p>
              </div>
              <img 
                src={drKaraaltinLogo} 
                alt="Dr. Karaaltin Logo" 
                className="w-48 h-auto opacity-80 invert"
              />
            </div>

            <div className="space-y-8 min-h-screen">
              <div className="overview-card-dark">
                <h3 className="overview-card-title-dark">
                  01 // WHY BREASTS SAG
                </h3>
                <p className="overview-card-text-dark">
                  Aging, pregnancy, breastfeeding, and weight changes affect shape and support.
                </p>
              </div>

              <div className="overview-card-dark" style={{ animationDelay: '0.1s' }}>
                <h3 className="overview-card-title-dark">
                  02 // CUSTOM LIFT TECHNIQUES
                </h3>
                <p className="overview-card-text-dark">
                  Benelli, Vertical, or Wise Pattern depending on severity of ptosis.
                </p>
              </div>

              <div className="overview-card-dark" style={{ animationDelay: '0.2s' }}>
                <h3 className="overview-card-title-dark">
                  03 // RESTORES NIPPLE POSITION
                </h3>
                <p className="overview-card-text-dark">
                  Repositions and reshapes the areola as needed.
                </p>
              </div>

              <div className="overview-card-dark" style={{ animationDelay: '0.3s' }}>
                <h3 className="overview-card-title-dark">
                  04 // OPTIONAL VOLUME ENHANCEMENT
                </h3>
                <p className="overview-card-text-dark">
                  Can combine with implants or fat grafting.
                </p>
              </div>

              <div className="overview-card-dark" style={{ animationDelay: '0.4s' }}>
                <h3 className="overview-card-title-dark">
                  05 // NATURAL, LONG-LASTING LIFT
                </h3>
                <p className="overview-card-text-dark">
                  Improves contour without altering overall breast size (unless combined).
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
              The procedure offers a transformative improvement in shape and positioning—with or without added volume.
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
                Repositioning
              </h3>
              <p className="text-foreground/80">Nipple repositioning</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold uppercase tracking-wide mb-3 text-foreground">
                Reshaping
              </h3>
              <p className="text-foreground/80">Tissue reshaping</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold uppercase tracking-wide mb-3 text-foreground">
                Incision Pattern
              </h3>
              <p className="text-foreground/80">Tailored to ptosis</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm col-span-full">
              <h3 className="text-lg font-semibold uppercase tracking-wide mb-3 text-foreground">
                Combination Options
              </h3>
              <p className="text-foreground/80">Can be combined with augmentation or reduction</p>
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
                  { title: "Ptosis Analysis", desc: "Degree of sagging evaluation" },
                  { title: "Technique Selection", desc: "Custom lift method selection" },
                  { title: "Surgery", desc: "Breast reshaping and lifting" },
                  { title: "Compression Bra", desc: "Supportive postoperative care" }
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
                  7–10 days to daily activities; full activity at 4–6 weeks; swelling resolves in 4–6 weeks.
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
        <div className="container mx-auto px-8 max-w-6xl">
          <h2 className="candidates-title-dark">
            Ideal Candidates
          </h2>
          <div className="candidates-grid">
            <div className="candidate-card-dark" style={{ animationDelay: '0.1s' }}>
              <div className="candidate-icon-dark">
                📉
              </div>
              <h3 className="candidate-card-title-dark">
                Sagging Breasts
              </h3>
              <p className="candidate-card-text-dark">
                Sagging or deflated breasts
              </p>
            </div>
            <div className="candidate-card-dark" style={{ animationDelay: '0.2s' }}>
              <div className="candidate-icon-dark">
                ✨
              </div>
              <h3 className="candidate-card-title-dark">
                Lost Volume
              </h3>
              <p className="candidate-card-text-dark">
                Lost upper-pole volume
              </p>
            </div>
            <div className="candidate-card-dark" style={{ animationDelay: '0.3s' }}>
              <div className="candidate-icon-dark">
                🎯
              </div>
              <h3 className="candidate-card-title-dark">
                Nipple Position
              </h3>
              <p className="candidate-card-text-dark">
                Disproportionate nipple position
              </p>
            </div>
            <div className="candidate-card-dark" style={{ animationDelay: '0.4s' }}>
              <div className="candidate-icon-dark">
                💫
              </div>
              <h3 className="candidate-card-title-dark">
                Youthful Contour
              </h3>
              <p className="candidate-card-text-dark">
                Desire for restored breast shape
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

export default BreastLift;