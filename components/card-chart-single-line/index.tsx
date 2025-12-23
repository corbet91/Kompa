import { EChartsOption } from "echarts";
import EChartsReact from "echarts-for-react";
import { memo } from "react";

interface ICardChartSingleLine {
  data?: EChartsOption;
}

const CardChartSingleLine = ({ data }: ICardChartSingleLine) => {
  const optionChartSingeLine = {
    title: {
      show: false,
    },
    yAxis: {
      show: false,
    },
    grid: {
      left: "-10",
      right: "10",
      top: 20,
      bottom: -10,
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      show: false,
      axisLine: {
        show: false,
      },
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "line",
        smooth: true,
        symbol: "none",
        itemStyle: {
          color: "hsl(214 100% 40%)",
        },
      },
    ],
  };
  return (
    <div className="w-24 h-10">
      <EChartsReact
        option={optionChartSingeLine}
        notMerge={true}
        lazyUpdate={true}
        style={{
          height: "40px",
        }}
      />
    </div>
  );
};

export default memo(CardChartSingleLine);
