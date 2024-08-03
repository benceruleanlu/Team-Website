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
      className="mx-auto w-11/12 max-w-2xl text-black"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        <CarouselItem>
          <video src="bot.mp4" autoPlay muted loop></video>
        </CarouselItem>
        <CarouselItem>
          <Image
            src={"/robot.png"}
            width={999}
            height={999}
            alt={"Placeholder"}
            className="rounded-lg"
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            src={"/goose.jpg"}
            width={956}
            height={1275}
            alt={"Placeholder"}
            className="max-h-[32rem] rounded-lg object-cover"
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="hidden lg:flex" />
      <CarouselNext className="hidden lg:flex" />
    </Carousel>
  );
}
