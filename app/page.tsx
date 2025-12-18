import CardAi from "@/components/card-ai";
import CardChart from "@/components/card-chart";
import CardTrending from "@/components/card-trending";
import { TYPES_TRENDING } from "@/constant";

export default function Home() {
  return (
    <main className="px-6 py-8 flex-1 bg-gray-50 w-full overflow-y-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <CardAi />
        <div className="lg:col-span-2 space-y-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {TYPES_TRENDING.map((item,index:number) => {
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
        
            <CardChart/>
        </div>

      </div>
    </main>
  );
}
