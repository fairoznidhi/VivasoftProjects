import { startActions } from "@/constants/startActions";
import { useFlow } from "@/context/FlowContext";
import Button from "@/components/button/Button";

const ActionButton = () => {
  const { activeButtons } = useFlow();
  
  return (
    <div className="flex w-full items-center mb-10">
      {startActions.map((action, index) => (
        <>
          <div key={`button-${action.key || index}`} className="flex justify-center">
            <Button 
              className="flex flex-row items-center gap-x-1 disabled:opacity-50 whitespace-nowrap" 
              disabled={!activeButtons[action.key]}
            >
              <img src={`/images/icons/${index+1}.svg`} alt={action.label} />
              {action.label}
            </Button>
          </div>
          {index < startActions.length - 1 && (
            <div key={`separator-${index}`} className="flex-1 h-[0.5px] bg-neutral-300 mx-2" />
          )}
        </>
      ))}
    </div>
  );
};

export default ActionButton;