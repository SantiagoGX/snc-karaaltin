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
        <div className="max-w-lg space-y-6 blur-to-focus">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-white leading-[1.1] drop-shadow-lg tracking-wide my-0 px-0 mx-0 text-left">
            <span className="font-semibold">World-Class</span> Plastic Surgery in Istanbul, <span className="font-semibold">Led by Innovation</span>
          </h1>
          
        </div>
      </div>
    </section>;
};
export default HeroSection;