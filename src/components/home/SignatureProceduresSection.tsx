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
        <div className="text-left mb-6 lg:mb-8">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-400 font-light">
            Signature Procedures
          </p>
        </div>

        <div className="relative">
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
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                    {/* Left: Content (inverted layout) */}
                    <div className="space-y-4 lg:space-y-6 lg:order-1 flex flex-col justify-center pl-4 lg:pl-8 xl:pl-12 pr-4 lg:pr-6">
                      <h3 className="text-2xl lg:text-3xl xl:text-4xl font-serif tracking-wide">
                        <span className="font-light">{procedure.titleNormal} </span>
                        <span className="font-semibold">{procedure.titleBold}</span>
                      </h3>
                      <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                        {procedure.description}
                      </p>
                      <div className="flex gap-3 mt-6">
                        <button className="px-5 py-2.5 border border-gray-900 text-gray-900 text-xs uppercase tracking-wider hover:bg-gray-900 hover:text-white transition-all">
                          Learn More
                        </button>
                        <button className="px-5 py-2.5 bg-gray-900 text-white text-xs uppercase tracking-wider hover:bg-gray-800 transition-all flex items-center gap-2">
                          View Procedure
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Right: Image */}
                    <div className="relative lg:order-2 h-[500px] lg:h-[600px] xl:h-[650px]">
                      <img 
                        src={procedure.image} 
                        alt={`${procedure.titleNormal} ${procedure.titleBold}`}
                        className="w-full h-full object-cover rounded-none shadow-2xl"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Desktop Navigation Arrows */}
          <div className="hidden lg:flex justify-center gap-4 mt-8 lg:mt-10">
            <button
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full border-2 border-gray-900 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all"
              aria-label="Previous procedure"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={scrollNext}
              className="w-12 h-12 rounded-full border-2 border-gray-900 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all"
              aria-label="Next procedure"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6">
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
      </div>
    </section>
  );
};

export default SignatureProceduresSection;
