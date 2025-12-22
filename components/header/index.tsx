import { CHANNEL_NAMES, GENERAL_TYPES, TIME_TYPES } from "@/constant";
import { SelectUi } from "../select";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group";
import { Search } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky z-50 top-0 border-b border-gray-90 bg-white  w-full flex flex-col lg:flex-row items-center justify-between py-4 px-6">
      <div className="flex flex-col max-lg:mb-4 w-full">
        <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
          What's Hot on Social Vietnam
        </h1>
        <h2 className="text-muted-foreground text-lg">
          Chỉ số xu hướng mạng xã hội theo thời gian thực · Powered by Kompa.ai
        </h2>
      </div>
      <div className="flex flex-row max-lg:flex-wrap w-full justify-start gap-3 items-center">
        <div className="flex-1">
          <SelectUi
            defaultValue={GENERAL_TYPES[0].value}
            data={GENERAL_TYPES}
            placeholder="Chọn loại"
          />
        </div>
        <div className="flex-1">
          <SelectUi
            defaultValue={TIME_TYPES[0].value}
            data={TIME_TYPES}
            placeholder="Chọn loại"
          />
        </div>
        <div className="flex-1">
          <SelectUi
            defaultValue={CHANNEL_NAMES[0].value}
            data={CHANNEL_NAMES}
            placeholder="Chọn loại"
          />
        </div>
        <InputGroup className="flex-1 rounded-[14px] bg-secondary">
          <InputGroupInput placeholder="Tìm chủ đề..." />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
        </InputGroup>
      </div>
    </header>
  );
};

export default Header;
