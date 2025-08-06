import { startActions } from "@/constants/paths";

export type StartActionKeys = (typeof startActions)[number]["key"];

export type ActiveButtons = {
  [Key in StartActionKeys]: boolean;
};
export interface UpdateActiveButtons {
  (buttons: Partial<ActiveButtons>): void;
}
export interface FlowContextType {
  activeButtons: ActiveButtons;
  updateActiveButtons: UpdateActiveButtons;
}
