import { useTranslation } from "react-i18next";
import doctorImage from "@/assets/dr-karaaltin-portrait.jpg";

const AboutDoctorSection = () => {
  const { t } = useTranslation();
  
  return (
    <section className="pt-8 lg:pt-12 pb-6 lg:pb-8 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Image */}
          <div className="relative slide-in-left">
            <img 
              src={doctorImage} 
              alt="Dr. Mehmet Veli Karaaltín - Renowned Plastic Surgeon" 
              className="w-full h-auto object-cover rounded-lg shadow-xl"
              loading="lazy"
            />
          </div>

          {/* Right: Content */}
          <div className="space-y-4 slide-in-right" style={{ animationDelay: "0.2s" }}>
            <div>
              <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
                {t('aboutDoctor.welcome')}
              </p>
              <h2 className="text-4xl lg:text-5xl font-serif font-light tracking-wide mb-4">
                {t('aboutDoctor.title')}
              </h2>
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              {t('aboutDoctor.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDoctorSection;
