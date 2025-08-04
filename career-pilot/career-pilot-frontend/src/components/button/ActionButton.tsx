import { startActions } from "@/constants/startActions";
import { useFlow } from "@/context/FlowContext";
import Button from "@/components/button/Button";

const ActionButton = () => {
  const { activeButtons } = useFlow();

  return (
    <div className="flex gap-x-32 w-full items-center justify-center">
      {startActions.map((action) => {
        return <Button className="bg-red-200">{action.label}</Button>;
      })}
    </div>
  );
};

export default ActionButton;
