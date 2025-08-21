
import React from 'react';
import { Truck, Wrench, Hammer, Building, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: 'Locação de Caçambas',
      description: 'Caçambas de 3m³ e 5m³ para entulho com retirada e descarte inclusos.',
      features: ['Caçambas 3m³ e 5m³', 'Entrega e retirada', 'Descarte licenciado', 'Atendimento rápido'],
      gradient: 'from-primary to-secondary'
    },
    {
      icon: Wrench,
      title: 'Terraplenagem',
      description: 'Aterro, limpeza de terrenos, cascalhamento e movimentação de materiais.',
      features: ['Limpeza de terrenos', 'Aterro e terraplanagem', 'Cascalhamento de estradas', 'Carga e descarga'],
      gradient: 'from-secondary to-primary'
    },
    {
      icon: Hammer,
      title: 'Escavação',
      description: 'Abertura de piscinas, valetas, galeria pluvial e perfuração especializada.',
      features: ['Abertura de piscinas', 'Valetas e galerias', 'Abertura de baldrame', 'Perfuração de estacas'],
      gradient: 'from-primary to-secondary'
    },
    {
      icon: Building,
      title: 'Demolição',
      description: 'Demolições seguras de casas e edificações com descarte correto.',
      features: ['Demolição de casas', 'Demolição de edificações', 'Descarte correto', 'Segurança total'],
      gradient: 'from-secondary to-primary'
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gradient-to-b from-industrial-light to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Wrench className="h-4 w-4" />
            Nossos Serviços
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-industrial-black mb-6">
            Soluções Completas para sua Obra
          </h2>
          
          <p className="text-xl text-industrial-gray max-w-3xl mx-auto leading-relaxed">
            Oferecemos uma gama completa de serviços especializados com equipamentos 
            modernos e equipe experiente.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-sm border border-border hover:shadow-industrial transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.gradient} p-4 mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-industrial-black mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-industrial-gray mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-industrial-gray">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary/10 via-white to-secondary/10 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-industrial-black mb-4">
            Precisa de um Orçamento?
          </h3>
          <p className="text-xl text-industrial-gray mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e receba um orçamento personalizado para seu projeto. 
            Atendimento rápido e preços competitivos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="gradient-industrial text-white hover:opacity-90 transition-opacity shadow-md group text-lg px-8 py-4 h-auto"
              onClick={() => window.open('https://wa.me/5544999900681', '_blank')}
            >
              Solicitar Orçamento WhatsApp
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline-light"
              size="lg"
              className="text-lg px-8 py-4 h-auto"
              onClick={() => document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Entrar em Contato
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
