import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/home/ContactCTASection";
import drKaraaltinLogo from "@/assets/dr-karaaltin-logo-white.svg";

const TummyTuck = () => {
  const [activeCard, setActiveCard] = useState(0);
  const overviewRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!cardsRef.current) return;
      
      const cards = cardsRef.current.querySelectorAll('.overview-card');
      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
          setActiveCard(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
      {/* 1. HERO SECTION */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img
          src="/placeholder.svg"
          alt="Tummy Tuck Hero"
          className="absolute inset-0 w-full h-full object-cover animate-[scale-in_1.5s_ease-out]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="relative container mx-auto px-8 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-[0.1em] uppercase text-white mb-6 animate-fade-in">
            Tummy Tuck
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl font-light animate-fade-in" style={{ animationDelay: '0.2s' }}>
            A Toned, Rejuvenated Abdomen — Redefined by Precision
          </p>
        </div>
      </section>

      {/* 2. INTRO / SEO BLOCK */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-8 max-w-4xl text-center content-spacing">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 animate-fade-in">
            A tummy tuck, or abdominoplasty, is one of the most transformative body contouring procedures available. Whether due to pregnancy, weight changes, or natural aging, excess skin and weakened abdominal muscles can blur the body's natural definition.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Professor Dr. Mehmet Veli Karaaltin restores a firm, sculpted midsection through advanced surgical planning, anatomical expertise, and techniques designed for long-lasting, natural-looking results.
          </p>
        </div>
      </section>

      {/* 3. OVERVIEW — HAKIMI STICKY EFFECT */}
      <section ref={overviewRef} className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16 relative">
            {/* LEFT: STICKY */}
            <div className="lg:sticky lg:top-32 lg:h-fit space-y-8 animate-fade-in">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-gray-900 mb-2">
                  Tummy Tuck
                </h2>
                <p className="text-xl md:text-2xl font-light text-gray-600 uppercase tracking-widest">
                  Overview
                </p>
              </div>
              <img
                src={drKaraaltinLogo}
                alt="Dr. Karaaltin Logo"
                className="w-48 h-auto opacity-80 brightness-0"
              />
            </div>

            {/* RIGHT: SCROLLABLE CARDS */}
            <div ref={cardsRef} className="space-y-8 min-h-screen">
              <div
                className={`overview-card bg-white p-8 lg:p-10 rounded-lg shadow-sm border border-gray-200 transition-all duration-500 ${
                  activeCard === 0 ? 'shadow-lg border-gray-300' : ''
                }`}
              >
                <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase text-gray-900 mb-4">
                  01 // What Is a Tummy Tuck
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  A tummy tuck removes excess abdominal skin and fat while tightening separated or weakened muscles. Unlike liposuction alone, it corrects both skin laxity and muscle diastasis (rectus separation), restoring a firm, youthful abdominal contour.
                </p>
              </div>

              <div
                className={`overview-card bg-white p-8 lg:p-10 rounded-lg shadow-sm border border-gray-200 transition-all duration-500 ${
                  activeCard === 1 ? 'shadow-lg border-gray-300' : ''
                }`}
                style={{ animationDelay: '0.1s' }}
              >
                <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase text-gray-900 mb-4">
                  02 // Anatomy Behind the Procedure
                </h3>
                <ul className="text-base md:text-lg text-gray-700 leading-relaxed space-y-2">
                  <li>• Subcutaneous "pinchable" fat is removed or reshaped.</li>
                  <li>• Visceral fat cannot be surgically removed and may influence candidacy.</li>
                  <li>• The linea alba, often stretched after pregnancy or weight gain, is repaired to correct abdominal wall separation.</li>
                </ul>
              </div>

              <div
                className={`overview-card bg-white p-8 lg:p-10 rounded-lg shadow-sm border border-gray-200 transition-all duration-500 ${
                  activeCard === 2 ? 'shadow-lg border-gray-300' : ''
                }`}
                style={{ animationDelay: '0.2s' }}
              >
                <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase text-gray-900 mb-4">
                  03 // Treatment Options
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                  Each abdominoplasty is tailored to patient anatomy and goals, with options such as:
                </p>
                <ul className="text-base md:text-lg text-gray-700 leading-relaxed space-y-2">
                  <li>• Full Abdominoplasty</li>
                  <li>• Mini Abdominoplasty</li>
                  <li>• Skin-Only Abdominoplasty</li>
                  <li>• Free-Float Umbilical Technique</li>
                  <li>• Fleur-de-Lis Abdominoplasty</li>
                  <li>• Apronectomy</li>
                  <li>• Lipoabdominoplasty</li>
                </ul>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mt-4">
                  These variations allow the surgeon to refine both function and aesthetics while minimizing trauma and maximizing results.
                </p>
              </div>

              <div
                className={`overview-card bg-white p-8 lg:p-10 rounded-lg shadow-sm border border-gray-200 transition-all duration-500 ${
                  activeCard === 3 ? 'shadow-lg border-gray-300' : ''
                }`}
                style={{ animationDelay: '0.3s' }}
              >
                <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase text-gray-900 mb-4">
                  04 // Why Patients Choose It
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  This procedure restores core stability, reduces skin laxity, improves silhouette definition, and enhances confidence. For many individuals, it is the most effective solution when exercise and diet cannot address structural abdominal changes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED SECTION */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-fade-in">
              <img
                src="/placeholder.svg"
                alt="Tummy Tuck With Dr. Karaaltin"
                className="w-full h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6 content-spacing animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-gray-900">
                Tummy Tuck With Dr. Karaaltin
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Refined abdominal contouring requires mastery of anatomy and modern surgical innovation. With decades of experience in reconstructive and aesthetic surgery, Professor Dr. Karaaltin combines precision muscle repair, advanced lipocontouring, and scar-optimized incision design to produce results that look natural from every angle.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                His approach prioritizes patient safety, proportional balance, and long-term integrity of the abdominal wall.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 text-xs uppercase tracking-widest font-light rounded hover:bg-gray-800 transition-all duration-300 button-hover"
              >
                Book Now
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROCEDURE DETAILS (FLEXIBLE) */}
      <section className="section-spacing bg-gray-50">
        <div className="container mx-auto px-8 max-w-5xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-gray-900 text-center mb-12 animate-fade-in">
            Procedure Details
          </h2>
          
          <div className="space-y-12">
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase text-gray-900">
                Muscle Repair & Structural Restoration
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Many patients experience abdominal muscle separation after pregnancy or weight fluctuation. During surgery, Dr. Karaaltin reinforces the abdominal wall using permanent or long-acting absorbable sutures, improving stability and posture.
              </p>
            </div>

            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase text-gray-900">
                Skin & Fat Refinement
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Excess skin is removed and the remaining tissue is redraped for a smooth, natural finish. Liposuction may be added to contour the flanks and waistline, enhancing hourglass definition.
              </p>
            </div>

            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase text-gray-900">
                Umbilical Design
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Depending on the technique, the belly button may be repositioned using scar-optimized methods to achieve a natural aesthetic with minimal visibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SURGICAL JOURNEY (TIMELINE) */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-gray-900 text-center mb-16 animate-fade-in">
            Your Surgical Journey
          </h2>
          
          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Comprehensive assessment of abdominal anatomy, lifestyle factors, medical history, and desired silhouette."
              },
              {
                step: "02",
                title: "Digital Assessment",
                description: "Secure photo submission for remote evaluation when applicable."
              },
              {
                step: "03",
                title: "Preoperative Planning",
                description: "Precise incision mapping, muscle evaluation, fat distribution analysis, and determination of combined techniques."
              },
              {
                step: "04",
                title: "Surgery Day",
                description: "Performed under general (or in select cases, epidural) anesthesia. Duration varies from 2–5 hours depending on complexity."
              },
              {
                step: "05",
                title: "Postoperative Care",
                description: "Includes garment fitting, drain management, wound care, mobility guidance, and structured follow-up visits."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-6 items-start p-6 bg-gray-50 rounded-lg border border-gray-200 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center text-xl font-light">
                  {item.step}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl md:text-2xl font-light tracking-wide uppercase text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-base text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. RECOVERY BLOCK */}
      <section className="section-spacing bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img
                src="/placeholder.svg"
                alt="Recovery & Healing"
                className="w-full h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6 content-spacing animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-gray-900">
                Recovery & Healing
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Recovery duration depends on anatomy and technique.
              </p>
              <ul className="text-base md:text-lg text-gray-700 leading-relaxed space-y-2">
                <li>• Hospital stay: 1–2 days for full abdominoplasty</li>
                <li>• Drains: Removed after 5–7 days</li>
                <li>• Mobility: Patients walk slightly bent for 5–7 days</li>
                <li>• Return to work: Typically 10–21 days</li>
                <li>• Heavy lifting: Avoid for at least 6 weeks</li>
              </ul>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                A compression garment and lymphatic drainage massage support healing and swelling reduction.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 text-xs uppercase tracking-widest font-light rounded hover:bg-gray-800 transition-all duration-300 button-hover"
              >
                Book a Consultation
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. IDEAL CANDIDATES */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-8 max-w-5xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-gray-900 text-center mb-12 animate-fade-in">
            Ideal Candidates
          </h2>
          
          <div className="space-y-6 text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <ul className="space-y-3">
              <li>• BMI preferably below 30 or stable weight</li>
              <li>• Skin laxity or muscle separation unresponsive to exercise</li>
              <li>• No significant visceral fat burden</li>
              <li>• Non-smoker or committed to pausing smoking pre- and post-op</li>
              <li>• Realistic expectations regarding scars and recovery</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 9. SCAR EXPECTATIONS */}
      <section className="section-spacing bg-gray-50">
        <div className="container mx-auto px-8 max-w-5xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-gray-900 text-center mb-12 animate-fade-in">
            Scar Expectations
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-lg border border-gray-200 text-center animate-fade-in card-hover">
              <div className="text-4xl text-gray-400 mb-4">━</div>
              <h3 className="text-xl md:text-2xl font-light tracking-wide uppercase text-gray-900 mb-4">
                Mini Tuck Scar
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Short, low incision similar to a C-section, ideal for lower abdominal laxity.
              </p>
            </div>

            <div className="p-8 bg-white rounded-lg border border-gray-200 text-center animate-fade-in card-hover" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl text-gray-400 mb-4">━━━</div>
              <h3 className="text-xl md:text-2xl font-light tracking-wide uppercase text-gray-900 mb-4">
                Full Tuck Scar
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Hip-to-hip incision hidden along the bikini line, plus a small hidden umbilical scar.
              </p>
            </div>

            <div className="p-8 bg-white rounded-lg border border-gray-200 text-center animate-fade-in card-hover" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl text-gray-400 mb-4">━━━━━</div>
              <h3 className="text-xl md:text-2xl font-light tracking-wide uppercase text-gray-900 mb-4">
                Fleur-de-Lis Scar
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Horizontal + vertical scar pattern for extreme excess skin removal, common after massive weight loss.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. BEFORE & AFTER (SIMPLIFIED) */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-8 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-gray-900 mb-6 animate-fade-in">
            See Real Results
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
            See how abdominal contouring transforms confidence and silhouette.
          </p>
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 text-xs uppercase tracking-widest font-light rounded hover:bg-gray-800 transition-all duration-300 button-hover animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            View Before & After Gallery
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 11. CTA FINAL — GET STARTED */}
      <ContactCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default TummyTuck;
