import { useTranslation } from "react-i18next";
import lastCertificate from "@/assets/certificates/last-certificate.png";
import prsBestPaper from "@/assets/certificates/prs-best-paper.png";
import asps from "@/assets/certificates/asps.png";
import realself from "@/assets/certificates/realself.png";
import issca from "@/assets/certificates/issca.png";
import isaps from "@/assets/certificates/isaps.png";

const certificates = [
  { id: 1, name: "Professional Certificate", image: lastCertificate },
  { id: 2, name: "PRS Best Paper Award", image: prsBestPaper },
  { id: 3, name: "American Society of Plastic Surgeons", image: asps },
  { id: 4, name: "RealSelf Top Doctor", image: realself },
  { id: 5, name: "International Society of Aesthetic Plastic Surgery", image: issca },
  { id: 6, name: "ISAPS Member", image: isaps },
];

const CertificatesSection = () => {
  const { t } = useTranslation();

  return (
    <section className="pt-6 lg:pt-8 pb-12 lg:pb-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12 fade-in">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-light">
            {t('certificates.title')}
          </p>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12 items-center justify-items-center">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="w-full h-24 flex items-center justify-center group scale-up-luxury hover-glow"
              style={{ animationDelay: `${(cert.id - 1) * 0.1}s` }}
            >
              <img
                src={cert.image}
                alt={cert.name}
                className="max-h-full w-auto object-contain 
                          md:grayscale md:hover:grayscale-0 
                          transition-all duration-300 ease-in-out
                          opacity-70 hover:opacity-100"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
