export interface ModalProps {
  open: boolean;
  handleClose: () => void;
  width: string;
  height: string;
  ID: number;
}

export interface PacerAccumulationType {
  id: number;
  distributionType: string;
  accrualDate: string;
  confirmationDate: string;
  accruedAmount: string;
  area: string;
  pacerId: string;
  profileId: string;
  shopId: string;
  dispatchId: string;
  accrualStatus: string;
}
