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
  type CarouselApi,
} from "@/components/ui/carousel";

export default function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true }),
  );

  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      <Carousel
        plugins={[plugin.current]}
        className="mx-auto w-11/12 max-w-2xl text-black"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        setApi={setApi}
      >
        <CarouselContent>
          <CarouselItem>
            <video
              src="bot.mp4"
              autoPlay
              muted
              loop
              className="rounded-lg"
              width={1350}
              height={1080}
            ></video>
          </CarouselItem>
          <CarouselItem>
            <Image
              src={"/robot.png"}
              width={1350}
              height={1080}
              alt={"Placeholder"}
              className="rounded-lg"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src={"/drivetrain.jpg"}
              width={1350}
              height={1080}
              alt={"Placeholder"}
              className="rounded-lg"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src={"/shooter.jpg"}
              width={1350}
              height={1080}
              alt={"Placeholder"}
              className="rounded-lg"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="hidden lg:flex" />
        <CarouselNext className="hidden lg:flex" />
      </Carousel>
      <div className="text-sm text-[#f1f7feb5]">
        Slide {current} of {count}
      </div>
    </>
  );
}
