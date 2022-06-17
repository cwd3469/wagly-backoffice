export interface ModalProps {
  open: boolean;
  handleClose: () => void;
  width: string;
  height: string;
  ID: number;
}

export interface StoreDedutedType {
  id: number;
  deductionDate: string;
  storeId: string;
  pacerId: string;
  dispatchId: string;
  dispatchType: string;
  deductionAmount: string;
  deductionReasons: string;
}
