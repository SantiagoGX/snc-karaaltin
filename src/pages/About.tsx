import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { TimelineInteractive } from "@/components/about/TimelineInteractive";
import { Link } from "react-router-dom";
import { Award, Heart, Users } from "lucide-react";
const About = () => {
  return <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section - Hakimi Style */}
      <section className="relative min-h-[70vh] flex items-center pt-20 overflow-hidden" style={{
      backgroundColor: '#1e3a5f'
    }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-8 lg:gap-12 items-center">
            {/* Left Column - Text */}
            <div className="text-white space-y-6 blur-to-focus">
              <p className="text-xs uppercase tracking-[0.3em] text-gold font-light">
                PROFESSOR • SURGEON • INNOVATOR
              </p>
              <h1 className="text-5xl lg:text-6xl font-light tracking-wide" style={{
              fontFamily: 'Cormorant Garamond, serif'
            }}>
                Professor Doctor Karaaltin
              </h1>
              <p className="text-lg lg:text-xl font-light leading-relaxed opacity-90">
                Globally Renowned Plastic & Reconstructive Surgeon
              </p>
              <Link to="/contact">
                
              </Link>
            </div>

            {/* Right Column - Image with Shape */}
            <div className="relative flex justify-center items-end lg:justify-end">
              {/* Background Shape - Solid, extends to bottom */}
              <div className="absolute w-[280px] lg:w-[350px] rounded-lg bottom-0" style={{
              backgroundColor: '#0d1f3a',
              height: 'calc(100% - 95px)',
              maxHeight: '405px'
            }}></div>
              
              {/* Doctor Image */}
              <img src="/doctor-main.png" alt="Professor Doctor Karaaltin" className="relative z-10 w-[300px] h-auto lg:w-[380px] max-h-[500px] object-contain drop-shadow-2xl float-in block" style={{
              animationDelay: '0.2s',
              display: 'block',
              marginBottom: '-2px'
            }} />
            </div>
          </div>
        </div>
      </section>

      {/* Biography Section - Hakimi Style Grid Layout */}
      <section className="py-16 lg:py-20 px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* A Global Journey */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-12 fade-in-up">
            <div>
              <h2 className="text-2xl lg:text-3xl font-light tracking-wide sticky top-24" style={{
              fontFamily: 'Cormorant Garamond, serif',
              color: '#1e3a5f'
            }}>
                Global Journey
              </h2>
            </div>
            <div className="space-y-4">
              <p className="text-base text-gray-700 leading-relaxed">
                Born in 1972 in <strong>Kirkuk, Iraq</strong>, Professor Dr. Karaaltin is a proud Turkish descendant. At just six months old, his family moved to the <strong>United States of America</strong>, where he spent his formative years completing his early education across <strong>West Lafayette, Indiana</strong>, and <strong>Orange County, Los Angeles</strong> (1976–1988).
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                In 1990, Dr. Karaaltin returned to Turkey to pursue his medical education. He graduated from <strong>Istanbul University, Cerrahpaşa Medical Faculty (English Program)</strong>, one of the most prestigious institutions in the country. Ranking <strong>12th out of 25,000</strong> in the National Medical Specialization Exam, he went on to complete a six-year residency in <strong>Plastic, Reconstructive & Aesthetic Surgery at Hacettepe University</strong>, Ankara—earning the <strong>Turkish Board Certification</strong> in this field.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                In 2012, his excellence was recognized internationally when he became a <strong>Fellow of the European Board of Plastic Reconstructive & Aesthetic Surgery (EBOPRAS)</strong>, achieving full European accreditation.
              </p>
              
            </div>
          </div>

          {/* Educator & Leader */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-12 fade-in-up" style={{
          animationDelay: '0.1s'
        }}>
            <div>
              <h2 className="text-2xl lg:text-3xl font-light tracking-wide sticky top-24" style={{
              fontFamily: 'Cormorant Garamond, serif',
              color: '#1e3a5f'
            }}>
                Educator & Leader
              </h2>
            </div>
            <div className="space-y-4">
              <p className="text-base text-gray-700 leading-relaxed">
                As a faculty member at <strong>Bezmialem and Acıbadem Universities</strong>, Dr. Karaaltin has taught hundreds of medical students and mentored numerous plastic surgeons who have gone on to become leaders in their field. His passion for education is matched only by his dedication to innovation.
              </p>
              <img alt="Dr. Karaaltin speaking at international conference" src="/lovable-uploads/53f0c56b-6d93-40c2-ab6d-6c6fb9d21272.jpg" className="w-full max-w-md rounded-lg shadow-md mt-6 object-fill" />
            </div>
          </div>

          {/* Innovations */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-12 fade-in-up" style={{
          animationDelay: '0.2s'
        }}>
            <div>
              <h2 className="text-2xl lg:text-3xl font-light tracking-wide sticky top-24" style={{
              fontFamily: 'Cormorant Garamond, serif',
              color: '#1e3a5f'
            }}>
                Innovations
              </h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Rhinoplasty</h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  Co-editor and chapter contributor to <em>Advanced Aesthetic Rhinoplasty: Art, Science & New Techniques</em>, he also introduced the <strong>SMART Template</strong> for superior dorsum contouring, first unveiled in 2020 at the <strong>European Society of Rhinoplasty</strong> in Bergamo, Italy.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Facial Rejuvenation</h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  Developer of the <strong>Four-Corner Concept</strong>, which integrates cellular therapy into facial anti-aging.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Regenerative Medicine</h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  A pioneer in stem cell-based wound healing, burn management, and breast reconstruction. He serves on the <strong>Advisory Board of the Global Stem Cell Group</strong> (since 2018).
                </p>
              </div>
              <img alt="Dr. Karaaltin performing surgery" className="w-full max-w-sm rounded-lg shadow-md mt-6" src="/lovable-uploads/8e8ea3c9-3698-4132-993e-2151810b1680.png" />
            </div>
          </div>

          {/* Global Recognition */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-12 fade-in-up" style={{
          animationDelay: '0.3s'
        }}>
            <div>
              <h2 className="text-2xl lg:text-3xl font-light tracking-wide sticky top-24" style={{
              fontFamily: 'Cormorant Garamond, serif',
              color: '#1e3a5f'
            }}>
                Global Recognition
              </h2>
            </div>
            <div className="space-y-4">
              <p className="text-base text-gray-700 leading-relaxed">
                Dr. Karaaltin is a proud member of <strong>ISAPS (International Society of Aesthetic Plastic Surgeons)</strong> and a champion of ISAPS's <strong>Diamond Concept</strong>, which places patient safety at the forefront of aesthetic practice worldwide.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                He has performed groundbreaking surgeries including <strong>World's Third Full Face Transplant</strong>, <strong>First Quadruple Limb Transplant</strong>, and <strong>World-Record Twin Separation</strong>: Led a 9-hour surgical separation of <strong>Thoraco-Omphalopagus conjoined twins</strong> using state-of-the-art 3D modeling and regenerative techniques.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                His expertise in <strong>microvascular free flap surgery</strong>, <strong>nerve transfers</strong>, and <strong>facial reanimation</strong> is world-renowned. He also authored definitive chapters on facial paralysis treatment in leading textbooks and continues to be a keynote speaker at global conferences.
              </p>
              <img src="/doctor-surgery-team.jpeg" alt="Dr. Karaaltin with surgical team" className="w-full rounded-lg shadow-md mt-6" />
            </div>
          </div>

          {/* Lymphatic Surgery */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-12 fade-in-up" style={{
          animationDelay: '0.4s'
        }}>
            <div>
              <h2 className="text-2xl lg:text-3xl font-light tracking-wide sticky top-24" style={{
              fontFamily: 'Cormorant Garamond, serif',
              color: '#1e3a5f'
            }}>
                Pushing Boundaries
              </h2>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Lymphatic Surgery</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                A current focus of Dr. Karaaltin's research and surgical work is on <strong>multi-level vascularized lymph node transfer</strong>, offering hope and advanced solutions for patients suffering from <strong>lymphatic obstruction</strong> and <strong>lymphedema</strong>.
              </p>
            </div>
          </div>

          {/* Advanced Safe BBL */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-12 fade-in-up" style={{
          animationDelay: '0.5s'
        }}>
            <div>
              <h2 className="text-2xl lg:text-3xl font-light tracking-wide sticky top-24" style={{
              fontFamily: 'Cormorant Garamond, serif',
              color: '#1e3a5f'
            }}>
                Advocate of Safety
              </h2>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Advanced Safe BBL</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Known for his dedication to patient safety, Dr. Karaaltin has established strict surgical protocols for high-demand procedures such as <strong>Brazilian Butt Lift (BBL)</strong>, coining the term <strong>Advanced Safe BBL</strong> to ensure optimal aesthetic results while minimizing risk.
              </p>
            </div>
          </div>

          {/* Awards */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-12 fade-in-up" style={{
          animationDelay: '0.6s'
        }}>
            <div>
              <h2 className="text-2xl lg:text-3xl font-light tracking-wide sticky top-24" style={{
              fontFamily: 'Cormorant Garamond, serif',
              color: '#1e3a5f'
            }}>
                Awards
              </h2>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                <p className="text-base text-gray-700">Best Experimental Paper (2017) – <em>Plastic & Reconstructive Surgery Journal</em></p>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                <p className="text-base text-gray-700">Contributor to the UK Best-Seller Book on Modern Facial Rejuvenation Techniques</p>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                <p className="text-base text-gray-700">Invited keynote speaker at leading international microsurgery and regenerative medicine symposia</p>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                <p className="text-base text-gray-700">CAPLAN First Prize, European Society of Lymphology (2023)</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Timeline Section */}
      <TimelineInteractive />

      {/* Meet Our Team Section */}
      <section className="pt-8 lg:pt-12 px-8 lg:px-16 bg-white pb-0">
        <div className="max-w-7xl mx-auto pb-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-3 items-stretch pb-0">
            {/* Doctor Image - Left */}
            <div className="relative pb-0 mb-0 flex items-end">
              <img alt="Dr. Karaaltin" className="w-3/5 h-full object-contain object-bottom block" src="/lovable-uploads/cebf52b8-039c-4864-9a30-7c1ada4fefcc.png" />
            </div>

            {/* Content - Right */}
            <div className="space-y-6 pb-8 lg:pb-12 flex flex-col">
              <h2 className="text-2xl lg:text-3xl font-bold mb-8 tracking-wide" style={{
                fontFamily: 'Cormorant Garamond, serif',
                color: '#1e3a5f'
              }}>
                Meet Our Team
              </h2>

              <div className="flex items-start gap-6 fade-in-up">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300" style={{
                boxShadow: '0 10px 30px -10px rgba(59, 130, 246, 0.5)'
              }}>
                  <Users className="w-7 h-7 text-white" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-gray-900">Patient Representatives</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Our multilingual team guides you through every step of your journey.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 fade-in-up" style={{
              animationDelay: '0.1s'
            }}>
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300" style={{
                boxShadow: '0 10px 30px -10px rgba(59, 130, 246, 0.5)'
              }}>
                  <Heart className="w-7 h-7 text-white" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-gray-900">Dedicated Nurses</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Experienced surgical nurses provide compassionate care throughout your recovery.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 fade-in-up" style={{
              animationDelay: '0.2s'
            }}>
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300" style={{
                boxShadow: '0 10px 30px -10px rgba(59, 130, 246, 0.5)'
              }}>
                  <Award className="w-7 h-7 text-white" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-gray-900">Medical Coordinators</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Expert coordinators handle all logistics, from travel to accommodation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-8 lg:px-16 text-center text-white" style={{
      backgroundColor: '#1e3a5f'
    }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-light mb-4 tracking-wide" style={{
          fontFamily: 'Cormorant Garamond, serif'
        }}>
            Ready to Begin Your Journey?
          </h2>
          <p className="text-lg mb-6 opacity-90">
            Schedule a consultation with Professor Dr. Karaaltin to discuss your goals and learn how we can help you achieve them.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="outline" className="text-[#1e3a5f] bg-white border-white hover:bg-[#1e3a5f] hover:text-white uppercase tracking-widest text-xs">
              Book Consultation
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>;
};
export default About;