import { createContext, useContext, useState } from "react";

const FlowContext = createContext();

export function FlowProvider({ children }) {
  const [activeButtons, setActiveButtons] = useState({
    uploadResume: false,
    exploreCuratedJobs: false,
    practiceInterview: false,
  });

  const updateActiveButtons = (buttons) => {
    setActiveButtons((prev) => ({ ...prev, ...buttons }));
  };
  return (
    <FlowContext.Provider value={{ activeButtons, updateActiveButtons }}>
      {children}
    </FlowContext.Provider>
  );
}

export function useFlow(){
    return useContext(FlowContext)
}
