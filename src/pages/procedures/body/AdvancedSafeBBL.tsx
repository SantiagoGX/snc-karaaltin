import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/home/ContactCTASection";
import drKaraaltinLogo from "@/assets/dr-karaaltin-logo-white.svg";

const AdvancedSafeBBL = () => {
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
          alt="Advanced Safe BBL Hero"
          className="absolute inset-0 w-full h-full object-cover animate-[scale-in_1.5s_ease-out]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="relative container mx-auto px-8 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-[0.1em] uppercase text-white mb-6 animate-fade-in">
            Advanced Safe BBL™
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl font-light animate-fade-in" style={{ animationDelay: '0.2s' }}>
            A New Era of Safe, Scientific Gluteal Augmentation
          </p>
        </div>
      </section>

      {/* 2. INTRO / SEO BLOCK */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-8 max-w-4xl text-center content-spacing">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed animate-fade-in">
            El Advanced Safe BBL™ desarrollado por el Profesor Dr. Mehmet Veli Karaaltin representa la versión más segura, científicamente validada y tecnológicamente avanzada del Brazilian Butt Lift moderno. Basado en más de 543 pacientes auditados, 20 disecciones cadavéricas y sistemas de monitoreo en tiempo real, este protocolo reduce drásticamente los riesgos de embolia grasa y complicaciones serias, mientras logra una proyección natural, resultados estables y una recuperación más controlada.
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
                  Advanced Safe BBL™
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
                  01 // What Is the Advanced Safe BBL™
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  El Advanced Safe BBL™ es un sistema integral de gluteoplastia grasa diseñado para maximizar seguridad y precisión. Utiliza monitorización por ultrasonido en tiempo real, Doppler vascular, inyección controlada de grasa y tecnología stem-cell–enriched para resultados consistentes y duraderos.
                </p>
              </div>

              <div
                className={`overview-card bg-white p-8 lg:p-10 rounded-lg shadow-sm border border-gray-200 transition-all duration-500 ${
                  activeCard === 1 ? 'shadow-lg border-gray-300' : ''
                }`}
                style={{ animationDelay: '0.1s' }}
              >
                <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase text-gray-900 mb-4">
                  02 // Real-Time Ultrasound Safety Monitoring
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  La inyección se realiza exclusivamente por encima del músculo, verificada en tiempo real mediante tecnología inalámbrica Clarius AI™. Esto elimina el riesgo de inyecciones profundas cercanas a vasos glúteos mayores y evita completamente la técnica "a ciegas".
                </p>
              </div>

              <div
                className={`overview-card bg-white p-8 lg:p-10 rounded-lg shadow-sm border border-gray-200 transition-all duration-500 ${
                  activeCard === 2 ? 'shadow-lg border-gray-300' : ''
                }`}
                style={{ animationDelay: '0.2s' }}
              >
                <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase text-gray-900 mb-4">
                  03 // Vascular Doppler Mapping
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Antes y durante la cirugía, se mapean todos los perforantes vasculares relevantes para evitar vasos críticos. Esto guía trayectorias seguras para la grasa, reduciendo riesgo de trauma y mejorando la supervivencia del injerto.
                </p>
              </div>

              <div
                className={`overview-card bg-white p-8 lg:p-10 rounded-lg shadow-sm border border-gray-200 transition-all duration-500 ${
                  activeCard === 3 ? 'shadow-lg border-gray-300' : ''
                }`}
                style={{ animationDelay: '0.3s' }}
              >
                <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase text-gray-900 mb-4">
                  04 // Controlled Fat Injection (Liposat™ + Vibrosat Pro™)
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                  El sistema dual Vibrosat Pro™ + Liposat Pump™ permite una expansión mecánica uniforme del tejido y una inyección controlada en ml/min.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed font-semibold">
                  Beneficios:
                </p>
                <ul className="text-base md:text-lg text-gray-700 leading-relaxed space-y-2 mt-2">
                  <li>• Distribución homogénea</li>
                  <li>• Menor presión</li>
                  <li>• Menor trauma tisular</li>
                  <li>• Mejor integración del injerto</li>
                </ul>
              </div>

              <div
                className={`overview-card bg-white p-8 lg:p-10 rounded-lg shadow-sm border border-gray-200 transition-all duration-500 ${
                  activeCard === 4 ? 'shadow-lg border-gray-300' : ''
                }`}
                style={{ animationDelay: '0.4s' }}
              >
                <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase text-gray-900 mb-4">
                  05 // Stem-Cell Enriched Fat Grafting
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Usando tecnología Stempia™, el injerto combina macro y micro fat con células madre derivadas de grasa, incrementando vascularidad, mejorando supervivencia del injerto y generando un resultado más suave, natural y estable.
                </p>
              </div>

              <div
                className={`overview-card bg-white p-8 lg:p-10 rounded-lg shadow-sm border border-gray-200 transition-all duration-500 ${
                  activeCard === 5 ? 'shadow-lg border-gray-300' : ''
                }`}
                style={{ animationDelay: '0.5s' }}
              >
                <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase text-gray-900 mb-4">
                  06 // Audit-Proven Safety
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                  En 543 pacientes, el uso del protocolo completo redujo complicaciones mayores en más del 90%:
                </p>
                <ul className="text-base md:text-lg text-gray-700 leading-relaxed space-y-2">
                  <li>• 0 casos de embolia grasa</li>
                  <li>• 0 neumonía lipoidea</li>
                  <li>• Seromas reducidos drásticamente</li>
                  <li>• Menor dolor postoperatorio</li>
                  <li>• Menor incidencia de necrosis grasa</li>
                </ul>
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
              {/* YouTube Video Integration */}
              <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/eSdiWtaQ9yk"
                  title="Advanced Safe BBL Explanation"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6 content-spacing animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-gray-900">
                Advanced Safe BBL™ With Dr. Karaaltin
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                El Advanced Safe BBL™ no es solo un procedimiento estético: es un sistema quirúrgico basado en ciencia, anatomía avanzada y tecnología de monitoreo continuo. Diseñado por el Prof. Dr. Karaaltin —un pionero en cirugía reconstructiva y microquirúrgica— este método redefine el estándar moderno del aumento glúteo seguro, logrando curvas suaves, proporciones naturales y resultados que respetan la integridad vascular.
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

      {/* 5. PROCEDURE DETAILS */}
      <section className="section-spacing bg-gray-50">
        <div className="container mx-auto px-8 max-w-5xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-gray-900 text-center mb-12 animate-fade-in">
            Procedure Details
          </h2>
          
          <div className="space-y-12">
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase text-gray-900">
                Cómo Funciona el Protocolo
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                El protocolo combina cuatro pilares:
              </p>
              <ul className="text-base md:text-lg text-gray-700 leading-relaxed space-y-2">
                <li>• <span className="font-semibold">Ultrasonido en tiempo real:</span> garantiza plano seguro.</li>
                <li>• <span className="font-semibold">Inyección controlada:</span> flujo preciso, sin picos de presión.</li>
                <li>• <span className="font-semibold">Mapeo Doppler:</span> evita vasos críticos.</li>
                <li>• <span className="font-semibold">Grasa enriquecida con células madre:</span> mejor integración y proyección.</li>
              </ul>
            </div>

            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase text-gray-900">
                The Karaaltin Sponge Experiment™
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                En un estudio comparativo con cinco tecnologías líderes, Vibrosat Pro™ + Liposat Pump™ produjo la dispersión más uniforme, sin zonas muertas ni daño tisular. Esta evidencia respalda la superioridad biomecánica del sistema.
              </p>
            </div>

            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase text-gray-900">
                Revisiones Complejas — Macro/Micro Fat Grafting
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Para casos de fibrosis o fallas previas de BBL, la técnica de macro/micro fat cells inventada por el Dr. Karaaltin permite corregir deformidades de contorno en una o dos sesiones, utilizando capas precisas de injerto enriquecido.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SURGICAL JOURNEY */}
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
                description: "Análisis 3D, evaluación anatómica y definición de proporciones."
              },
              {
                step: "02",
                title: "Preoperative Mapping",
                description: "Doppler + planificación del vector de proyección."
              },
              {
                step: "03",
                title: "Surgery Day",
                description: "Extracción, purificación, enriquecimiento y reinyección guiada por ultrasonido."
              },
              {
                step: "04",
                title: "Immediate Post-Op",
                description: "Compresión especializada y monitoreo temprano."
              },
              {
                step: "05",
                title: "Follow-Up",
                description: "Revisiones críticas durante los primeros 10 días para máxima seguridad."
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
              <ul className="text-base md:text-lg text-gray-700 leading-relaxed space-y-2">
                <li>• Compresión especializada diseñada por el Dr. Karaaltin para reducir seroma.</li>
                <li>• MLD desde el día 3 postoperatorio para controlar inflamación.</li>
                <li>• Retorno progresivo a la actividad según respuesta del injerto.</li>
                <li>• Evitar presión directa sobre la zona tratada durante las primeras semanas.</li>
              </ul>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed font-semibold">
                Resultado esperado: proyección natural, suavidad uniforme y curvas proporcionales al marco óseo.
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
              <li>• Personas con grasa suficiente para transferencia.</li>
              <li>• Pacientes buscando un resultado natural, armónico y seguro.</li>
              <li>• No fumadores o dispuestos a pausar el hábito.</li>
              <li>• Pacientes que priorizan técnicas basadas en evidencia y monitoreo avanzado.</li>
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
          
          <div className="max-w-3xl mx-auto text-base md:text-lg text-gray-700 leading-relaxed text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <p>
              El Advanced Safe BBL™ utiliza microincisiones de 2–3 mm, estratégicamente ubicadas para quedar prácticamente invisibles al sanar. No existe cicatriz glútea visible, ya que el injerto se realiza a través de estos accesos mínimos.
            </p>
          </div>
        </div>
      </section>

      {/* 10. BEFORE & AFTER */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-8 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase text-gray-900 mb-8 animate-fade-in">
            Before & After
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Descubre resultados reales logrados con técnicas seguras y científicas.
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

      {/* 11. GET STARTED CTA */}
      <ContactCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default AdvancedSafeBBL;
