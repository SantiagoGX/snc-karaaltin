import { useState } from "react";
import { ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const LearnSurgery = () => {
  const [expandedModule, setExpandedModule] = useState<string | null>(null);

  const toggleModule = (moduleId: string) => {
    setExpandedModule(expandedModule === moduleId ? null : moduleId);
  };

  const trainingModules = [
    {
      id: "forehead-lift",
      title: "Endochor® Forehead Lift",
      badge: "Module 1",
      points: [
        "Brow ptosis / forehead laxity",
        "Endoscopic approach",
        "Periosteal release / cranial fixation"
      ]
    },
    {
      id: "mid-face-lift",
      title: "Endochor® Mid-Face Lift",
      badge: "Module 2",
      points: [
        "Malar descent / lid-cheek transition",
        "Sub-SMAS / subperiosteal planes",
        "SOOF support & vector design"
      ]
    },
    {
      id: "ribbon-neck",
      title: "Endochor® Ribbon for Lower Face & Neck",
      badge: "Module 3",
      points: [
        "Neck laxity / jowls",
        "Platysma support",
        "Hammock anchoring"
      ]
    },
    {
      id: "transblepharoplasty",
      title: "Transblepharoplasty Brow Implant",
      badge: "Module 4",
      points: [
        "Single upper-eyelid hidden incision",
        "Brow stabilization",
        "Scarless lateral lift"
      ]
    },
    {
      id: "double-double",
      title: "Double-Double Technique (Advanced)",
      badge: "Module 5",
      points: [
        "Dual implants per side",
        "Vertical and posterior vectors"
      ]
    },
    {
      id: "integration",
      title: "Integration Pathways",
      badge: "Module 6",
      points: [
        "Combine with blepharoplasty / MACS / High-SMAS / revisions"
      ]
    }
  ];

  const qlDoctorCards = [
    {
      title: "Clinical Leadership",
      icon: "👨‍⚕️",
      points: [
        "Case selection",
        "Pre-op planning",
        "Implant choice",
        "Long-term follow-up"
      ]
    },
    {
      title: "Technique Standardization",
      icon: "📋",
      points: [
        "Safety zones",
        "Fixation principles",
        "Documentation structure"
      ]
    },
    {
      title: "Outcome Tracking",
      icon: "📊",
      points: [
        "Photography",
        "Patient-reported outcomes",
        "Audit-based improvement"
      ]
    },
    {
      title: "Education & Proctorship",
      icon: "🎓",
      points: [
        "Cadaver lab mentorship",
        "OR proctorship",
        "International training"
      ]
    }
  ];

  const learningObjectives = [
    { icon: "🎯", text: "Proper patient selection & vector planning" },
    { icon: "🔬", text: "Safe endoscopic / transbleph / limited-incision dissection" },
    { icon: "⚙️", text: "Reliable implant fixation" },
    { icon: "🛡️", text: "Complication prevention & management" },
    { icon: "📅", text: "Structured follow-up protocols" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* 1. HERO SECTION - HORIZONTAL BANNER WITH PURE BLUE BACKGROUND */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-[#0d1f3a] pt-28 lg:pt-32">
          {/* Pure blue background - no image placeholder */}

          {/* Content */}
          <div className="relative z-10 container mx-auto px-8 grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 items-center">
            {/* Left: Title + Subtitle + CTA */}
            <div className="space-y-6 blur-to-focus">
              <h1 className="font-serif font-light text-4xl md:text-5xl lg:text-6xl tracking-wide text-white leading-tight">
                Endochor Academy — Learn Advanced Facial Surgery with Prof. Dr. Karaaltin
              </h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
                Hands-on training, QL Doctor mentorship, and advanced Endochor® implant education.
              </p>
              <button
                onClick={() => document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 bg-white text-[#0d1f3a] px-8 py-3 text-xs uppercase tracking-widest font-semibold rounded hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Apply for Training
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right: Vertical Media Placeholder - Editable */}
            <div className="relative w-full max-w-[350px] mx-auto lg:mx-0 aspect-[9/16] overflow-hidden rounded-lg shadow-2xl scale-up-luxury">
              <img
                src="/placeholder.svg"
                alt="Endochor Academy Training"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* 2. INTRODUCTION - WHITE BACKGROUND */}
        <section className="py-16 md:py-24 px-8 bg-white">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-8">
              <h2 className="font-serif font-light text-3xl md:text-4xl lg:text-5xl tracking-wide mb-4 fade-in">
                What Is the Endochor Academy?
              </h2>
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#0d1f3a] to-transparent mx-auto" />
            </div>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed text-center fade-in-up" style={{ animationDelay: '0.2s' }}>
              The Endochor Academy is an advanced surgical education platform led by Prof. Dr. Mehmet Veli Karaaltin, the official QL Doctor for Endochor® Implants. Surgeons from around the world learn high-precision anatomical techniques, implant-based lifting systems, and minimally invasive facial rejuvenation through structured lectures, cadaver labs, and optional hands-on operating room proctorship.
            </p>
          </div>
        </section>

        {/* 3. ABOUT PROF. DR. K AS QL DOCTOR - LIGHT GREY */}
        <section className="py-16 md:py-24 px-8 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="font-serif font-light text-3xl md:text-4xl lg:text-5xl tracking-wide mb-12 text-center fade-in">
              The Role of a QL Doctor
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {qlDoctorCards.map((card, index) => (
                <div
                  key={index}
                  className="backdrop-blur-md bg-white/80 border border-gray-200/50 rounded-lg p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl mb-4 text-center">{card.icon}</div>
                  <h3 className="font-serif font-semibold text-xl text-gray-900 mb-4 text-center">
                    {card.title}
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    {card.points.map((point, i) => (
                      <li key={i}>• {point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. WHY ENDOCHOR® IN FACIAL SURGERY - PRIMARY BLUE BACKGROUND */}
        <section className="py-16 md:py-24 px-8 bg-[#0d1f3a]">
          <div className="container mx-auto max-w-6xl">
            <h2 className="font-serif font-light text-3xl md:text-4xl lg:text-5xl tracking-wide mb-12 text-center text-white fade-in">
              Why Endochor® in Facial Surgery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "🧬", text: "Biodegradable PCL implants that resorb safely while inducing collagen" },
                { icon: "🎯", text: "Multi-vector lifting compatible with endoscopic, transbleph, and open techniques" },
                { icon: "🧠", text: "Anatomy-respectful anchorage preserving nerve function and expression" },
                { icon: "✨", text: "Hidden-incision, scar-minimal workflows" }
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="backdrop-blur-md bg-white/10 border border-white/20 rounded-lg p-6 shadow-lg text-center hover:bg-white/15 hover:border-white/30 hover:scale-105 transition-all duration-300 fade-in-up group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{benefit.icon}</div>
                  <p className="text-white/90 text-sm leading-relaxed">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. TRAINING MODULES - WHITE BACKGROUND, 2-COLUMN GRID */}
        <section className="py-16 md:py-24 px-8 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="font-serif font-light text-3xl md:text-4xl lg:text-5xl tracking-wide mb-12 text-center fade-in">
              Training Modules Available
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {trainingModules.map((module, index) => (
                <div
                  key={module.id}
                  className="backdrop-blur-md bg-gray-50 border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 fade-in-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="p-6">
                    <div className="inline-block px-3 py-1 bg-[#0d1f3a] text-white text-xs uppercase tracking-widest rounded-full mb-4">
                      {module.badge}
                    </div>
                    <button
                      onClick={() => toggleModule(module.id)}
                      className="w-full text-left group"
                    >
                      <h3 className="font-serif font-semibold text-xl text-gray-900 mb-3 group-hover:text-[#0d1f3a] transition-colors">
                        {module.title}
                      </h3>
                    </button>
                    {expandedModule === module.id && (
                      <ul className="space-y-2 mt-4 pt-4 border-t border-gray-200 animate-fade-in">
                        {module.points.map((point, i) => (
                          <li key={i} className="text-gray-700 text-sm">
                            • {point}
                          </li>
                        ))}
                      </ul>
                    )}
                    <button
                      onClick={() => toggleModule(module.id)}
                      className="mt-4 text-xs uppercase tracking-widest text-[#0d1f3a] hover:underline font-semibold"
                    >
                      {expandedModule === module.id ? "Hide Details" : "View Details"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. LEARNING OBJECTIVES - LIGHT GREY, COMPACT GRID */}
        <section className="py-16 md:py-24 px-8 bg-gray-50">
          <div className="container mx-auto max-w-5xl">
            <h2 className="font-serif font-light text-3xl md:text-4xl lg:text-5xl tracking-wide mb-12 text-center fade-in">
              Learning Objectives
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {learningObjectives.map((objective, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 backdrop-blur-md bg-white/80 border border-gray-200/50 rounded-lg p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-3xl flex-shrink-0">{objective.icon}</div>
                  <p className="text-gray-700 text-sm leading-relaxed">{objective.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. COURSE FORMATS - SOFT BLUE-TINTED BACKGROUND */}
        <section className="py-16 md:py-24 px-8 bg-blue-50/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="font-serif font-light text-3xl md:text-4xl lg:text-5xl tracking-wide mb-12 text-center fade-in">
              Course Formats
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Essentials", duration: "1 Day", description: "Lectures + simulation lab" },
                { title: "Core Skills", duration: "2 Days", description: "Cadaver lab + live demo" },
                { title: "Masterclass", duration: "3 Days", description: "Cadaver lab + OR proctorship" },
                { title: "On-site Proctorship", duration: "Custom", description: "Mentorship at the participant's clinic" }
              ].map((format, index) => (
                <div
                  key={index}
                  className="backdrop-blur-md bg-white/90 border-2 border-gray-200 rounded-lg p-6 shadow-lg text-center hover:border-[#0d1f3a] hover:shadow-xl hover:scale-105 transition-all duration-300 fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-4">
                    <h3 className="font-serif font-semibold text-xl text-gray-900 mb-2">
                      {format.title}
                    </h3>
                    <div className="text-sm font-semibold text-[#0d1f3a] uppercase tracking-widest">
                      {format.duration}
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{format.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. HANDS-ON TRAINING PROGRAM (PRICING) - WHITE BACKGROUND */}
        <section className="py-16 md:py-24 px-8 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="font-serif font-light text-3xl md:text-4xl lg:text-5xl tracking-wide mb-12 text-center fade-in">
              Hands-On Training Program
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Individual Signature Procedures */}
              <div className="backdrop-blur-md bg-gray-50 border-2 border-gray-200 rounded-lg p-8 shadow-xl hover:border-[#0d1f3a] hover:shadow-2xl transition-all duration-300 fade-in-up">
                <h3 className="font-serif font-semibold text-2xl text-gray-900 mb-2 text-center">
                  Individual Signature Procedures
                </h3>
                <p className="text-sm text-gray-600 text-center mb-6 uppercase tracking-wider">Hands-On Surgery</p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-4 border-b-2 border-gray-200">
                    <span className="text-gray-700 font-medium">1 surgery</span>
                    <span className="font-bold text-2xl text-[#0d1f3a]">€15,000</span>
                  </div>
                  <div className="flex justify-between items-center py-4 border-b-2 border-gray-200">
                    <span className="text-gray-700 font-medium">2 surgeries</span>
                    <span className="font-bold text-2xl text-[#0d1f3a]">€20,000</span>
                  </div>
                  <div className="flex justify-between items-center py-4">
                    <span className="text-gray-700 font-medium">3 surgeries</span>
                    <span className="font-bold text-2xl text-[#0d1f3a]">€30,000</span>
                  </div>
                </div>
              </div>

              {/* Extended Hands-On Fellowship */}
              <div className="backdrop-blur-md bg-gray-50 border-2 border-gray-200 rounded-lg p-8 shadow-xl hover:border-[#0d1f3a] hover:shadow-2xl transition-all duration-300 fade-in-up" style={{ animationDelay: '0.1s' }}>
                <h3 className="font-serif font-semibold text-2xl text-gray-900 mb-2 text-center">
                  Extended Hands-On Fellowship
                </h3>
                <p className="text-sm text-gray-600 text-center mb-6 uppercase tracking-wider">Immersive Training</p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-4 border-b-2 border-gray-200">
                    <span className="text-gray-700 font-medium">1 Month</span>
                    <span className="font-bold text-2xl text-[#0d1f3a]">€30,000</span>
                  </div>
                  <div className="flex justify-between items-center py-4 border-b-2 border-gray-200">
                    <span className="text-gray-700 font-medium">3 Months</span>
                    <span className="font-bold text-2xl text-[#0d1f3a]">€40,000</span>
                  </div>
                  <div className="flex justify-between items-center py-4">
                    <span className="text-gray-700 font-medium">6 Months</span>
                    <span className="font-bold text-2xl text-[#0d1f3a]">€50,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. SAMPLE 2-DAY AGENDA - LIGHT GREY, TIMELINE STYLE */}
        <section className="py-16 md:py-24 px-8 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-serif font-light text-3xl md:text-4xl lg:text-5xl tracking-wide mb-12 text-center fade-in">
              Sample 2-Day Agenda
            </h2>
            <div className="space-y-6">
              {/* Day 1 */}
              <div className="backdrop-blur-md bg-white/90 border-l-4 border-[#0d1f3a] rounded-lg p-8 shadow-lg fade-in-up">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#0d1f3a] text-white rounded-full flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                  <h3 className="font-serif font-semibold text-2xl text-gray-900">DAY 1</h3>
                </div>
                <ul className="space-y-3 text-gray-700 pl-16">
                  <li>• Endochor® biomechanics and material science</li>
                  <li>• Safety zones & nerve/vascular mapping</li>
                  <li>• Vector design for forehead, mid-face, neck, brow</li>
                  <li>• Implant sizing & fixation principles</li>
                  <li>• Lab: access, pocket creation, implant seating</li>
                </ul>
              </div>

              {/* Day 2 */}
              <div className="backdrop-blur-md bg-white/90 border-l-4 border-[#0d1f3a] rounded-lg p-8 shadow-lg fade-in-up" style={{ animationDelay: '0.1s' }}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#0d1f3a] text-white rounded-full flex items-center justify-center font-bold text-lg">
                    2
                  </div>
                  <h3 className="font-serif font-semibold text-2xl text-gray-900">DAY 2</h3>
                </div>
                <ul className="space-y-3 text-gray-700 pl-16">
                  <li>• Complication management & revision strategies</li>
                  <li>• Extended cadaver lab OR live case observation</li>
                  <li>• Documentation, consent, billing/coding</li>
                  <li>• Post-operative care pathways</li>
                  <li>• Case-based planning with faculty</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 10. FAQ SECTION - WHITE BACKGROUND */}
        <section className="py-16 md:py-24 px-8 bg-white">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-serif font-light text-3xl md:text-4xl lg:text-5xl tracking-wide mb-12 text-center fade-in">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="faq-1" className="backdrop-blur-md bg-gray-50 border border-gray-200 rounded-lg overflow-hidden shadow-lg">
                <AccordionTrigger className="px-6 py-5 text-left hover:bg-white/80 transition-colors [&[data-state=open]>svg]:rotate-180">
                  <h3 className="font-serif font-semibold text-lg text-gray-900">
                    Do I need endoscopic experience?
                  </h3>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    Recommended for Core/Masterclass, but Essentials and Transbleph modules are beginner-friendly.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-2" className="backdrop-blur-md bg-gray-50 border border-gray-200 rounded-lg overflow-hidden shadow-lg">
                <AccordionTrigger className="px-6 py-5 text-left hover:bg-white/80 transition-colors [&[data-state=open]>svg]:rotate-180">
                  <h3 className="font-serif font-semibold text-lg text-gray-900">
                    Are implants provided during the training?
                  </h3>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    Yes. All training sets are included.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-3" className="backdrop-blur-md bg-gray-50 border border-gray-200 rounded-lg overflow-hidden shadow-lg">
                <AccordionTrigger className="px-6 py-5 text-left hover:bg-white/80 transition-colors [&[data-state=open]>svg]:rotate-180">
                  <h3 className="font-serif font-semibold text-lg text-gray-900">
                    Can I bring my own cases?
                  </h3>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    Yes. Case planning is encouraged. Live OR proctorship depends on local regulations.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-4" className="backdrop-blur-md bg-gray-50 border border-gray-200 rounded-lg overflow-hidden shadow-lg">
                <AccordionTrigger className="px-6 py-5 text-left hover:bg-white/80 transition-colors [&[data-state=open]>svg]:rotate-180">
                  <h3 className="font-serif font-semibold text-lg text-gray-900">
                    Is post-course support available?
                  </h3>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    Yes. Virtual case reviews and remote proctorship can be arranged.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-5" className="backdrop-blur-md bg-gray-50 border border-gray-200 rounded-lg overflow-hidden shadow-lg">
                <AccordionTrigger className="px-6 py-5 text-left hover:bg-white/80 transition-colors [&[data-state=open]>svg]:rotate-180">
                  <h3 className="font-serif font-semibold text-lg text-gray-900">
                    Are CME/CPD credits available?
                  </h3>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    Yes. Credits may be arranged depending on venue.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-6" className="backdrop-blur-md bg-gray-50 border border-gray-200 rounded-lg overflow-hidden shadow-lg">
                <AccordionTrigger className="px-6 py-5 text-left hover:bg-white/80 transition-colors [&[data-state=open]>svg]:rotate-180">
                  <h3 className="font-serif font-semibold text-lg text-gray-900">
                    What is included in the fellowship price?
                  </h3>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    Access to labs, training materials, OR observation or participation (depending on the package), and mentorship.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* 11. APPLICATION DETAILS - PRIMARY BLUE BACKGROUND */}
        <section id="application" className="py-16 md:py-24 px-8 bg-[#0d1f3a]">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="font-serif font-light text-3xl md:text-4xl lg:text-5xl tracking-wide mb-4 text-white fade-in">
                Ready to Begin Your Training?
              </h2>
              <p className="text-lg text-white/90 max-w-3xl mx-auto fade-in-up" style={{ animationDelay: '0.1s' }}>
                Join surgeons from around the world in mastering advanced Endochor® techniques. Contact us to discuss your training pathway.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left: Training Lead Info */}
              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-lg p-8 shadow-xl fade-in-up" style={{ animationDelay: '0.2s' }}>
                <h3 className="font-serif font-semibold text-2xl text-white mb-6">Training Lead (QL Doctor)</h3>
                <div className="space-y-4 text-white/90">
                  <div>
                    <p className="font-semibold text-lg text-white mb-1">Prof. Dr. Mehmet Veli Karaaltin</p>
                    <p className="text-sm">Official QL Doctor for Endochor® Implants</p>
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Locations:</p>
                    <p className="text-sm">Istanbul & International Training Centers</p>
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-2">Email:</p>
                    <a
                      href="mailto:dwzh10@gmail.com"
                      className="inline-block text-sm bg-white/10 border border-white/30 px-4 py-2 rounded hover:bg-white/20 transition-all duration-300"
                    >
                      dwzh10@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Right: WhatsApp Contact */}
              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-lg p-8 shadow-xl flex flex-col items-center justify-center fade-in-up" style={{ animationDelay: '0.3s' }}>
                <h3 className="font-serif font-semibold text-2xl text-white mb-6 text-center">
                  Connect Instantly
                </h3>
                <p className="text-white/90 text-center mb-6">
                  Have questions? Reach out directly via WhatsApp for immediate assistance.
                </p>
                <a
                  href="https://wa.me/31683830166"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 backdrop-blur-md bg-white/20 border border-white/30 px-8 py-4 rounded-lg text-white hover:bg-white/30 hover:scale-105 transition-all duration-300 shadow-lg group"
                >
                  {/* WhatsApp Icon SVG */}
                  <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span className="font-semibold">WhatsApp: +31 683 830 166</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LearnSurgery;
