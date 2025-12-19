"use client";

import { getRandomColor } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "../ui/card";

const CardHotTrend = () => {
  return (
    <Card className="shadow-none p-4 rounded-lg bg-secondary/50 border border-border gap-0">
      <CardHeader className="flex flex-row items-center gap-2 mb-2 px-0">
        <div className="flex  items-center gap-2">
          <div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: getRandomColor() }}
          ></div>
          <p className="text-xs font-semibold text-foreground">
            Lũ lụt Miền Trung
          </p>
        </div>
      </CardHeader>
      <CardContent className="px-0">
        <p className="text-xs text-muted-foreground leading-relaxed">
          Video cứu hộ lan truyền mạnh; người dân cập nhật liên tục. Kompa
          Index: 95/100
        </p>
      </CardContent>
    </Card>
  );
};
export default CardHotTrend;
