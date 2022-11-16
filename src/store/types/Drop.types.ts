import IDrop from "../../interfaces/IDrop";

export interface DropState {
  currentDrop: IDrop;
  selectedPhase: Phase;
  isLoading: boolean;
  isError: boolean;
}

export enum Phase {
  PRIVATE = "Private",
  COMMUNITY = "Community",
  PUBLIC = "Public",
}