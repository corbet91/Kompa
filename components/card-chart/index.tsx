"use client";
import EChartsReact from "echarts-for-react";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import CardHotTrend from "../card-hot-trend";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import HotScore from "../hot-score";

const CardChart = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const option = {
    tooltip: {
      trigger: "axis",
    },
    legend: {
      show: false,
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "0",
      top: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      axisTick: {
        show: true,
        lineStyle: {
          color: "#ccc",
        },
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "#ccc",
        },
      },
      splitLine: {
        show: true,
      },
    },
    yAxis: {
      type: "value",
      axisTick: {
        show: true,
        lineStyle: {
          color: "#ccc",
        },
      },
      splitLine: {
        lineStyle: {
          type: "dashed",
          color: "#ccc",
          width: 1,
        },
      },
    },
    series: [
      {
        name: "Email",
        type: "line",
        symbol: "circle",
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: "Union Ads",
        type: "line",
        symbol: "circle",
        data: [220, 182, 191, 234, 290, 330, 310],
      },
      {
        name: "Video Ads",
        type: "line",
        symbol: "circle",
        data: [150, 232, 201, 154, 190, 330, 410],
      },
      {
        name: "Direct",
        type: "line",
        symbol: "circle",
        data: [320, 332, 301, 334, 390, 330, 320],
      },
      {
        name: "Search Engine",
        type: "line",
        symbol: "circle",
        data: [820, 932, 901, 934, 1290, 1330, 1320],
      },
    ],
  };

  return (
    <Card className="rounded-lg shadow-none">
      <CardHeader className="flex flex-row items-center gap-2">
        <div className="flex flex-col mb-6">
          <h3 className="text-xl font-bold text-foreground">
            Kompa Trend Index - Xu hướng theo giờ{" "}
          </h3>
          <p className="text-sm text-muted-foreground">
            Theo dõi sự phát triển của từng chủ đề viral theo từng giờ (thang
            điểm 0-100)
          </p>
          <div className="flex flex-wrap gap-4 text-xs mt-2">
            <div className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full"
                style={{
                  backgroundColor: "rgb(139, 92, 246)",
                }}
              ></span>
              <span className="text-muted-foreground">
                Black Friday sale - chiến lược giảm giá
              </span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <EChartsReact option={option} notMerge={true} lazyUpdate={true} />
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
          <HotScore />
        </div>
      </CardContent>
    </Card>
  );
};

export default CardChart;
