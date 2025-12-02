import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { FaXTwitter, FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logoWhite from "@/assets/dr-karaaltin-logo-white.svg";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProceduresSubmenuOpen, setIsProceduresSubmenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState({
    code: 'en',
    label: 'English',
    flag: '🇬🇧'
  });

  const languages = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'zh', label: '中文', flag: '🇨🇳' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Colores dinámicos
  const colors = {
    bg: isScrolled ? 'bg-white shadow-md' : 'bg-transparent',
    text: isScrolled ? 'text-gray-900' : 'text-white',
    textMuted: isScrolled ? 'text-gray-600' : 'text-white/70',
    textHover: isScrolled ? 'hover:text-black' : 'hover:text-white',
    border: isScrolled ? 'border-gray-900' : 'border-white',
    line: isScrolled ? 'bg-gray-300' : 'bg-white/30',
    btnBg: isScrolled ? 'hover:bg-gray-900' : 'hover:bg-white',
    btnText: isScrolled ? 'hover:text-white' : 'hover:text-black',
    iconBg: isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white/10',
    iconColor: isScrolled ? '#000000' : '#FFFFFF',
    headerHeight: isScrolled ? 'h-16 lg:h-20' : 'h-20 lg:h-24',
    logoSize: isScrolled ? 'h-10 lg:h-12' : 'h-14 lg:h-16',
  };

  const navItems = [
    { name: "About", path: "/about" },
    { name: "Procedures", path: "/procedures", hasSubmenu: true },
    { name: "Before & Afters", path: "/gallery" },
    { name: "Contact", path: "/contact" },
    { name: "Patient Journey", path: "/patient-journey" },
    { name: "Want to Learn Surgery?", path: "/learn-surgery" },
  ];

  const procedureCategories = [
    { name: "FACE", id: "face" },
    { name: "BODY", id: "body" },
    { name: "BREAST", id: "breast" },
    { name: "NOSE", id: "nose" },
  ];

  const proceduresByCategory = {
    face: {
      withoutPage: [
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
      ],
      withPage: [
        { name: "The K Face Lift (Signature)", path: "/procedures/face/k-face-lift" },
        { name: "EndoChor® Face Lift (Signature)", path: "/procedures/face/endochor-face-lift" },
        { name: "K Endoscopic Deep Plane Face Lift (Signature)", path: "/procedures/face/k-endoscopic-deep-plane" },
      ]
    },
    body: {
      withoutPage: [
        "Body Lifting (Upper & Lower)",
        "360° Liposculpture",
        "Arm & Thigh Contouring",
        "Brazilian Butt Lift (BBL)",
        "Fat Transfer & Volume Enhancement",
      ],
      withPage: [
        { name: "Tummy Tuck", path: "/procedures/body/tummy-tuck" },
        { name: "Advanced Safe BBL™ (Signature)", path: "/procedures/body/advanced-safe-bbl" },
        { name: "Rib Cage Molding with Piezo Technology (Signature)", path: "/procedures/body/rib-cage-molding" },
      ]
    },
    breast: {
      withoutPage: [],
      withPage: [
        { name: "Breast Augmentation with Fat Grafting", path: "/procedures/breast/augmentation-fat-grafting" },
        { name: "Breast Augmentation with Implants", path: "/procedures/breast/augmentation-implants" },
        { name: "Breast Reduction", path: "/procedures/breast/reduction" },
        { name: "Breast Lift (Mastopexy)", path: "/procedures/breast/lift" },
        { name: "Gynecomastia", path: "/procedures/breast/gynecomastia" },
        { name: "Hybrid Augmentation (Implant + Fat)", path: "/procedures/breast/hybrid-augmentation" },
        { name: "Implant Removal", path: "/procedures/breast/implant-removal" },
        { name: "Inverted Nipple Repair", path: "/procedures/breast/inverted-nipple-repair" },
        { name: "Nipple & Areola Reduction", path: "/procedures/breast/nipple-areola-reduction" },
        { name: "K-Glide™ Breast Augmentation (Signature)", path: "/procedures/breast/k-glide" },
        { name: "Twirl Internal Bra Technique™ (Signature)", path: "/procedures/breast/twirl-internal-bra" },
        { name: "Smart BRA / Bloocell Scaffold (Signature)", path: "/procedures/breast/smart-bra" },
        { name: "Vibrasat Pro Technology (Signature)", path: "/procedures/breast/vibrasat-pro" },
      ]
    },
    nose: {
      withoutPage: [],
      withPage: [
        { name: "Rhinoplasty", path: "/procedures/nose/rhinoplasty" },
        { name: "Smart Template Rhinoplasty (Signature)", path: "/procedures/nose/smart-template-rhinoplasty" },
      ]
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${colors.bg}`}>
      <nav className="container mx-auto px-4 lg:px-8">
        <div className={`relative flex items-center justify-center transition-all duration-300 ${colors.headerHeight}`}>
          {/* Left: Social Icons ABOVE Decorative Line */}
          <div className="hidden lg:flex absolute left-0 flex-col items-start gap-3">
            {/* Iconos ARRIBA */}
            <div className="flex items-center gap-4">
              <a 
                href="https://twitter.com/drkaraaltinclinic" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`w-9 h-9 flex items-center justify-center rounded-sm transition-all ${colors.iconBg}`}
                aria-label="Twitter"
              >
                <FaXTwitter style={{ color: colors.iconColor }} className="w-5 h-5 transition-colors" />
              </a>
              <a 
                href="https://instagram.com/drkaraaltinclinic" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`w-9 h-9 flex items-center justify-center rounded-sm transition-all ${colors.iconBg}`}
                aria-label="Instagram"
              >
                <FaInstagram style={{ color: colors.iconColor }} className="w-5 h-5 transition-colors" />
              </a>
              <a 
                href="https://facebook.com/drkaraaltinclinic" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`w-9 h-9 flex items-center justify-center rounded-sm transition-all ${colors.iconBg}`}
                aria-label="Facebook"
              >
                <FaFacebookF style={{ color: colors.iconColor }} className="w-5 h-5 transition-colors" />
              </a>
              <a 
                href="https://linkedin.com/company/drkaraaltinclinic" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`w-9 h-9 flex items-center justify-center rounded-sm transition-all ${colors.iconBg}`}
                aria-label="LinkedIn"
              >
                <FaLinkedinIn style={{ color: colors.iconColor }} className="w-5 h-5 transition-colors" />
              </a>
              <a 
                href="https://youtube.com/@drkaraaltinclinic" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`w-9 h-9 flex items-center justify-center rounded-sm transition-all ${colors.iconBg}`}
                aria-label="YouTube"
              >
                <FaYoutube style={{ color: colors.iconColor }} className="w-5 h-5 transition-colors" />
              </a>
            </div>
            {/* Línea ABAJO - MUY LARGA */}
            <div className={`w-[280px] xl:w-[380px] h-[1px] ${colors.line} transition-colors duration-300`} />
          </div>

          {/* Center: Logo */}
          <NavLink to="/" className="flex items-center">
            <img 
              src={logoWhite} 
              alt="Dr. Karaaltın Logo" 
              className={`w-auto transition-all duration-500 ease-in-out ${colors.logoSize} ${isScrolled ? 'brightness-0' : ''}`}
            />
          </NavLink>

          {/* Right: Buttons ABOVE Decorative Line */}
          <div className="hidden lg:flex absolute right-0 flex-col items-end gap-3">
            {/* Botones ARRIBA */}
            <div className="flex items-center gap-4">
              {/* Language Switcher */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    className={`flex items-center gap-2 px-4 py-2 border-2 ${colors.border} rounded-sm bg-transparent ${colors.text} ${colors.btnBg} ${colors.btnText} transition-all`}
                  >
                    <Globe className="h-4 w-4" />
                    <span className="text-sm font-medium">{selectedLanguage.flag}</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => setSelectedLanguage(lang)}
                      className="cursor-pointer"
                    >
                      <span className="mr-2">{lang.flag}</span>
                      <span>{lang.label}</span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Button 
                variant="outline" 
                size="lg"
                className={`border-2 ${colors.border} bg-transparent ${colors.text} ${colors.btnBg} ${colors.btnText} transition-all px-6`}
                asChild
              >
                <NavLink to="/contact">
                  BOOK NOW
                </NavLink>
              </Button>
              
              <button
                className={`p-2 ${colors.text} transition-colors`}
                onClick={() => {
                  setIsMenuOpen(true);
                  if (location.pathname.startsWith('/procedures/')) {
                    setIsProceduresSubmenuOpen(true);
                  }
                }}
                aria-label="Toggle menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
            {/* Línea ABAJO - MUY LARGA */}
            <div className={`w-[220px] xl:w-[320px] h-[1px] ${colors.line} transition-colors duration-300`} />
          </div>

          {/* Mobile: Language + Book Now + Hamburger */}
          <div className="lg:hidden absolute right-0 flex items-center gap-3">
            {/* Language Switcher Mobile */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={`flex items-center gap-1 px-3 py-2 border-2 ${colors.border} rounded-sm bg-transparent ${colors.text} ${colors.btnBg} ${colors.btnText} transition-all`}
                >
                  <Globe className="h-4 w-4" />
                  <span className="text-sm">{selectedLanguage.flag}</span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setSelectedLanguage(lang)}
                    className="cursor-pointer"
                  >
                    <span className="mr-2">{lang.flag}</span>
                    <span>{lang.label}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button 
              variant="outline" 
              size="lg"
              className={`hidden md:inline-flex border-2 ${colors.border} bg-transparent ${colors.text} ${colors.btnBg} ${colors.btnText} transition-all px-6`}
              asChild
            >
              <NavLink to="/contact">
                BOOK NOW
              </NavLink>
            </Button>
            
            <button
              className={`p-2 ${colors.text} transition-colors`}
              onClick={() => {
                setIsMenuOpen(true);
                if (location.pathname.startsWith('/procedures/')) {
                  setIsProceduresSubmenuOpen(true);
                }
              }}
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay Backdrop */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Overlay Menu Panel */}
      <div className={`
        fixed top-0 right-0 h-full w-full sm:w-96 bg-white/95 backdrop-blur-lg 
        transform transition-transform duration-300 z-50
        ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        {/* Close Button */}
        <button 
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-6 text-gray-800 hover:text-black transition-colors"
          aria-label="Close menu"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Menu Items */}
        <nav className="flex flex-col items-start gap-6 p-8 sm:p-12 mt-16">
          {navItems.map((item, index) => (
            item.hasSubmenu ? (
              <button
                key={item.path}
                onClick={() => setIsProceduresSubmenuOpen(true)}
                className="text-xl sm:text-2xl font-light text-gray-700 hover:text-black hover:translate-x-2 transition-all duration-300 uppercase text-left"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <span className="inline-block animate-fade-in-left" style={{ animationDelay: `${index * 80}ms` }}>
                  {item.name}
                </span>
              </button>
            ) : (
              <NavLink
                key={item.path}
                to={item.path}
                className="text-xl sm:text-2xl font-light text-gray-700 hover:text-black hover:translate-x-2 transition-all duration-300 uppercase"
                activeClassName="font-medium text-black"
                onClick={() => setIsMenuOpen(false)}
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <span className="inline-block animate-fade-in-left" style={{ animationDelay: `${index * 80}ms` }}>
                  {item.name}
                </span>
              </NavLink>
            )
          ))}
          
          {/* Mobile Book Button in Menu */}
          <div className="mt-6 w-full">
            <Button 
              variant="outline" 
              size="lg"
              className="w-full border-2 border-black bg-transparent text-black hover:bg-black hover:text-white transition-all"
              asChild
            >
              <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>
                TALK TO SURGEON DIRECTLY
              </NavLink>
            </Button>
          </div>
          
          {/* Doctor Logo at bottom */}
          <div className="mt-8">
            <img 
              src={logoWhite} 
              alt="Dr. Karaaltın" 
              className="h-8 w-auto brightness-0 opacity-40"
            />
          </div>
        </nav>
      </div>

      {/* Procedures Mega Menu - Full View */}
      <div className={`
        fixed top-0 right-0 h-full w-full bg-white/95 backdrop-blur-lg 
        transform transition-all duration-300 z-[60] overflow-y-auto
        ${isProceduresSubmenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
      `}>
        {/* Back Button */}
        <button 
          onClick={() => setIsProceduresSubmenuOpen(false)}
          className="absolute top-6 right-6 text-gray-800 hover:text-black transition-colors flex items-center gap-2 text-sm uppercase tracking-wider"
          aria-label="Back to main menu"
        >
          <span>BACK</span>
          <span>→</span>
        </button>

        {/* Mega Menu Content */}
        <div className="p-8 sm:p-12 mt-16">
          <h3 className="text-xs uppercase tracking-widest text-gray-500 font-light mb-8">
            All Procedures
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-12">
            {procedureCategories.map((category) => (
              <div key={category.id} className="space-y-4">
                <NavLink
                  to={`/procedures/${category.id}`}
                  className="text-lg uppercase tracking-wide text-gray-900 mb-4 flex items-center gap-2 group hover:text-black transition-colors"
                  onClick={() => {
                    setIsProceduresSubmenuOpen(false);
                    setIsMenuOpen(false);
                  }}
                >
                  <h4 className="font-semibold">{category.name}</h4>
                  <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </NavLink>
                
                <div className="space-y-3">
                  {/* Procedures with pages - shown first */}
                  {proceduresByCategory[category.id as keyof typeof proceduresByCategory].withPage.map((procedure) => (
                    <NavLink
                      key={procedure.path}
                      to={procedure.path}
                      className="text-sm text-gray-700 hover:text-black transition-colors flex items-center gap-2 group"
                      onClick={() => {
                        setIsProceduresSubmenuOpen(false);
                        setIsMenuOpen(false);
                      }}
                    >
                      <span className="font-semibold">{procedure.name}</span>
                      <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    </NavLink>
                  ))}
                  
                  {/* Procedures without pages - shown after */}
                  {proceduresByCategory[category.id as keyof typeof proceduresByCategory].withoutPage.map((procedure) => (
                    <div key={procedure} className="text-sm text-gray-600">
                      {procedure}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
