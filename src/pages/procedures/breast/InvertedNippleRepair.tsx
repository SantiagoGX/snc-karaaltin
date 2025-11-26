import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/home/ContactCTASection";

const InvertedNippleRepair = () => {
  const overviewCards = [
    {
      id: "01",
      title: "Condition Overview",
      description: "Inversion occurs when tethered ducts or structural constraints prevent normal outward projection."
    },
    {
      id: "02",
      title: "Ideal Candidates",
      description: "For patients seeking natural projection, symmetry improvement, and confidence restoration."
    },
    {
      id: "03",
      title: "Consultation",
      description: "Includes anatomical photography, assessment, technique selection, and risk-benefit review."
    },
    {
      id: "04",
      title: "Surgical Approach",
      description: "Micro-incision release, internal support sutures, and scar-minimizing closure."
    },
    {
      id: "05",
      title: "Sensation & Safety",
      description: "Technique aims to preserve nerve pathways and, when feasible, breastfeeding potential."
    },
    {
      id: "06",
      title: "Recovery",
      description: "30–60 minutes; supportive dressing for 5–7 days; return to daily routine quickly."
    }
  ];

  const anatomyCallouts = [
    { position: "top-left", text: "Nipple inversion classification" },
    { position: "top-right", text: "Duct preservation strategy" },
    { position: "bottom-left", text: "Supportive micro-suture design" },
    { position: "bottom-right", text: "Projection stability over time" }
  ];

  const procedureSteps = [
    "Apply topical anesthetic + gentle local anesthesia.",
    "Create micro-incision and release tethering structures.",
    "Place internal support sutures for projection stability.",
    "Apply a protective dressing for 5–7 days.",
    "Schedule follow-up to evaluate symmetry and healing."
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
        <img
          src="/placeholder.svg"
          alt="Inverted Nipple Repair"
          className="absolute inset-0 w-full h-full object-cover animate-fade-in"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="relative h-full max-w-7xl mx-auto px-8 flex flex-col justify-center items-start">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-4 uppercase tracking-wide animate-fade-in">
            Inverted Nipple Repair
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light tracking-wide animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Natural Projection. Restored Confidence. Anatomical Precision.
          </p>
        </div>
      </section>

      {/* SEO Intro Section */}
      <section className="section-spacing">
        <div className="content-spacing">
          <div className="max-w-4xl mx-auto space-y-6 text-center animate-fade-in">
            <p className="text-lg text-foreground/80 leading-relaxed">
              Inverted Nipple Repair by Professor Dr. Karaaltin is a minimally invasive procedure designed to correct nipples that retract inward instead of projecting outward. Affecting 10–20% of women, this condition can influence breast aesthetics, confidence, and sometimes breastfeeding function.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Dr. K's anatomical-precision approach restores natural projection while preserving sensation, vascularity, and duct integrity whenever possible.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              This correction can be performed alone or combined with breast augmentation, mastopexy, or reduction for full breast enhancement.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section - Sticky Left, Scrolling Right */}
      <section className="section-spacing bg-gray-50">
        <div className="content-spacing">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16">
            {/* Left Column - Sticky */}
            <div className="lg:sticky lg:top-32 lg:self-start space-y-6 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-light uppercase tracking-wide text-foreground">
                Inverted Nipple Repair
              </h2>
              <p className="text-lg text-foreground/60 uppercase tracking-widest font-light">
                Overview
              </p>
              <img
                src="/lovable-uploads/ef13efac-ce1f-4f94-a1d9-14c0121c0c43.png"
                alt="Dr. Karaaltin Signature"
                className="w-48 brightness-0"
              />
            </div>

            {/* Right Column - Scrolling Cards */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              {overviewCards.map((card) => (
                <div
                  key={card.id}
                  className="bg-white p-8 lg:p-10 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <h3 className="text-sm font-light uppercase tracking-widest text-foreground/60 mb-3">
                    {card.id} // {card.title}
                  </h3>
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              ))}
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

          <div className="relative max-w-5xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative aspect-square md:aspect-video">
              {/* Center Image */}
              <img
                src="/placeholder.svg"
                alt="Nipple Anatomy"
                className="w-full h-full object-cover rounded-lg"
              />

              {/* Top Left Callout */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-lg shadow-lg max-w-[200px]">
                <p className="text-sm font-light text-foreground">
                  {anatomyCallouts[0].text}
                </p>
              </div>

              {/* Top Right Callout */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-lg shadow-lg max-w-[200px]">
                <p className="text-sm font-light text-foreground">
                  {anatomyCallouts[1].text}
                </p>
              </div>

              {/* Bottom Left Callout */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-lg shadow-lg max-w-[200px]">
                <p className="text-sm font-light text-foreground">
                  {anatomyCallouts[2].text}
                </p>
              </div>

              {/* Bottom Right Callout */}
              <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-lg shadow-lg max-w-[200px]">
                <p className="text-sm font-light text-foreground">
                  {anatomyCallouts[3].text}
                </p>
              </div>
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

          <div className="max-w-4xl mx-auto grid gap-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {procedureSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white p-6 lg:p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex gap-6"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center text-xl font-light">
                  {index + 1}
                </div>
                <p className="text-lg text-foreground/80 leading-relaxed flex items-center">
                  {step}
                </p>
              </div>
            ))}
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
                Patients typically resume normal daily activities within 24 hours. Swelling is minimal, scars are almost invisible, and projection stabilizes over several weeks.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Sensitivity is usually preserved, and results appear natural and long-lasting.
              </p>
              <Link to="/gallery">
                <Button className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-6 text-sm uppercase tracking-widest rounded-md group">
                  View Breast Procedures
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <img
                src="/placeholder.svg"
                alt="Recovery Results"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
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
              Explore our gallery of natural, precision-based outcomes.
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
    </div>
  );
};

export default InvertedNippleRepair;