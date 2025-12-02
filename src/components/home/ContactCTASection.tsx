import { useTranslation } from "react-i18next";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const ContactCTASection = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-[#9DA29D] py-16 lg:py-24 px-8 lg:px-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Video Columna Izquierda */}
          <div className="flex justify-center lg:justify-start fade-in">
            <div className="w-full max-w-[400px] aspect-[9/16] max-h-[600px] overflow-hidden rounded-lg shadow-2xl">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/cta-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Contenido CTA Columna Derecha */}
          <div className="text-white space-y-6 reveal-center">
            <h2 className="text-4xl lg:text-5xl font-light tracking-wide uppercase font-serif">
              {t('contactCta.title')}
            </h2>
            
            <p className="text-base lg:text-lg leading-relaxed">
              {t('contactCta.description')}
              <br />
              <br />
              {t('contactCta.callText')}{" "}
              <a
                href="tel:+902123254242"
                className="font-semibold hover:underline transition-all"
              >
                +90 212 325 42 42
              </a>{" "}
              {t('contactCta.orText')}
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-3 text-xs uppercase tracking-widest font-light rounded hover:opacity-80 transition-all duration-300 group"
            >
              {t('contactCta.bookNow')}
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTASection;
