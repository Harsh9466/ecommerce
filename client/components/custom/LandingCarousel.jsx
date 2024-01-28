"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Slider1 from "@/assets/images/landing-page/slider-2.jpg";
import Slider2 from "@/assets/images/landing-page/slider-3.jpg";
import Slider3 from "@/assets/images/landing-page/slider-1.jpg";

export default function LandingCarousel() {
  const plugin = React.useRef(Autoplay({ delay: 3000, stopOnLastSnap: false }));

  const slides = [
    {
      src: Slider1,
      alt: "",
    },
    {
      src: Slider2,
      alt: "",
    },
    {
      src: Slider3,
      alt: "",
    },
  ];

  return (
    <>
      <div className="container px-2 lg:px-4 xl:px-0 mx-auto ">
        <Carousel
          plugins={[plugin.current]}
          className="w-full mt-4"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={index}>
                <Card className="border-none">
                  <CardContent className="flex justify-center overflow-hidden p-0">
                    <Image
                      className="rounded-2xl object-cover max-h-[200px] md:max-h-[300px] lg:max-h-[400px] xl:max-h-[600px]"
                      src={slide.src}
                      alt={slide.alt}
                    ></Image>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
}
