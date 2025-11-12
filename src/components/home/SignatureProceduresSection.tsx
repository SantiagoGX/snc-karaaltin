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
    title: "The SMART TEMPLATE RHINOPLASTY",
    description: "Smart templates in rhinoplasty are revolutionising the way surgeons approach this delicate procedure. Focusing on durability, predictability and reliability in late results, these templates play an important role in guiding the post-operative healing process. During the rhinoplasty procedure, these templates help cartilage, bone and soft tissue to heal in the correct direction and manner predefined by the surgeon. This ensures that the desired result is achieved and maintained over time.",
    image: rhinoplastyImg,
  },
  {
    id: 2,
    title: "The Twirl Internal Bra Technique For Breast Surgery",
    description: "Breast reduction and lift surgeries are widely in demand to improve breast aesthetics, comfort and self-confidence. However, these procedures often come with challenges such as underbearing, loss of upper pole fullness, and impaired blood flow to the nipple area. This is where the Twirl Internal Bra Technique comes in; a breakthrough surgical procedure designed to directly address these issues.",
    image: twirlBraImg,
  },
  {
    id: 3,
    title: "The Vibrasat Pro Technology",
    description: "Vibrasat Pro™ and Liposat Pro Plus represent a new era in body contouring, combining advanced vibration-expansion technology with a specialized peristaltic pump for safer, more precise fat removal and grafting. Backed by Dr. Karaaltin's clinical expertise and proven through his \"Sponge Experiment™,\" this system minimizes tissue trauma, reduces pain, and enhances recovery while preserving up to 92% of viable fat cells. Compared to traditional methods like VASER, it offers smoother skin retraction, more predictable results, and higher fat retention—making it the preferred choice for high-definition liposuction and procedures like BBL or breast augmentation.",
    image: vibrasatProImg,
  },
  {
    id: 4,
    title: "K-Glide™ Rapid Breast Augmentation",
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
    <section className="py-24 lg:py-36 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
            Innovation & Excellence
          </p>
          <h2 className="text-4xl lg:text-5xl font-serif font-light tracking-wide">
            Signature Procedures
          </h2>
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
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-stretch">
                    {/* Left: Content (inverted layout) */}
                    <div className="space-y-8 lg:order-1 flex flex-col justify-center px-4 lg:px-0">
                      <h3 className="text-2xl lg:text-3xl xl:text-4xl font-serif font-light tracking-wide">
                        {procedure.title}
                      </h3>
                      <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                        {procedure.description}
                      </p>
                    </div>

                    {/* Right: Image */}
                    <div className="relative lg:order-2 min-h-[400px] lg:min-h-[500px]">
                      <img 
                        src={procedure.image} 
                        alt={procedure.title}
                        className="w-full h-full object-cover rounded-lg shadow-xl"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Desktop Navigation Arrows */}
          <div className="hidden lg:flex justify-center gap-4 mt-16">
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
          <div className="flex justify-center gap-2 mt-8">
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
