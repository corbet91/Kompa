import CardChartSingleLine from "../card-chart-single-line";
import StatusProgress from "../status-progress";
import { Card } from "../ui/card";

interface ICardViral {
  number : number;
}

const CardViral = ({number}: ICardViral) => {
  return (
    <Card className="p-5 rounded-xl border border-border hover:border-ring hover:shadow-card transition-all cursor-pointer bg-card">
      <div className="flex flex-col lg:flex-row lg:items-center gap-4">
        <div className="flex-1 space-y-2">
          <div className="flex items-start gap-3">
            <span className="text-2xl font-bold text-muted-foreground">
              #{number}
            </span>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-foreground mb-2"></h3>
            </div>
          </div>

        </div>
        <div className="flex flex-wrap lg:flex-nowrap items-center gap-6 text-sm">
          <div className="text-center">
            <p className="text-xs text-muted-foreground mb-1">Trend Index</p>
            <div className="flex items-baseline gap-1">
              <p className="text-xl font-bold text-primary">95</p>
              <span className="text-xs text-muted-foreground">/ 100</span>
            </div>
          </div>
          <StatusProgress percentWidthPositive="50%" percentWidthNeutral="30%" percentWidthNegative="20%" />
             <CardChartSingleLine />
        </div>
      </div>
    </Card>
  );
};

export default CardViral;
