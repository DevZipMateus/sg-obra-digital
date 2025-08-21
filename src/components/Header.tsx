
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#inicio', label: 'Início' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#equipamentos', label: 'Equipamentos' },
    { href: '#galeria', label: 'Galeria' },
    { href: '#contato', label: 'Contato' },
  ];

  return (
    <>
      {/* Top Info Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-industrial-black text-white py-1.5 text-xs sm:text-sm">
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="flex items-center gap-2 sm:gap-4">
            <a href="tel:+554299933287" className="hover:text-primary transition-colors flex items-center gap-1">
              <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="text-xs sm:text-sm">(42) 9993-3287</span>
            </a>
            <a href="mailto:sg.entulho.terraplenagem@gmail.com" className="hover:text-primary transition-colors items-center gap-1 hidden sm:flex">
              <Mail className="h-4 w-4" />
              <span className="text-sm">sg.entulho.terraplenagem@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="text-xs sm:text-sm">Ubiratã - PR</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`fixed top-8 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/90'
      }`}>
        <div className="container mx-auto px-4 py-1.5 sm:py-2 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            {!logoError ? (
              <img 
                src="/lovable-uploads/744207c2-cc70-4e4e-9bc1-712ea32976e6.png" 
                alt="SG Entulho e Terraplenagem" 
                className="h-10 sm:h-12 w-auto"
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className="text-lg sm:text-xl font-bold text-industrial-black">
                SG Entulho e Terraplenagem
              </div>
            )}
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navItems.map((item, index) => (
              <a key={index} href={item.href} className="hover:text-primary transition-colors text-sm lg:text-base">
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-industrial-black focus:outline-none">
            {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-md py-4">
            <nav className="flex flex-col items-center space-y-3">
              {navItems.map((item, index) => (
                <a key={index} href={item.href} className="hover:text-primary transition-colors block py-2 px-4">
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
