import { useTranslation } from "react-i18next";
import beforeAfterImg from "@/assets/before-after-bg.jpg";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const BeforeAfterSection = () => {
  const { t, i18n } = useTranslation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
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

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      section.addEventListener('mouseenter', handleMouseEnter);
      section.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (section) {
        section.removeEventListener('mousemove', handleMouseMove);
        section.removeEventListener('mouseenter', handleMouseEnter);
        section.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  // Hide section for Turkish users
  if (i18n.language === 'tr') {
    return null;
  }

  return (
    <section 
      ref={sectionRef}
      className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden md:cursor-none"
    >
      {/* Imagen de Fondo */}
      <img
        src={beforeAfterImg}
        alt="Before and After Results - Dr. Karaaltın Plastic Surgery"
        className="absolute inset-0 w-full h-full object-cover scale-up-luxury"
      />
      
      {/* Overlay sutil para mejorar contraste */}
      <div className="absolute inset-0 bg-black/10" />
      
      {/* Mobile Button - Fixed Bottom Right */}
      <Link 
        to="/gallery"
        className="md:hidden absolute bottom-6 right-6 px-6 py-3 rounded-full bg-white/90 backdrop-blur-md border border-gray-200/50 shadow-lg flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-300 z-50"
      >
        <span className="text-xs uppercase tracking-widest font-light text-gray-800">
          {t('beforeAfter.view')}
        </span>
      </Link>
      
      {/* Desktop Cursor - Follows Mouse */}
      {isHovering && (
        <Link 
          to="/gallery" 
          className="hidden md:flex absolute w-32 h-32 lg:w-36 lg:h-36 rounded-full bg-white/90 backdrop-blur-sm border-2 border-gray-200/50 shadow-lg items-center justify-center transition-all duration-150 ease-out hover:scale-110 hover:bg-white hover:shadow-2xl pointer-events-auto group z-50"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            transform: 'translate(-50%, -50%)'
          }}
        >
          <span className="text-sm lg:text-base uppercase tracking-widest font-light text-gray-800 group-hover:text-gray-900">
            {t('beforeAfter.view')}
          </span>
        </Link>
      )}
      
      {/* Texto Central "BEFORE & AFTERS" */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <h2
          className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-[0.2em] uppercase text-white/90 text-center leading-tight"
          style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.3)' }}
        >
          {t('beforeAfter.title1')}
          <br />
          {t('beforeAfter.title2')}
        </h2>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
