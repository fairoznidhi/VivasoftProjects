import { startActions } from "@/constants/startActions";

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
