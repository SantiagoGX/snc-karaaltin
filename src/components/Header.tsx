import { useState } from "react";
import { Menu, X, Facebook, Instagram, Youtube, Music, ArrowRight } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import logoWhite from "@/assets/dr-karaaltin-logo-white.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "About", path: "/about" },
    { name: "Procedures", path: "/procedures" },
    { name: "Before & Afters", path: "/gallery" },
    { name: "Patient Resources", path: "/patient-journey" },
    { name: "Contact", path: "/contact" },
    { name: "Want to learn surgery?", path: "/learn-surgery" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-3 items-center h-20 gap-4">
          {/* Left: Social Icons */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="https://facebook.com/drkaraaltinclinic" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="https://instagram.com/drkaraaltinclinic" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://youtube.com/@drkaraaltinclinic" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a 
              href="https://tiktok.com/@drkaraaltinclinic" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
              aria-label="TikTok"
            >
              <Music className="w-5 h-5" />
            </a>
          </div>

          {/* Center: Logo with Decorative Lines */}
          <div className="flex items-center justify-center gap-4 lg:gap-6">
            <div className="hidden lg:block w-16 xl:w-32 h-[1px] bg-white/30" />
            <NavLink to="/" className="flex items-center">
              <img 
                src={logoWhite} 
                alt="Dr. Karaaltın Logo" 
                className="h-10 lg:h-12 w-auto"
              />
            </NavLink>
            <div className="hidden lg:block w-16 xl:w-32 h-[1px] bg-white/30" />
          </div>

          {/* Right: Book Now Button + Hamburger */}
          <div className="flex items-center justify-end gap-3">
            <Button 
              variant="outline" 
              size="lg"
              className="hidden md:inline-flex border-2 border-white bg-transparent text-white hover:bg-white hover:text-black transition-all gap-2 px-6"
              asChild
            >
              <NavLink to="/contact">
                BOOK NOW
                <ArrowRight className="w-4 h-4" />
              </NavLink>
            </Button>
            
            <button
              className="p-2 text-white hover:text-white/80 transition-colors"
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
              className="w-full border-2 border-black bg-transparent text-black hover:bg-black hover:text-white transition-all gap-2"
              asChild
            >
              <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>
                BOOK NOW
                <ArrowRight className="w-4 h-4" />
              </NavLink>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
