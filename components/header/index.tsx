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
    <header className="sticky top-0 border-b border-gray-90 bg-white  w-full flex flex-col lg:flex-row items-center justify-between py-4 px-6">
      <div className="flex flex-col max-lg:mb-4 w-full">
        <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
          What's Hot on Social Vietnam
        </h1>
        <h2 className="text-muted-foreground text-lg">
          Chỉ số xu hướng mạng xã hội theo thời gian thực · Powered by Kompa.ai
        </h2>
      </div>
      <div className="flex flex-row max-lg:flex-wrap w-full justify-start gap-2 items-center">
        <SelectUi
          defaultValue={GENERAL_TYPES[0].value}
          data={GENERAL_TYPES}
          placeholder="Chọn loại"
        />
        <SelectUi
          defaultValue={TIME_TYPES[0].value}
          data={TIME_TYPES}
          placeholder="Chọn loại"
        />
        <SelectUi
          defaultValue={CHANNEL_NAMES[0].value}
          data={CHANNEL_NAMES}
          placeholder="Chọn loại"
        />
        <InputGroup>
          <InputGroupInput placeholder="Tìm chủ đề" />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
        </InputGroup>
      </div>
    </header>
  );
};

export default Header;
