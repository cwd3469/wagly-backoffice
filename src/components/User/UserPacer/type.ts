export interface UserPacertype {
  id: number;
  creationDate: string;
  ID: string;
  area1: string;
  area2: string;
  optionalTerms: string;
  marketing: string;
  status: boolean;
}

export interface ModalProps {
  open: boolean;
  handleClose: () => void;
  width: string;
  height: string;
  ID: number;
}

export interface SubStore {
  id: string;
  name: string;
  phoneNum: string;
  startDate: string;
  lastDate: string;
}
