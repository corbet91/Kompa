import ChartColumnIcon from "@/public/icons/chart-column";
import MessageIcon from "@/public/icons/message";
import TrendingIcon from "@/public/icons/trending";

const DEFAULT_FILTER = {
  channel: [],
};

const GENERAL_TYPES = [
  {
    label: "General - Tất cả",
    value: "general",
  },
  // {

  // }
];

const TIME_TYPES = [
  {
    label: "24 giờ qua",
    value: "24h",
  },
  {
    label: "7 ngày qua",
    value: "7d",
  },
  {
    label: "30 ngày qua",
    value: "30d",
  },
];

const CHANNEL_NAMES = [
  {
    label: "Facebook",
    value: "facebook",
  },
];

const TYPES_TRENDING = [
  {
    label: "Kompa Trend Index",
    icon: <TrendingIcon className='text-sidebar-primary' />,
    description: "Chỉ số xu hướng Kompa",
    point: 0,
  },
  {
    label: "Volume Index",
    icon: <MessageIcon className="text-info" />,
     description: "Chỉ số xu hướng Kompa",
    point: 0,
  },
  {
    label: "Engagement Index",
    icon: <MessageIcon className="text-chart-5" />,
     description: "Chỉ số xu hướng Kompa",
    point: 0,
  },
  {
    label: "Sentiment Score",
    icon: <ChartColumnIcon className=" text-chart-2" />,
     description: "Chỉ số xu hướng Kompa",
    point: 0,
  },
];

const COLORS = [
  
]

export { DEFAULT_FILTER, GENERAL_TYPES, TIME_TYPES, CHANNEL_NAMES , TYPES_TRENDING };
