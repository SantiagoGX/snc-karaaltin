import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  details: string[];
  caption: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    id: "feb-2012",
    date: "February 2012",
    title: "World's Third Full Face Transplant & First Quadruple Limb Transplant",
    description: "As a core surgical team member at Hacettepe University, Ankara, Dr. Karaaltin participated in two historic procedures:",
    details: [
      "The world's third full face transplantation",
      "The first-ever quadruple limb transplant"
    ],
    caption: "Mr. Gul, the recipient of the world's third full face transplant, visiting Dr. Karaaltin three years post-surgery to express his gratitude."
  },
  {
    id: "mar-2014",
    date: "March 2014",
    title: "Innovation in Facial Paralysis Surgery",
    description: "Dr. Karaaltin pioneered and popularized the Free Extensor Digitorum Brevis and Extensor Hallucis Brevis Muscle Functional Transfer technique, offering a dynamic, natural solution for smile restoration in facial paralysis patients.",
    details: [],
    caption: "A demonstrative clip showing the versatility of Dr. Karaaltin's dynamic muscle transfer technique."
  },
  {
    id: "apr-2015",
    date: "April 2015",
    title: "Life-Saving Treatment of \"The Miracle Man\" Adem Kılıç",
    description: "Dr. Karaaltin led the complex reconstructive efforts that saved the life of a man with over 75% total body surface area burn injuries, widely regarded as a near-impossible case in modern medicine.",
    details: [],
    caption: "Mr. Adem Kılıç, known as \"The Miracle Man,\" visiting Dr. K after three years from the tragic accident that nearly took his life."
  },
  {
    id: "jun-2017",
    date: "June 2017",
    title: "Awarded Best Scientific Paper in Plastic Surgery",
    description: "Dr. Karaaltin's original contribution to reconstructive surgery received the Best Scientific Paper of the Month distinction in an internationally recognized plastic surgery journal.",
    details: [],
    caption: "Official letter announcing the award sent to Dr. Karaaltin's team for their groundbreaking research."
  },
  {
    id: "sep-2017",
    date: "September 2017",
    title: "Multi-Level Free Vascularized Lymph Node Transfer Popularized",
    description: "In a remarkable pediatric case, Dr. Karaaltin introduced and performed bilateral six-level vascularized lymph node transfer for lymphedema in a 14-year-old Romanian patient, setting a precedent in the field.",
    details: [],
    caption: "A screenshot from Turkish national media coverage showcasing the young Romanian patient during recovery."
  },
  {
    id: "jun-2022",
    date: "June 2022",
    title: "World Record: Fastest-Ever Separation of Conjoined Twins Using 3D Technology",
    description: "A world record was set as Professor Dr. Karaaltin and his surgical team successfully separated craniopagus conjoined twins from Algeria (Chefa & Safa) in under 9 hours using advanced 3D surgical planning.",
    details: [],
    caption: "Dr. Karaaltin visiting the Algerian twins, Chefa & Safa, after their groundbreaking separation surgery."
  },
  {
    id: "may-2023",
    date: "May 2023",
    title: "The First Kaplan Prize – Pioneering Lymphedema Surgery",
    description: "Dr. Karaaltin is honored with the First Kaplan Prize for his groundbreaking work in multi-level lymph node transfer, solidifying his global leadership in lymphedema surgery.",
    details: [],
    caption: "A visionary approach awarded with the highest distinction in the field."
  }
];

const TimelineSection = () => {
  const [activeEvent, setActiveEvent] = useState<string>(timelineEvents[0].id);
  
  const currentEvent = timelineEvents.find(event => event.id === activeEvent) || timelineEvents[0];

  return (
    <div className="float-in" style={{ animationDelay: "0.5s" }}>
      <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-4">
        Timeline of Landmark Achievements
      </h2>
      <p className="text-lg text-gray-600 italic mb-12">
        A curated journey of surgical innovation and global recognition by Professor Dr. Karaaltin
      </p>

      <div className="grid lg:grid-cols-[300px,1fr] gap-8">
        {/* Timeline Navigation - Left Side */}
        <div className="space-y-3">
          {timelineEvents.map((event, index) => (
            <Button
              key={event.id}
              onClick={() => setActiveEvent(event.id)}
              variant={activeEvent === event.id ? "default" : "outline"}
              className={`w-full justify-start text-left transition-all duration-300 h-auto py-4 px-6 ${
                activeEvent === event.id 
                  ? "bg-gradient-to-r from-primary to-gold text-white shadow-lg scale-105" 
                  : "hover:bg-gray-100 hover:scale-102"
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-start gap-3 w-full">
                <Calendar className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <div className={`text-sm font-semibold mb-1 ${
                    activeEvent === event.id ? "text-white" : "text-gold"
                  }`}>
                    {event.date}
                  </div>
                  <div className={`text-xs line-clamp-2 ${
                    activeEvent === event.id ? "text-white/90" : "text-gray-600"
                  }`}>
                    {event.title}
                  </div>
                </div>
              </div>
            </Button>
          ))}
        </div>

        {/* Content Display - Right Side */}
        <div className="relative">
          <div 
            key={currentEvent.id}
            className="bg-white border-2 border-gold/20 rounded-lg p-8 shadow-xl scale-up-luxury"
          >
            {/* Date Badge */}
            <div className="inline-block bg-gradient-to-r from-primary to-gold text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
              {currentEvent.date}
            </div>

            {/* Title */}
            <h3 className="text-3xl font-serif font-semibold text-gray-900 mb-6">
              {currentEvent.title}
            </h3>

            {/* Description */}
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {currentEvent.description}
            </p>

            {/* Details List */}
            {currentEvent.details.length > 0 && (
              <ul className="space-y-3 pl-6 mb-6">
                {currentEvent.details.map((detail, index) => (
                  <li key={index} className="list-disc text-lg text-gray-700">
                    The <strong>{detail}</strong>
                  </li>
                ))}
              </ul>
            )}

            {/* Caption */}
            <div className="mt-8 p-4 bg-gray-50 rounded-lg border-l-4 border-gold">
              <p className="text-sm text-gray-600 italic">
                {currentEvent.caption}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Legacy Section */}
      <div className="mt-16 p-8 bg-gradient-to-br from-gray-50 to-white rounded-lg border border-gray-200 shadow-md">
        <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
          Legacy of Excellence
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          This timeline reflects just a fragment of Professor Dr. Karaaltin's lifelong dedication to pioneering surgical breakthroughs, patient-centered care, and academic leadership across reconstructive and aesthetic surgery.
        </p>
      </div>
    </div>
  );
};

export default TimelineSection;
