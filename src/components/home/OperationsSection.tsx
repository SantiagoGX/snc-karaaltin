import { useState } from "react";
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

interface CategoryCardProps {
  category: {
    id: number;
    category: string;
    procedures: string[];
    image: string;
  };
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Imagen de fondo */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={category.image}
          alt={category.category}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay gradient */}
        <div className={`absolute inset-0 transition-all duration-500 ${
          isHovered 
            ? 'bg-gradient-to-t from-black/70 via-black/30 to-transparent'
            : 'bg-gradient-to-t from-black/85 via-black/50 to-black/20'
        }`} />
        
        {/* Título con degradado */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 
            className="text-2xl lg:text-3xl font-bold uppercase tracking-wide text-center leading-tight"
            style={{
              background: 'linear-gradient(135deg, #8B1538 0%, #C44B4F 50%, #E6955A 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            {category.category}
          </h3>
          
          {/* Contador de procedimientos */}
          {category.procedures.length > 0 && (
            <p className="text-white/80 text-sm text-center mt-2 uppercase tracking-wide font-light">
              {category.procedures.length} {category.procedures.length === 1 ? 'Procedure' : 'Procedures'}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const OperationsSection = () => {
  return (
    <section className="pt-8 lg:pt-10 pb-8 lg:pb-10 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Título Principal */}
        <div className="text-center mb-8 lg:mb-12 fade-in">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-light tracking-wide text-gray-900 uppercase">
            Operations & Signature Techniques
          </h2>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 fade-in-up">
          {operationsData.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OperationsSection;
