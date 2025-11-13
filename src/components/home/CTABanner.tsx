import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";

const CTABanner = () => {
  return (
    <section className="pt-8 lg:pt-12 pb-8 lg:pb-12 bg-gradient-to-r from-primary to-gold">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-6 fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white">
            Redefine Your Beauty with Confidence
          </h2>
          <p className="text-lg md:text-xl text-white/90">
            Start your journey with Dr. Karaaltın today
          </p>
          <div className="pt-4">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6"
              asChild
            >
              <NavLink to="/contact">Schedule a Consultation</NavLink>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
