
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TTypeSelectProps } from "@/types";

export const SelectUi = ({
  data,
  placeholder,
  ...props
}: TTypeSelectProps) => {
  return (
    <Select {...props}>
      <SelectTrigger>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="w-1/2 md:w-auto">
        {data.map((item) => {
          return <SelectItem value={item.value} key={item.value}>{item.label}</SelectItem>;
        })}
      </SelectContent>
    </Select>
  );
};
