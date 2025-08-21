
import React from 'react';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-industrial-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src="/lovable-uploads/744207c2-cc70-4e4e-9bc1-712ea32976e6.png" 
                alt="SG Entulho e Terraplenagem" 
                className="h-12 w-auto"
              />
              <div>
                <h3 className="text-xl font-bold">SG Entulho e Terraplenagem</h3>
                <p className="text-sm opacity-80">Ubiratã - PR</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed max-w-md">
              Mais de 20 anos oferecendo serviços de excelência em terraplenagem, 
              escavação, demolição e locação de caçambas em Ubiratã-PR e região.
            </p>
            
            <div className="flex items-center gap-4">
              <a 
                href="https://www.instagram.com/invites/contact/?igsh=kwlvbfzyxvao&utm_content=yho7hfm"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Instagram className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Links Rápidos</h4>
            <div className="space-y-3">
              {[
                { href: '#inicio', label: 'Início' },
                { href: '#sobre', label: 'Sobre Nós' },
                { href: '#servicos', label: 'Serviços' },
                { href: '#equipamentos', label: 'Equipamentos' },
                { href: '#contato', label: 'Contato' },
              ].map((link) => (
                <button
                  key={link.href}
                  onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-300 hover:text-primary transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <div className="text-sm">
                  <div>(44) 9 9990-0681</div>
                  <div>(44) 9 9980-8788</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-secondary flex-shrink-0" />
                <span className="text-sm">sucatas.sg@gmail.com</span>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <div className="text-sm">
                  <div>Av. Clodoaldo de Oliveira, 481</div>
                  <div>Área Industrial, Ubiratã-PR</div>
                  <div>CEP 85440-000</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-400">
            © 2024 SG Entulho e Terraplenagem. Todos os direitos reservados.
          </div>
          <div className="text-sm text-gray-400">
            CNPJ: 04.273.100/0001-42
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
