import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import bodyImg from "@/assets/procedures/body-procedure.jpg";
import breastImg from "@/assets/procedures/breast-procedure.jpg";
import noseImg from "@/assets/procedures/nose-procedure.jpg";
import faceImg from "@/assets/procedures/face-procedure.jpg";
import signatureTechImg from "@/assets/procedures/signature-techniques.jpg";

const OperationsSection = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState(1);
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);

  const operationsData = [
    {
      id: 1,
      categoryKey: "operations.theBody",
      procedures: [
        { key: "operations.procedures.tummyTuck" }
      ],
      image: bodyImg,
      link: "/procedures/body"
    },
    {
      id: 2,
      categoryKey: "operations.theBreast",
      procedures: [
        { key: "operations.procedures.breastAugmentationFat" },
        { key: "operations.procedures.breastAugmentationImplant" },
        { key: "operations.procedures.breastReduction" },
        { key: "operations.procedures.breastLift" },
        { key: "operations.procedures.gynecomastia" },
        { key: "operations.procedures.hybridAugmentation" },
        { key: "operations.procedures.implantRemoval" },
        { key: "operations.procedures.invertedNipple" },
        { key: "operations.procedures.nippleAreola" }
      ],
      image: breastImg,
      link: "/procedures/breast"
    },
    {
      id: 3,
      categoryKey: "operations.theNose",
      procedures: [
        { key: "operations.procedures.rhinoplasty" }
      ],
      image: noseImg,
      link: "/procedures/nose"
    },
    {
      id: 4,
      categoryKey: "operations.theFace",
      procedures: [
        { key: "operations.procedures.face" }
      ],
      image: faceImg,
      link: "/procedures/face"
    },
    {
      id: 5,
      categoryKey: "operations.signatureTechniques",
      procedures: [
        { key: "operations.procedures.kglide" },
        { key: "operations.procedures.advancedBBL" },
        { key: "operations.procedures.ribCageMolding" },
        { key: "operations.procedures.endochorFaceLift" },
        { key: "operations.procedures.kEndoscopic" },
        { key: "operations.procedures.kFaceLift" },
        { key: "operations.procedures.smartBRA" },
        { key: "operations.procedures.smartTemplate" },
        { key: "operations.procedures.twirlBra" },
        { key: "operations.procedures.vibrasatPro" }
      ],
      image: signatureTechImg,
      link: "/procedures/face"
    }
  ];

  const toggleCategory = (id: number) => {
    setActiveCategory(id);
    setExpandedCategory(expandedCategory === id ? null : id);
  };

  return (
    <section className="py-8 lg:py-12 bg-white">
      <div className="container mx-auto px-3 md:px-4 lg:px-6">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 items-center justify-center">
          {/* Lista Izquierda - Categorías */}
          <div className="w-full md:w-[35%] lg:w-[38%] space-y-3 float-in flex-shrink-0">
            {operationsData.map((category, index) => (
              <div key={category.id} className="border-b border-gray-200 pb-2.5" style={{ animationDelay: `${index * 0.1}s` }}>
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
                      {t(category.categoryKey)}
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
                          {t(proc.key)}
                        </div>
                      ))}
                      
                      {/* Botón VIEW ALL - Solo visible cuando expandido */}
                      <Link 
                        to={category.link} 
                        className="flex items-center gap-2 text-[10px] lg:text-xs uppercase tracking-widest text-gray-500 hover:text-gray-900 transition-colors mt-3 pt-1.5 group"
                      >
                        {t('operations.viewAll')}
                        <ExternalLink className="w-2.5 h-2.5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  )}
              </div>
            ))}
          </div>

          {/* Galería Derecha - Efecto de Carrusel Estático */}
          <div className="relative w-full md:w-[65%] lg:w-[62%] h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
            <div className="relative w-full h-full flex items-start justify-center pt-0">
              {operationsData.map((category) => {
                const isActive = activeCategory === category.id;
                const isPrev = activeCategory === category.id + 1;
                const isNext = activeCategory === category.id - 1;
                
                // Calcular posición
                let positionClass = "translate-x-0";
                let opacityClass = "opacity-0";
                let scaleClass = "scale-90";
                let zIndexClass = "z-0";
                
                if (isActive) {
                  positionClass = "translate-x-0";
                  opacityClass = "opacity-100";
                  scaleClass = "scale-100";
                  zIndexClass = "z-20";
                } else if (isPrev) {
                  positionClass = "-translate-x-[50%]";
                  opacityClass = "opacity-50";
                  scaleClass = "scale-95";
                  zIndexClass = "z-10";
                } else if (isNext) {
                  positionClass = "translate-x-[50%]";
                  opacityClass = "opacity-50";
                  scaleClass = "scale-95";
                  zIndexClass = "z-10";
                }
                
                return (
                  <div
                    key={category.id}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${positionClass} ${opacityClass} ${scaleClass} ${zIndexClass}`}
                  >
                    {/* Contenedor de Imagen con Aspect Ratio */}
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="relative w-[95%] aspect-[3/4] rounded-xl overflow-hidden shadow-2xl">
                        {/* Imagen de Fondo */}
                        <img
                          src={category.image}
                          alt={t(category.categoryKey)}
                          className="w-full h-full object-cover"
                        />

                        {/* Overlay oscuro sutil */}
                        <div className="absolute inset-0 bg-black/20" />

                        {/* Título Superpuesto con Degradado - Solo en imagen activa */}
                        {isActive && (
                          <div className="absolute inset-0 flex items-center justify-center p-6">
                            <h3
                              className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold uppercase tracking-wide text-center leading-tight"
                              style={{
                                background:
                                  "linear-gradient(135deg, #8B1538 0%, #C44B4F 50%, #E6955A 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                              }}
                            >
                              {t(category.categoryKey)}
                            </h3>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperationsSection;
