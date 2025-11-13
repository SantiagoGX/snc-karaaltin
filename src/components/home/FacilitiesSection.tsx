import hospitalRoomImg from "@/assets/facilities/hospital-room.jpg";
import hotelRoomImg from "@/assets/facilities/hotel-room.jpg";

const facilities = [
  {
    image: hospitalRoomImg,
    alt: "Premium Hospital Room - Dr. Karaaltın Clinic",
  },
  {
    image: hotelRoomImg,
    alt: "Luxury Hotel Accommodation - Premium Patient Comfort",
  },
  {
    image: hospitalRoomImg,
    alt: "Advanced Medical Facility - Dr. Karaaltın Clinic",
  },
];

const FacilitiesSection = () => {
  return (
    <section className="pt-8 lg:pt-12 pb-8 lg:pb-12 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Título y descripción centrados */}
        <div className="text-center mb-10 lg:mb-12 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-light uppercase tracking-wide mb-4">
            Our World-Class Facilities
          </h2>
          <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
            Experience exceptional care in our state-of-the-art medical facility, 
            featuring premium hospital rooms, advanced operating theaters, and 
            luxury accommodations designed for your comfort and recovery.
          </p>
        </div>

        {/* Grid de 3 imágenes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="relative overflow-hidden group cursor-pointer"
              style={{ aspectRatio: "4/5" }}
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
