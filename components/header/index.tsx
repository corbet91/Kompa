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
    <header className="sticky top-0 border-b border-gray-90  w-full flex flex-row items-center justify-between py-4 px-6">
      <div className="flex flex-col">
        <h1 className="text-gradient uppercase flex flex-col text-center text-base font-bold  uppercasedark:text-white lg:text-left">
          What's Hot on Social Vietnam
        </h1>
        <h2 className="text-xs tracking-normal text-zinc-500">
          Chỉ số xu hướng mạng xã hội theo thời gian thực · Powered by Kompa.ai
        </h2>
      </div>
      <div className="flex flex=row gap-2 items-center">
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
