
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Equipment from '@/components/Equipment';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const Index = () => {
  useEffect(() => {
    // Set page title and meta description
    document.title = 'SG Entulho e Terraplenagem - Locação de Caçambas e Terraplenagem em Ubiratã-PR';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Há mais de 20 anos oferecendo serviços de terraplenagem, escavação, demolição e locação de caçambas em Ubiratã-PR. Equipamentos modernos e atendimento de qualidade. Solicite seu orçamento!'
      );
    }

    // Set Open Graph tags
    const setOGTag = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    setOGTag('og:title', 'SG Entulho e Terraplenagem - Locação de Caçambas e Terraplenagem em Ubiratã-PR');
    setOGTag('og:description', 'Há mais de 20 anos oferecendo serviços de terraplenagem, escavação, demolição e locação de caçambas em Ubiratã-PR. Equipamentos modernos e atendimento de qualidade.');
    setOGTag('og:type', 'website');
    setOGTag('og:url', window.location.href);
    setOGTag('og:image', '/lovable-uploads/744207c2-cc70-4e4e-9bc1-712ea32976e6.png');

    // Set Twitter Card tags
    const setTwitterTag = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    setTwitterTag('twitter:card', 'summary_large_image');
    setTwitterTag('twitter:title', 'SG Entulho e Terraplenagem - Locação de Caçambas e Terraplenagem em Ubiratã-PR');
    setTwitterTag('twitter:description', 'Há mais de 20 anos oferecendo serviços de terraplenagem, escavação, demolição e locação de caçambas em Ubiratã-PR.');
    setTwitterTag('twitter:image', '/lovable-uploads/744207c2-cc70-4e4e-9bc1-712ea32976e6.png');

  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        <Hero />
        <About />
        <Services />
        <Equipment />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
