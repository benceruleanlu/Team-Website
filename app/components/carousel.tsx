"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true }),
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="mx-auto max-w-2xl text-black"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        <CarouselItem>
          <Image
            src={"/robot.png"}
            width={999}
            height={999}
            alt={"Placeholder"}
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            src={"/robot.png"}
            width={999}
            height={999}
            alt={"Placeholder"}
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            src={"/robot.png"}
            width={999}
            height={999}
            alt={"Placeholder"}
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
