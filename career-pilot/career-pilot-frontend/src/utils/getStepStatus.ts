import { LOADER_STATUSES } from "@/constants/loaderSteps";

export function getStepStatus(stepId: number, currentStep: number) {
  if (stepId < currentStep) return LOADER_STATUSES.COMPLETED;
  if (stepId === currentStep) return LOADER_STATUSES.ACTIVE;
  return LOADER_STATUSES.PENDING;
}
