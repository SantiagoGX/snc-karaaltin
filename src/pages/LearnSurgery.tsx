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
import { useTranslation } from "react-i18next";

const LearnSurgery = () => {
  const { t } = useTranslation();
  const [expandedModule, setExpandedModule] = useState<string | null>(null);

  const toggleModule = (moduleId: string) => {
    setExpandedModule(expandedModule === moduleId ? null : moduleId);
  };

  const trainingModules = [
    {
      id: "forehead-lift",
      titleKey: "learnSurgery.modules.foreheadLift.title",
      badgeKey: "learnSurgery.modules.foreheadLift.badge",
      pointsKey: "learnSurgery.modules.foreheadLift.points"
    },
    {
      id: "mid-face-lift",
      titleKey: "learnSurgery.modules.midFaceLift.title",
      badgeKey: "learnSurgery.modules.midFaceLift.badge",
      pointsKey: "learnSurgery.modules.midFaceLift.points"
    },
    {
      id: "ribbon-neck",
      titleKey: "learnSurgery.modules.ribbonNeck.title",
      badgeKey: "learnSurgery.modules.ribbonNeck.badge",
      pointsKey: "learnSurgery.modules.ribbonNeck.points"
    },
    {
      id: "transblepharoplasty",
      titleKey: "learnSurgery.modules.transblepharoplasty.title",
      badgeKey: "learnSurgery.modules.transblepharoplasty.badge",
      pointsKey: "learnSurgery.modules.transblepharoplasty.points"
    },
    {
      id: "double-double",
      titleKey: "learnSurgery.modules.doubleDouble.title",
      badgeKey: "learnSurgery.modules.doubleDouble.badge",
      pointsKey: "learnSurgery.modules.doubleDouble.points"
    },
    {
      id: "integration",
      titleKey: "learnSurgery.modules.integration.title",
      badgeKey: "learnSurgery.modules.integration.badge",
      pointsKey: "learnSurgery.modules.integration.points"
    }
  ];

  const qlDoctorCards = [
    {
      titleKey: "learnSurgery.qlDoctorCards.clinicalLeadership.title",
      icon: "👨‍⚕️",
      pointsKey: "learnSurgery.qlDoctorCards.clinicalLeadership.points"
    },
    {
      titleKey: "learnSurgery.qlDoctorCards.techniqueStandardization.title",
      icon: "📋",
      pointsKey: "learnSurgery.qlDoctorCards.techniqueStandardization.points"
    },
    {
      titleKey: "learnSurgery.qlDoctorCards.outcomeTracking.title",
      icon: "📊",
      pointsKey: "learnSurgery.qlDoctorCards.outcomeTracking.points"
    },
    {
      titleKey: "learnSurgery.qlDoctorCards.educationProctorship.title",
      icon: "🎓",
      pointsKey: "learnSurgery.qlDoctorCards.educationProctorship.points"
    }
  ];

  const learningObjectives = [
    { icon: "🎯", textKey: "learnSurgery.learningObjectives.patientSelection" },
    { icon: "🔬", textKey: "learnSurgery.learningObjectives.safeDissection" },
    { icon: "⚙️", textKey: "learnSurgery.learningObjectives.reliableFixation" },
    { icon: "🛡️", textKey: "learnSurgery.learningObjectives.complicationPrevention" },
    { icon: "📅", textKey: "learnSurgery.learningObjectives.structuredFollowUp" }
  ];

  const whyEndochorBenefits = [
    { icon: "🧬", textKey: "learnSurgery.whyEndochor.biodegradable" },
    { icon: "🎯", textKey: "learnSurgery.whyEndochor.multiVector" },
    { icon: "🧠", textKey: "learnSurgery.whyEndochor.anatomyRespectful" },
    { icon: "✨", textKey: "learnSurgery.whyEndochor.hiddenIncision" }
  ];

  const courseFormats = [
    { titleKey: "learnSurgery.courseFormats.essentials.title", durationKey: "learnSurgery.courseFormats.essentials.duration", descriptionKey: "learnSurgery.courseFormats.essentials.description" },
    { titleKey: "learnSurgery.courseFormats.coreSkills.title", durationKey: "learnSurgery.courseFormats.coreSkills.duration", descriptionKey: "learnSurgery.courseFormats.coreSkills.description" },
    { titleKey: "learnSurgery.courseFormats.masterclass.title", durationKey: "learnSurgery.courseFormats.masterclass.duration", descriptionKey: "learnSurgery.courseFormats.masterclass.description" },
    { titleKey: "learnSurgery.courseFormats.proctorship.title", durationKey: "learnSurgery.courseFormats.proctorship.duration", descriptionKey: "learnSurgery.courseFormats.proctorship.description" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* 1. HERO SECTION - HORIZONTAL BANNER WITH PURE BLUE BACKGROUND */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-[#0d1f3a] pt-28 lg:pt-32">
          {/* Content */}
          <div className="relative z-10 container mx-auto px-8 grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 items-center">
            {/* Left: Title + Subtitle + CTA */}
            <div className="space-y-6 blur-to-focus">
              <h1 className="font-serif font-light text-4xl md:text-5xl lg:text-6xl tracking-wide text-white leading-tight">
                {t('learnSurgery.heroTitle')}
              </h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
                {t('learnSurgery.heroDescription')}
              </p>
              <button
                onClick={() => document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 bg-white text-[#0d1f3a] px-8 py-3 text-xs uppercase tracking-widest font-semibold rounded hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-lg"
              >
                {t('learnSurgery.applyForTraining')}
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right: Vertical Media Placeholder - Editable */}
            <div className="relative w-full max-w-[450px] mx-auto lg:mx-0 rounded-lg shadow-2xl scale-up-luxury">
              <img
                src="/endochor-academy-hero.png"
                alt="Endochor Academy Training"
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* 2. INTRODUCTION - WHITE BACKGROUND */}
        <section className="py-16 md:py-24 px-8 bg-white">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-8">
              <h2 className="font-serif font-light text-3xl md:text-4xl lg:text-5xl tracking-wide mb-4 fade-in">
                {t('learnSurgery.whatIsTitle')}
              </h2>
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#0d1f3a] to-transparent mx-auto" />
            </div>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed text-center fade-in-up" style={{ animationDelay: '0.2s' }}>
              {t('learnSurgery.whatIsDescription')}
            </p>
          </div>
        </section>

        {/* BANNER SECTION - SURGICAL FACELIFT */}
        <section className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden fade-in">
          <img
            src="/endochor-academy-banner.png"
            alt="Learn Surgical Facelift - Endochor Academy"
            className="w-full h-full object-cover"
          />
        </section>

        {/* 3. ABOUT PROF. DR. K AS QL DOCTOR - LIGHT GREY */}
        <section className="py-16 md:py-24 px-8 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="font-serif font-light text-3xl md:text-4xl lg:text-5xl tracking-wide mb-12 text-center fade-in">
              {t('learnSurgery.qlDoctorTitle')}
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
                    {t(card.titleKey)}
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    {(t(card.pointsKey, { returnObjects: true }) as string[]).map((point: string, i: number) => (
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
              {t('learnSurgery.whyEndochorTitle')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyEndochorBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="backdrop-blur-md bg-white/10 border border-white/20 rounded-lg p-6 shadow-lg text-center hover:bg-white/15 hover:border-white/30 hover:scale-105 transition-all duration-300 fade-in-up group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{benefit.icon}</div>
                  <p className="text-white/90 text-sm leading-relaxed">{t(benefit.textKey)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. TRAINING MODULES - WHITE BACKGROUND, 2-COLUMN GRID */}
        <section className="py-16 md:py-24 px-8 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="font-serif font-light text-3xl md:text-4xl lg:text-5xl tracking-wide mb-12 text-center fade-in">
              {t('learnSurgery.trainingModulesTitle')}
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
                      {t(module.badgeKey)}
                    </div>
                    <button
                      onClick={() => toggleModule(module.id)}
                      className="w-full text-left group"
                    >
                      <h3 className="font-serif font-semibold text-xl text-gray-900 mb-3 group-hover:text-[#0d1f3a] transition-colors">
                        {t(module.titleKey)}
                      </h3>
                    </button>
                    {expandedModule === module.id && (
                      <ul className="space-y-2 mt-4 pt-4 border-t border-gray-200 animate-fade-in">
                        {(t(module.pointsKey, { returnObjects: true }) as string[]).map((point: string, i: number) => (
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
                      {expandedModule === module.id ? t('learnSurgery.hideDetails') : t('learnSurgery.viewDetails')}
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
              {t('learnSurgery.learningObjectivesTitle')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {learningObjectives.map((objective, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 backdrop-blur-md bg-white/80 border border-gray-200/50 rounded-lg p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-3xl flex-shrink-0">{objective.icon}</div>
                  <p className="text-gray-700 text-sm leading-relaxed">{t(objective.textKey)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. COURSE FORMATS - SOFT BLUE-TINTED BACKGROUND */}
        <section className="py-16 md:py-24 px-8 bg-blue-50/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="font-serif font-light text-3xl md:text-4xl lg:text-5xl tracking-wide mb-12 text-center fade-in">
              {t('learnSurgery.courseFormatsTitle')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {courseFormats.map((format, index) => (
                <div
                  key={index}
                  className="backdrop-blur-md bg-white/90 border-2 border-gray-200 rounded-lg p-6 shadow-lg text-center hover:border-[#0d1f3a] hover:shadow-xl hover:scale-105 transition-all duration-300 fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-4">
                    <h3 className="font-serif font-semibold text-xl text-gray-900 mb-2">
                      {t(format.titleKey)}
                    </h3>
                    <div className="text-sm font-semibold text-[#0d1f3a] uppercase tracking-widest">
                      {t(format.durationKey)}
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{t(format.descriptionKey)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. HANDS-ON TRAINING PROGRAM (PRICING) - WHITE BACKGROUND */}
        <section className="py-16 md:py-24 px-8 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="font-serif font-light text-3xl md:text-4xl lg:text-5xl tracking-wide mb-12 text-center fade-in">
              {t('learnSurgery.pricingTitle')}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Individual Signature Procedures */}
              <div className="backdrop-blur-md bg-gray-50 border-2 border-gray-200 rounded-lg p-8 shadow-xl hover:border-[#0d1f3a] hover:shadow-2xl transition-all duration-300 fade-in-up">
                <h3 className="font-serif font-semibold text-2xl text-gray-900 mb-2 text-center">
                  {t('learnSurgery.individualProcedures')}
                </h3>
                <p className="text-sm text-gray-600 text-center mb-6 uppercase tracking-wider">{t('learnSurgery.handsOnSurgery')}</p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-4 border-b-2 border-gray-200">
                    <span className="text-gray-700 font-medium">{t('learnSurgery.surgery1')}</span>
                    <span className="font-bold text-2xl text-[#0d1f3a]">€15,000</span>
                  </div>
                  <div className="flex justify-between items-center py-4 border-b-2 border-gray-200">
                    <span className="text-gray-700 font-medium">{t('learnSurgery.surgery2')}</span>
                    <span className="font-bold text-2xl text-[#0d1f3a]">€20,000</span>
                  </div>
                  <div className="flex justify-between items-center py-4">
                    <span className="text-gray-700 font-medium">{t('learnSurgery.surgery3')}</span>
                    <span className="font-bold text-2xl text-[#0d1f3a]">€30,000</span>
                  </div>
                </div>
              </div>

              {/* Extended Hands-On Fellowship */}
              <div className="backdrop-blur-md bg-gray-50 border-2 border-gray-200 rounded-lg p-8 shadow-xl hover:border-[#0d1f3a] hover:shadow-2xl transition-all duration-300 fade-in-up" style={{ animationDelay: '0.1s' }}>
                <h3 className="font-serif font-semibold text-2xl text-gray-900 mb-2 text-center">
                  {t('learnSurgery.extendedFellowship')}
                </h3>
                <p className="text-sm text-gray-600 text-center mb-6 uppercase tracking-wider">{t('learnSurgery.immersiveTraining')}</p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-4 border-b-2 border-gray-200">
                    <span className="text-gray-700 font-medium">{t('learnSurgery.month1')}</span>
                    <span className="font-bold text-2xl text-[#0d1f3a]">€30,000</span>
                  </div>
                  <div className="flex justify-between items-center py-4 border-b-2 border-gray-200">
                    <span className="text-gray-700 font-medium">{t('learnSurgery.months3')}</span>
                    <span className="font-bold text-2xl text-[#0d1f3a]">€40,000</span>
                  </div>
                  <div className="flex justify-between items-center py-4">
                    <span className="text-gray-700 font-medium">{t('learnSurgery.months6')}</span>
                    <span className="font-bold text-2xl text-[#0d1f3a]">€50,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. SAMPLE 2-DAY AGENDA - LIGHT GREY, GRID LAYOUT */}
        <section className="py-16 md:py-24 px-6 md:px-8 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="font-serif font-light text-3xl md:text-4xl lg:text-5xl tracking-wide mb-10 md:mb-12 text-center fade-in">
              {t('learnSurgery.sampleAgendaTitle')}
            </h2>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {/* Day 1 */}
              <div className="backdrop-blur-md bg-white/90 border-l-4 border-[#0d1f3a] rounded-lg p-5 md:p-8 shadow-lg fade-in-up">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#0d1f3a] text-white rounded-full flex items-center justify-center font-bold text-base md:text-lg shrink-0">
                    1
                  </div>
                  <h3 className="font-serif font-semibold text-xl md:text-2xl text-gray-900">{t('learnSurgery.day1')}</h3>
                </div>
                <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                  {(t('learnSurgery.day1Items', { returnObjects: true }) as string[]).map((item: string, i: number) => (
                    <li key={i} className="flex gap-2"><span className="text-[#0d1f3a]">•</span>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Day 2 */}
              <div className="backdrop-blur-md bg-white/90 border-l-4 border-[#0d1f3a] rounded-lg p-5 md:p-8 shadow-lg fade-in-up" style={{ animationDelay: '0.1s' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#0d1f3a] text-white rounded-full flex items-center justify-center font-bold text-base md:text-lg shrink-0">
                    2
                  </div>
                  <h3 className="font-serif font-semibold text-xl md:text-2xl text-gray-900">{t('learnSurgery.day2')}</h3>
                </div>
                <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                  {(t('learnSurgery.day2Items', { returnObjects: true }) as string[]).map((item: string, i: number) => (
                    <li key={i} className="flex gap-2"><span className="text-[#0d1f3a]">•</span>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 10. FAQ SECTION - WHITE BACKGROUND */}
        <section className="py-16 md:py-24 px-8 bg-white">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-serif font-light text-3xl md:text-4xl lg:text-5xl tracking-wide mb-12 text-center fade-in">
              {t('learnSurgery.faqTitle')}
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="faq-1" className="backdrop-blur-md bg-gray-50 border border-gray-200 rounded-lg overflow-hidden shadow-lg">
                <AccordionTrigger className="px-6 py-5 text-left hover:bg-white/80 transition-colors [&[data-state=open]>svg]:rotate-180">
                  <h3 className="font-serif font-semibold text-lg text-gray-900">
                    {t('learnSurgery.faq.endoscopicExperience.question')}
                  </h3>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    {t('learnSurgery.faq.endoscopicExperience.answer')}
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-2" className="backdrop-blur-md bg-gray-50 border border-gray-200 rounded-lg overflow-hidden shadow-lg">
                <AccordionTrigger className="px-6 py-5 text-left hover:bg-white/80 transition-colors [&[data-state=open]>svg]:rotate-180">
                  <h3 className="font-serif font-semibold text-lg text-gray-900">
                    {t('learnSurgery.faq.implantsProvided.question')}
                  </h3>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    {t('learnSurgery.faq.implantsProvided.answer')}
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-3" className="backdrop-blur-md bg-gray-50 border border-gray-200 rounded-lg overflow-hidden shadow-lg">
                <AccordionTrigger className="px-6 py-5 text-left hover:bg-white/80 transition-colors [&[data-state=open]>svg]:rotate-180">
                  <h3 className="font-serif font-semibold text-lg text-gray-900">
                    {t('learnSurgery.faq.bringCases.question')}
                  </h3>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    {t('learnSurgery.faq.bringCases.answer')}
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-4" className="backdrop-blur-md bg-gray-50 border border-gray-200 rounded-lg overflow-hidden shadow-lg">
                <AccordionTrigger className="px-6 py-5 text-left hover:bg-white/80 transition-colors [&[data-state=open]>svg]:rotate-180">
                  <h3 className="font-serif font-semibold text-lg text-gray-900">
                    {t('learnSurgery.faq.postCourseSupport.question')}
                  </h3>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    {t('learnSurgery.faq.postCourseSupport.answer')}
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-5" className="backdrop-blur-md bg-gray-50 border border-gray-200 rounded-lg overflow-hidden shadow-lg">
                <AccordionTrigger className="px-6 py-5 text-left hover:bg-white/80 transition-colors [&[data-state=open]>svg]:rotate-180">
                  <h3 className="font-serif font-semibold text-lg text-gray-900">
                    {t('learnSurgery.faq.cmeCredits.question')}
                  </h3>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    {t('learnSurgery.faq.cmeCredits.answer')}
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-6" className="backdrop-blur-md bg-gray-50 border border-gray-200 rounded-lg overflow-hidden shadow-lg">
                <AccordionTrigger className="px-6 py-5 text-left hover:bg-white/80 transition-colors [&[data-state=open]>svg]:rotate-180">
                  <h3 className="font-serif font-semibold text-lg text-gray-900">
                    {t('learnSurgery.faq.fellowshipIncludes.question')}
                  </h3>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    {t('learnSurgery.faq.fellowshipIncludes.answer')}
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
                {t('learnSurgery.applicationTitle')}
              </h2>
              <p className="text-lg text-white/90 max-w-3xl mx-auto fade-in-up" style={{ animationDelay: '0.1s' }}>
                {t('learnSurgery.applicationDescription')}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left: Training Lead Info */}
              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-lg p-8 shadow-xl fade-in-up" style={{ animationDelay: '0.2s' }}>
                <h3 className="font-serif font-semibold text-2xl text-white mb-6">{t('learnSurgery.trainingLead')}</h3>
                <div className="space-y-4 text-white/90">
                  <div>
                    <p className="font-semibold text-lg text-white mb-1">Prof. Dr. Mehmet Veli Karaaltin</p>
                    <p className="text-sm">Official QL Doctor for Endochor® Implants</p>
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">{t('learnSurgery.locations')}:</p>
                    <p className="text-sm">{t('learnSurgery.locationsValue')}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-2">{t('learnSurgery.email')}:</p>
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
                  {t('learnSurgery.connectInstantly')}
                </h3>
                <p className="text-white/90 text-center mb-6">
                  {t('learnSurgery.whatsappDescription')}
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