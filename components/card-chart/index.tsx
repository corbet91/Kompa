"use client";
import CardHotTrend from "../card-hot-trend";
import { Card, CardContent, CardHeader } from "../ui/card";
import EChartsReact from "echarts-for-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import React from "react";

const CardChart = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const option = {
    title: {
      text: "Stacked Line",
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "Email",
        type: "line",
        stack: "Total",
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: "Union Ads",
        type: "line",
        stack: "Total",
        data: [220, 182, 191, 234, 290, 330, 310],
      },
      {
        name: "Video Ads",
        type: "line",
        stack: "Total",
        data: [150, 232, 201, 154, 190, 330, 410],
      },
      {
        name: "Direct",
        type: "line",
        stack: "Total",
        data: [320, 332, 301, 334, 390, 330, 320],
      },
      {
        name: "Search Engine",
        type: "line",
        stack: "Total",
        data: [820, 932, 901, 934, 1290, 1330, 1320],
      },
    ],
  };

  return (
    <Card className="rounded-lg shadow-none">
      <CardHeader className="flex flex-row items-center gap-2">
        <div className="flex flex-col gap-2 mb-6">
          <h3 className="text-xl font-bold text-foreground">
            Kompa Trend Index - Xu hướng theo giờ{" "}
          </h3>
          <p className="text-sm text-muted-foreground">
            Theo dõi sự phát triển của từng chủ đề viral theo từng giờ (thang
            điểm 0-100)
          </p>
        </div>
      </CardHeader>
      <CardContent>
        <EChartsReact option={option} />
        <div className="mt-6 grid grid-cols-1 gap-4">
          <Carousel
            className="w-full"
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <CardHotTrend />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <CardHotTrend />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <CardHotTrend />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <CardHotTrend />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <CardHotTrend />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <CardHotTrend />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <CardHotTrend />
              </CarouselItem>
            </CarouselContent>
            {/* <CarouselPrevious />
            <CarouselNext /> */}
          </Carousel>
        </div>
        <div className="mt-6 pt-6 border-t border-border">

        </div>
      </CardContent>
    </Card>
  );
};

export default CardChart;
