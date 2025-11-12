import { useState, useEffect } from "react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    headerHeight: isScrolled ? 'h-20 lg:h-24' : 'h-28 lg:h-32',
    logoSize: isScrolled ? 'h-12 lg:h-14' : 'h-20 lg:h-24',
  };

  const navItems = [
    { name: "About", path: "/about" },
    { name: "Procedures", path: "/procedures" },
    { name: "Before & Afters", path: "/gallery" },
    { name: "Patient Resources", path: "/patient-journey" },
    { name: "Contact", path: "/contact" },
    { name: "Want to learn surgery?", path: "/learn-surgery" },
  ];

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
                onClick={() => setIsMenuOpen(!isMenuOpen)}
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
              onClick={() => setIsMenuOpen(!isMenuOpen)}
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
        <nav className="flex flex-col items-end gap-6 p-8 sm:p-12 mt-16">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className="text-xl sm:text-2xl font-light text-gray-700 hover:text-black transition-colors"
              activeClassName="font-medium text-black"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </NavLink>
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
                BOOK NOW
              </NavLink>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
