import { startActions } from "@/constants/paths";
import { useFlow } from "@/context/FlowContext";
import { Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HomeLayout = () => {
  const { activeButtons } = useFlow();
  return (
    <div className="flex justify-center items-center  w-full">
      <div className="w-[60%] ">
        <div className="flex w-full items-center mb-10">
          {startActions.map((action, index) => (
            <>
              <div
                key={`button-${action.key || index}`}
                className="flex justify-center"
              >
                <Button variant="blue" disabled={!activeButtons[action.key]}>
                  <img
                    src={`/images/icons/${index + 1}.svg`}
                    alt={action.key}
                  />
                  {action.name}
                </Button>
              </div>
              {index < startActions.length - 1 && (
                <div
                  key={`separator-${index}`}
                  className="flex-1 h-[0.5px] bg-neutral-300 mx-2"
                />
              )}
            </>
          ))}
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
