import Header from "@/components/Header";
import Footer from "@/components/Footer";
import doctorPortrait from "@/assets/dr-karaaltin-portrait.jpg";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 blur-to-focus">
                <p className="text-gold text-sm uppercase tracking-[0.3em] font-light">
                  DR. KARA ALTIN
                </p>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light text-white leading-[1.1] tracking-wide">
                  PROFESSOR<br />
                  <span className="font-semibold">DR. KARAALTIN</span>
                </h1>
                <div className="h-px w-32 bg-gold/50"></div>
                <p className="text-xl md:text-2xl text-white/90 font-semibold">
                  Globally Renowned Plastic, Reconstructive & Aesthetic Surgeon
                </p>
                <p className="text-base text-white/70">
                  Triple Board-Certified | Innovator | Educator | Microvascular Pioneer
                </p>
                <div className="pt-4">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300"
                    asChild
                  >
                    <NavLink to="/contact">Schedule Consultation</NavLink>
                  </Button>
                </div>
              </div>

              <div className="relative scale-up-luxury" style={{ animationDelay: "0.3s" }}>
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-2xl">
                  <img
                    src={doctorPortrait}
                    alt="Professor Dr. Karaaltin - Renowned Plastic Surgeon"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Biography Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto space-y-16">
              
              {/* Global Journey */}
              <div className="float-in">
                <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-8">
                  A Global Journey Rooted in Excellence
                </h2>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Born in 1972 in <strong>Kirkuk, Iraq</strong>, Professor Dr. Karaaltin is a proud Turkish descendant. At just six months old, his family moved to the <strong>United States of America</strong>, where he spent his formative years completing his early education across <strong>West Lafayette, Indiana</strong>, and <strong>Orange County, Los Angeles</strong> (1976–1988).
                  </p>
                  <p>
                    In 1990, Dr. Karaaltin returned to Turkey to pursue his medical education. He graduated from <strong>Istanbul University, Cerrahpaşa Medical Faculty (English Program)</strong>, one of the most prestigious institutions in the country. Ranking <strong>12th out of 25,000</strong> in the National Medical Specialization Exam, he went on to complete a six-year residency in <strong>Plastic, Reconstructive & Aesthetic Surgery at Hacettepe University</strong>, Ankara—earning the <strong>Turkish Board Certification</strong> in this field.
                  </p>
                  <p>
                    In 2012, his excellence was recognized internationally when he became a <strong>Fellow of the European Board of Plastic Reconstructive & Aesthetic Surgery (EBOPRAS)</strong>, achieving full European accreditation.
                  </p>
                </div>
              </div>

              {/* Educator Section */}
              <div className="float-in" style={{ animationDelay: "0.1s" }}>
                <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-8">
                  Educator, Mentor, Leader
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  As a faculty member at <strong>Bezmialem and Acıbadem Universities</strong>, Dr. Karaaltin has taught hundreds of medical students and mentored numerous plastic surgeons who have gone on to become leaders in their field. His passion for education is matched only by his dedication to innovation.
                </p>
              </div>

              {/* Innovations Section */}
              <div className="float-in" style={{ animationDelay: "0.2s" }}>
                <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-8">
                  Innovations in Aesthetic Surgery
                </h2>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>Dr. Karaaltin is globally respected for his innovations in aesthetic surgery, particularly in:</p>
                  <ul className="space-y-4 pl-6">
                    <li className="list-disc">
                      <strong>Rhinoplasty</strong>: Co-editor and chapter contributor to <em>Advanced Aesthetic Rhinoplasty: Art, Science & New Techniques</em>, he also introduced the <strong>SMART Template</strong> for superior dorsum contouring, first unveiled in 2020 at the <strong>European Society of Rhinoplasty</strong> in Bergamo, Italy.
                    </li>
                    <li className="list-disc">
                      <strong>Facial Rejuvenation</strong>: Developer of the <strong>Four-Corner Concept</strong>, which integrates cellular therapy into facial anti-aging.
                    </li>
                    <li className="list-disc">
                      <strong>Regenerative Medicine</strong>: A pioneer in stem cell-based wound healing, burn management, and breast reconstruction. He serves on the <strong>Advisory Board of the Global Stem Cell Group</strong> (since 2018).
                    </li>
                  </ul>
                </div>
              </div>

              {/* Global Recognition */}
              <div className="float-in" style={{ animationDelay: "0.3s" }}>
                <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-8">
                  Global Recognition & Surgical Milestones
                </h2>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Dr. Karaaltin is a proud member of <strong>ISAPS (International Society of Aesthetic Plastic Surgeons)</strong> and a champion of ISAPS's <strong>Diamond Concept</strong>, which places patient safety at the forefront of aesthetic practice worldwide.
                  </p>
                  <p>He has performed groundbreaking surgeries including:</p>
                  <ul className="space-y-3 pl-6">
                    <li className="list-disc"><strong>World's Third Full Face Transplant</strong></li>
                    <li className="list-disc"><strong>First Quadruple Limb Transplant</strong></li>
                    <li className="list-disc">
                      <strong>World-Record Twin Separation</strong>: Led a 9-hour surgical separation of <strong>Thoraco-Omphalopagus conjoined twins</strong> using state-of-the-art 3D modeling and regenerative techniques.
                    </li>
                  </ul>
                  <p>
                    His expertise in <strong>microvascular free flap surgery</strong>, <strong>nerve transfers</strong>, and <strong>facial reanimation</strong> is world-renowned. He also authored definitive chapters on facial paralysis treatment in leading textbooks and continues to be a keynote speaker at global conferences.
                  </p>
                </div>

                {/* Sub-sections */}
                <div className="mt-12 space-y-8">
                  <div>
                    <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
                      Pushing Boundaries in Lymphatic Surgery
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      A current focus of Dr. Karaaltin's research and surgical work is on <strong>multi-level vascularized lymph node transfer</strong>, offering hope and advanced solutions for patients suffering from <strong>lymphatic obstruction</strong> and <strong>lymphedema</strong>.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
                      Advocate of Safety: Advanced Safe BBL
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Known for his dedication to patient safety, Dr. Karaaltin has established strict surgical protocols for high-demand procedures such as <strong>Brazilian Butt Lift (BBL)</strong>, coining the term <strong>Advanced Safe BBL</strong> to ensure optimal aesthetic results while minimizing risk.
                    </p>
                  </div>
                </div>
              </div>

              {/* Awards Section */}
              <div className="float-in" style={{ animationDelay: "0.4s" }}>
                <h3 className="text-3xl font-serif font-semibold text-gray-900 mb-6">
                  Awards & Honors
                </h3>
                <ul className="space-y-4 text-lg text-gray-700">
                  <li className="flex items-start">
                    <span className="text-gold mr-3 mt-1">★</span>
                    <span><strong>Best Experimental Paper (2017)</strong> – <em>Plastic & Reconstructive Surgery Journal</em></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-3 mt-1">★</span>
                    <span>Contributor to the UK Best-Seller Book on <strong>Modern Facial Rejuvenation Techniques</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-3 mt-1">★</span>
                    <span>Invited <strong>keynote speaker</strong> at leading international microsurgery and regenerative medicine symposia</span>
                  </li>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed mt-8">
                  Dr. Karaaltin is a <strong>devoted father of twins</strong> and the <strong>husband of the Vice Dean of Cerrahpaşa Medical Faculty</strong>. His life and career are a testament to dedication, innovation, and compassion.
                </p>
              </div>

              {/* Timeline Section */}
              <div className="float-in" style={{ animationDelay: "0.5s" }}>
                <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-4">
                  Timeline of Landmark Achievements
                </h2>
                <p className="text-lg text-gray-600 italic mb-12">
                  A curated journey of surgical innovation and global recognition by Professor Dr. Karaaltin
                </p>

                <div className="space-y-12">
                  {/* February 2012 */}
                  <div className="border-l-4 border-gold pl-8">
                    <p className="text-gold font-semibold mb-2">February 2012</p>
                    <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
                      World's Third Full Face Transplant & First Quadruple Limb Transplant
                    </h3>
                    <p className="text-gray-700 mb-4">
                      As a core surgical team member at Hacettepe University, Ankara, Dr. Karaaltin participated in two historic procedures:
                    </p>
                    <ul className="space-y-2 pl-6 text-gray-700 mb-4">
                      <li className="list-disc">The <strong>world's third full face transplantation</strong></li>
                      <li className="list-disc">The <strong>first-ever quadruple limb transplant</strong></li>
                    </ul>
                    <p className="text-sm text-gray-600 italic">
                      Mr. Gul, the recipient of the world's third full face transplant, visiting Dr. Karaaltin three years post-surgery to express his gratitude.
                    </p>
                  </div>

                  {/* March 2014 */}
                  <div className="border-l-4 border-gold pl-8">
                    <p className="text-gold font-semibold mb-2">March 2014</p>
                    <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
                      Innovation in Facial Paralysis Surgery
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Dr. Karaaltin pioneered and popularized the <strong>Free Extensor Digitorum Brevis and Extensor Hallucis Brevis Muscle Functional Transfer</strong> technique, offering a dynamic, natural solution for smile restoration in facial paralysis patients.
                    </p>
                    <p className="text-sm text-gray-600 italic">
                      "A demonstrative clip showing the versatility of Dr. Karaaltin's dynamic muscle transfer technique."
                    </p>
                  </div>

                  {/* April 2015 */}
                  <div className="border-l-4 border-gold pl-8">
                    <p className="text-gold font-semibold mb-2">April 2015</p>
                    <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
                      Life-Saving Treatment of "The Miracle Man" Adem Kılıç
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Dr. Karaaltin led the complex reconstructive efforts that saved the life of a man with over <strong>75% total body surface area burn injuries</strong>, widely regarded as a near-impossible case in modern medicine.
                    </p>
                    <p className="text-sm text-gray-600 italic">
                      Mr. Adem Kılıç, known as "The Miracle Man," visiting Dr. K after three years from the tragic accident that nearly took his life.
                    </p>
                  </div>

                  {/* June 2017 */}
                  <div className="border-l-4 border-gold pl-8">
                    <p className="text-gold font-semibold mb-2">June 2017</p>
                    <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
                      Awarded Best Scientific Paper in Plastic Surgery
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Dr. Karaaltin's original contribution to reconstructive surgery received the <strong>Best Scientific Paper of the Month</strong> distinction in an internationally recognized plastic surgery journal.
                    </p>
                    <p className="text-sm text-gray-600 italic">
                      Official letter announcing the award sent to Dr. Karaaltin's team for their groundbreaking research.
                    </p>
                  </div>

                  {/* September 2017 */}
                  <div className="border-l-4 border-gold pl-8">
                    <p className="text-gold font-semibold mb-2">September 2017</p>
                    <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
                      Multi-Level Free Vascularized Lymph Node Transfer Popularized
                    </h3>
                    <p className="text-gray-700 mb-4">
                      In a remarkable pediatric case, Dr. Karaaltin introduced and performed <strong>bilateral six-level vascularized lymph node transfer</strong> for lymphedema in a 14-year-old Romanian patient, setting a precedent in the field.
                    </p>
                    <p className="text-sm text-gray-600 italic">
                      A screenshot from Turkish national media coverage showcasing the young Romanian patient during recovery.
                    </p>
                  </div>

                  {/* June 2022 */}
                  <div className="border-l-4 border-gold pl-8">
                    <p className="text-gold font-semibold mb-2">June 2022</p>
                    <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
                      World Record: Fastest-Ever Separation of Conjoined Twins Using 3D Technology
                    </h3>
                    <p className="text-gray-700 mb-4">
                      A world record was set as Professor Dr. Karaaltin and his surgical team successfully separated <strong>craniopagus conjoined twins</strong> from Algeria (Chefa & Safa) in under <strong>9 hours</strong> using advanced <strong>3D surgical planning</strong>.
                    </p>
                    <p className="text-sm text-gray-600 italic">
                      Dr. Karaaltin visiting the Algerian twins, Chefa & Safa, after their groundbreaking separation surgery.
                    </p>
                  </div>

                  {/* May 2023 */}
                  <div className="border-l-4 border-gold pl-8">
                    <p className="text-gold font-semibold mb-2">May 2023</p>
                    <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
                      The First Kaplan Prize – Pioneering Lymphedema Surgery
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Dr. Karaaltin is honored with the <strong>First Kaplan Prize</strong> for his groundbreaking work in <strong>multi-level lymph node transfer</strong>, solidifying his global leadership in lymphedema surgery.
                    </p>
                    <p className="text-sm text-gray-600 italic">
                      "A visionary approach awarded with the highest distinction in the field."
                    </p>
                  </div>
                </div>

                <div className="mt-12 p-8 bg-gray-50 rounded-lg">
                  <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
                    Legacy of Excellence
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    This timeline reflects just a fragment of Professor Dr. Karaaltin's lifelong dedication to pioneering surgical breakthroughs, patient-centered care, and academic leadership across reconstructive and aesthetic surgery.
                  </p>
                </div>
              </div>

              {/* Meet Our Team */}
              <div className="float-in" style={{ animationDelay: "0.6s" }}>
                <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-8">
                  Meet Our Team
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  At the heart of our practice is a team of passionate, highly skilled professionals united by a single goal: to provide exceptional, patient-centered care from start to finish.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our multidisciplinary staff includes:
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="p-6 bg-gray-50 rounded-lg hover-lift">
                    <h4 className="text-xl font-serif font-semibold text-gray-900 mb-3">
                      Expert Patient Representatives
                    </h4>
                    <p className="text-gray-700">
                      Ready to guide you through every detail of your consultation, treatment planning, and scheduling with clarity and empathy.
                    </p>
                  </div>

                  <div className="p-6 bg-gray-50 rounded-lg hover-lift">
                    <h4 className="text-xl font-serif font-semibold text-gray-900 mb-3">
                      Specialized Private Nurses
                    </h4>
                    <p className="text-gray-700">
                      Offering one-on-one attentive care, ensuring your comfort, safety, and recovery both in clinic and at home.
                    </p>
                  </div>

                  <div className="p-6 bg-gray-50 rounded-lg hover-lift">
                    <h4 className="text-xl font-serif font-semibold text-gray-900 mb-3">
                      Medical Coordinators & Aftercare Specialists
                    </h4>
                    <p className="text-gray-700">
                      Available around the clock to answer questions and support your healing process with professionalism and compassion.
                    </p>
                  </div>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mt-8 text-center italic">
                  From your first inquiry to your final follow-up, we are by your side—delivering seamless care, personalized attention, and a truly boutique medical experience.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-gold reveal-center">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">
                Take the next step and schedule an appointment today
              </h2>
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6"
                asChild
              >
                <NavLink to="/contact">Schedule Consultation</NavLink>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
