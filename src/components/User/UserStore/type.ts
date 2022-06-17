export interface UserStoretype {
  id: number;
  accountCreateDate: string;
  userId: string;
  tradeName: string;
  busiessNum: string;
  mileage: string;
  state: string;
  marketing: string;
}

export interface ModalProps {
  open: boolean;
  handleClose: () => void;
  width: string;
  height: string;
  ID: number;
}
