import MessageIcon from "@/public/icons/message";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

const CardAi = () => {
  return (
    <Card className="rounded-lg shadow-none">
      <CardHeader className="flex flex-row items-center gap-2">
        <div className="p-2 rounded-full bg-gradient-primary">
          <MessageIcon />
        </div>

        <CardTitle>Tóm tắt AI – </CardTitle>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  );
};

export default CardAi;
