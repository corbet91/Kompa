import { getRandomColor } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "../ui/card";

const CardHotTrend = () => {
  return (
    <Card className="shadow-none p-4 rounded-lg bg-secondary/50 border border-border">
      <CardHeader className="flex flex-row items-center gap-2 mb-2">
        <div className="flex items-center gap-2 mb-2">
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: getRandomColor() }}
          ></span>
          <p className="text-xs font-semibold text-foreground">
            Lũ lụt Miền Trung 
          </p>
        </div>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  );
};
export default CardHotTrend;
