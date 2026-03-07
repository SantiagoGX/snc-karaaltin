import { useTranslation } from "react-i18next";
import teamSurgeryImg from "@/assets/differentiators/team-surgery.jpg";
import modernEquipmentImg from "@/assets/differentiators/modern-equipment.jpg";
import surgeonExpertiseImg from "@/assets/differentiators/surgeon-expertise.jpg";
import patientCareImg from "@/assets/differentiators/patient-care.jpg";

const DifferentiatorsSection = () => {
  const { t } = useTranslation();

  const differentiators = [
    {
      titleKey: "differentiators.qualifiedDoctors.title",
      descriptionKey: "differentiators.qualifiedDoctors.description",
      image: teamSurgeryImg,
    },
    {
      titleKey: "differentiators.modernEquipment.title",
      descriptionKey: "differentiators.modernEquipment.description",
      image: modernEquipmentImg,
    },
    {
      titleKey: "differentiators.individualApproach.title",
      descriptionKey: "differentiators.individualApproach.description",
      image: surgeonExpertiseImg,
    },
    {
      titleKey: "differentiators.patientCare.title",
      descriptionKey: "differentiators.patientCare.description",
      image: patientCareImg,
    },
  ];

  return (
    <section className="pt-8 lg:pt-12 pb-8 lg:pb-12 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-8 lg:mb-10 float-in">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-light uppercase tracking-wide">
            {t('differentiators.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {differentiators.map((item, index) => (
            <div
              key={index}
              className="relative h-[400px] lg:h-[450px] overflow-hidden group cursor-pointer scale-up-luxury hover-shine"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Imagen de fondo */}
              <img 
                src={item.image}
                alt={t(item.titleKey)}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Overlay gradient oscuro que se aclara en hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20 group-hover:from-black/70 group-hover:via-black/30 group-hover:to-transparent transition-all duration-500" />
              
              {/* Contenido de texto en la parte inferior */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 text-white z-10 text-left">
                <h3 className="text-xl lg:text-2xl font-serif font-semibold mb-3 tracking-wide text-left">
                  {t(item.titleKey)}
                </h3>
                <p className="text-sm lg:text-base text-white/90 leading-relaxed text-left">
                  {t(item.descriptionKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorsSection;
