import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Procedures", path: "/procedures" },
    { name: "Gallery", path: "/gallery" },
    { name: "Patient Journey", path: "/patient-journey" },
    { name: "Learn Surgery", path: "/learn-surgery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-serif font-bold text-foreground">
              Dr. Karaaltın
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
                activeClassName="text-foreground font-semibold"
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex">
            <Button variant="default" size="lg" asChild>
              <NavLink to="/contact">Book Consultation</NavLink>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className="text-base font-medium text-foreground/70 hover:text-foreground transition-colors px-4 py-2"
                  activeClassName="text-foreground font-semibold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
              <div className="px-4 pt-2">
                <Button variant="default" size="lg" className="w-full" asChild>
                  <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>
                    Book Consultation
                  </NavLink>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
