import { useState } from "react";
import { ExternalLink } from "lucide-react";
import bodyImg from "@/assets/procedures/body-procedure.jpg";
import breastImg from "@/assets/procedures/breast-procedure.jpg";
import noseImg from "@/assets/procedures/nose-procedure.jpg";
import faceImg from "@/assets/procedures/face-procedure.jpg";
import futureFaceImg from "@/assets/procedures/future-face.jpg";
import signatureTechImg from "@/assets/procedures/signature-techniques.jpg";

const operationsData = [
  {
    id: 1,
    category: "The Body",
    procedures: ["Tummy Tuck"],
    image: bodyImg
  },
  {
    id: 2,
    category: "The Breast",
    procedures: [
      "Breast Augmentation with Fat Grafting",
      "Breast Augmentation with Implant",
      "Breast Reduction",
      "Breast Up Lift (Mastopexy)",
      "Gynecomastia",
      "Hybrid Augmentation (Implant plus Fat)",
      "Implant Removal",
      "Inverted Nipple",
      "Nipple and Areola Reduction"
    ],
    image: breastImg
  },
  {
    id: 3,
    category: "The Nose",
    procedures: ["Rhinoplasty"],
    image: noseImg
  },
  {
    id: 4,
    category: "The Face",
    procedures: ["Face"],
    image: faceImg
  },
  {
    id: 5,
    category: "The Future of Face",
    procedures: [],
    image: futureFaceImg
  },
  {
    id: 6,
    category: "Signature Techniques",
    procedures: [
      "K-Glide™ Rapid Breast Augmentation",
      "Advanced Safe BBL",
      "Rib Cage Molding with Piezo Technology",
      "The Endochor Face Lift",
      "The K Endoscopic Deep Plane Face Lift",
      "The K Face Lift",
      "THE Smart BRA in Breast Surgery",
      "The Smart Template Rhinoplasty",
      "The Twirl Internal Bra Technique for Breast Surgery",
      "The Vibrasat Pro Technology"
    ],
    image: signatureTechImg
  }
];

const OperationsSection = () => {
  const [activeCategory, setActiveCategory] = useState(1);
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);

  const toggleCategory = (id: number) => {
    setActiveCategory(id);
    setExpandedCategory(expandedCategory === id ? null : id);
  };

  return (
    <section className="pt-6 lg:pt-8 pb-6 lg:pb-8 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Título Principal */}
        <div className="text-left mb-4 lg:mb-6 fade-in">
          <h2 className="text-lg md:text-xl lg:text-2xl font-light tracking-wide text-gray-900 uppercase">
            Operations & Signature Techniques
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-6 lg:gap-8">
          {/* Lista Izquierda - Categorías */}
          <div className="space-y-3 fade-in-up">
            {operationsData.map((category) => (
              <div key={category.id} className="border-b border-gray-200 pb-2.5">
                {/* Categoría Principal */}
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full text-left group"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <h3
                      className={`text-sm lg:text-base font-light tracking-wide uppercase transition-colors ${
                        activeCategory === category.id
                          ? "text-gray-900"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      {category.category}
                    </h3>
                  </div>
                </button>

                {/* Subcategorías (Procedimientos) - Expandibles */}
                {expandedCategory === category.id &&
                  category.procedures.length > 0 && (
                    <div className="mt-1.5 ml-2 space-y-1 animate-fade-in">
                      {category.procedures.map((proc, idx) => (
                        <div
                          key={idx}
                          className="text-[11px] lg:text-xs text-gray-600 hover:text-gray-900 transition-colors cursor-pointer uppercase tracking-wide font-light"
                        >
                          {proc}
                        </div>
                      ))}
                      
                      {/* Botón VIEW ALL - Solo visible cuando expandido */}
                      <button className="flex items-center gap-2 text-[10px] lg:text-xs uppercase tracking-widest text-gray-500 hover:text-gray-900 transition-colors mt-3 pt-1.5 group">
                        VIEW ALL
                        <ExternalLink className="w-2.5 h-2.5 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  )}
              </div>
            ))}
          </div>

          {/* Imagen Derecha - Con Título Superpuesto */}
          <div className="relative h-[300px] lg:h-[380px] overflow-hidden rounded-lg shadow-2xl">
            {operationsData.map((category) => (
              <div
                key={category.id}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  activeCategory === category.id
                    ? "opacity-100 z-20 scale-100"
                    : "opacity-0 z-10 scale-95"
                }`}
              >
                {/* Imagen de Fondo */}
                <img
                  src={category.image}
                  alt={category.category}
                  className="w-full h-full object-cover"
                />

                {/* Overlay oscuro sutil */}
                <div className="absolute inset-0 bg-black/20" />

                {/* Título Superpuesto con Degradado */}
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <h3
                    className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold uppercase tracking-wide text-center leading-tight"
                    style={{
                      background:
                        "linear-gradient(135deg, #8B1538 0%, #C44B4F 50%, #E6955A 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {category.category}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperationsSection;
