
"use client";

import React, { useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Play, Pause } from 'lucide-react';

interface VideoSlide {
  title: string;
  description: string;
  src: string;
}

interface VideoCarouselProps {
  slides: VideoSlide[];
}

export function VideoCarousel({ slides }: VideoCarouselProps) {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const handleVideoPlay = (index: number) => {
    setPlayingVideo(index);
  };

  const handleVideoPause = () => {
    setPlayingVideo(null);
  };

  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel className="w-full max-w-5xl mx-auto">
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="basis-full">
              <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  src={slide.src}
                  controls
                  preload="metadata"
                  onPlay={() => handleVideoPlay(index)}
                  onPause={handleVideoPause}
                  onEnded={handleVideoPause}
                >
                  Seu navegador não suporta o elemento de vídeo.
                </video>
                
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-white text-xl font-bold mb-2">{slide.title}</h3>
                  <p className="text-white/90 text-sm">{slide.description}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </div>
  );
}
