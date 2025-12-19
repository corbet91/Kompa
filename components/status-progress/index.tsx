interface IStatusProgress {
    percentWidthPositive: string;
    percentWidthNeutral: string
    percentWidthNegative: string;
    

}

const StatusProgress = ({ percentWidthPositive , percentWidthNeutral , percentWidthNegative }: IStatusProgress) => {
  return (
    <div className="text-center min-w-30">
      <div className="text-xs text-muted-foreground mb-1">Cảm xúc</div>
      <div className="flex gap-1 h-2 rounded-full overflow-hidden">
        <div
          className="bg-success"
          style={{
            width: percentWidthPositive,
          }}
        ></div>
        <div className="bg-muted-foreground" style={{
            width: percentWidthNeutral,
          }}></div>
          <div className="bg-destructive" style={{
            width: percentWidthNegative,
          }}></div>
      </div>
    </div>
  );
};

export default StatusProgress;
