import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const HotScore = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <Carousel
      className="w-full"
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        <CarouselItem className="md:basis-1/2 lg:basis-1/5 text-center">
          <p className="text-xs text-muted-foreground mb-1">
            Lũ lụt Miền Trung{" "}
          </p>
          <p
            className="text-lg font-bold"
            style={{
              color: "rgb(139, 92, 246)",
            }}
          >
            95/100
          </p>
          <p className="text-xs text-muted-foreground">Index: 95</p>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/5 text-center">
          <p className="text-xs text-muted-foreground mb-1">
            Lũ lụt Miền Trung{" "}
          </p>
          <p
            className="text-lg font-bold"
            style={{
              color: "rgb(139, 92, 246)",
            }}
          >
            95/100
          </p>
          <p className="text-xs text-muted-foreground">Index: 95</p>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/5 text-center">
          <p className="text-xs text-muted-foreground mb-1">
            Lũ lụt Miền Trung{" "}
          </p>
          <p
            className="text-lg font-bold"
            style={{
              color: "rgb(139, 92, 246)",
            }}
          >
            95/100
          </p>
          <p className="text-xs text-muted-foreground">Index: 95</p>
        </CarouselItem>
           <CarouselItem className="md:basis-1/2 lg:basis-1/5 text-center">
          <p className="text-xs text-muted-foreground mb-1">
            Lũ lụt Miền Trung{" "}
          </p>
          <p
            className="text-lg font-bold"
            style={{
              color: "rgb(139, 92, 246)",
            }}
          >
            95/100
          </p>
          <p className="text-xs text-muted-foreground">Index: 95</p>
        </CarouselItem>
           <CarouselItem className="md:basis-1/2 lg:basis-1/5 text-center">
          <p className="text-xs text-muted-foreground mb-1">
            Lũ lụt Miền Trung{" "}
          </p>
          <p
            className="text-lg font-bold"
            style={{
              color: "rgb(139, 92, 246)",
            }}
          >
            95/100
          </p>
          <p className="text-xs text-muted-foreground">Index: 95</p>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default HotScore;
