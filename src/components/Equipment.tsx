
import React from 'react';
import { Truck, Wrench, Cog, Shield } from 'lucide-react';

const Equipment = () => {
  const equipment = [
    {
      icon: Truck,
      title: 'Caminhões Caçamba',
      description: 'Frota moderna para transporte eficiente de entulho e materiais.',
      specs: ['Caçambas 3m³ e 5m³', 'Manutenção em dia', 'Segurança total'],
    },
    {
      icon: Wrench,
      title: 'Mini Carregadeira',
      description: 'Equipamento versátil para movimentação e carregamento de materiais.',
      specs: ['Alta mobilidade', 'Operação precisa', 'Baixo impacto'],
    },
    {
      icon: Cog,
      title: 'Mini Escavadeira',
      description: 'Ideal para trabalhos em espaços reduzidos e escavações precisas.',
      specs: ['Acesso restrito', 'Precisão máxima', 'Operação silenciosa'],
    },
    {
      icon: Shield,
      title: 'Escavadeira Hidráulica',
      description: 'Equipamento robusto para grandes movimentações de terra.',
      specs: ['Alta potência', 'Grande alcance', 'Eficiência máxima'],
    },
  ];

  return (
    <section id="equipamentos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Cog className="h-4 w-4" />
            Nossos Equipamentos
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-industrial-black mb-6">
            Maquinário Moderno e Eficiente
          </h2>
          
          <p className="text-xl text-industrial-gray max-w-3xl mx-auto leading-relaxed">
            Contamos com uma frota completa de equipamentos modernos para 
            garantir a eficiência e qualidade em todos os nossos serviços.
          </p>
        </div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {equipment.map((item, index) => (
            <div 
              key={index}
              className="group bg-gradient-industrial-light rounded-2xl p-6 lg:p-8 border border-primary/20 hover:shadow-equipment transition-all duration-500 hover:-translate-y-3 overflow-hidden relative"
            >
              {/* Background Decoration */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl p-4 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-industrial-black mb-4 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-industrial-gray mb-6 leading-relaxed">
                  {item.description}
                </p>
                
                <div className="space-y-2">
                  {item.specs.map((spec, specIndex) => (
                    <div key={specIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                      <span className="text-sm text-industrial-gray">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 bg-gradient-to-r from-industrial-black via-industrial-gray to-industrial-black rounded-2xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-50" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">
              Manutenção e Segurança Garantidas
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Todos os nossos equipamentos passam por manutenção preventiva regular 
              e seguem rigorosos padrões de segurança operacional.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm opacity-80">Manutenção em Dia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">24h</div>
                <div className="text-sm opacity-80">Suporte Técnico</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">ISO</div>
                <div className="text-sm opacity-80">Padrões de Qualidade</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">0</div>
                <div className="text-sm opacity-80">Acidentes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Equipment;
