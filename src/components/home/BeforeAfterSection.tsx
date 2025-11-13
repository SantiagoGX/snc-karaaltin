import beforeAfterImg from "@/assets/before-after-bg.jpg";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const BeforeAfterSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (section) {
        section.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden cursor-none"
    >
      {/* Imagen de Fondo */}
      <img
        src={beforeAfterImg}
        alt="Before and After Results - Dr. Karaaltın Plastic Surgery"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Overlay sutil para mejorar contraste */}
      <div className="absolute inset-0 bg-black/10" />
      
      {/* Cursor personalizado VIEW que sigue el mouse */}
      <Link 
        to="/gallery" 
        className="fixed w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full bg-white/90 backdrop-blur-sm border-2 border-gray-200/50 shadow-lg flex items-center justify-center transition-all duration-150 ease-out hover:scale-110 hover:bg-white hover:shadow-2xl pointer-events-auto group z-50"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      >
        <span className="text-xs md:text-sm lg:text-base uppercase tracking-widest font-light text-gray-800 group-hover:text-gray-900">
          VIEW
        </span>
      </Link>
      
      {/* Texto Central "BEFORE & AFTERS" */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <h2
          className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-[0.2em] uppercase text-white/90 text-center leading-tight"
          style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.3)' }}
        >
          BEFORE
          <br />
          & AFTERS
        </h2>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
