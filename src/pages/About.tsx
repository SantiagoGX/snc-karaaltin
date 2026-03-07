import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { TimelineInteractive } from "@/components/about/TimelineInteractive";
import { Link } from "react-router-dom";
import { Award, Heart, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section - Hakimi Style */}
      <section
        className="relative min-h-[70vh] flex items-center pt-20 overflow-hidden"
        style={{
          backgroundColor: "#1e3a5f",
        }}
      >
        <div className="max-w-7xl mx-auto px-8 lg:px-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-8 lg:gap-12 items-center">
            {/* Left Column - Text */}
            <div className="text-white space-y-6 blur-to-focus">
              <p className="text-xs uppercase tracking-[0.3em] text-gold font-light">{t('about.heroSubtitle')}</p>
              <h1
                className="text-5xl lg:text-6xl font-light tracking-wide"
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                }}
              >
                {t('about.heroTitle')}
              </h1>
              <p className="text-lg lg:text-xl font-light leading-relaxed opacity-90">
                {t('about.heroDescription')}
              </p>
              <Link to="/contact"></Link>
            </div>

            {/* Right Column - Image with Shape */}
            <div className="relative flex justify-center items-end lg:justify-center">
              {/* Background Shape - Solid, extends to bottom */}
              <div
                className="absolute w-[280px] lg:w-[350px] rounded-lg bottom-0"
                style={{
                  backgroundColor: "#0d1f3a",
                  height: "calc(100% - 80px)",
                  maxHeight: "450px",
                }}
              ></div>

              {/* Doctor Image */}
              <img
                src="/doctor-main.png"
                alt="Professor Doctor Karaaltin"
                className="relative z-10 w-[300px] h-auto lg:w-[380px] max-h-[500px] object-contain drop-shadow-2xl float-in block"
                style={{
                  animationDelay: "0.2s",
                  display: "block",
                  marginBottom: "-2px",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Biography Section - Hakimi Style Grid Layout */}
      <section className="py-16 lg:py-20 px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* A Global Journey */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-12 fade-in-up">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <h2
                className="text-2xl lg:text-3xl font-light tracking-wide transition-opacity duration-500"
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  color: "#1e3a5f",
                }}
              >
              {t('about.globalJourney')}
            </h2>
          </div>
          <div className="space-y-4">
            <p className="text-base text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('about.globalJourneyText1') }} />
            <p className="text-base text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('about.globalJourneyText2') }} />
            <p className="text-base text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('about.globalJourneyText3') }} />
          </div>
        </div>

          {/* Educator & Leader */}
          <div
            className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-12 fade-in-up"
            style={{
              animationDelay: "0.1s",
            }}
          >
            <div className="lg:sticky lg:top-32 lg:self-start">
              <h2
                className="text-2xl lg:text-3xl font-light tracking-wide transition-opacity duration-500"
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  color: "#1e3a5f",
                }}
              >
              {t('about.educatorLeader')}
            </h2>
          </div>
          <div className="space-y-4">
            <p className="text-base text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('about.educatorLeaderText') }} />
              <img
                alt="Dr. Karaaltin speaking at international conference"
                src="/lovable-uploads/53f0c56b-6d93-40c2-ab6d-6c6fb9d21272.jpg"
                className="w-full max-w-md rounded-lg shadow-md mt-6 object-fill"
              />
            </div>
          </div>

          {/* Innovations */}
          <div
            className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-12 fade-in-up"
            style={{
              animationDelay: "0.2s",
            }}
          >
            <div className="lg:sticky lg:top-32 lg:self-start">
              <h2
                className="text-2xl lg:text-3xl font-light tracking-wide transition-opacity duration-500"
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  color: "#1e3a5f",
                }}
              >
              {t('about.innovations')}
            </h2>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('about.rhinoplasty')}</h3>
              <p className="text-base text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('about.rhinoplastyText') }} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('about.facialRejuvenation')}</h3>
              <p className="text-base text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('about.facialRejuvenationText') }} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('about.regenerativeMedicine')}</h3>
              <p className="text-base text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('about.regenerativeMedicineText') }} />
            </div>
              <img
                alt="Dr. Karaaltin performing surgery"
                className="w-full max-w-sm rounded-lg shadow-md mt-6"
                src="/lovable-uploads/surgery-prof-dr-k.jpg"
              />
            </div>
          </div>

          {/* Global Recognition */}
          <div
            className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-12 fade-in-up"
            style={{
              animationDelay: "0.3s",
            }}
          >
            <div className="lg:sticky lg:top-32 lg:self-start">
              <h2
                className="text-2xl lg:text-3xl font-light tracking-wide transition-opacity duration-500"
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  color: "#1e3a5f",
                }}
              >
              {t('about.globalRecognition')}
            </h2>
          </div>
          <div className="space-y-4">
            <p className="text-base text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('about.globalRecognitionText1') }} />
            <p className="text-base text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('about.globalRecognitionText2') }} />
            <p className="text-base text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('about.globalRecognitionText3') }} />
              <img
                src="/doctor-surgery-team.jpeg"
                alt="Dr. Karaaltin with surgical team"
                className="w-full rounded-lg shadow-md mt-6"
              />
            </div>
          </div>

          {/* Lymphatic Surgery */}
          <div
            className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-12 fade-in-up"
            style={{
              animationDelay: "0.4s",
            }}
          >
            <div className="lg:sticky lg:top-32 lg:self-start">
              <h2
                className="text-2xl lg:text-3xl font-light tracking-wide transition-opacity duration-500"
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  color: "#1e3a5f",
                }}
              >
              {t('about.pushingBoundaries')}
            </h2>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">{t('about.lymphaticSurgery')}</h3>
            <p className="text-base text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('about.lymphaticSurgeryText') }} />
          </div>
        </div>

          {/* Advanced Safe BBL */}
          <div
            className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-12 fade-in-up"
            style={{
              animationDelay: "0.5s",
            }}
          >
            <div className="lg:sticky lg:top-32 lg:self-start">
              <h2
                className="text-2xl lg:text-3xl font-light tracking-wide transition-opacity duration-500"
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  color: "#1e3a5f",
                }}
              >
              {t('about.advocateOfSafety')}
            </h2>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">{t('about.advancedSafeBBL')}</h3>
            <p className="text-base text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('about.advancedSafeBBLText') }} />
          </div>
        </div>

          {/* Awards */}
          <div
            className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-12 fade-in-up"
            style={{
              animationDelay: "0.6s",
            }}
          >
            <div className="lg:sticky lg:top-32 lg:self-start">
              <h2
                className="text-2xl lg:text-3xl font-light tracking-wide transition-opacity duration-500"
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  color: "#1e3a5f",
                }}
              >
              {t('about.awards')}
            </h2>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Award className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
              <p className="text-base text-gray-700" dangerouslySetInnerHTML={{ __html: t('about.award1') }} />
            </div>
            <div className="flex items-start gap-3">
              <Award className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
              <p className="text-base text-gray-700">{t('about.award2')}</p>
            </div>
            <div className="flex items-start gap-3">
              <Award className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
              <p className="text-base text-gray-700">{t('about.award3')}</p>
            </div>
            <div className="flex items-start gap-3">
              <Award className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
              <p className="text-base text-gray-700">{t('about.award4')}</p>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Timeline Section */}
      <TimelineInteractive />

      {/* Meet Our Team Section */}
      <section className="pt-8 lg:pt-12 px-8 lg:px-16 bg-white pb-0">
        <div className="max-w-7xl mx-auto pb-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-3 items-stretch pb-0">
            {/* Doctor Image - Left */}
            <div className="relative pb-0 mb-0 flex items-end">
              <img
                alt="Dr. Karaaltin"
                className="w-3/5 h-full object-contain object-bottom block"
                src="/lovable-uploads/cebf52b8-039c-4864-9a30-7c1ada4fefcc.png"
              />
            </div>

            {/* Content - Right */}
            <div className="space-y-6 pb-8 lg:pb-12 flex flex-col">
          <h2
            className="text-2xl lg:text-3xl font-bold mb-8 tracking-wide"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              color: "#1e3a5f",
            }}
          >
            {t('about.meetOurTeam')}
          </h2>

              <div className="flex items-start gap-6 fade-in-up">
                <div
                  className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300"
                  style={{
                    boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.5)",
                  }}
                >
                  <Users className="w-7 h-7 text-white" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-gray-900">{t('about.patientRepresentatives')}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {t('about.patientRepresentativesDesc')}
                  </p>
                </div>
              </div>

              <div
                className="flex items-start gap-6 fade-in-up"
                style={{
                  animationDelay: "0.1s",
                }}
              >
                <div
                  className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300"
                  style={{
                    boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.5)",
                  }}
                >
                  <Heart className="w-7 h-7 text-white" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-gray-900">{t('about.dedicatedNurses')}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {t('about.dedicatedNursesDesc')}
                  </p>
                </div>
              </div>

              <div
                className="flex items-start gap-6 fade-in-up"
                style={{
                  animationDelay: "0.2s",
                }}
              >
                <div
                  className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300"
                  style={{
                    boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.5)",
                  }}
                >
                  <Award className="w-7 h-7 text-white" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-gray-900">{t('about.medicalCoordinators')}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {t('about.medicalCoordinatorsDesc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-12 px-8 lg:px-16 text-center text-white"
        style={{
          backgroundColor: "#1e3a5f",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl lg:text-4xl font-light mb-4 tracking-wide"
            style={{
              fontFamily: "Cormorant Garamond, serif",
            }}
          >
            {t('about.ctaTitle')}
          </h2>
          <p className="text-lg mb-6 opacity-90">
            {t('about.ctaDescription')}
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              variant="outline"
              className="text-[#1e3a5f] bg-white border-white hover:bg-[#1e3a5f] hover:text-white uppercase tracking-widest text-xs"
            >
              {t('about.bookConsultation')}
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};
export default About;
