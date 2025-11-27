import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, ChevronDown } from "lucide-react";
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
      points: [
        "Brow ptosis / forehead laxity",
        "Endoscopic approach",
        "Periosteal release / cranial fixation"
      ]
    },
    {
      id: "mid-face-lift",
      title: "Endochor® Mid-Face Lift",
      points: [
        "Malar descent / lid-cheek transition",
        "Sub-SMAS / subperiosteal planes",
        "SOOF support & vector design"
      ]
    },
    {
      id: "ribbon-neck",
      title: "Endochor® Ribbon for Lower Face & Neck",
      points: [
        "Neck laxity / jowls",
        "Platysma support",
        "Hammock anchoring"
      ]
    },
    {
      id: "transblepharoplasty",
      title: "Transblepharoplasty Brow Implant",
      points: [
        "Single upper-eyelid hidden incision",
        "Brow stabilization",
        "Scarless lateral lift"
      ]
    },
    {
      id: "double-double",
      title: "Double-Double Technique (Advanced)",
      points: [
        "Dual implants per side",
        "Vertical and posterior vectors"
      ]
    },
    {
      id: "integration",
      title: "Integration Pathways",
      points: [
        "Combine with blepharoplasty / MACS / High-SMAS / revisions"
      ]
    }
  ];

  const qlDoctorCards = [
    {
      title: "Clinical Leadership",
      points: [
        "Case selection",
        "Pre-op planning",
        "Implant choice",
        "Long-term follow-up"
      ]
    },
    {
      title: "Technique Standardization",
      points: [
        "Safety zones",
        "Fixation principles",
        "Documentation structure"
      ]
    },
    {
      title: "Outcome Tracking",
      points: [
        "Photography",
        "Patient-reported outcomes",
        "Audit-based improvement"
      ]
    },
    {
      title: "Education & Proctorship",
      points: [
        "Cadaver lab mentorship",
        "OR proctorship",
        "International training"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        {/* 1. HERO SECTION */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden fade-in">
          <div className="container mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Vertical Image/Video */}
            <div className="relative w-full max-w-[400px] mx-auto lg:mx-0 aspect-[9/16] overflow-hidden rounded-lg shadow-xl fade-in-up">
              <img
                src="/placeholder.svg"
                alt="Endochor Academy Training"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right: Title + Subtitle + CTA */}
            <div className="space-y-6 fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h1 className="font-serif font-light text-4xl md:text-5xl lg:text-6xl tracking-wide text-gray-900">
                Endochor Academy — Learn Advanced Facial Surgery with Prof. Dr. Karaaltin
              </h1>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Hands-on training, QL Doctor mentorship, and advanced Endochor® implant education.
              </p>
              <a
                href="#application"
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 text-xs uppercase tracking-widest font-light rounded hover:bg-gray-800 transition-all duration-300"
              >
                Apply for Training
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* 2. INTRODUCTION */}
        <section className="py-16 md:py-24 px-8 bg-white">
          <div className="container mx-auto max-w-5xl">
            <h2 className="font-serif font-light text-3xl md:text-4xl lg:text-5xl tracking-wide mb-8 fade-in">
              What Is the Endochor Academy?
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed fade-in-up" style={{ animationDelay: '0.1s' }}>
              The Endochor Academy is an advanced surgical education platform led by Prof. Dr. Mehmet Veli Karaaltin, the official QL Doctor for Endochor® Implants. Surgeons from around the world learn high-precision anatomical techniques, implant-based lifting systems, and minimally invasive facial rejuvenation through structured lectures, cadaver labs, and optional hands-on operating room proctorship.
            </p>
          </div>
        </section>

        {/* 3. ABOUT PROF. DR. K AS QL DOCTOR */}
        <section className="py-16 md:py-24 px-8 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="font-serif font-light text-3xl md:text-4xl lg:text-5xl tracking-wide mb-12 text-center fade-in">
              The Role of a QL Doctor
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {qlDoctorCards.map((card, index) => (
                <div
                  key={index}
                  className="backdrop-blur-md bg-white/60 border border-gray-200/50 rounded-lg p-6 shadow-lg fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="font-serif font-semibold text-xl text-gray-900 mb-4">
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

        {/* 4. WHY ENDOCHOR® IN FACIAL SURGERY */}
        <section className="py-16 md:py-24 px-8 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="font-serif font-light text-3xl md:text-4xl lg:text-5xl tracking-wide mb-12 text-center fade-in">
              Why Endochor® in Facial Surgery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Biodegradable PCL implants that resorb safely while inducing collagen",
                "Multi-vector lifting compatible with endoscopic, transbleph, and open techniques",
                "Anatomy-respectful anchorage preserving nerve function and expression",
                "Hidden-incision, scar-minimal workflows"
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="backdrop-blur-md bg-white/60 border border-gray-200/50 rounded-lg p-6 shadow-lg text-center fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <p className="text-gray-700 text-sm leading-relaxed">• {benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. TRAINING MODULES */}
        <section className="py-16 md:py-24 px-8 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-serif font-light text-3xl md:text-4xl lg:text-5xl tracking-wide mb-12 text-center fade-in">
              Training Modules Available
            </h2>
            <div className="space-y-4">
              {trainingModules.map((module, index) => (
                <div
                  key={module.id}
                  className="backdrop-blur-md bg-white/60 border border-gray-200/50 rounded-lg overflow-hidden shadow-lg fade-in-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <button
                    onClick={() => toggleModule(module.id)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-white/80 transition-colors"
                  >
                    <h3 className="font-serif font-semibold text-xl text-gray-900">
                      {module.title}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-600 transition-transform ${
                        expandedModule === module.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {expandedModule === module.id && (
                    <div className="px-6 pb-6 space-y-2">
                      {module.points.map((point, i) => (
                        <p key={i} className="text-gray-700 text-sm">
                          • {point}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. LEARNING OBJECTIVES */}
        <section className="py-16 md:py-24 px-8 bg-white">
          <div className="container mx-auto max-w-5xl">
            <h2 className="font-serif font-light text-3xl md:text-4xl lg:text-5xl tracking-wide mb-12 text-center fade-in">
              Learning Objectives
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Proper patient selection & vector planning",
                "Safe endoscopic / transbleph / limited-incision dissection",
                "Reliable implant fixation",
                "Complication prevention & management",
                "Structured follow-up protocols"
              ].map((objective, index) => (
                <div
                  key={index}
                  className="backdrop-blur-md bg-white/60 border border-gray-200/50 rounded-lg p-6 shadow-lg fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <p className="text-gray-700">• {objective}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. COURSE FORMATS */}
        <section className="py-16 md:py-24 px-8 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="font-serif font-light text-3xl md:text-4xl lg:text-5xl tracking-wide mb-12 text-center fade-in">
              Course Formats
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Essentials (1 Day)", description: "Lectures + simulation lab" },
                { title: "Core Skills (2 Days)", description: "Cadaver lab + live demo" },
                { title: "Masterclass (3 Days)", description: "Cadaver lab + OR proctorship" },
                { title: "On-site Proctorship", description: "Mentorship at the participant's clinic" }
              ].map((format, index) => (
                <div
                  key={index}
                  className="backdrop-blur-md bg-white/60 border border-gray-200/50 rounded-lg p-6 shadow-lg text-center fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="font-serif font-semibold text-lg text-gray-900 mb-3">
                    {format.title}
                  </h3>
                  <p className="text-gray-700 text-sm">{format.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. HANDS-ON TRAINING PROGRAM (PRICING) */}
        <section className="py-16 md:py-24 px-8 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="font-serif font-light text-3xl md:text-4xl lg:text-5xl tracking-wide mb-12 text-center fade-in">
              Hands-On Training Program
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Individual Signature Procedures */}
              <div className="backdrop-blur-md bg-white/60 border border-gray-200/50 rounded-lg p-8 shadow-lg fade-in-up">
                <h3 className="font-serif font-semibold text-2xl text-gray-900 mb-6 text-center">
                  Individual Signature Procedures
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-700">1 surgery</span>
                    <span className="font-semibold text-gray-900">€15,000</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-700">2 surgeries</span>
                    <span className="font-semibold text-gray-900">€20,000</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-700">3 surgeries</span>
                    <span className="font-semibold text-gray-900">€30,000</span>
                  </div>
                </div>
              </div>

              {/* Extended Hands-On Fellowship */}
              <div className="backdrop-blur-md bg-white/60 border border-gray-200/50 rounded-lg p-8 shadow-lg fade-in-up" style={{ animationDelay: '0.1s' }}>
                <h3 className="font-serif font-semibold text-2xl text-gray-900 mb-6 text-center">
                  Extended Hands-On Fellowship
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-700">1 Month</span>
                    <span className="font-semibold text-gray-900">€30,000</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-700">3 Months</span>
                    <span className="font-semibold text-gray-900">€40,000</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-700">6 Months</span>
                    <span className="font-semibold text-gray-900">€50,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. SAMPLE 2-DAY AGENDA */}
        <section className="py-16 md:py-24 px-8 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-serif font-light text-3xl md:text-4xl lg:text-5xl tracking-wide mb-12 text-center fade-in">
              Sample 2-Day Agenda
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="day-1" className="backdrop-blur-md bg-white/60 border border-gray-200/50 rounded-lg overflow-hidden shadow-lg">
                <AccordionTrigger className="px-6 py-4 text-left hover:bg-white/80">
                  <h3 className="font-serif font-semibold text-xl text-gray-900">DAY 1</h3>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <ul className="space-y-2 text-gray-700">
                    <li>• Endochor® biomechanics and material science</li>
                    <li>• Safety zones & nerve/vascular mapping</li>
                    <li>• Vector design for forehead, mid-face, neck, brow</li>
                    <li>• Implant sizing & fixation principles</li>
                    <li>• Lab: access, pocket creation, implant seating</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="day-2" className="backdrop-blur-md bg-white/60 border border-gray-200/50 rounded-lg overflow-hidden shadow-lg">
                <AccordionTrigger className="px-6 py-4 text-left hover:bg-white/80">
                  <h3 className="font-serif font-semibold text-xl text-gray-900">DAY 2</h3>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <ul className="space-y-2 text-gray-700">
                    <li>• Complication management & revision strategies</li>
                    <li>• Extended cadaver lab OR live case observation</li>
                    <li>• Documentation, consent, billing/coding</li>
                    <li>• Post-operative care pathways</li>
                    <li>• Case-based planning with faculty</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* 10. FAQ SECTION */}
        <section className="py-16 md:py-24 px-8 bg-white">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-serif font-light text-3xl md:text-4xl lg:text-5xl tracking-wide mb-12 text-center fade-in">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="faq-1" className="backdrop-blur-md bg-white/60 border border-gray-200/50 rounded-lg overflow-hidden shadow-lg">
                <AccordionTrigger className="px-6 py-4 text-left hover:bg-white/80">
                  Do I need endoscopic experience?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-gray-700">
                  Recommended for Core/Masterclass, but Essentials and Transbleph modules are beginner-friendly.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-2" className="backdrop-blur-md bg-white/60 border border-gray-200/50 rounded-lg overflow-hidden shadow-lg">
                <AccordionTrigger className="px-6 py-4 text-left hover:bg-white/80">
                  Are implants provided during the training?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-gray-700">
                  Yes. All training sets are included.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-3" className="backdrop-blur-md bg-white/60 border border-gray-200/50 rounded-lg overflow-hidden shadow-lg">
                <AccordionTrigger className="px-6 py-4 text-left hover:bg-white/80">
                  Can I bring my own cases?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-gray-700">
                  Yes. Case planning is encouraged. Live OR proctorship depends on local regulations.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-4" className="backdrop-blur-md bg-white/60 border border-gray-200/50 rounded-lg overflow-hidden shadow-lg">
                <AccordionTrigger className="px-6 py-4 text-left hover:bg-white/80">
                  Is post-course support available?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-gray-700">
                  Yes. Virtual case reviews and remote proctorship can be arranged.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-5" className="backdrop-blur-md bg-white/60 border border-gray-200/50 rounded-lg overflow-hidden shadow-lg">
                <AccordionTrigger className="px-6 py-4 text-left hover:bg-white/80">
                  Are CME/CPD credits available?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-gray-700">
                  Yes. Credits may be arranged depending on venue.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-6" className="backdrop-blur-md bg-white/60 border border-gray-200/50 rounded-lg overflow-hidden shadow-lg">
                <AccordionTrigger className="px-6 py-4 text-left hover:bg-white/80">
                  What is included in the fellowship price?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-gray-700">
                  Access to labs, training materials, OR observation or participation (depending on the package), and mentorship.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* 11. APPLICATION DETAILS */}
        <section id="application" className="py-16 md:py-24 px-8 bg-gray-50">
          <div className="container mx-auto max-w-5xl">
            <h2 className="font-serif font-light text-3xl md:text-4xl lg:text-5xl tracking-wide mb-12 text-center fade-in">
              Application Details
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Column: Training Lead Info */}
              <div className="space-y-6 fade-in-up">
                <div>
                  <h3 className="font-serif font-semibold text-2xl text-gray-900 mb-2">
                    Training Lead (QL Doctor)
                  </h3>
                  <p className="text-lg text-gray-700">Prof. Dr. Mehmet Veli Karaaltin</p>
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-xl text-gray-900 mb-2">
                    Locations
                  </h3>
                  <p className="text-gray-700">Istanbul & International Training Centers</p>
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-xl text-gray-900 mb-2">
                    Email
                  </h3>
                  <a
                    href="mailto:dwzh10@gmail.com"
                    className="text-lg text-gray-900 hover:text-gray-700 underline transition-colors"
                  >
                    dwzh10@gmail.com
                  </a>
                </div>
              </div>

              {/* Right Column: WhatsApp Button */}
              <div className="flex items-center justify-center fade-in-up" style={{ animationDelay: '0.2s' }}>
                <a
                  href="https://wa.me/31683830166"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group backdrop-blur-md bg-white/60 border border-gray-200/50 rounded-lg px-8 py-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-4"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-12 h-12 fill-[#25D366]"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <div className="text-left">
                    <p className="text-xs uppercase tracking-widest text-gray-600 mb-1">
                      WhatsApp
                    </p>
                    <p className="text-lg font-semibold text-gray-900">
                      +31 683 830 166
                    </p>
                  </div>
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