import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/home/ContactCTASection";
import drKaraaltinLogo from "@/assets/dr-karaaltin-logo-white.svg";
const NippleAreolaReduction = () => {
  const overviewCards = [{
    id: "01",
    title: "What It Corrects",
    description: "Elongated nipples, wide areolas, projection concerns, and asymmetry."
  }, {
    id: "02",
    title: "Why Patients Choose It",
    description: "Improves proportion, symmetry, and comfort in clothing."
  }, {
    id: "03",
    title: "Surgical Precision",
    description: "Fine incisions placed strategically for minimal visibility and predictable contouring."
  }, {
    id: "04",
    title: "Combination Options",
    description: "Integrates seamlessly with lifts, reductions, augmentations, or chest contouring."
  }, {
    id: "05",
    title: "Recovery",
    description: "30–60 minutes; minimal downtime; return to normal activities in 2–3 days."
  }, {
    id: "06",
    title: "Long-Term Benefits",
    description: "Stable diameters, balanced aesthetics, and natural results."
  }];
  const anatomyCallouts = [{
    position: "top-left",
    text: "Nipple projection anatomy"
  }, {
    position: "top-right",
    text: "Areola diameter metrics"
  }, {
    position: "bottom-left",
    text: "Incision placement zones"
  }, {
    position: "bottom-right",
    text: "Scar-minimizing closure lines"
  }];
  const procedureSteps = ["Local or light general anesthesia.", "Precise reduction of nipple height, width, or projection.", "Circular areola reduction with hidden incisions.", "Micro-suturing for minimal scarring and structural support.", "Return home same day with light dressing."];
  return <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
        <img alt="Nipple & Areola Reduction" className="absolute inset-0 w-full h-full object-cover animate-fade-in" src="/lovable-uploads/cc8566ab-4fe7-483d-a164-6c35c09344a6.jpg" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="relative h-full max-w-7xl mx-auto px-8 flex flex-col justify-center items-start pointer-events-none">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-4 uppercase tracking-wide animate-fade-in">
            Nipple & Areola Reduction
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light tracking-wide animate-fade-in" style={{
          animationDelay: "0.1s"
        }}>
            Refined Proportion. Natural Symmetry. Elegant Balance.
          </p>
        </div>
      </section>

      {/* SEO Intro Section */}
      <section className="section-spacing">
        <div className="content-spacing">
          <div className="max-w-4xl mx-auto space-y-6 text-center animate-fade-in">
            <p className="text-lg text-foreground/80 leading-relaxed">
              Nipple & Areola Reduction by Professor Dr. Karaaltin offers precise, minimally invasive refinement for patients concerned with elongated nipples, excessive projection, enlarged areolas, or asymmetry.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              This procedure restores balance, proportion, and harmony while preserving sensation and natural breast function.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              It can be performed alone or combined with augmentation, mastopexy, reduction, gynecomastia correction, or gender-affirming surgery.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section - Sticky Left, Scrolling Right */}
      <section className="overview-section-dark">
        <div className="content-spacing">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16">
            {/* Left Column - Sticky */}
            <div className="overview-sticky-left animate-fade-in">
              <h2 className="overview-title-dark">
                Nipple & Areola Reduction
              </h2>
              <p className="overview-subtitle-dark">
                Overview
              </p>
              <img src={drKaraaltinLogo} alt="Dr. Karaaltin Signature" className="w-48 h-auto opacity-80" />
            </div>

            {/* Right Column - Scrolling Cards */}
            <div className="space-y-6 animate-fade-in" style={{
            animationDelay: "0.2s"
          }}>
              {overviewCards.map(card => <div key={card.id} className="overview-card-dark">
                  <h3 className="overview-card-title-dark">
                    {card.id} // {card.title}
                  </h3>
                  <p className="overview-card-text-dark">
                    {card.description}
                  </p>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Anatomy Block */}
      <section className="section-spacing">
        <div className="content-spacing">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-light uppercase tracking-wide text-foreground mb-4">
              Anatomical Understanding
            </h2>
          </div>

          <div className="relative max-w-5xl mx-auto animate-fade-in" style={{
          animationDelay: "0.2s"
        }}>
            <div className="relative aspect-square md:aspect-video">
              {/* Center Image */}
              <img alt="Nipple & Areola Anatomy" className="w-full h-full object-cover rounded-lg" src="/lovable-uploads/7bbe7b52-c088-4b83-b09b-cab8a0377521.jpg" />

              {/* Callouts - Desktop Only */}
              {/* Top Left Callout */}
              <div className="hidden md:block pointer-events-none absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-lg shadow-lg max-w-[200px]">
                <p className="text-sm font-light text-foreground">
                  {anatomyCallouts[0].text}
                </p>
              </div>

              {/* Top Right Callout */}
              <div className="hidden md:block pointer-events-none absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-lg shadow-lg max-w-[200px]">
                <p className="text-sm font-light text-foreground">
                  {anatomyCallouts[1].text}
                </p>
              </div>

              {/* Bottom Left Callout */}
              <div className="hidden md:block pointer-events-none absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-lg shadow-lg max-w-[200px]">
                <p className="text-sm font-light text-foreground">
                  {anatomyCallouts[2].text}
                </p>
              </div>

              {/* Bottom Right Callout */}
              <div className="hidden md:block pointer-events-none absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-lg shadow-lg max-w-[200px]">
                <p className="text-sm font-light text-foreground">
                  {anatomyCallouts[3].text}
                </p>
              </div>
            </div>
            
            {/* Mobile Layout - Grid below image */}
            <div className="md:hidden grid grid-cols-1 gap-3 mt-6">
              {anatomyCallouts.map((callout, index) => (
                <div key={index} className="bg-white/95 backdrop-blur-sm px-4 py-3 rounded-lg shadow-sm">
                  <p className="text-sm font-light text-foreground">
                    {callout.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Procedure Steps */}
      <section className="section-spacing bg-gray-50">
        <div className="content-spacing">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-light uppercase tracking-wide text-foreground mb-4">
              Procedure Steps
            </h2>
          </div>

          <div className="max-w-4xl mx-auto grid gap-6 animate-fade-in" style={{
          animationDelay: "0.2s"
        }}>
            {procedureSteps.map((step, index) => <div key={index} className="bg-white p-6 lg:p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center text-xl font-light">
                  {index + 1}
                </div>
                <p className="text-lg text-foreground/80 leading-relaxed flex items-center">
                  {step}
                </p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Results & Recovery */}
      <section className="section-spacing">
        <div className="content-spacing">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-light uppercase tracking-wide text-foreground">
                Results & Recovery
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Most patients resume daily activities in 48–72 hours. Scars fade quickly and continue to improve.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Results include improved proportion, refined contours, and natural aesthetics.
              </p>
              <Link to="/gallery">
                <Button className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-6 text-sm uppercase tracking-widest rounded-md group">
                  Explore Breast Procedures
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div className="animate-fade-in" style={{
            animationDelay: "0.2s"
          }}>
              <img alt="Recovery Results" className="w-full h-[400px] object-cover rounded-lg shadow-lg" src="/lovable-uploads/5e0f196a-c1e8-413e-b4d6-497c440bddae.jpg" />
            </div>
          </div>
        </div>
      </section>

      {/* Before & After CTA */}
      <section className="section-spacing bg-gray-50">
        <div className="content-spacing">
          <div className="text-center max-w-3xl mx-auto space-y-8 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-light uppercase tracking-wide text-foreground">
              See The Results
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Explore our gallery of refined, proportion-balanced outcomes.
            </p>
            <Link to="/gallery">
              <Button className="bg-gray-900 text-white hover:bg-gray-800 px-10 py-6 text-sm uppercase tracking-widest rounded-md group">
                View Before & After Gallery
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Get Started CTA */}
      <ContactCTASection />

      <Footer />
    </div>;
};
export default NippleAreolaReduction;