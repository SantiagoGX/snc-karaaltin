import teamSurgeryImg from "@/assets/differentiators/team-surgery.jpg";
import modernEquipmentImg from "@/assets/differentiators/modern-equipment.jpg";
import surgeonExpertiseImg from "@/assets/differentiators/surgeon-expertise.jpg";
import patientCareImg from "@/assets/differentiators/patient-care.jpg";

const differentiators = [
  {
    title: "Qualified Doctors",
    description: "Our team consists of the best medical professionals representing almost every medical specialty to provide you and your family with the highest level of care.",
    image: teamSurgeryImg,
  },
  {
    title: "Modern Equipment",
    description: "We use the latest equipment and technology to raise the level of our medical solutions and guarantee our customers the best experience.",
    image: modernEquipmentImg,
  },
  {
    title: "Individual Approach",
    description: "Thanks to the individual approach we apply at the Dr. Karaaltın Clinic, our patients receive a better medical service designed to suit their personal health needs and budget.",
    image: surgeonExpertiseImg,
  },
  {
    title: "Patient-Centered Care",
    description: "Our medical staff is always on hand to provide you with personalized medical advice designed to suit your individual health needs.",
    image: patientCareImg,
  },
];

const DifferentiatorsSection = () => {
  return (
    <section className="pt-8 lg:pt-12 pb-8 lg:pb-12 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-8 lg:mb-10 float-in">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-light uppercase tracking-wide">
            Why Choose Dr. Karaaltın?
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
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Overlay gradient oscuro que se aclara en hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20 group-hover:from-black/70 group-hover:via-black/30 group-hover:to-transparent transition-all duration-500" />
              
              {/* Contenido de texto en la parte inferior */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 text-white z-10">
                <h3 className="text-xl lg:text-2xl font-serif font-semibold mb-3 tracking-wide">
                  {item.title}
                </h3>
                <p className="text-sm lg:text-base text-white/90 leading-relaxed">
                  {item.description}
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
