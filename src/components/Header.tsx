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
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    const savedCode = localStorage.getItem('i18n-lang') || 'en';
    const found = [
      { code: 'en', label: 'English', flag: 'EN' },
      { code: 'tr', label: 'Türkçe', flag: 'TR' },
      { code: 'es', label: 'Español', flag: 'ES' },
      { code: 'zh', label: '中文', flag: '中' },
      { code: 'ar', label: 'العربية', flag: 'ع' }
    ].find(l => l.code === savedCode);
    return found || { code: 'en', label: 'English', flag: 'EN' };
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
    localStorage.setItem('i18n-lang', lang.code);
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
    { name: t('hamburgerMenu.categories.face'), id: "face" },
    { name: t('hamburgerMenu.categories.body'), id: "body" },
    { name: t('hamburgerMenu.categories.breast'), id: "breast" },
    { name: t('hamburgerMenu.categories.nose'), id: "nose" },
  ];

  const proceduresByCategory = {
    face: {
      withoutPage: [
        t('hamburgerMenu.procedures.face.miniFacelift'),
        t('hamburgerMenu.procedures.face.purseStringVertical'),
        t('hamburgerMenu.procedures.face.subperiostealDeepPlane'),
        t('hamburgerMenu.procedures.face.macsLift'),
        t('hamburgerMenu.procedures.face.endochorAssisted'),
        t('hamburgerMenu.procedures.face.highSmas'),
        t('hamburgerMenu.procedures.face.allInOne'),
        t('hamburgerMenu.procedures.face.ponytailLift'),
        t('hamburgerMenu.procedures.face.endoscopicBrow'),
        t('hamburgerMenu.procedures.face.blepharoplasty'),
        t('hamburgerMenu.procedures.face.facialImplants'),
        t('hamburgerMenu.procedures.face.genioplasty'),
        t('hamburgerMenu.procedures.face.orthognathic'),
      ],
      withPage: [
        { name: t('hamburgerMenu.procedures.face.kFaceLift'), path: "/procedures/face/k-face-lift" },
        { name: t('hamburgerMenu.procedures.face.endochorFaceLift'), path: "/procedures/face/endochor-face-lift" },
        { name: t('hamburgerMenu.procedures.face.kEndoscopic'), path: "/procedures/face/k-endoscopic-deep-plane" },
      ]
    },
    body: {
      withoutPage: [
        t('hamburgerMenu.procedures.body.bodyLifting'),
        t('hamburgerMenu.procedures.body.liposculpture360'),
        t('hamburgerMenu.procedures.body.armThighContouring'),
        t('hamburgerMenu.procedures.body.brazilianButtLift'),
        t('hamburgerMenu.procedures.body.fatTransfer'),
      ],
      withPage: [
        { name: t('hamburgerMenu.procedures.body.tummyTuck'), path: "/procedures/body/tummy-tuck" },
        { name: t('hamburgerMenu.procedures.body.advancedSafeBBL'), path: "/procedures/body/advanced-safe-bbl" },
        { name: t('hamburgerMenu.procedures.body.ribCageMolding'), path: "/procedures/body/rib-cage-molding" },
      ]
    },
    breast: {
      withoutPage: [],
      withPage: [
        { name: t('hamburgerMenu.procedures.breast.augmentationFat'), path: "/procedures/breast/augmentation-fat-grafting" },
        { name: t('hamburgerMenu.procedures.breast.augmentationImplants'), path: "/procedures/breast/augmentation-implants" },
        { name: t('hamburgerMenu.procedures.breast.reduction'), path: "/procedures/breast/reduction" },
        { name: t('hamburgerMenu.procedures.breast.lift'), path: "/procedures/breast/lift" },
        { name: t('hamburgerMenu.procedures.breast.gynecomastia'), path: "/procedures/breast/gynecomastia" },
        { name: t('hamburgerMenu.procedures.breast.hybridAugmentation'), path: "/procedures/breast/hybrid-augmentation" },
        { name: t('hamburgerMenu.procedures.breast.implantRemoval'), path: "/procedures/breast/implant-removal" },
        { name: t('hamburgerMenu.procedures.breast.invertedNipple'), path: "/procedures/breast/inverted-nipple-repair" },
        { name: t('hamburgerMenu.procedures.breast.nippleAreola'), path: "/procedures/breast/nipple-areola-reduction" },
        { name: t('hamburgerMenu.procedures.breast.kGlide'), path: "/procedures/breast/k-glide" },
        { name: t('hamburgerMenu.procedures.breast.twirlBra'), path: "/procedures/breast/twirl-internal-bra" },
        { name: t('hamburgerMenu.procedures.breast.smartBra'), path: "/procedures/breast/smart-bra" },
        { name: t('hamburgerMenu.procedures.breast.vibrasatPro'), path: "/procedures/breast/vibrasat-pro" },
      ]
    },
    nose: {
      withoutPage: [],
      withPage: [
        { name: t('hamburgerMenu.procedures.nose.rhinoplasty'), path: "/procedures/nose/rhinoplasty" },
        { name: t('hamburgerMenu.procedures.nose.smartTemplate'), path: "/procedures/nose/smart-template-rhinoplasty" },
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
          <span>{t('hamburgerMenu.back')}</span>
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
              {t('hamburgerMenu.procedurePopupDesc')}
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
                {t('hamburgerMenu.contactButton')}
              </NavLink>
            </Button>
            <Button 
              variant="outline" 
              onClick={() => setShowContactPopup(false)}
              className="w-full"
            >
              {t('hamburgerMenu.close')}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </header>
  );
};

export default Header;
