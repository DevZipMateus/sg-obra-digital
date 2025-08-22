
import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Contact = () => {
  return <section id="contato" className="py-20 bg-gradient-to-b from-white to-industrial-light">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <MessageCircle className="h-4 w-4" />
            Entre em Contato
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-industrial-black mb-6">
            Solicite seu Orçamento
          </h2>
          
          <p className="text-xl text-industrial-gray max-w-3xl mx-auto leading-relaxed">
            Estamos prontos para atender seu projeto com a qualidade e agilidade 
            que você merece. Entre em contato conosco!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-industrial-black mb-8">
                Informações de Contato
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-border">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-industrial-black mb-1">Telefone</h4>
                    <p className="text-industrial-gray">(44) 9 9990-0681</p>
                    <p className="text-sm text-industrial-gray">(44) 9 9980-8788</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-border">
                  <div className="w-12 h-12 bg-gradient-to-r from-secondary to-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-industrial-black mb-1">E-mail</h4>
                    <p className="text-industrial-gray">sucatas.sg@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-border">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-industrial-black mb-1">Endereço</h4>
                    <p className="text-industrial-gray">
                      Avenida Clodoaldo de Oliveira, 481<br />
                      Área Industrial, Ubiratã-PR<br />
                      CEP 85440-000
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-border">
                  <div className="w-12 h-12 bg-gradient-to-r from-secondary to-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-industrial-black mb-1">Horário</h4>
                    <p className="text-industrial-gray">
                      Segunda à Sexta: 8h às 18h<br />
                      Sábado e Domingo: Fechado
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-gradient-industrial rounded-2xl p-8 text-white bg-zinc-400">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="h-8 w-8 bg-transparent" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-zinc-950">Atendimento via WhatsApp</h4>
                  <p className="opacity-90">Resposta rápida e personalizada</p>
                </div>
              </div>
              
              <Button className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30 text-lg py-4 h-auto" onClick={() => window.open('https://wa.me/5544999900681?text=Olá! Gostaria de solicitar um orçamento para meu projeto.', '_blank')}>
                <Send className="mr-2 h-5 w-5" />
                Enviar Mensagem WhatsApp
              </Button>
            </div>
          </div>

          {/* Map */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-industrial-black mb-6">
                Nossa Localização
              </h3>
              
              <div className="bg-white rounded-2xl shadow-industrial overflow-hidden border border-border">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.123456789!2d-52.994232!3d-24.546371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDMyJzQ2LjkiUyA1MsKwNTknMzkuMiJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123" width="100%" height="300" className="md:h-[400px]" style={{
                border: 0
              }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Localização SG Entulho e Terraplenagem"></iframe>
              </div>
            </div>

            {/* Service Area */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-border">
              <h4 className="text-xl font-bold text-industrial-black mb-4">
                Área de Atendimento
              </h4>
              <p className="text-industrial-gray mb-4">
                Atendemos toda a região de Ubiratã-PR e municípios vizinhos:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-industrial-gray">
                <div>• Ubiratã</div>
                <div>• Campo Mourão</div>
                <div>• Altamira do Paraná</div>
                <div>• Roncador</div>
                <div>• Juranda</div>
                <div>• Região Central</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;
