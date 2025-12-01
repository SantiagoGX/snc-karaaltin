import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/home/ContactCTASection";
import drKaraaltinLogo from "@/assets/dr-karaaltin-logo-white.svg";

const BreastAugmentationFatGrafting = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/placeholder.svg" 
            alt="Breast Augmentation with Fat Grafting" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 animate-fade-in pointer-events-none">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 uppercase tracking-[0.2em]">
            BREAST AUGMENTATION WITH FAT GRAFTING
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-light tracking-wide">
            Natural Volume. Soft Contour. Implant-Free Enhancement.
          </p>
        </div>
      </section>

      {/* SEO Intro Block */}
      <section className="section-spacing">
        <div className="content-spacing max-w-3xl mx-auto text-center">
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
            Breast augmentation with fat grafting—also known as structural autologous augmentation—is a natural, implant-free method that enhances volume and reshapes the breast using the patient's own purified fat. Under Dr. Karaaltin's advanced micro-droplet injection protocol, fat is harvested, refined, and layered to create soft, symmetrical, and long-lasting breast enhancement while simultaneously contouring donor areas.
          </p>
        </div>
      </section>

      {/* Sticky Overview Section */}
      <section className="overview-section-dark">
        <div className="content-spacing">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-8 lg:gap-16">
            {/* Left Column - Sticky */}
            <div className="overview-sticky-left">
              <div>
                <h2 className="overview-title-dark">
                  BREAST AUGMENTATION WITH FAT GRAFTING
                </h2>
                <p className="overview-subtitle-dark">Overview</p>
              </div>
              <img 
                src={drKaraaltinLogo} 
                alt="Dr. Karaaltin Signature" 
                className="w-48 h-auto opacity-80"
              />
            </div>

            {/* Right Column - Scrollable Cards */}
            <div className="space-y-6">
              <div className="overview-card-dark">
                <h3 className="overview-card-title-dark">
                  01 // WHAT FAT GRAFTING IS
                </h3>
                <p className="overview-card-text-dark">
                  Liposuction harvests fat → purified → injected in micro-droplets for natural shaping and vascular integration.
                </p>
              </div>

              <div className="overview-card-dark">
                <h3 className="overview-card-title-dark">
                  02 // NATURAL VOLUME, NO IMPLANTS
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Ideal for patients seeking subtle to moderate enhancement (≈1 cup size per session).
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-lg font-semibold uppercase tracking-wide mb-3 text-foreground">
                  03 // DUAL BENEFIT: AUGMENT + CONTOUR
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Donor sites such as abdomen, thighs, flanks, or arms are sculpted during fat harvest.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-lg font-semibold uppercase tracking-wide mb-3 text-foreground">
                  04 // SOFT, NATURAL LOOK & FEEL
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Fat integrates with breast tissue, creating completely natural texture.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-lg font-semibold uppercase tracking-wide mb-3 text-foreground">
                  05 // PRECISION INJECTION TECHNIQUE
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Multi-layered micro-droplet placement maximizes survival and symmetry.
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
              This technique is ideal for patients wanting natural enhancement without foreign materials and offers highly customizable shaping, symmetry correction, and soft-tissue improvement.
            </p>
          </div>
        </div>
      </section>

      {/* Procedure Details */}
      <section className="section-spacing bg-gradient-to-br from-[#0d1f3a] via-[#1a2f4a] to-[#0d1f3a]">
        <div className="content-spacing">
          <h2 className="text-3xl md:text-4xl font-light uppercase tracking-[0.15em] text-center mb-4 text-white animate-fade-in">
            Procedure Details
          </h2>
          <p className="text-center text-white/70 mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Advanced fat grafting technology for natural, lasting breast enhancement
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="group bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-xl shadow-lg hover:bg-white/15 hover:border-white/30 hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                ⏱️
              </div>
              <h3 className="text-xl font-light uppercase tracking-wide mb-3 text-white">
                Duration
              </h3>
              <p className="text-white/80 text-lg">3–5 hours</p>
            </div>
            <div className="group bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-xl shadow-lg hover:bg-white/15 hover:border-white/30 hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                🎯
              </div>
              <h3 className="text-xl font-light uppercase tracking-wide mb-3 text-white">
                Donor Zones
              </h3>
              <p className="text-white/80 text-lg">Abdomen, flanks, thighs, knees, arms</p>
            </div>
            <div className="group bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-xl shadow-lg hover:bg-white/15 hover:border-white/30 hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                💉
              </div>
              <h3 className="text-xl font-light uppercase tracking-wide mb-3 text-white">
                Injection Technique
              </h3>
              <p className="text-white/80 text-lg">Micro-droplet fat injection</p>
            </div>
            <div className="group bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-xl shadow-lg hover:bg-white/15 hover:border-white/30 hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                📈
              </div>
              <h3 className="text-xl font-light uppercase tracking-wide mb-3 text-white">
                Volume Increase
              </h3>
              <p className="text-white/80 text-lg">Typically +1 cup size per session</p>
            </div>
            <div className="group bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-xl shadow-lg hover:bg-white/15 hover:border-white/30 hover:scale-105 transition-all duration-300 animate-fade-in md:col-span-2 lg:col-span-1" style={{ animationDelay: "0.6s" }}>
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                ✨
              </div>
              <h3 className="text-xl font-light uppercase tracking-wide mb-3 text-white">
                Enhancement Option
              </h3>
              <p className="text-white/80 text-lg">Optional SVF (stem cell–enriched grafting) for enhanced fat survival</p>
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
                  { title: "Body Mapping", desc: "Donor site evaluation and planning" },
                  { title: "Liposuction Harvest", desc: "Gentle fat extraction from donor areas" },
                  { title: "Fat Purification", desc: "Processing and preparation of fat cells" },
                  { title: "Layered Breast Injection", desc: "Precise micro-droplet placement" },
                  { title: "Recovery", desc: "Postoperative care and monitoring" }
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
              <img 
                src="/placeholder.svg" 
                alt="Recovery" 
                className="w-full aspect-[4/3] rounded-lg object-cover"
              />
              <div>
                <h2 className="text-3xl md:text-4xl font-light uppercase tracking-[0.15em] mb-6">
                  Recovery
                </h2>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  4–6 weeks swelling; donor site soreness; no compression on breasts; final contour at 3–4 months.
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
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-lg font-semibold uppercase tracking-wide mb-3 text-white">
                Natural Enhancement
              </h3>
              <p className="text-white/80 text-sm">
                Prefer natural, implant-free augmentation
              </p>
            </div>
            <div className="candidate-card-dark text-center">
              <div className="candidate-icon-dark">📏</div>
              <h3 className="candidate-card-title-dark">
                Subtle Increase
              </h3>
              <p className="candidate-card-text-dark">
                Want subtle to moderate increase
              </p>
            </div>
            <div className="candidate-card-dark text-center">
              <div className="candidate-icon-dark">💪</div>
              <h3 className="candidate-card-title-dark">
                Adequate Reserves
              </h3>
              <p className="candidate-card-text-dark">
                Have adequate fat reserves
              </p>
            </div>
            <div className="candidate-card-dark text-center">
              <div className="candidate-icon-dark">✨</div>
              <h3 className="candidate-card-title-dark">
                Dual Benefit
              </h3>
              <p className="candidate-card-text-dark">
                Want contouring + augmentation in one
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

      {/* Get Started CTA */}
      <ContactCTASection />

      <Footer />
    </div>
  );
};

export default BreastAugmentationFatGrafting;