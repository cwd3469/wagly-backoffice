export interface ModalProps {
  open: boolean;
  handleClose: () => void;
  width: string;
  height: string;
  ID: number;
}

export interface SecurityUserStatusType {
  id: number;
  PermissionGroup: string;
  userId: string;
  userName: string;
  accountStatus: string;
  reason: string;
  accountRegistrationDate: string;
  lastConnectionDate: string;
  registeredPerson: string;
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
