import { useState, useEffect } from "react";
import { Menu, X, Facebook, Instagram, Youtube, Linkedin, Twitter } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import logoWhite from "@/assets/dr-karaaltin-logo-white.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
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
        <div className="relative flex items-center justify-center h-24 lg:h-28">
          {/* Left: Social Icons ABOVE Decorative Line */}
          <div className="hidden lg:flex absolute left-0 flex-col items-start gap-3">
            {/* Iconos ARRIBA */}
            <div className="flex items-center gap-4">
              <a 
                href="https://twitter.com/drkaraaltinclinic" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`w-9 h-9 flex items-center justify-center rounded-sm transition-all ${colors.textMuted} ${colors.iconBg}`}
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" fill="currentColor" strokeWidth={0} />
              </a>
              <a 
                href="https://instagram.com/drkaraaltinclinic" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`w-9 h-9 flex items-center justify-center rounded-sm transition-all ${colors.textMuted} ${colors.iconBg}`}
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" fill="currentColor" strokeWidth={0} />
              </a>
              <a 
                href="https://facebook.com/drkaraaltinclinic" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`w-9 h-9 flex items-center justify-center rounded-sm transition-all ${colors.textMuted} ${colors.iconBg}`}
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" fill="currentColor" strokeWidth={0} />
              </a>
              <a 
                href="https://linkedin.com/company/drkaraaltinclinic" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`w-9 h-9 flex items-center justify-center rounded-sm transition-all ${colors.textMuted} ${colors.iconBg}`}
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" fill="currentColor" strokeWidth={0} />
              </a>
              <a 
                href="https://youtube.com/@drkaraaltinclinic" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`w-9 h-9 flex items-center justify-center rounded-sm transition-all ${colors.textMuted} ${colors.iconBg}`}
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" fill="currentColor" strokeWidth={0} />
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
              className={`h-14 lg:h-16 w-auto transition-all duration-300 ${isScrolled ? 'brightness-0' : ''}`}
            />
          </NavLink>

          {/* Right: Buttons ABOVE Decorative Line */}
          <div className="hidden lg:flex absolute right-0 flex-col items-end gap-3">
            {/* Botones ARRIBA */}
            <div className="flex items-center gap-4">
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
            <div className={`w-[180px] xl:w-[280px] h-[1px] ${colors.line} transition-colors duration-300`} />
          </div>

          {/* Mobile: Book Now + Hamburger */}
          <div className="lg:hidden absolute right-0 flex items-center gap-3">
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
