import { ReactNode } from "react";

interface ICardTrending {
  title: ReactNode;
  point: number;
  description: ReactNode;
}

const CardTrending = ({ title, point, description }: ICardTrending) => {
  return (
    <div className="rounded-lg border text-card-foreground shadow-sm p-5 shadow-card hover:shadow-card-hover transition-shadow bg-white border-border">
      {title}
      <div className="flex items-baseline gap-2">
        <p className="text-3xl font-bold text-foreground">{point}</p>
        <span className="text-xs text-muted-foreground">/100</span>
      </div>
      {description}
    </div>
  );
};

export default CardTrending;
