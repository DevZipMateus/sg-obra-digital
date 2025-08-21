import React from 'react';
import { ArrowRight, Shield, Award, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 sm:pt-24">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/609e602b-8fdc-4f6c-986a-b4e8e00885ee.png')`
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Background Pattern (keeping subtle pattern over the image) */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4 lg:space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/20 text-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm mt-16 sm:mt-20">
                <Award className="h-4 w-4" />
                Mais de 20 anos de experiência
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg">
                Terraplenagem e
                <span className="block text-transparent bg-clip-text gradient-industrial">
                  Locação de Caçambas
                </span>
                em Ubiratã-PR
              </h1>
              
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed drop-shadow-md">
                Terraplenagem, demolição, escavação e locação de caçambas: 
                <strong className="text-primary"> tudo o que você precisa para sua obra em um só lugar.</strong>
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 py-6 sm:py-8 border-t border-b border-white/20 backdrop-blur-sm bg-white/10 rounded-lg">
              <div className="text-center">
                <div className="flex items-center justify-center mb-1 sm:mb-2">
                  <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <p className="text-xs sm:text-sm text-white/90 font-medium">
                  Licença Ambiental
                </p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-1 sm:mb-2">
                  <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-secondary" />
                </div>
                <p className="text-xs sm:text-sm text-white/90 font-medium">
                  Atendimento Rápido
                </p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-1 sm:mb-2">
                  <Award className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <p className="text-xs sm:text-sm text-white/90 font-medium">
                  Referência Regional
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button 
                size="lg"
                className="gradient-industrial text-white hover:opacity-90 transition-all shadow-industrial group text-lg px-8 py-4 h-auto"
                onClick={() => window.open('https://wa.me/5544999900681', '_blank')}
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline-dark" 
                size="lg"
                className="text-lg px-8 py-4 h-auto"
                onClick={() => document.querySelector('#servicos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Nossos Serviços
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative order-first lg:order-last">
            <div className="relative z-10 animate-equipment">
              <img 
                src="/lovable-uploads/744207c2-cc70-4e4e-9bc1-712ea32976e6.png"
                alt="Equipamentos SG Entulho e Terraplenagem"
                className="w-full h-auto max-w-sm sm:max-w-md lg:max-w-lg mx-auto filter drop-shadow-xl"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 sm:-top-8 -right-4 sm:-right-8 w-16 h-16 sm:w-24 sm:h-24 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 sm:-bottom-8 -left-4 sm:-left-8 w-20 h-20 sm:w-32 sm:h-32 bg-secondary/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
