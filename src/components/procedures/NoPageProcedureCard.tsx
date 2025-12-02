import { useState } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

interface NoPageProcedureCardProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  animationDelay?: string;
}

const NoPageProcedureCard = ({ 
  title, 
  imageSrc, 
  imageAlt,
  animationDelay = "0s"
}: NoPageProcedureCardProps) => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <div className="flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_30%] xl:flex-[0_0_23%]">
      <div 
        className="group relative h-[500px] overflow-hidden fade-in cursor-pointer"
        style={{ animationDelay }}
        onClick={() => setShowOverlay(true)}
      >
        <img 
          alt={imageAlt} 
          className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110 group-hover:scale-105" 
          src={imageSrc} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-500 group-hover:from-black/90 group-hover:via-black/60 pointer-events-none"></div>
        
        {/* Default Title */}
        <div className={`absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-500 ${showOverlay ? 'opacity-0' : 'group-hover:opacity-0 group-hover:translate-y-4'} pointer-events-none`}>
          <div className="min-h-[80px] flex items-end">
            <h3 className="font-serif font-semibold text-2xl leading-tight">{title}</h3>
          </div>
        </div>

        {/* Contact Overlay */}
        <div 
          className={`absolute inset-0 bg-gradient-to-t from-[#0d1f3a] via-[#0d1f3a]/95 to-[#0d1f3a]/90 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center transition-all duration-500 ${
            showOverlay 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setShowOverlay(false);
            }}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 text-white"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Content */}
          <div className="max-w-[280px] space-y-4">
            <h3 className="font-serif font-semibold text-xl text-white leading-tight">
              {title}
            </h3>
            
            <div className="w-12 h-px bg-white/30 mx-auto"></div>
            
            <p className="text-white/80 text-sm leading-relaxed">
              To learn more about this procedure and view before & after results, please schedule a consultation with Dr. Karaaltın.
            </p>
            
            <Link 
              to="/contact"
              onClick={(e) => e.stopPropagation()}
              className="inline-block mt-4 px-6 py-3 bg-white text-gray-900 text-xs uppercase tracking-widest font-medium rounded hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              Contact Dr. Karaaltın
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoPageProcedureCard;
