import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronRight } from "lucide-react";

const Face = () => {
  const proceduresWithPages = [
    { id: "k-face-lift", name: "The K Face Lift", subtitle: "Signature Technique" },
    { id: "endochor-face-lift", name: "EndoChor® Face Lift", subtitle: "Signature Technique" },
    { id: "k-endoscopic-deep-plane", name: "K Endoscopic Deep Plane Face Lift", subtitle: "Signature Technique" },
  ];

  const proceduresWithoutPages = [
    "Mini Facelift",
    "Purse-String Vertical Facelift",
    "Subperiosteal Deep Plane / Composite Midface Lift",
    "MACS Lift",
    "EndoChor™-Assisted Mid-Face Lift",
    "High SMAS / Extended High SMAS Lift",
    "All-In-One Facial Rejuvenation",
    "Ponytail Lift",
    "Endoscopic Forehead & Brow Lift",
    "Blepharoplasty (Upper & Lower)",
    "Facial Implants",
    "Genioplasty",
    "Orthognathic Surgery",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden fade-in">
        {/* Background Image - Editable */}
        <div className="absolute inset-0 z-0">
          <img
            src="/placeholder.svg"
            alt="Face procedures hero"
            className="w-full h-full object-cover animate-[scale-in_1.2s_ease-out]"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 fade-in-up">
          <h1 className="font-serif font-light text-6xl md:text-7xl lg:text-8xl tracking-wider mb-4">
            FACE
          </h1>
          <p className="text-lg md:text-xl tracking-wide font-light">
            Facial Aesthetic & Reconstructive Procedures
          </p>
        </div>
      </section>

      {/* All Face Procedures Section */}
      <section className="bg-gray-100 py-16 md:py-24 px-4 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <h2 className="font-serif font-light text-4xl md:text-5xl lg:text-6xl tracking-wider mb-12 text-center fade-in">
            ALL FACE PROCEDURES
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {/* Procedures WITH internal pages */}
            {proceduresWithPages.map((procedure, index) => (
              <Link
                key={procedure.id}
                to={`/procedures/face/${procedure.id}`}
                className="group fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white overflow-hidden transition-all duration-300 hover:shadow-xl">
                  {/* Image - Editable */}
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src="/placeholder.svg"
                      alt={procedure.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    {procedure.subtitle && (
                      <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                        {procedure.subtitle}
                      </p>
                    )}
                    <h3 className="font-serif font-semibold text-xl mb-3 group-hover:text-[#0d1f3a] transition-colors">
                      {procedure.name}
                    </h3>
                    <div className="flex items-center text-sm uppercase tracking-wide text-[#0d1f3a] font-light">
                      View Procedure
                      <ChevronRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
            
            {/* Procedures WITHOUT internal pages */}
            {proceduresWithoutPages.map((procedure, index) => (
              <div
                key={procedure}
                className="fade-in"
                style={{ animationDelay: `${(proceduresWithPages.length + index) * 0.1}s` }}
              >
                <div className="bg-white overflow-hidden transition-all duration-300 hover:shadow-lg">
                  {/* Image - Editable */}
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src="/placeholder.svg"
                      alt={procedure}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-serif font-semibold text-xl">
                      {procedure}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Section - Understanding the Philosophy */}
      <section className="py-16 md:py-24 px-4 lg:px-8 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="fade-in-up">
            <h2 className="font-serif font-light text-3xl md:text-4xl lg:text-5xl tracking-wide mb-8">
              Understanding the Philosophy
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              <p>
                At Dr. Karaaltın's practice, facial rejuvenation is approached as both an art and a science. 
                Each face tells a unique story, and our goal is to restore and enhance natural beauty while 
                respecting individual anatomical features and aesthetic goals.
              </p>
              <p>
                Our comprehensive approach considers not just the surface appearance, but the underlying 
                structural changes that occur with aging. This deep understanding allows us to create results 
                that are natural, harmonious, and long-lasting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Section - Facial Anatomy */}
      <section className="py-16 md:py-24 px-4 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <div className="fade-in-up">
            <h2 className="font-serif font-light text-3xl md:text-4xl lg:text-5xl tracking-wide mb-12">
              Facial Anatomy
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif font-semibold text-2xl mb-3 text-[#0d1f3a]">Bone Structure</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The foundation of facial architecture. Understanding bone resorption patterns is crucial 
                    for comprehensive rejuvenation planning.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-serif font-semibold text-2xl mb-3 text-[#0d1f3a]">Fat Compartments</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Facial fat exists in distinct compartments that change volume and position with age, 
                    affecting contours and fullness.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif font-semibold text-2xl mb-3 text-[#0d1f3a]">Ligaments & SMAS</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The superficial musculoaponeurotic system and retaining ligaments provide structural 
                    support that weakens over time.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-serif font-semibold text-2xl mb-3 text-[#0d1f3a]">Skin & Dermis</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The visible layer that reflects underlying structural changes and environmental effects 
                    accumulated over years.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Section - How the Face Ages */}
      <section className="py-16 md:py-24 px-4 lg:px-8 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="fade-in-up">
            <h2 className="font-serif font-light text-3xl md:text-4xl lg:text-5xl tracking-wide mb-12">
              How the Face Ages
            </h2>
            
            <div className="space-y-12">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 items-start">
                <h3 className="font-serif font-semibold text-2xl text-[#0d1f3a] lg:sticky lg:top-24">
                  Skin Changes
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Loss of collagen and elastin leads to decreased firmness and elasticity. Fine lines deepen 
                    into wrinkles, and skin texture becomes less smooth. Sun damage and environmental factors 
                    accelerate these changes, creating pigmentation irregularities and surface roughness.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 items-start">
                <h3 className="font-serif font-semibold text-2xl text-[#0d1f3a] lg:sticky lg:top-24">
                  Fat & Ligaments
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Facial fat compartments deflate and descend, creating hollowing in some areas and fullness 
                    in others. Retaining ligaments weaken, allowing tissues to migrate downward. This creates 
                    jowling, nasolabial folds, and loss of definition along the jawline.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 items-start">
                <h3 className="font-serif font-semibold text-2xl text-[#0d1f3a] lg:sticky lg:top-24">
                  Facial Skeleton
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Bone resorption occurs in key areas including the maxilla, mandible, and orbital rims. 
                    This skeletal framework loss reduces support for overlying soft tissues, contributing to 
                    an aged appearance that cannot be addressed by skin treatments alone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Section - Customized Treatment Planning */}
      <section className="py-16 md:py-24 px-4 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center fade-in-up">
            <div>
              <h2 className="font-serif font-light text-3xl md:text-4xl lg:text-5xl tracking-wide mb-8">
                Customized Treatment Planning
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                <p>
                  Every patient receives a comprehensive facial analysis addressing their unique anatomy, 
                  aging patterns, and aesthetic goals. Dr. Karaaltın combines multiple techniques to achieve 
                  harmonious, natural-looking results that enhance rather than change your inherent beauty.
                </p>
                <p>
                  Our treatment plans may incorporate various procedures addressing different facial layers 
                  simultaneously, ensuring comprehensive rejuvenation with optimal outcomes and recovery.
                </p>
              </div>
            </div>
            
            {/* Image - Editable */}
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src="/placeholder.svg"
                alt="Customized treatment planning"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        {/* Background Image - Editable */}
        <img
          src="/placeholder.svg"
          alt="Before and After results"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="font-serif font-light text-5xl md:text-6xl lg:text-7xl tracking-[0.2em] text-white text-center px-4 text-shadow-lg">
            BEFORE<br />& AFTERS
          </h2>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 lg:px-8 bg-[#E8E6E1]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-up">
              <h2 className="font-serif font-light text-4xl md:text-5xl lg:text-6xl tracking-wide mb-8">
                GET STARTED
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Ready to take the next step with Dr. Karaaltın and book your consultation? 
                Get started by calling the office at{" "}
                <a href="tel:+902123254242" className="font-semibold hover:text-[#0d1f3a] transition-colors">
                  +90 212 325 42 42
                </a>{" "}
                or completing our online contact form to schedule your appointment.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0d1f3a] text-white px-8 py-4 text-sm uppercase tracking-widest font-light hover:bg-[#1a2f4a] transition-all duration-300"
              >
                BOOK NOW
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="flex flex-col items-center gap-8 fade-in" style={{ animationDelay: "0.2s" }}>
              {/* Logo - Editable */}
              <img
                src="/placeholder.svg"
                alt="Dr. Karaaltın Logo"
                className="max-w-[200px] w-full"
              />
              {/* Image - Editable */}
              <div className="w-full max-w-md aspect-square overflow-hidden">
                <img
                  src="/placeholder.svg"
                  alt="Get started"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Face;
