"use client";

import CardAi from "@/components/card-ai";
import CardTrending from "@/components/card-trending";
import CardViral from "@/components/card-viral";
import { TYPES_TRENDING } from "@/constant";
import dynamic from "next/dynamic";

const CardChart = dynamic(() => import('@/components/card-chart'), { 
  ssr: false 
});


export default function Home() {
  return (
    <main className="px-6 py-8 flex-1 bg-gray-50 w-full overflow-y-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <CardAi />
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {TYPES_TRENDING.map((item, index: number) => {
              return (
                <CardTrending
                  point={item.point}
                  key={index}
                  title={
                    <div className="flex items-center gap-2 mb-2">
                      {item.icon}
                      <p className="text-xs font-medium text-muted-foreground">
                        {item.label}
                      </p>
                    </div>
                  }
                  description={
                    <p className="text-xs text-success mt-1">
                      {item.description}
                    </p>
                  }
                />
              );
            })}
          </div>

          <CardChart />
        </div>
      </div>
      <div className="rounded-lg border text-card-foreground shadow-sm p-6 shadow-card hover:shadow-card-hover transition-shadow bg-gradient-card border-borde bg-white">
        <h2 className="text-2xl font-bold text-foreground mb-6">
          Các Chủ Đề Đang Viral Tại Việt Nam
        </h2>
        <CardViral number={1} />
      </div>
    </main>
  );
}
