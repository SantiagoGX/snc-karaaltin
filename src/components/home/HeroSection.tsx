import heroImage from "@/assets/hero-bg.jpg";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-24 md:pt-32">
        <div className="max-w-xl space-y-6 fade-in-up">
          <h1 className="text-5xl md:text-6xl xl:text-8xl font-serif font-light text-white leading-[1.1] drop-shadow-lg tracking-wide my-0 px-0 mx-0 lg:text-7xl text-left">
            <span className="font-semibold">World-Class</span> Plastic Surgery in Istanbul, <span className="font-semibold">Led by Innovation</span>
          </h1>
          
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>;
};
export default HeroSection;