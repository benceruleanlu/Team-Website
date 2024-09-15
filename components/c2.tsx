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
        className="mx-auto p-4 text-black"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        setApi={setApi}
      >
        <CarouselContent>
          <CarouselItem>
            <Image
              src="/club fair (1).jpg"
              className="rounded-lg object-contain"
              alt=""
              width={2084}
              height={2781}
            ></Image>
          </CarouselItem>
          <CarouselItem>
            <Image
              src="/club fair (2).jpg"
              className="rounded-lg object-contain"
              alt=""
              width={2432}
              height={3246}
            ></Image>
          </CarouselItem>
          <CarouselItem>
            <Image
              src="/club fair (3).jpg"
              className="rounded-lg object-contain"
              alt=""
              width={2310}
              height={3083}
            ></Image>
          </CarouselItem>
          <CarouselItem>
            <Image
              src="/club fair (4).jpg"
              className="rounded-lg object-contain"
              alt=""
              width={2310}
              height={3083}
            ></Image>
          </CarouselItem>
          <CarouselItem>
            <Image
              src="/club fair (5).jpg"
              className="rounded-lg object-contain"
              alt=""
              width={2194}
              height={2928}
            ></Image>
          </CarouselItem>
          <CarouselItem>
            <Image
              src="/club fair (6).jpg"
              className="rounded-lg object-contain"
              alt=""
              width={2310}
              height={3083}
            ></Image>
          </CarouselItem>
          <CarouselItem>
            <Image
              src="/club fair (7).jpg"
              className="rounded-lg object-contain"
              alt=""
              width={2561}
              height={3417}
            ></Image>
          </CarouselItem>
          <CarouselItem>
            <Image
              src="/club fair (8).jpg"
              className="rounded-lg object-contain"
              alt=""
              width={2194}
              height={2928}
            ></Image>
          </CarouselItem>
          <CarouselItem>
            <Image
              src="/club fair (9).jpg"
              className="rounded-lg object-contain"
              alt=""
              width={2310}
              height={3083}
            ></Image>
          </CarouselItem>
          <CarouselItem>
            <Image
              src="/club fair (10).jpg"
              className="rounded-lg object-contain"
              alt=""
              width={1902}
              height={2538}
            ></Image>
          </CarouselItem>
          <CarouselItem>
            <Image
              src="/club fair (11).jpg"
              className="rounded-lg object-contain"
              alt=""
              width={1806}
              height={2411}
            ></Image>
          </CarouselItem>
          <CarouselItem>
            <Image
              src="/club fair (12).jpg"
              className="rounded-lg object-contain"
              alt=""
              width={2432}
              height={3246}
            ></Image>
          </CarouselItem>
          <CarouselItem>
            <Image
              src="/club fair (13).jpg"
              className="rounded-lg object-contain"
              alt=""
              width={2400}
              height={3587}
            ></Image>
          </CarouselItem>
          <CarouselItem>
            <Image
              src="/club fair (14).jpg"
              className="rounded-lg object-contain"
              alt=""
              width={2027}
              height={3417}
            ></Image>
          </CarouselItem>
          <CarouselItem>
            <Image
              src="/club fair (15).jpg"
              className="rounded-lg object-contain"
              alt=""
              width={1806}
              height={2411}
            ></Image>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="hidden lg:flex" />
        <CarouselNext className="hidden lg:flex" />
      </Carousel>
      <div className="invisible -mt-28 text-center text-sm text-[#f1f7feb5] sm:visible">
        Image {current} of {count}
      </div>
    </>
  );
}
