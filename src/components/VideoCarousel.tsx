
"use client";

import React, { useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface VideoSlide {
  title: string;
  description: string;
  src: string;
}

interface VideoCarouselProps {
  slides: VideoSlide[];
}

export function VideoCarousel({ slides }: VideoCarouselProps) {
  return (
    <div className="relative w-full">
      <Carousel className="w-full max-w-5xl mx-auto">
        <CarouselContent className="-ml-2 md:-ml-4">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 basis-full">
              <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  src={slide.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                >
                  Seu navegador não suporta o elemento de vídeo.
                </video>
                
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 md:p-6">
                  <h3 className="text-white text-lg md:text-xl font-bold mb-1 md:mb-2">{slide.title}</h3>
                  <p className="text-white/90 text-xs md:text-sm">{slide.description}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 md:left-4 h-8 w-8 md:h-10 md:w-10" />
        <CarouselNext className="right-2 md:right-4 h-8 w-8 md:h-10 md:w-10" />
      </Carousel>
    </div>
  );
}
