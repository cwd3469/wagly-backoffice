export interface ModalProps {
  open: boolean;
  handleClose: () => void;
  width: string;
  height: string;
  ID: number;
}

export interface StoreStatementType {
  id: number;
  computerDate: string;
  issueDate: string;
  storeId: string;
  regularAmount: string;
  emergencyAmount: string;
  reservationAmount: string;
  issuedMeans: string;
}
