import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa6";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import logoWhite from "@/assets/dr-karaaltin-logo-white.svg";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProceduresSubmenuOpen, setIsProceduresSubmenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showContactPopup, setShowContactPopup] = useState(false);
  const [selectedProcedureName, setSelectedProcedureName] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState({
    code: 'en',
    label: 'English',
    flag: 'EN'
  });

  const languages = [
    { code: 'en', label: 'English', flag: 'EN' },
    { code: 'tr', label: 'Türkçe', flag: 'TR' },
    { code: 'es', label: 'Español', flag: 'ES' },
    { code: 'zh', label: '中文', flag: '中' },
    { code: 'ar', label: 'العربية', flag: 'ع' }
  ];

  const handleLanguageChange = (lang: typeof languages[0]) => {
    setSelectedLanguage(lang);
    i18n.changeLanguage(lang.code);
  };

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
    headerHeight: isScrolled ? 'h-14 sm:h-16 lg:h-20' : 'h-16 sm:h-20 lg:h-24',
    logoSize: isScrolled ? 'h-8 sm:h-10 lg:h-12' : 'h-10 sm:h-14 lg:h-16',
  };

  const navItems = [
    { name: t('nav.about'), path: "/about" },
    { name: t('nav.procedures'), path: "/procedures", hasSubmenu: true },
    // Before & Afters - hidden for Turkish users
    ...(i18n.language !== 'tr' ? [{ name: t('nav.beforeAfters'), path: "/gallery" }] : []),
    { name: t('nav.contact'), path: "/contact" },
    { name: t('nav.patientJourney'), path: "/patient-journey" },
    { name: t('nav.learnSurgery'), path: "/learn-surgery" },
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
          {/* Left: Social Icons ABOVE Decorative Line - DESKTOP ONLY */}
          <div className="hidden lg:flex absolute left-0 flex-col items-start gap-3">
            {/* Iconos - Solo 3: Instagram, YouTube, WhatsApp */}
            <div className="flex items-center gap-4">
              <a 
                href="https://www.instagram.com/profdrk/" 
                target="_blank"
                rel="noopener noreferrer"
                className={`w-9 h-9 flex items-center justify-center rounded-sm transition-all ${colors.iconBg}`}
                aria-label="Instagram"
              >
                <FaInstagram style={{ color: colors.iconColor }} className="w-5 h-5 transition-colors" />
              </a>
              <a 
                href="https://www.youtube.com/@drkaraaltin" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`w-9 h-9 flex items-center justify-center rounded-sm transition-all ${colors.iconBg}`}
                aria-label="YouTube"
              >
                <FaYoutube style={{ color: colors.iconColor }} className="w-5 h-5 transition-colors" />
              </a>
              <a 
                href="https://api.whatsapp.com/send/?phone=905465533285&text&type=phone_number&app_absent=0" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`w-9 h-9 flex items-center justify-center rounded-sm transition-all ${colors.iconBg}`}
                aria-label="WhatsApp"
              >
                <FaWhatsapp style={{ color: colors.iconColor }} className="w-5 h-5 transition-colors" />
              </a>
            </div>
            {/* Línea ABAJO */}
            <div className={`w-[180px] xl:w-[240px] h-[1px] ${colors.line} transition-colors duration-300`} />
          </div>

          {/* Center: Logo */}
          <NavLink to="/" className="flex items-center">
            <img 
              src={logoWhite} 
              alt="Dr. Karaaltın Logo" 
              className={`w-auto transition-all duration-500 ease-in-out ${colors.logoSize} ${isScrolled ? 'brightness-0' : ''}`}
            />
          </NavLink>

          {/* Right: Buttons ABOVE Decorative Line - DESKTOP ONLY */}
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
                <DropdownMenuContent align="end" className="w-48 bg-white">
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang)}
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
                  {t('nav.bookNow')}
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
            {/* Línea ABAJO */}
            <div className={`w-[220px] xl:w-[320px] h-[1px] ${colors.line} transition-colors duration-300`} />
          </div>

          {/* Mobile: Language LEFT - Logo CENTER - Hamburger RIGHT */}
          {/* Left: Language Selector */}
          <div className="lg:hidden absolute left-2 flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={`flex items-center gap-1 px-1.5 py-1 border ${colors.border} rounded-sm bg-transparent ${colors.text} transition-all text-[10px] sm:text-xs sm:px-2 sm:py-1.5 sm:gap-1.5`}
                >
                  <Globe className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                  <span className="font-medium">{selectedLanguage.flag}</span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-40 bg-white">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang)}
                    className="cursor-pointer text-sm"
                  >
                    <span className="mr-2">{lang.flag}</span>
                    <span>{lang.label}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Right: Hamburger Menu */}
          <div className="lg:hidden absolute right-2 flex items-center">
            <button
              className={`p-1.5 sm:p-2 ${colors.text} transition-colors`}
              onClick={() => {
                setIsMenuOpen(true);
                if (location.pathname.startsWith('/procedures/')) {
                  setIsProceduresSubmenuOpen(true);
                }
              }}
              aria-label="Toggle menu"
            >
              <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
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
        transform transition-transform duration-300 z-50 overflow-y-auto
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
        <nav className="flex flex-col items-start gap-5 p-8 sm:p-12 mt-16">
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
          <div className="mt-4 w-full">
            <Button 
              variant="outline" 
              size="lg"
              className="w-full border-2 border-black bg-transparent text-black hover:bg-black hover:text-white transition-all text-xs sm:text-sm leading-tight py-3"
              asChild
            >
              <NavLink to="/contact" onClick={() => setIsMenuOpen(false)} className="whitespace-normal text-center">
                {t('nav.talkToSurgeon')}
              </NavLink>
            </Button>
          </div>

          {/* Language Selector - INSIDE HAMBURGER MENU */}
          <div className="mt-6 w-full">
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">{t('nav.language') || 'Language'}</p>
            <div className="flex gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang)}
                  className={`px-4 py-2 text-sm border rounded-sm transition-all ${
                    selectedLanguage.code === lang.code
                      ? 'bg-gray-900 text-white border-gray-900'
                      : 'bg-transparent text-gray-700 border-gray-300 hover:border-gray-900'
                  }`}
                >
                  {lang.flag}
                </button>
              ))}
            </div>
          </div>

          {/* Social Media Icons - INSIDE HAMBURGER MENU */}
          <div className="mt-6 w-full">
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">{t('nav.followUs') || 'Follow Us'}</p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/profdrk/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.youtube.com/@drkaraaltin" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all"
                aria-label="YouTube"
              >
                <FaYoutube className="w-5 h-5" />
              </a>
              <a 
                href="https://api.whatsapp.com/send/?phone=905465533285&text&type=phone_number&app_absent=0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-green-500 text-green-600 hover:bg-green-500 hover:text-white transition-all"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
            </div>
            <p className="text-xs text-gray-500 mt-2">WhatsApp: +90 546 553 32 85</p>
          </div>
          
          {/* Doctor Logo at bottom */}
          <div className="mt-6">
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

        {/* Procedures Content */}
        <div className="p-8 sm:p-12 mt-12">
          <h2 className="text-sm uppercase tracking-[0.3em] text-gray-400 font-light mb-8">
            {t('nav.procedures')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {procedureCategories.map((category) => (
              <div key={category.id} className="space-y-4">
                {/* Category Title - Clickable */}
                <NavLink
                  to={`/procedures/${category.id}`}
                  onClick={() => {
                    setIsProceduresSubmenuOpen(false);
                    setIsMenuOpen(false);
                  }}
                  className="text-lg font-semibold text-gray-900 hover:text-gray-600 transition-colors uppercase tracking-wide block"
                >
                  {category.name}
                </NavLink>
                
                {/* Procedures List */}
                <ul className="space-y-2">
                  {/* Procedures WITH pages - Bold with arrow */}
                  {proceduresByCategory[category.id as keyof typeof proceduresByCategory].withPage.map((procedure) => (
                    <li key={procedure.path}>
                      <NavLink
                        to={procedure.path}
                        onClick={() => {
                          setIsProceduresSubmenuOpen(false);
                          setIsMenuOpen(false);
                        }}
                        className="text-sm text-gray-700 hover:text-black transition-colors font-bold group flex items-center gap-1"
                      >
                        {procedure.name}
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                      </NavLink>
                    </li>
                  ))}
                  
                  {/* Procedures WITHOUT pages - Regular weight, opens popup */}
                  {proceduresByCategory[category.id as keyof typeof proceduresByCategory].withoutPage.map((procedure) => (
                    <li key={procedure}>
                      <button
                        onClick={() => {
                          setSelectedProcedureName(procedure);
                          setShowContactPopup(true);
                        }}
                        className="text-sm text-gray-600 hover:text-black transition-colors text-left"
                      >
                        {procedure}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Popup for procedures without pages */}
      <Dialog open={showContactPopup} onOpenChange={setShowContactPopup}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-serif">{selectedProcedureName}</DialogTitle>
            <DialogDescription className="text-gray-600 pt-2">
              For more information about this procedure, please contact Dr. Karaaltın's clinic directly to schedule a consultation.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-3 mt-4">
            <Button asChild className="w-full">
              <NavLink 
                to="/contact" 
                onClick={() => {
                  setShowContactPopup(false);
                  setIsProceduresSubmenuOpen(false);
                  setIsMenuOpen(false);
                }}
              >
                Contact Dr. Karaaltın
              </NavLink>
            </Button>
            <Button 
              variant="outline" 
              onClick={() => setShowContactPopup(false)}
              className="w-full"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </header>
  );
};

export default Header;
