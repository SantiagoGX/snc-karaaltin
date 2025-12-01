import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Scissors, Target, Ruler, Bandage } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/home/ContactCTASection";
import drKaraaltinLogo from "@/assets/dr-karaaltin-logo-white.svg";
const BreastReduction = () => {
  return <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img alt="Breast Reduction" className="w-full h-full object-cover" src="/lovable-uploads/2f6c9d90-a462-4d18-99c0-c4e07f0be762.jpg" />
        </div>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 animate-fade-in pointer-events-none">
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
      <section className="overview-section-dark">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16">
            <div className="overview-sticky-left">
              <div>
                <h2 className="overview-title-dark">
                  BREAST REDUCTION SURGERY
                </h2>
                <p className="overview-subtitle-dark">Overview</p>
              </div>
              <img src={drKaraaltinLogo} alt="Dr. Karaaltin Logo" className="w-48 h-auto opacity-80" />
            </div>

            <div className="space-y-8 min-h-screen">
              <div className="overview-card-dark">
                <h3 className="overview-card-title-dark">
                  01 // WHY REDUCTION HELPS
                </h3>
                <p className="overview-card-text-dark">
                  Relieves back, neck, and shoulder pain; improves posture; eliminates bra-strap grooves.
                </p>
              </div>

              <div className="overview-card-dark" style={{
              animationDelay: '0.1s'
            }}>
                <h3 className="overview-card-title-dark">
                  02 // FUNCTIONAL + AESTHETIC BENEFITS
                </h3>
                <p className="overview-card-text-dark">
                  Reduces volume, reshapes the breast, and lifts the nipple-areolar complex.
                </p>
              </div>

              <div className="overview-card-dark" style={{
              animationDelay: '0.2s'
            }}>
                <h3 className="overview-card-title-dark">
                  03 // CUSTOMIZED INCISION PATTERNS
                </h3>
                <p className="overview-card-text-dark">
                  Anchor, vertical, or peri-areolar—selected based on degree of ptosis.
                </p>
              </div>

              <div className="overview-card-dark" style={{
              animationDelay: '0.3s'
            }}>
                <h3 className="overview-card-title-dark">
                  04 // YOUTHFUL, BALANCED CONTOUR
                </h3>
                <p className="overview-card-text-dark">
                  Breast mound is reshaped for optimal symmetry and proportions.
                </p>
              </div>

              <div className="overview-card-dark" style={{
              animationDelay: '0.4s'
            }}>
                <h3 className="overview-card-title-dark">
                  05 // FAST, COMFORTABLE RECOVERY
                </h3>
                <p className="overview-card-text-dark">
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
      <section className="section-spacing bg-[#F5F1E8]">
        <div className="content-spacing">
          <h2 className="text-3xl md:text-4xl font-light uppercase tracking-[0.15em] text-center mb-4">
            Procedure Details
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Key aspects of the breast reduction procedure
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
              <p className="text-foreground/80 text-sm leading-relaxed">2–5 hours under general anesthesia</p>
            </div>
            
            <div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-xl border-2 border-gray-200/50 hover:border-purple-300 transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{
            animationDelay: '0.1s'
          }}>
              <div className="absolute top-4 right-4 w-12 h-12 rounded-lg bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <Scissors className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-20 h-20 bg-purple-100 rounded-full opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500" />
              <h3 className="text-lg font-semibold uppercase tracking-wide mb-3 text-foreground pr-16">
                Removal
              </h3>
              <p className="text-foreground/80 text-sm leading-relaxed">Tissue, fat, and skin removal</p>
            </div>
            
            <div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-xl border-2 border-gray-200/50 hover:border-pink-300 transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
              <div className="absolute top-4 right-4 w-12 h-12 rounded-lg bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-20 h-20 bg-pink-100 rounded-full opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500" />
              <h3 className="text-lg font-semibold uppercase tracking-wide mb-3 text-foreground pr-16">
                Repositioning
              </h3>
              <p className="text-foreground/80 text-sm leading-relaxed">Nipple repositioning</p>
            </div>
            
            <div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-xl border-2 border-gray-200/50 hover:border-green-300 transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{
            animationDelay: '0.3s'
          }}>
              <div className="absolute top-4 right-4 w-12 h-12 rounded-lg bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <Ruler className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-20 h-20 bg-green-100 rounded-full opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500" />
              <h3 className="text-lg font-semibold uppercase tracking-wide mb-3 text-foreground pr-16">
                Contouring
              </h3>
              <p className="text-foreground/80 text-sm leading-relaxed">Comprehensive lift and contouring</p>
            </div>
            
            <div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-xl border-2 border-gray-200/50 hover:border-amber-300 transition-all duration-300 hover:-translate-y-2 animate-fade-in col-span-full lg:col-span-2" style={{
            animationDelay: '0.4s'
          }}>
              <div className="absolute top-4 right-4 w-12 h-12 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <Bandage className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-20 h-20 bg-amber-100 rounded-full opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500" />
              <h3 className="text-lg font-semibold uppercase tracking-wide mb-3 text-foreground pr-16">
                Scarring
              </h3>
              <p className="text-foreground/80 text-sm leading-relaxed">Scars fade significantly with aftercare</p>
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
                title: "Markings",
                desc: "Preoperative planning and marking"
              }, {
                title: "Surgery",
                desc: "Tissue removal and reshaping"
              }, {
                title: "Dressing + Support Bra",
                desc: "Immediate postoperative care"
              }, {
                title: "Recovery",
                desc: "Monitoring and follow-up"
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
              <img alt="Recovery" className="w-full aspect-[4/3] rounded-lg object-cover" src="/lovable-uploads/98e674d8-2377-4a1b-85f9-ee47835b1610.jpg" />
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
      <section className="candidates-section-dark">
        <div className="container mx-auto px-8 max-w-6xl">
          <h2 className="candidates-title-dark">
            Ideal Candidates
          </h2>
          <div className="candidates-grid">
            <div className="candidate-card-dark" style={{
            animationDelay: '0.1s'
          }}>
              <div className="candidate-icon-dark">
                💪
              </div>
              <h3 className="candidate-card-title-dark">
                Physical Discomfort
              </h3>
              <p className="candidate-card-text-dark">
                Physical discomfort from large breasts
              </p>
            </div>
            <div className="candidate-card-dark" style={{
            animationDelay: '0.2s'
          }}>
              <div className="candidate-icon-dark">
                🩹
              </div>
              <h3 className="candidate-card-title-dark">
                Chronic Pain
              </h3>
              <p className="candidate-card-text-dark">
                Chronic pain or skin irritation
              </p>
            </div>
            <div className="candidate-card-dark" style={{
            animationDelay: '0.3s'
          }}>
              <div className="candidate-icon-dark">
                🏃
              </div>
              <h3 className="candidate-card-title-dark">
                Activity Limitation
              </h3>
              <p className="candidate-card-text-dark">
                Difficulty exercising or dressing
              </p>
            </div>
            <div className="candidate-card-dark" style={{
            animationDelay: '0.4s'
          }}>
              <div className="candidate-icon-dark">
                ⚖️
              </div>
              <h3 className="candidate-card-title-dark">
                Proportion
              </h3>
              <p className="candidate-card-text-dark">
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
    </div>;
};
export default BreastReduction;