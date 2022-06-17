export interface ModalProps {
  open: boolean;
  handleClose: () => void;
  width: string;
  height: string;
  ID: number;
}

export interface SecurityUserExistType {
  id: number;
  existDate: string;
  handlerId: string;
  privilegeGroups: string;
  sortation: string;
  userId: string;
  username: string;
  existReasons: string;
}

export interface SecurityUserInfo {
  permission: string;
  userId: string;
  name: string;
  phone: string;
  part: string;
  email: string;
  end: string;
  isWeek: string[];
  accessible: string;
  expiration: string;
  ipadress: string;
  basis: string;
}
