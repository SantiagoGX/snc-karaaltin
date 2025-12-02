import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/home/ContactCTASection";
import { Button } from "@/components/ui/button";
import { Award, Crown, Globe } from "lucide-react";
interface JourneyDay {
  id: number;
  day: string;
  title: string;
  description: string;
}
const journeyDays: JourneyDay[] = [{
  id: 1,
  day: "Day 1",
  title: "Arrival & Consultation",
  description: "You arrive in Istanbul, receive VIP transportation to the clinic for your initial medical consultation and pre-operative tests, then settle comfortably into your 5-star partner hotel."
}, {
  id: 2,
  day: "Day 2",
  title: "Surgery Day",
  description: "Final consultation, preparation, and your surgical procedure. After surgery, you return to your hotel to rest under medical supervision."
}, {
  id: 3,
  day: "Day 3",
  title: "Early Recovery & Nurse Visits",
  description: "You rest at your hotel while nurses perform early post-operative checks, provide medication guidance, and support your recovery."
}, {
  id: 4,
  day: "Day 4",
  title: "Rest & Gentle Activity",
  description: "A restorative day for light movement, hydration, and calm recovery. Optional short walks or quiet time at the hotel."
}, {
  id: 5,
  day: "Day 5",
  title: "Post-Op Evaluation",
  description: "A full post-operative check with the medical team: wound assessment, progress review, and personalized recovery instructions."
}, {
  id: 6,
  day: "Day 6",
  title: "Discover Istanbul (Lightly)",
  description: "If cleared by the team, you may enjoy short, gentle outings to experience the beauty of Istanbul while continuing your recovery."
}, {
  id: 7,
  day: "Day 7",
  title: "Final Checkup & Departure",
  description: "Your final medical evaluation takes place before departure. Afterwards, you are escorted to the airport with lifelong aftercare support."
}];
const whyChooseUs = [{
  id: 1,
  title: "Medical Excellence",
  subtitle: "World-class surgical expertise with proven results and international accreditation."
}, {
  id: 2,
  title: "Luxury Experience",
  subtitle: "5-star accommodations, VIP transfers, and personalized concierge services throughout your stay."
}, {
  id: 3,
  title: "Dedicated International Support",
  subtitle: "Multilingual coordinators available 24/7 to assist you before, during, and after your procedure."
}];
const PatientJourney = () => {
  const [lineHeight, setLineHeight] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const timelineTop = timelineRef.current.offsetTop;
      const timelineHeight = timelineRef.current.offsetHeight;
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const progress = Math.min(Math.max((scrollPosition - timelineTop) / timelineHeight, 0), 1);
      setLineHeight(progress * 100);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToGetStarted = () => {
    const element = document.getElementById('get-started-section');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* SECTION 1 — HERO (Hakimi Style like About page) */}
        <section
          className="relative min-h-[70vh] flex items-center pt-20 overflow-hidden"
          style={{
            backgroundColor: "#1e3a5f",
          }}
        >
          <div className="max-w-7xl mx-auto px-8 lg:px-16 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-8 lg:gap-12 items-center">
              {/* Left Column - Text */}
              <div className="text-white space-y-6 blur-to-focus">
                <p className="text-xs uppercase tracking-[0.3em] text-gold font-light">YOUR MEDICAL JOURNEY • ISTANBUL</p>
                <h1
                  className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide"
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                  }}
                >
                  Your Journey in Istanbul
                </h1>
                <p className="text-lg lg:text-xl font-light leading-relaxed opacity-90">
                  A seamless 7-day experience designed for comfort, safety, and world-class care.
                </p>
                <Button 
                  onClick={scrollToGetStarted} 
                  className="mt-6 px-8 py-3 bg-white text-[#0d1f3a] hover:bg-white/90 uppercase tracking-widest text-sm font-medium transition-all duration-300"
                >
                  Start Your Journey
                </Button>
              </div>

              {/* Right Column - Image with Shape */}
              <div className="relative flex justify-center items-end lg:justify-end">
                {/* Background Shape - Solid, extends to bottom */}
                <div
                  className="absolute w-[280px] lg:w-[350px] rounded-lg bottom-0"
                  style={{
                    backgroundColor: "#0d1f3a",
                    height: "calc(100% - 80px)",
                    maxHeight: "450px",
                  }}
                ></div>

                {/* Doctor Image */}
                <img
                  src="/doctor-main.png"
                  alt="Professor Doctor Karaaltin"
                  className="relative z-10 w-[300px] h-auto lg:w-[380px] max-h-[500px] object-contain drop-shadow-2xl float-in block"
                  style={{
                    animationDelay: "0.2s",
                    display: "block",
                    marginBottom: "-2px",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 — SHORT INTRO */}
        <section className="py-16 lg:py-20 px-4 lg:px-8 bg-white">
          <div className="max-w-3xl mx-auto text-center float-in" style={{
          animationDelay: '0.2s'
        }}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 tracking-wide text-[#0d1f3a]" style={{
            fontFamily: 'Cormorant Garamond, serif'
          }}>
              A Structured, Safe, and Luxurious Patient Experience
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Your journey has been designed to provide full medical support, comfort, and peace of mind from the moment you land in Istanbul until the moment you return home.
            </p>
          </div>
        </section>

        {/* SECTION 3 — MAIN TIMELINE */}
        <section className="py-16 lg:py-24 px-4 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            {/* Section Title */}
            <h2 className="text-4xl lg:text-5xl font-light text-center mb-16 lg:mb-20 tracking-wide text-[#0d1f3a] float-in" style={{
            fontFamily: 'Cormorant Garamond, serif'
          }}>
              Your 7-Day Experience
            </h2>

            {/* Timeline Container */}
            <div className="relative" ref={timelineRef}>
              {/* Vertical Center Line - Background */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2 hidden lg:block"></div>
              
              {/* Vertical Center Line - Animated */}
              <div className="absolute left-1/2 top-0 w-0.5 -translate-x-1/2 hidden lg:block transition-all duration-300 ease-out" style={{
              height: `${lineHeight}%`,
              background: 'linear-gradient(180deg, #1e3a5f 0%, #4a6fa5 100%)',
              boxShadow: '0 0 10px rgba(30, 58, 95, 0.5)'
            }}></div>

              {/* Journey Days */}
              <div className="space-y-16 lg:space-y-20">
                {/* Day 1 */}
                <div className="relative">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center z-10">
                    <div className="w-6 h-6 rounded-full border-4 border-white shadow-lg animate-pulse" style={{
                    backgroundColor: '#1e3a5f',
                    boxShadow: '0 0 0 4px rgba(30, 58, 95, 0.2), 0 0 20px rgba(30, 58, 95, 0.4)'
                  }}></div>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center float-in slide-in-left">
                    <div className="lg:order-1">
                      <div className="relative overflow-hidden rounded-lg shadow-lg" style={{
                      boxShadow: '0 0 30px rgba(30, 58, 95, 0.15)'
                    }}>
                        <img alt="Day 1 - Arrival" className="w-full h-auto object-contain" src="/lovable-uploads/556a0fbc-f4b6-467a-bc80-dc8992389392.png" />
                      </div>
                    </div>
                    <div className="lg:order-2">
                      <div className="inline-block px-5 py-2.5 rounded-lg mb-4 text-xs uppercase tracking-widest font-semibold shadow-md" style={{
                      background: 'linear-gradient(135deg, #1e3a5f 0%, #4a6fa5 100%)',
                      color: '#ffffff'
                    }}>
                        {journeyDays[0].day}
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-semibold mb-4 tracking-wide" style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      color: '#1e3a5f'
                    }}>
                        {journeyDays[0].title}
                      </h3>
                      <p className="text-base lg:text-lg text-gray-700 leading-relaxed">{journeyDays[0].description}</p>
                    </div>
                  </div>
                </div>

                {/* Day 2 */}
                <div className="relative">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center z-10">
                    <div className="w-6 h-6 rounded-full border-4 border-white shadow-lg animate-pulse" style={{
                    backgroundColor: '#1e3a5f',
                    boxShadow: '0 0 0 4px rgba(30, 58, 95, 0.2), 0 0 20px rgba(30, 58, 95, 0.4)'
                  }}></div>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center float-in slide-in-right" style={{
                  animationDelay: '0.15s'
                }}>
                    <div className="lg:order-2">
                      <div className="relative overflow-hidden rounded-lg shadow-lg" style={{
                      boxShadow: '0 0 30px rgba(30, 58, 95, 0.15)'
                    }}>
                        <img alt="Day 2 - Surgery" className="w-full h-auto object-contain" src="/lovable-uploads/3da4e23b-6b67-486a-b51f-cd4dd0844924.png" />
                      </div>
                    </div>
                    <div className="lg:order-1">
                      <div className="inline-block px-5 py-2.5 rounded-lg mb-4 text-xs uppercase tracking-widest font-semibold shadow-md" style={{
                      background: 'linear-gradient(135deg, #1e3a5f 0%, #4a6fa5 100%)',
                      color: '#ffffff'
                    }}>
                        {journeyDays[1].day}
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-semibold mb-4 tracking-wide" style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      color: '#1e3a5f'
                    }}>
                        {journeyDays[1].title}
                      </h3>
                      <p className="text-base lg:text-lg text-gray-700 leading-relaxed">{journeyDays[1].description}</p>
                    </div>
                  </div>
                </div>

                {/* Day 3 */}
                <div className="relative">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center z-10">
                    <div className="w-6 h-6 rounded-full border-4 border-white shadow-lg animate-pulse" style={{
                    backgroundColor: '#1e3a5f',
                    boxShadow: '0 0 0 4px rgba(30, 58, 95, 0.2), 0 0 20px rgba(30, 58, 95, 0.4)'
                  }}></div>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center float-in slide-in-left" style={{
                  animationDelay: '0.3s'
                }}>
                    <div className="lg:order-1">
                      <div className="relative overflow-hidden rounded-lg shadow-lg" style={{
                      boxShadow: '0 0 30px rgba(30, 58, 95, 0.15)'
                    }}>
                        <img alt="Day 3 - Recovery" className="w-full h-auto object-contain" src="/lovable-uploads/9e438c2f-cfc1-4da1-87d7-8b9698235032.png" />
                      </div>
                    </div>
                    <div className="lg:order-2">
                      <div className="inline-block px-5 py-2.5 rounded-lg mb-4 text-xs uppercase tracking-widest font-semibold shadow-md" style={{
                      background: 'linear-gradient(135deg, #1e3a5f 0%, #4a6fa5 100%)',
                      color: '#ffffff'
                    }}>
                        {journeyDays[2].day}
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-semibold mb-4 tracking-wide" style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      color: '#1e3a5f'
                    }}>
                        {journeyDays[2].title}
                      </h3>
                      <p className="text-base lg:text-lg text-gray-700 leading-relaxed">{journeyDays[2].description}</p>
                    </div>
                  </div>
                </div>

                {/* Day 4 */}
                <div className="relative">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center z-10">
                    <div className="w-6 h-6 rounded-full border-4 border-white shadow-lg animate-pulse" style={{
                    backgroundColor: '#1e3a5f',
                    boxShadow: '0 0 0 4px rgba(30, 58, 95, 0.2), 0 0 20px rgba(30, 58, 95, 0.4)'
                  }}></div>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center float-in slide-in-right" style={{
                  animationDelay: '0.45s'
                }}>
                    <div className="lg:order-2">
                      <div className="relative overflow-hidden rounded-lg shadow-lg" style={{
                      boxShadow: '0 0 30px rgba(30, 58, 95, 0.15)'
                    }}>
                        <img alt="Day 4 - Rest" className="w-full h-auto object-contain" src="/lovable-uploads/332858c3-03e1-49ef-a01f-1394a3e4cb4c.png" />
                      </div>
                    </div>
                    <div className="lg:order-1">
                      <div className="inline-block px-5 py-2.5 rounded-lg mb-4 text-xs uppercase tracking-widest font-semibold shadow-md" style={{
                      background: 'linear-gradient(135deg, #1e3a5f 0%, #4a6fa5 100%)',
                      color: '#ffffff'
                    }}>
                        {journeyDays[3].day}
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-semibold mb-4 tracking-wide" style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      color: '#1e3a5f'
                    }}>
                        {journeyDays[3].title}
                      </h3>
                      <p className="text-base lg:text-lg text-gray-700 leading-relaxed">{journeyDays[3].description}</p>
                    </div>
                  </div>
                </div>

                {/* Day 5 */}
                <div className="relative">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center z-10">
                    <div className="w-6 h-6 rounded-full border-4 border-white shadow-lg animate-pulse" style={{
                    backgroundColor: '#1e3a5f',
                    boxShadow: '0 0 0 4px rgba(30, 58, 95, 0.2), 0 0 20px rgba(30, 58, 95, 0.4)'
                  }}></div>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center float-in slide-in-left" style={{
                  animationDelay: '0.6s'
                }}>
                    <div className="lg:order-1">
                      <div className="relative overflow-hidden rounded-lg shadow-lg" style={{
                      boxShadow: '0 0 30px rgba(30, 58, 95, 0.15)'
                    }}>
                        <img alt="Day 5 - Evaluation" src="/lovable-uploads/1066fede-005f-45b8-849e-341d19c6d5a8.jpg" className="w-full h-auto object-cover" />
                      </div>
                    </div>
                    <div className="lg:order-2">
                      <div className="inline-block px-5 py-2.5 rounded-lg mb-4 text-xs uppercase tracking-widest font-semibold shadow-md" style={{
                      background: 'linear-gradient(135deg, #1e3a5f 0%, #4a6fa5 100%)',
                      color: '#ffffff'
                    }}>
                        {journeyDays[4].day}
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-semibold mb-4 tracking-wide" style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      color: '#1e3a5f'
                    }}>
                        {journeyDays[4].title}
                      </h3>
                      <p className="text-base lg:text-lg text-gray-700 leading-relaxed">{journeyDays[4].description}</p>
                    </div>
                  </div>
                </div>

                {/* Day 6 */}
                <div className="relative">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center z-10">
                    <div className="w-6 h-6 rounded-full border-4 border-white shadow-lg animate-pulse" style={{
                    backgroundColor: '#1e3a5f',
                    boxShadow: '0 0 0 4px rgba(30, 58, 95, 0.2), 0 0 20px rgba(30, 58, 95, 0.4)'
                  }}></div>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center float-in slide-in-right" style={{
                  animationDelay: '0.75s'
                }}>
                    <div className="lg:order-2">
                      <div className="relative overflow-hidden rounded-lg shadow-lg" style={{
                      boxShadow: '0 0 30px rgba(30, 58, 95, 0.15)'
                    }}>
                        <img alt="Day 6 - Istanbul" className="w-full h-auto object-contain" src="/lovable-uploads/76b184b2-303d-4132-9112-bfe48bc4b520.png" />
                      </div>
                    </div>
                    <div className="lg:order-1">
                      <div className="inline-block px-5 py-2.5 rounded-lg mb-4 text-xs uppercase tracking-widest font-semibold shadow-md" style={{
                      background: 'linear-gradient(135deg, #1e3a5f 0%, #4a6fa5 100%)',
                      color: '#ffffff'
                    }}>
                        {journeyDays[5].day}
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-semibold mb-4 tracking-wide" style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      color: '#1e3a5f'
                    }}>
                        {journeyDays[5].title}
                      </h3>
                      <p className="text-base lg:text-lg text-gray-700 leading-relaxed">{journeyDays[5].description}</p>
                    </div>
                  </div>
                </div>

                {/* Day 7 */}
                <div className="relative">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center z-10">
                    <div className="w-6 h-6 rounded-full border-4 border-white shadow-lg animate-pulse" style={{
                    backgroundColor: '#1e3a5f',
                    boxShadow: '0 0 0 4px rgba(30, 58, 95, 0.2), 0 0 20px rgba(30, 58, 95, 0.4)'
                  }}></div>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center float-in slide-in-left" style={{
                  animationDelay: '0.9s'
                }}>
                    <div className="lg:order-1">
                      <div className="relative overflow-hidden rounded-lg shadow-lg" style={{
                      boxShadow: '0 0 30px rgba(30, 58, 95, 0.15)'
                    }}>
                        <img alt="Day 7 - Departure" className="w-full h-auto object-contain" src="/lovable-uploads/4128fda1-3683-40c4-b7b7-4ab350f04241.jpg" />
                      </div>
                    </div>
                    <div className="lg:order-2">
                      <div className="inline-block px-5 py-2.5 rounded-lg mb-4 text-xs uppercase tracking-widest font-semibold shadow-md" style={{
                      background: 'linear-gradient(135deg, #1e3a5f 0%, #4a6fa5 100%)',
                      color: '#ffffff'
                    }}>
                        {journeyDays[6].day}
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-semibold mb-4 tracking-wide" style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      color: '#1e3a5f'
                    }}>
                        {journeyDays[6].title}
                      </h3>
                      <p className="text-base lg:text-lg text-gray-700 leading-relaxed">{journeyDays[6].description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4 — WHY PATIENTS CHOOSE US */}
        <section className="py-16 lg:py-24 px-4 lg:px-8" style={{
        background: 'linear-gradient(180deg, #f0f4f8 0%, #e8eef4 100%)'
      }}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-light text-center mb-16 tracking-wide text-[#0d1f3a] float-in" style={{
            fontFamily: 'Cormorant Garamond, serif'
          }}>
              Why Patients Choose Us
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {/* Column 1 */}
              <div className="text-center animate-fade-in-up" style={{
              animationDelay: '0.1s'
            }}>
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white shadow-lg flex items-center justify-center" style={{
                boxShadow: '0 0 30px rgba(30, 58, 95, 0.15)'
              }}>
                  <Award className="w-10 h-10 text-[#1e3a5f]" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl lg:text-2xl font-semibold mb-3 text-[#0d1f3a]" style={{
                fontFamily: 'Cormorant Garamond, serif'
              }}>
                  {whyChooseUs[0].title}
                </h3>
                <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                  {whyChooseUs[0].subtitle}
                </p>
              </div>

              {/* Column 2 */}
              <div className="text-center animate-fade-in-up" style={{
              animationDelay: '0.2s'
            }}>
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white shadow-lg flex items-center justify-center" style={{
                boxShadow: '0 0 30px rgba(30, 58, 95, 0.15)'
              }}>
                  <Crown className="w-10 h-10 text-[#1e3a5f]" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl lg:text-2xl font-semibold mb-3 text-[#0d1f3a]" style={{
                fontFamily: 'Cormorant Garamond, serif'
              }}>
                  {whyChooseUs[1].title}
                </h3>
                <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                  {whyChooseUs[1].subtitle}
                </p>
              </div>

              {/* Column 3 */}
              <div className="text-center animate-fade-in-up" style={{
              animationDelay: '0.3s'
            }}>
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white shadow-lg flex items-center justify-center" style={{
                boxShadow: '0 0 30px rgba(30, 58, 95, 0.15)'
              }}>
                  <Globe className="w-10 h-10 text-[#1e3a5f]" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl lg:text-2xl font-semibold mb-3 text-[#0d1f3a]" style={{
                fontFamily: 'Cormorant Garamond, serif'
              }}>
                  {whyChooseUs[2].title}
                </h3>
                <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                  {whyChooseUs[2].subtitle}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5 — GET STARTED */}
        <div id="get-started-section">
          <ContactCTASection />
        </div>
      </main>
      <Footer />
    </div>;
};
export default PatientJourney;