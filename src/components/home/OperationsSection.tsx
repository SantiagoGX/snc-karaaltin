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
    <section className="pt-12 lg:pt-16 pb-12 lg:pb-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Título Principal */}
        <div className="text-left mb-10 lg:mb-16 fade-in">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide text-gray-900 uppercase">
            Operations & Signature Techniques
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-8 lg:gap-12">
          {/* Lista Izquierda - Categorías */}
          <div className="space-y-6 fade-in-up">
            {operationsData.map((category) => (
              <div key={category.id} className="border-b border-gray-200 pb-4">
                {/* Categoría Principal */}
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full text-left group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3
                      className={`text-lg lg:text-xl font-light tracking-wide uppercase transition-colors ${
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
                    <div className="mt-3 ml-4 space-y-2 animate-fade-in">
                      {category.procedures.map((proc, idx) => (
                        <div
                          key={idx}
                          className="text-sm lg:text-base text-gray-600 hover:text-gray-900 transition-colors cursor-pointer uppercase tracking-wide font-light"
                        >
                          {proc}
                        </div>
                      ))}
                    </div>
                  )}

                {/* Botón VIEW ALL */}
                <button className="flex items-center gap-2 text-xs lg:text-sm uppercase tracking-widest text-gray-500 hover:text-gray-900 transition-colors mt-3 group">
                  VIEW ALL
                  <ExternalLink className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            ))}
          </div>

          {/* Imagen Derecha - Con Título Superpuesto */}
          <div className="relative h-[500px] lg:h-[700px] overflow-hidden rounded-lg shadow-2xl">
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
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <h3
                    className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase tracking-wide text-center leading-tight"
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
