import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";
import rhinoplastyImg from "@/assets/procedures/rhinoplasty.png";
import twirlBraImg from "@/assets/procedures/twirl-bra.png";
import vibrasatProImg from "@/assets/procedures/vibrasat-pro.png";
import kGlideImg from "@/assets/procedures/k-glide.png";

const procedures = [
  {
    id: 1,
    titleNormal: "The Smart",
    titleBold: "Template Rhinoplasty",
    description: "Smart templates in rhinoplasty are revolutionising the way surgeons approach this delicate procedure. Focusing on durability, predictability and reliability in late results, these templates play an important role in guiding the post-operative healing process. During the rhinoplasty procedure, these templates help cartilage, bone and soft tissue to heal in the correct direction and manner predefined by the surgeon. This ensures that the desired result is achieved and maintained over time.",
    image: rhinoplastyImg,
  },
  {
    id: 2,
    titleNormal: "The Twirl",
    titleBold: "Internal Bra Technique",
    description: "Breast reduction and lift surgeries are widely in demand to improve breast aesthetics, comfort and self-confidence. However, these procedures often come with challenges such as underbearing, loss of upper pole fullness, and impaired blood flow to the nipple area. This is where the Twirl Internal Bra Technique comes in; a breakthrough surgical procedure designed to directly address these issues.",
    image: twirlBraImg,
  },
  {
    id: 3,
    titleNormal: "The",
    titleBold: "Vibrasat Pro Technology",
    description: "Vibrasat Pro™ and Liposat Pro Plus represent a new era in body contouring, combining advanced vibration-expansion technology with a specialized peristaltic pump for safer, more precise fat removal and grafting. Backed by Dr. Karaaltin's clinical expertise and proven through his \"Sponge Experiment™,\" this system minimizes tissue trauma, reduces pain, and enhances recovery while preserving up to 92% of viable fat cells. Compared to traditional methods like VASER, it offers smoother skin retraction, more predictable results, and higher fat retention—making it the preferred choice for high-definition liposuction and procedures like BBL or breast augmentation.",
    image: vibrasatProImg,
  },
  {
    id: 4,
    titleNormal: "K-Glide™",
    titleBold: "Rapid Breast Augmentation",
    description: "Discover the K-Glide™ Rapid Breast Augmentation—a groundbreaking 30-minute procedure developed by renowned plastic surgeon Professor Dr. Karaaltin. Using specially designed, soft-edged instruments and a motor-assisted gliding technique, K-Glide™ preserves nerves and blood vessels, eliminates the need for drains, and ensures minimal pain with fast recovery. This advanced method delivers natural-looking, long-lasting results with unmatched safety, comfort, and precision—redefining breast augmentation for the modern patient.",
    image: kGlideImg,
  },
];

const SignatureProceduresSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollPrev = () => api?.scrollPrev();
  const scrollNext = () => api?.scrollNext();

  return (
    <section className="pt-8 lg:pt-12 pb-6 lg:pb-8 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-left mb-6 lg:mb-8 fade-in">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-400 font-light">
            Signature Procedures
          </p>
        </div>

        <div className="relative px-16 lg:px-20">
          {/* Navigation Arrows - Positioned at edges */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border-2 border-gray-900 bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all shadow-lg"
            aria-label="Previous procedure"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border-2 border-gray-900 bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all shadow-lg"
            aria-label="Next procedure"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <Carousel 
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {procedures.map((procedure) => (
                <CarouselItem key={procedure.id}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch min-h-[300px] lg:min-h-[360px] xl:min-h-[400px] fade-in-up">
                    {/* Left: Content */}
                    <div className="space-y-3 lg:space-y-4 lg:order-1 flex flex-col justify-center pl-6 lg:pl-10 xl:pl-12 pr-6 lg:pr-8 py-10 lg:py-0">
                      <h3 className="text-xl lg:text-2xl xl:text-3xl font-serif tracking-wide">
                        <span className="font-light">{procedure.titleNormal} </span>
                        <span className="font-semibold">{procedure.titleBold}</span>
                      </h3>
                      <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                        {procedure.description}
                      </p>
                      <div className="flex gap-2 mt-4">
                        <button className="px-4 py-2 border border-gray-900 text-gray-900 text-xs uppercase tracking-wider hover:bg-gray-900 hover:text-white transition-all">
                          Learn More
                        </button>
                        <button className="px-4 py-2 bg-gray-900 text-white text-xs uppercase tracking-wider hover:bg-gray-800 transition-all flex items-center gap-2">
                          Book Now
                        </button>
                      </div>
                      
                      {/* Indicators below text */}
                      <div className="flex gap-2 mt-6">
                        {procedures.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => api?.scrollTo(index)}
                            className={`h-2 rounded-full transition-all ${
                              index === current ? "w-8 bg-gray-900" : "w-2 bg-gray-300"
                            }`}
                            aria-label={`Go to procedure ${index + 1}`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Right: Image - Full height */}
                    <div className="relative lg:order-2 h-[250px] lg:h-auto">
                      <img 
                        src={procedure.image} 
                        alt={`${procedure.titleNormal} ${procedure.titleBold}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default SignatureProceduresSection;
