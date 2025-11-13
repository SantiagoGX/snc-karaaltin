import hospitalRoomImg from "@/assets/facilities/hospital-room.jpg";
import hotelRoomImg from "@/assets/facilities/hotel-room.jpg";
import doctorPortraitImg from "@/assets/facilities/dr-karaaltin-new-portrait.jpg";

const facilities = [
  {
    image: hospitalRoomImg,
    alt: "Premium Hospital Room - Dr. Karaaltın Clinic",
  },
  {
    image: doctorPortraitImg,
    alt: "Dr. Mehmet Veli Karaaltın - Renowned Plastic Surgeon",
  },
  {
    image: hotelRoomImg,
    alt: "Luxury Hotel Accommodation - Premium Patient Comfort",
  },
];

const FacilitiesSection = () => {
  return (
    <section className="pt-8 lg:pt-12 pb-8 lg:pb-12 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Título centrado con puntos estilizados */}
        <div className="text-center mb-10 lg:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-light uppercase tracking-[0.3em] flex items-center justify-center gap-4">
            <span>QUALITY</span>
            <span className="text-gold">•</span>
            <span>EXPERIENCE</span>
            <span className="text-gold">•</span>
            <span>CARE</span>
          </h2>
        </div>

        {/* Grid de 3 imágenes - centro más grande */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr_1fr] gap-4 lg:gap-6">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="relative overflow-hidden group cursor-pointer"
              style={{ aspectRatio: "1/1" }}
            >
              <img
                src={facility.image}
                alt={facility.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              {/* Subtle overlay en hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
