import beforeAfterImg from "@/assets/before-after-bg.jpg";

const BeforeAfterSection = () => {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {/* Imagen de Fondo */}
      <img
        src={beforeAfterImg}
        alt="Before and After Results - Dr. Karaaltın Plastic Surgery"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Overlay sutil para mejorar contraste */}
      <div className="absolute inset-0 bg-black/10" />
      
      {/* Botón VIEW - Top Left */}
      <button className="absolute top-8 left-8 lg:top-12 lg:left-12 w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full bg-white/90 backdrop-blur-sm border-2 border-gray-200/50 shadow-lg flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-110 hover:bg-white hover:shadow-2xl cursor-pointer group z-20">
        <span className="text-xs md:text-sm lg:text-base uppercase tracking-widest font-light text-gray-800 group-hover:text-gray-900">
          VIEW
        </span>
      </button>
      
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
