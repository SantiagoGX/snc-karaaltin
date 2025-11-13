import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, ExternalLink } from "lucide-react";
import drKaraaltinLogo from "@/assets/dr-karaaltin-logo-white.svg";

const GOOGLE_REVIEW_LINK = "https://www.google.com/maps/place/Prof.+Dr.+Mehmet+Veli+Karaalt%C4%B1n/@41.0428434,28.9958192,17z/data=!3m1!5s0x14cab77457fae66d:0xee229326ea907d8a!4m8!3m7!1s0x14cab77457f0a8bf:0xd6fc147c7b127a05!8m2!3d41.0428434!4d28.9958192!9m1!1b1!16s%2Fg%2F11c4b4bcdt?entry=ttu&g_ep=EgoyMDI1MTExMC4wIKXMDSoASAFQAw%3D%3D";

const reviews = [
  {
    id: 1,
    name: "Zafer Taner",
    stars: 5,
    text: `My Wife had a very complicated procedure to be done to her breasts and I couldn't have picked a better Proffessor! Prof Dr Mehmet Veli Karaaltin was very professional and reassuring from start to finish. Everything went according to plan and provided the best service we ever had at the hospital. I would highly recommend for anyone who is looking for a peace of mind. We are very happy with the outcome. Thank you so much!`
  },
  {
    id: 2,
    name: "Ashley Knowing",
    stars: 5,
    text: `I had absolutely wonderful service and excellent surgeon, Doctor well knowledgeable surgeon , I have been researching for few years and finally I found The right doctor, I really appreciate Doctor karaaltin and his team. I definitely suggest him if you're looking for experienced surgeon.`
  },
  {
    id: 3,
    name: "Çağla Güre",
    stars: 5,
    text: `Eşimin geçirdiği trafik kazası sebebi ile bir anda hayatımız alt üst olmuştu. Mehmet hocamla tanıştık ve süreci başlattık. Uzun ve zahmetli bir ameliyat olacağını biliyorduk. Doktor karaaltin ve ekibinin özverili çalışması sayesinde kocam biz ailesine geri döndü. Ve bu süreçte hep yanımızda oldular. Teşekkürlerimizi hiç bir şey karşılamaz ama çok teşekkür ediyoruz.`
  },
  {
    id: 4,
    name: "Alyssa Poteet",
    stars: 5,
    text: `Dr. karaaltin & team were wonderful from the initial consultation throughout the post recovery process! Everyone was very kind, understanding & patient & made me feel very comfortable throughout the process. The results are very natural looking!`
  },
  {
    id: 5,
    name: "Candeniz Tut",
    stars: 5,
    text: `I have been looking for a nosejob and lipo for last 2 years and have never made it happen until I met prof K's team who made me take the leap and it was by far the greatest decision of my life. My wife had a bbl and breast augment and it was breathtaking work. Prof K is not a surgeon. He is an artist and master of his Craft.`
  },
  {
    id: 6,
    name: "Mosu",
    stars: 5,
    text: `My wife and I are from Nigeria, I had a tummy tuck and lipo with Dr K and my wife had a breast reduction with 360 lipo last year. The experience was amazing. We were picked up from the airport and taken to a 5star hotel. Hospital was world class and the nurses took care of us like family. Dr. K made us feel very comfortable through out the process. We are very happy with our results and will definitely recommend Dr K to family and friends.`
  },
  {
    id: 7,
    name: "Hannah R",
    stars: 5,
    text: `Dr Karaaltin is a highly skilled surgeon who was able to help me with my arm and thigh lift needs. His team is so friendly, and they worked with the hospital and hotel to ensure my every need was catered for. I'm so pleased I chose Dr Karaaltin and his team for my procedure, and the results are already looking great. Thank you!`
  },
  {
    id: 8,
    name: "J. Ribas",
    stars: 5,
    text: `Muy contento de haberme puesto en sus manos, muy contento con mi operación de trasplante capilar y un gran grupo de profesionales de alto nivel con unas instalaciones y personal inmejorable. Un saludo especial a Damla y Ana por su trato y profesionalidad. Gracias doctor karaaltin.`
  }
];

const GoogleReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviewsPerPageDesktop = 3;
  const reviewsPerPageMobile = 1;

  const nextReviews = () => {
    setCurrentIndex((prev) => 
      prev + reviewsPerPageDesktop >= reviews.length ? 0 : prev + reviewsPerPageDesktop
    );
  };

  const prevReviews = () => {
    setCurrentIndex((prev) => 
      prev - reviewsPerPageDesktop < 0 ? Math.max(0, reviews.length - reviewsPerPageDesktop) : prev - reviewsPerPageDesktop
    );
  };

  const nextReviewMobile = () => {
    setCurrentIndex((prev) => 
      prev + reviewsPerPageMobile >= reviews.length ? 0 : prev + reviewsPerPageMobile
    );
  };

  const prevReviewMobile = () => {
    setCurrentIndex((prev) => 
      prev - reviewsPerPageMobile < 0 ? reviews.length - 1 : prev - reviewsPerPageMobile
    );
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-12 lg:mb-16 fade-in">
          <div className="flex justify-center mb-6">
            <img 
              src={drKaraaltinLogo} 
              alt="Dr. Karaaltın Logo" 
              className="h-16 lg:h-20 brightness-0"
            />
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-[0.2em] uppercase text-gray-900">
            REAL PATIENT EXPERIENCES
          </h2>
        </div>

        {/* Carrusel de Reseñas */}
        <div className="relative max-w-7xl mx-auto">
          {/* Desktop: mostrar 3 reseñas */}
          <div className="hidden md:grid md:grid-cols-3 gap-8 lg:gap-12">
            {reviews.slice(currentIndex, currentIndex + reviewsPerPageDesktop).map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
          
          {/* Mobile: mostrar 1 reseña */}
          <div className="md:hidden">
            <ReviewCard review={reviews[currentIndex]} />
          </div>

          {/* Flechas de Navegación Desktop */}
          <div className="hidden md:flex justify-center gap-4 mt-12">
            <button
              onClick={prevReviews}
              className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-900 hover:border-gray-900 hover:text-white transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
              disabled={currentIndex === 0}
              aria-label="Previous reviews"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextReviews}
              className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-900 hover:border-gray-900 hover:text-white transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
              disabled={currentIndex + reviewsPerPageDesktop >= reviews.length}
              aria-label="Next reviews"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Flechas de Navegación Mobile */}
          <div className="flex md:hidden justify-center gap-4 mt-12">
            <button
              onClick={prevReviewMobile}
              className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-900 hover:border-gray-900 hover:text-white transition-all duration-300"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextReviewMobile}
              className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-900 hover:border-gray-900 hover:text-white transition-all duration-300"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Botón CTA para dejar reseña */}
          <div className="flex justify-center mt-8 lg:mt-10">
            <a
              href={GOOGLE_REVIEW_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 text-white text-xs uppercase tracking-widest font-light rounded-md hover:bg-gray-800 transition-all duration-300 group"
            >
              Leave a Google Review
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Componente ReviewCard
const ReviewCard = ({ review }: { review: typeof reviews[0] }) => {
  return (
    <div className="p-8 lg:p-10 fade-in">
      {/* Estrellas */}
      <div className="flex gap-1 mb-4">
        {[...Array(review.stars)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-gray-900 text-gray-900" />
        ))}
      </div>
      
      {/* Texto de la reseña */}
      <p className="text-gray-700 text-sm lg:text-base leading-relaxed mb-4 min-h-[200px]">
        "{review.text}"
      </p>
      
      {/* Línea divisora + Nombre del paciente */}
      <div className="border-t border-gray-300 pt-4">
        <p className="font-semibold text-gray-900 text-lg">
          {review.name}
        </p>
      </div>
    </div>
  );
};

export default GoogleReviewsSection;
