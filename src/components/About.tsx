
import React from 'react';
import { Target, Eye, CheckCircle, Truck, Award, Shield } from 'lucide-react';

const About = () => {
  const values = [
    { icon: CheckCircle, title: 'Compromisso com o cliente', description: 'Priorizamos as necessidades dos nossos clientes' },
    { icon: Award, title: 'Excelência na execução', description: 'Serviços de alta qualidade em todos os projetos' },
    { icon: Shield, title: 'Transparência e ética', description: 'Relacionamento transparente e ético' },
    { icon: Target, title: 'Responsabilidade ambiental', description: 'Descarte correto com licença ambiental' },
  ];

  const stats = [
    { number: '20+', label: 'Anos de Experiência' },
    { number: '1000+', label: 'Projetos Realizados' },
    { number: '100%', label: 'Licenciado' },
    { number: '24h', label: 'Disponibilidade' },
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Truck className="h-4 w-4" />
            Sobre a SG Entulho
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-industrial-black mb-6">
            Pioneiros em Ubiratã-PR
          </h2>
          
          <p className="text-lg sm:text-xl text-industrial-gray max-w-3xl mx-auto leading-relaxed">
            A SG Entulho e Terraplenagem atua há mais de 2 décadas prestando serviços 
            de qualidade e com total excelência no setor de construção civil.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text gradient-industrial mb-2">
                {stat.number}
              </div>
              <p className="text-sm sm:text-base text-industrial-gray font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-industrial-black">
                Nossa História
              </h3>
              <p className="text-industrial-gray leading-relaxed">
                É pioneira no ramo de locação de caçambas para entulho em Ubiratã-PR, 
                e empreende também no setor de terraplenagem, escavação e demolição. 
                Dispomos de máquinas Mini Carregadeira, Mini Escavadeira, Escavadeira 
                Hidráulica e caminhões caçambas.
              </p>
              <p className="text-industrial-gray leading-relaxed">
                Possuímos área própria devidamente licenciada para descarte correto 
                de restos de construção civil, agindo com responsabilidade ambiental. 
                Hoje somos referência pelos serviços prestados e pela busca constante 
                de evolução.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-gradient-industrial-light p-4 sm:p-6 rounded-xl">
                <Target className="h-8 w-8 text-primary mb-4" />
                <h4 className="font-bold text-industrial-black mb-3">Missão</h4>
                <p className="text-sm text-industrial-gray leading-relaxed">
                  Prestar serviços de alta qualidade de terraplenagem, escavação e 
                  demolição, além de locar caçambas com total excelência e segurança.
                </p>
              </div>
              
              <div className="bg-gradient-industrial-light p-4 sm:p-6 rounded-xl">
                <Eye className="h-8 w-8 text-secondary mb-4" />
                <h4 className="font-bold text-industrial-black mb-3">Visão</h4>
                <p className="text-sm text-industrial-gray leading-relaxed">
                  Ser referência no ramo e ser reconhecida pela excelência técnica, 
                  agilidade, pontualidade e compromisso com os resultados.
                </p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-industrial-black mb-8">
              Nossos Valores
            </h3>
            
            <div className="space-y-4">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-industrial-light rounded-lg flex items-center justify-center">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-industrial-black mb-1">
                      {value.title}
                    </h4>
                    <p className="text-sm text-industrial-gray leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
