import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
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

const SignatureProceduresSection = () => {
  const { t } = useTranslation();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const procedures = [
    {
      id: 1,
      titleNormalKey: "signatureProcedures.procedures.rhinoplasty.titleNormal",
      titleBoldKey: "signatureProcedures.procedures.rhinoplasty.titleBold",
      descriptionKey: "signatureProcedures.procedures.rhinoplasty.description",
      image: rhinoplastyImg,
    },
    {
      id: 2,
      titleNormalKey: "signatureProcedures.procedures.twirlBra.titleNormal",
      titleBoldKey: "signatureProcedures.procedures.twirlBra.titleBold",
      descriptionKey: "signatureProcedures.procedures.twirlBra.description",
      image: twirlBraImg,
    },
    {
      id: 3,
      titleNormalKey: "signatureProcedures.procedures.vibrasatPro.titleNormal",
      titleBoldKey: "signatureProcedures.procedures.vibrasatPro.titleBold",
      descriptionKey: "signatureProcedures.procedures.vibrasatPro.description",
      image: vibrasatProImg,
    },
    {
      id: 4,
      titleNormalKey: "signatureProcedures.procedures.kGlide.titleNormal",
      titleBoldKey: "signatureProcedures.procedures.kGlide.titleBold",
      descriptionKey: "signatureProcedures.procedures.kGlide.description",
      image: kGlideImg,
    },
  ];

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
        <div className="text-left mb-6 lg:mb-8 float-in">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-400 font-light">
            {t('signatureProcedures.title')}
          </p>
        </div>

        <div className="relative px-4 sm:px-8 md:px-12 lg:px-16">
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
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch min-h-[300px] lg:min-h-[360px] xl:min-h-[400px]">
                    {/* Left: Content */}
                    <div className="space-y-3 lg:space-y-4 lg:order-1 flex flex-col justify-center pl-6 lg:pl-10 xl:pl-12 pr-6 lg:pr-8 py-10 lg:py-0 slide-in-left">
                      <h3 className="text-xl lg:text-2xl xl:text-3xl font-serif tracking-wide">
                        <span className="font-light">{t(procedure.titleNormalKey)} </span>
                        <span className="font-semibold">{t(procedure.titleBoldKey)}</span>
                      </h3>
                      <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                        {t(procedure.descriptionKey)}
                      </p>
                      <div className="flex gap-2 mt-4">
                        <button className="px-4 py-2 border border-gray-900 text-gray-900 text-xs uppercase tracking-wider hover:bg-gray-900 hover:text-white transition-all">
                          {t('signatureProcedures.learnMore')}
                        </button>
                        <button className="px-4 py-2 bg-gray-900 text-white text-xs uppercase tracking-wider hover:bg-gray-800 transition-all flex items-center gap-2">
                          {t('signatureProcedures.bookNow')}
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
                    <div className="relative lg:order-2 h-[250px] lg:h-auto slide-in-right">
                      <img 
                        src={procedure.image} 
                        alt={`${t(procedure.titleNormalKey)} ${t(procedure.titleBoldKey)}`}
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
