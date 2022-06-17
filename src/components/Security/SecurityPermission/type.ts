export interface ModalProps {
  open: boolean;
  handleClose: () => void;
  width: string;
  height: string;
  ID: number;
}

export interface Permissions {
  id: number;
  groupName: string;
  interlockingPattern: Permission;
  member: Permission;
  publicNotice: Permission;
  dispatch: Permission;
  pacerSettlement: Permission;
  storeSettlement: Permission;
  termsConditions: Permission;
  bulletinBoard: Permission;
  banner: Permission;
}

export interface SecurityPermissionType extends Permissions {
  registrationDate: string;
  registrarId: string;
  registeredUsersNum: number;
  registeredusers: boolean;
  viewDetails: boolean;
}

export interface Permission {
  [key: string]: any;
  c?: boolean;
  r?: boolean;
  u?: boolean;
  d?: boolean;
}

export interface EditList {
  head: string;
  dataName: string;
  data: Permission;
  width: number;
  setState: React.Dispatch<React.SetStateAction<Permission>>;
  events: (
    event: boolean,
    useObj: Permission,
    setState: React.Dispatch<React.SetStateAction<Permission>>,
    idx: number
  ) => void;
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
