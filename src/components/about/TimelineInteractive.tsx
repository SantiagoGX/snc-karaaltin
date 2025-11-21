import { useState, useEffect, useRef } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";
interface TimelineMilestone {
  id: number;
  date: string;
  title: string;
  description: string;
  image?: string;
  images?: string[];
  videoId?: string;
}
const milestones: TimelineMilestone[] = [{
  id: 1,
  date: "February 2012",
  title: "World's Third Full Face Transplant & First Quadruple Limb Transplant",
  description: "As a core surgical team member at Hacettepe University, Ankara, Dr. Karaaltin participated in two historic procedures: The world's third full face transplantation and the first-ever quadruple limb transplant.",
  image: "/timeline/feb-2012.png"
}, {
  id: 2,
  date: "March 2014",
  title: "Innovation in Facial Paralysis Surgery",
  description: "Dr. Karaaltin pioneered and popularized the Free Extensor Digitorum Brevis and Extensor Hallucis Brevis Muscle Functional Transfer technique, offering a dynamic, natural solution for smile restoration in facial paralysis patients.",
  videoId: "aV6aU76e_Ig"
}, {
  id: 3,
  date: "April 2015",
  title: "Life-Saving Treatment of 'The Miracle Man' Adem Kılıç",
  description: "Dr. Karaaltin led the complex reconstructive efforts that saved the life of a man with over 75% total body surface area burn injuries, widely regarded as a near-impossible case in modern medicine.",
  image: "/timeline/apr-2015.jpeg"
}, {
  id: 4,
  date: "June 2017",
  title: "Awarded Best Scientific Paper in Plastic Surgery",
  description: "Dr. Karaaltin's original contribution to reconstructive surgery received the Best Scientific Paper of the Month distinction in an internationally recognized plastic surgery journal.",
  images: ["/timeline/jun-2017-award.png", "/timeline/jun-2017-letter.png"]
}, {
  id: 5,
  date: "September 2017",
  title: "Multi-Level Free Vascularized Lymph Node Transfer Popularized",
  description: "In a remarkable pediatric case, Dr. Karaaltin introduced and performed bilateral six-level vascularized lymph node transfer for lymphedema in a 14-year-old Romanian patient, setting a precedent in the field.",
  image: "/timeline/sep-2017.jpg"
}, {
  id: 6,
  date: "June 2022",
  title: "Pioneering Conjoined Twin Separation Surgery",
  description: "Dr. Karaaltin successfully led the complex separation surgery of conjoined twins, demonstrating exceptional surgical expertise and compassionate post-operative care that resulted in both children thriving independently.",
  image: "/timeline/jun-2022.png"
}, {
  id: 7,
  date: "May 2023",
  title: "CAPLAN Prize for Lymphatic Surgery Excellence",
  description: "Awarded the prestigious CAPLAN First Prize at the 47th Congress of European Society of Lymphology for groundbreaking work on 'Multilevel Vascularized Lymph Node Transfers', cementing his position as a global leader in lymphatic microsurgery.",
  image: "/timeline/may-2023.png"
}];
export const TimelineInteractive = () => {
  const [videoOpen, setVideoOpen] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState<string>("");
  const [lineHeight, setLineHeight] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  const openVideo = (videoId: string) => {
    setCurrentVideoId(videoId);
    setVideoOpen(true);
  };
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
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <section className="py-16 lg:py-20 px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl lg:text-5xl font-light text-center mb-16 lg:mb-20 tracking-wide" style={{
        fontFamily: 'Cormorant Garamond, serif'
      }}>
          Timeline of Landmark Achievements
        </h2>

        {/* Timeline Container with Center Line */}
        <div className="relative" ref={timelineRef}>
          {/* Vertical Center Line - Background (gray) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2 hidden lg:block"></div>
          
          {/* Vertical Center Line - Animated (blue gradient) */}
          <div className="absolute left-1/2 top-0 w-0.5 -translate-x-1/2 hidden lg:block transition-all duration-300 ease-out" style={{
          height: `${lineHeight}%`,
          background: 'linear-gradient(180deg, #1e3a5f 0%, #4a6fa5 100%)',
          boxShadow: '0 0 10px rgba(30, 58, 95, 0.5)'
        }}></div>

          {/* Milestones */}
          <div className="space-y-20 lg:space-y-24">
            {milestones.map((milestone, index) => {
            const isEven = index % 2 === 0;
            return <div key={milestone.id} className="relative">
                  {/* Center Node (only visible on desktop) */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center z-10">
                    <div className="w-6 h-6 rounded-full border-4 border-white shadow-lg animate-pulse" style={{
                  backgroundColor: '#1e3a5f',
                  boxShadow: '0 0 0 4px rgba(30, 58, 95, 0.2), 0 0 20px rgba(30, 58, 95, 0.4)'
                }}></div>
                  </div>

                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center fade-in ${isEven ? 'slide-in-left' : 'slide-in-right'}`} style={{
                animationDelay: `${index * 0.15}s`
              }}>
                    {/* Image/Video Column */}
                    <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  {milestone.videoId ? <button onClick={() => openVideo(milestone.videoId!)} className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                      <img src={`https://img.youtube.com/vi/${milestone.videoId}/maxresdefault.jpg`} alt={milestone.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                        <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-[#1e3a5f] border-b-8 border-b-transparent ml-1"></div>
                        </div>
                      </div>
                    </button> : milestone.images ? <div className="grid grid-cols-2 gap-4">
                      {milestone.images.map((img, idx) => <img key={idx} src={img} alt={`${milestone.title} - ${idx + 1}`} className="w-full h-auto rounded-lg shadow-lg object-contain" />)}
                    </div> : <img src={milestone.image} alt={milestone.title} className="" />}
                </div>

                    {/* Text Column */}
                    <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                      {/* Date Badge with improved contrast */}
                      <div className="inline-block px-5 py-2.5 rounded-lg mb-4 text-xs uppercase tracking-widest font-semibold shadow-md hover:shadow-lg transition-all duration-300" style={{
                    background: 'linear-gradient(135deg, #1e3a5f 0%, #4a6fa5 100%)',
                    color: '#ffffff'
                  }}>
                        {milestone.date}
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl lg:text-3xl font-semibold mb-4 tracking-wide" style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    color: '#1e3a5f'
                  }}>
                        {milestone.title}
                      </h3>

                      {/* Description */}
                      <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>;
          })}
          </div>
        </div>

        {/* Legacy Section */}
        <div className="mt-20 lg:mt-24 text-center max-w-3xl mx-auto">
          <h3 className="text-3xl lg:text-4xl font-light mb-6 tracking-wide" style={{
          fontFamily: 'Cormorant Garamond, serif',
          color: '#1e3a5f'
        }}>
            Legacy of Excellence
          </h3>
          <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
            Each milestone reflects Dr. Karaaltin's unwavering commitment to advancing the field of plastic and reconstructive surgery. 
            His pioneering work continues to shape modern surgical techniques and improve patient outcomes worldwide.
          </p>
        </div>
      </div>

      {/* Video Modal */}
      <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black">
          <DialogTitle className="sr-only">Video Player</DialogTitle>
          <button onClick={() => setVideoOpen(false)} className="absolute top-4 right-4 z-50 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-colors duration-200">
            <X className="w-5 h-5 text-gray-900" />
          </button>
          <div className="aspect-video">
            <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${currentVideoId}?autoplay=1`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </section>;
};