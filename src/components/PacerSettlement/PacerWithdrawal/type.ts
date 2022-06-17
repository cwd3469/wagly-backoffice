export interface ModalProps {
  open: boolean;
  handleClose: () => void;
  width: string;
  height: string;
  ID: number;
}

export interface PacerwithdrawalType {
  id: number;
  withdrawalDate: string;
  pacerId: string;
  totalAmount: string;
  normalAmount: string;
  emergencyAmount: string;
  reservationAmount: string;
  withdrawalBank: string;
  withdrawalAccountNumber: string;
}
