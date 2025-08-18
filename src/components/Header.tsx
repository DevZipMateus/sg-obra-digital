
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { href: '#inicio', label: 'Início' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#equipamentos', label: 'Equipamentos' },
    { href: '#contato', label: 'Contato' },
  ];

  const handleMenuClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-industrial border-b border-border' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          {/* Top Bar */}
          <div className="hidden md:flex items-center justify-between py-2 text-sm border-b border-border/20">
            <div className="flex items-center gap-6 text-industrial-gray">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>(44) 9 9990-0681</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>sucatas.sg@gmail.com</span>
              </div>
            </div>
            <div className="text-industrial-gray">
              Mais de 20 anos de experiência
            </div>
          </div>

          {/* Main Navigation */}
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <img 
                src="/lovable-uploads/744207c2-cc70-4e4e-9bc1-712ea32976e6.png" 
                alt="SG Entulho e Terraplenagem" 
                className="h-12 w-auto"
              />
              <div className="hidden sm:block">
                <h1 className="font-bold text-xl text-industrial-black leading-tight">
                  SG Entulho e Terraplenagem
                </h1>
                <p className="text-sm text-industrial-gray">
                  Ubiratã - PR
                </p>
              </div>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-8">
              {menuItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleMenuClick(item.href)}
                  className="text-industrial-black hover:text-primary transition-colors font-medium"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button 
                className="gradient-industrial text-white hover:opacity-90 transition-opacity shadow-md font-semibold"
                onClick={() => window.open('https://wa.me/5544999900681', '_blank')}
              >
                Solicitar Orçamento
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="outline"
              size="sm"
              className="lg:hidden border-primary/60 text-primary hover:bg-primary/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-border shadow-industrial">
            <div className="container mx-auto px-4 py-4 space-y-3">
              {menuItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleMenuClick(item.href)}
                  className="block w-full text-left py-2 text-industrial-black hover:text-primary transition-colors font-medium"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                className="w-full mt-4 gradient-industrial text-white"
                onClick={() => {
                  setIsMenuOpen(false);
                  window.open('https://wa.me/5544999900681', '_blank');
                }}
              >
                Solicitar Orçamento
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Spacer to prevent content overlap */}
      <div className="h-20 md:h-24"></div>
    </>
  );
};

export default Header;
