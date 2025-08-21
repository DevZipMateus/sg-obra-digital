
import React from 'react';
import { Camera, Play } from 'lucide-react';
import { VideoCarousel } from './VideoCarousel';

const Gallery = () => {
  const galleryImages = [
    {
      src: '/lovable-uploads/galeria/abertura_de_piscina.jpg',
      alt: 'Abertura de piscina',
      title: 'Escavação para Piscina',
      description: 'Serviços de escavação precisa para construção de piscinas'
    },
    {
      src: '/lovable-uploads/galeria/abertura_de_valeta_.jpg',
      alt: 'Abertura de valeta',
      title: 'Abertura de Valeta',
      description: 'Escavação de valetas para drenagem e infraestrutura'
    },
    {
      src: '/lovable-uploads/galeria/abertura_de_valeta_com_a_mini_escavadeira.jpg',
      alt: 'Abertura de valeta com mini escavadeira',
      title: 'Mini Escavadeira em Ação',
      description: 'Trabalhos precisos em espaços reduzidos'
    },
    {
      src: '/lovable-uploads/galeria/aterro_de_terreno.jpg',
      alt: 'Aterro de terreno',
      title: 'Aterro de Terreno',
      description: 'Nivelamento e preparação de terrenos'
    },
    {
      src: '/lovable-uploads/galeria/aterro_e_nivelamento_de_terreno_com_a_escavadeira_hidraulica_.jpg',
      alt: 'Aterro e nivelamento com escavadeira hidráulica',
      title: 'Escavadeira Hidráulica',
      description: 'Equipamento robusto para grandes movimentações'
    },
    {
      src: '/lovable-uploads/galeria/caminhao_cacamba_truck.jpg',
      alt: 'Caminhão caçamba',
      title: 'Caminhão Caçamba',
      description: 'Transport eficiente de materiais e entulho'
    },
    {
      src: '/lovable-uploads/galeria/correcao_de_estrada_rural_.jpg',
      alt: 'Correção de estrada rural',
      title: 'Manutenção de Estradas',
      description: 'Cascalhamento e correção de estradas rurais'
    },
    {
      src: '/lovable-uploads/galeria/maquinas.jpg',
      alt: 'Máquinas',
      title: 'Nossa Frota',
      description: 'Equipamentos modernos e bem conservados'
    },
    {
      src: '/lovable-uploads/galeria/mini_carregadeira_new_holland_l330.jpg',
      alt: 'Mini carregadeira New Holland L330',
      title: 'Mini Carregadeira',
      description: 'New Holland L330 - Versatilidade e eficiência'
    },
    {
      src: '/lovable-uploads/galeria/perfuracao_de_estacas.jpg',
      alt: 'Perfuração de estacas',
      title: 'Perfuração de Estacas',
      description: 'Fundações sólidas para suas construções'
    },
    {
      src: '/lovable-uploads/galeria/utilizando_o_equipamento_rompedor_para_quebrar_cascalho.jpg',
      alt: 'Equipamento rompedor quebrando cascalho',
      title: 'Equipamento Rompedor',
      description: 'Quebra de materiais duros e cascalho'
    },
    {
      src: '/lovable-uploads/galeria/valeta.jpg',
      alt: 'Valeta',
      title: 'Sistema de Drenagem',
      description: 'Construção de sistemas de drenagem eficientes'
    }
  ];

  const videoSlides = [
    {
      title: "Abertura de Piscina",
      description: "Escavação precisa para construção de piscinas residenciais",
      src: "/lovable-uploads/galeria/videos/abertura_de_piscina.mp4"
    },
    {
      title: "Demolição",
      description: "Serviços de demolição controlada e segura",
      src: "/lovable-uploads/galeria/videos/demolicao.mp4"
    },
    {
      title: "Demolição Estrutural",
      description: "Demolição de estruturas complexas com equipamentos especializados",
      src: "/lovable-uploads/galeria/videos/demolicao_.mp4"
    },
    {
      title: "Perfuração de Estacas",
      description: "Fundações sólidas com perfuração precisa de estacas",
      src: "/lovable-uploads/galeria/videos/perfuracao_de_estacas.mp4"
    },
    {
      title: "Remoção de Calçada",
      description: "Remoção de calçada e descarte correto do entulho",
      src: "/lovable-uploads/galeria/videos/remocao_de_calcada_e_descarte_correto_do_entulho.mp4"
    },
    {
      title: "Nivelamento de Terreno",
      description: "Remoção de terra para nivelamento preciso do terreno",
      src: "/lovable-uploads/galeria/videos/remocao_de_terra_para_nivelar_terreno_.mp4"
    },
    {
      title: "Terraplenagem de Barracão",
      description: "Preparação de terreno para construção de barracões industriais",
      src: "/lovable-uploads/galeria/videos/terraplenagem_de_barracao.mp4"
    }
  ];

  return (
    <section id="galeria" className="py-20 bg-gradient-to-br from-industrial-light to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Camera className="h-4 w-4" />
            Galeria de Trabalhos
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-industrial-black mb-6">
            Nossos Projetos em Ação
          </h2>
          
          <p className="text-xl text-industrial-gray max-w-3xl mx-auto leading-relaxed">
            Confira alguns dos nossos trabalhos realizados ao longo de mais de 20 anos 
            de experiência em terraplenagem, escavação e locação de caçambas.
          </p>
        </div>

        {/* Video Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Play className="h-4 w-4" />
              Vídeos dos Trabalhos
            </div>
            <h3 className="text-3xl font-bold text-industrial-black mb-4">
              Veja Nossos Equipamentos em Ação
            </h3>
            <p className="text-lg text-industrial-gray max-w-2xl mx-auto">
              Acompanhe de perto como executamos nossos serviços com precisão e qualidade.
            </p>
          </div>
          
          <VideoCarousel slides={videoSlides} />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 mb-16">
          {galleryImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl bg-white shadow-industrial hover:shadow-equipment transition-all duration-500 hover:-translate-y-2">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-industrial-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-lg font-bold mb-2">{image.title}</h3>
                    <p className="text-sm opacity-90">{image.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">
              Mais de 20 Anos de Experiência
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Cada projeto é executado com dedicação e qualidade, 
              garantindo a satisfação dos nossos clientes.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-sm opacity-80">Projetos Realizados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">20+</div>
                <div className="text-sm opacity-80">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-sm opacity-80">Clientes Satisfeitos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">24h</div>
                <div className="text-sm opacity-80">Suporte Disponível</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
