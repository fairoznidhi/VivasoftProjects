import { startActions } from "@/constants/startActions";
import type {
  ActiveButtons,
  FlowContextType,
  UpdateActiveButtons,
} from "@/types/context/flow";
import { createContext, useContext, useState, type ReactNode } from "react";

const FlowContext = createContext<FlowContextType | undefined>(undefined);

export function FlowProvider({ children }: { children: ReactNode }) {
  const [activeButtons, setActiveButtons] = useState<ActiveButtons>(
    Object.fromEntries(
      startActions.map((action) => [action.key, false])
    ) as ActiveButtons
  );

  const updateActiveButtons: UpdateActiveButtons = (buttons) => {
    setActiveButtons((prev) => ({ ...prev, ...buttons }));
  };
  return (
    <FlowContext.Provider value={{ activeButtons, updateActiveButtons }}>
      {children}
    </FlowContext.Provider>
  );
}

export const useFlow = (): FlowContextType => {
  const context = useContext(FlowContext);
  if (!context) {
    throw new Error("useFlow must be used within a FlowProvider");
  }
  return context;
};
