import { useState, useEffect, useRef } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { X, Play } from "lucide-react";
import { useTranslation } from "react-i18next";

interface TimelineMilestone {
  id: number;
  dateKey: string;
  titleKey: string;
  descriptionKey: string;
  image?: string;
  images?: string[];
  videoId?: string;
}

const milestones: TimelineMilestone[] = [
  {
    id: 1,
    dateKey: "timeline.milestone1.date",
    titleKey: "timeline.milestone1.title",
    descriptionKey: "timeline.milestone1.description",
    image: "/timeline/feb-2012.jpg"
  },
  {
    id: 2,
    dateKey: "timeline.milestone2.date",
    titleKey: "timeline.milestone2.title",
    descriptionKey: "timeline.milestone2.description",
    videoId: "aV6aU76e_Ig"
  },
  {
    id: 3,
    dateKey: "timeline.milestone3.date",
    titleKey: "timeline.milestone3.title",
    descriptionKey: "timeline.milestone3.description",
    image: "/timeline/apr-2015.jpg"
  },
  {
    id: 4,
    dateKey: "timeline.milestone4.date",
    titleKey: "timeline.milestone4.title",
    descriptionKey: "timeline.milestone4.description",
    images: ["/timeline/jun-2017-award.png", "/timeline/jun-2017-letter.png"]
  },
  {
    id: 5,
    dateKey: "timeline.milestone5.date",
    titleKey: "timeline.milestone5.title",
    descriptionKey: "timeline.milestone5.description",
    image: "/timeline/sep-2017.jpg"
  },
  {
    id: 6,
    dateKey: "timeline.milestone6.date",
    titleKey: "timeline.milestone6.title",
    descriptionKey: "timeline.milestone6.description",
    image: "/timeline/jun-2022.png"
  },
  {
    id: 7,
    dateKey: "timeline.milestone7.date",
    titleKey: "timeline.milestone7.title",
    descriptionKey: "timeline.milestone7.description",
    image: "/timeline/may-2023.png"
  }
];

export const TimelineInteractive = () => {
  const { t } = useTranslation();
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
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-16 lg:py-20 px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl lg:text-5xl font-light text-center mb-16 lg:mb-20 tracking-wide" style={{
          fontFamily: 'Cormorant Garamond, serif'
        }}>
          {t('timeline.sectionTitle')}
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
              return (
                <div key={milestone.id} className="relative">
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
                      {milestone.videoId ? (
                        <button onClick={() => openVideo(milestone.videoId!)} className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                          <img src={`https://img.youtube.com/vi/${milestone.videoId}/maxresdefault.jpg`} alt={t(milestone.titleKey)} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                            <div className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                              <Play className="w-10 h-10 text-[#1e3a5f] fill-[#1e3a5f] ml-1" />
                            </div>
                          </div>
                        </button>
                      ) : milestone.images ? (
                        <div className="grid grid-cols-2 gap-4">
                          {milestone.images.map((img, idx) => (
                            <img key={idx} src={img} alt={`${t(milestone.titleKey)} - ${idx + 1}`} className="w-full h-auto rounded-lg shadow-lg object-contain" />
                          ))}
                        </div>
                      ) : (
                        <img src={milestone.image} alt={t(milestone.titleKey)} className="" />
                      )}
                    </div>

                    {/* Text Column */}
                    <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                      {/* Date Badge with improved contrast */}
                      <div className="inline-block px-5 py-2.5 rounded-lg mb-4 text-xs uppercase tracking-widest font-semibold shadow-md hover:shadow-lg transition-all duration-300" style={{
                        background: 'linear-gradient(135deg, #1e3a5f 0%, #4a6fa5 100%)',
                        color: '#ffffff'
                      }}>
                        {t(milestone.dateKey)}
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl lg:text-3xl font-semibold mb-4 tracking-wide" style={{
                        fontFamily: 'Cormorant Garamond, serif',
                        color: '#1e3a5f'
                      }}>
                        {t(milestone.titleKey)}
                      </h3>

                      {/* Description */}
                      <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                        {t(milestone.descriptionKey)}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Legacy Section */}
        <div className="mt-20 lg:mt-24 text-center max-w-3xl mx-auto">
          <h3 className="text-3xl lg:text-4xl font-light mb-6 tracking-wide" style={{
            fontFamily: 'Cormorant Garamond, serif',
            color: '#1e3a5f'
          }}>
            {t('timeline.legacyTitle')}
          </h3>
          <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
            {t('timeline.legacyDescription')}
          </p>
        </div>
      </div>

      {/* Video Modal */}
      <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black">
          <DialogTitle className="sr-only">{t('timeline.videoPlayer')}</DialogTitle>
          <button onClick={() => setVideoOpen(false)} className="absolute top-4 right-4 z-50 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-colors duration-200">
            <X className="w-5 h-5 text-gray-900" />
          </button>
          <div className="aspect-video">
            <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${currentVideoId}?autoplay=1`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};
