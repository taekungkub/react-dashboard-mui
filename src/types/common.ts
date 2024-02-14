export interface IDisclosure {
  opened: boolean;
  open?: () => void;
  close: () => void;
  toggle?: () => void;
}

export type IFormType = "ADD" | "EDIT";
