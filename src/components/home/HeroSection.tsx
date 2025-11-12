import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Premium plastic surgery excellence"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-6 fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white leading-tight">
            World-Class Plastic Surgery in Istanbul, Led by Innovation
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
            Over 30 years of experience, breakthrough surgical techniques, and
            personalized care from Professor Dr. Karaaltın – trusted by patients
            worldwide.
          </p>
          <div className="pt-8">
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-gold hover:bg-gold-dark transition-colors"
              asChild
            >
              <NavLink to="/contact">Book Your Consultation</NavLink>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
