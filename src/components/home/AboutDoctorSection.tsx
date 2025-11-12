import doctorImage from "@/assets/dr-karaaltin-portrait.jpg";

const AboutDoctorSection = () => {
  return (
    <section className="py-12 lg:py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Image */}
          <div className="relative min-h-[500px] lg:min-h-[600px]">
            <img 
              src={doctorImage} 
              alt="Dr. Mehmet Veli Karaaltın - Renowned Plastic Surgeon" 
              className="w-full h-full object-cover rounded-lg shadow-xl"
              loading="lazy"
            />
          </div>

          {/* Right: Content */}
          <div className="space-y-6">
            <div>
              <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
                Welcome to Dr. Karaaltın's Clinic
              </p>
              <h2 className="text-4xl lg:text-5xl font-serif font-light tracking-wide mb-6">
                Get to Know Us
              </h2>
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Dr. KARAALTIN, the father of twin children and husband of a successful wife 
              (Vice Dean of Cerrapasa University Faculty of Medicine), was born in 1972 in 
              Kirkuk, Iraq as a Turkish descendant. His family moved to the United States of 
              America when he was only six months old. Between 1976 and 1988, Dr. Karaaltin 
              completed her primary and secondary education in both West Lafayette, Indiana 
              and Orange County, Los Angeles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDoctorSection;
