export interface ModalProps {
  open: boolean;
  handleClose: () => void;
  width: string;
  height: string;
  ID: number;
}

export interface SecurityHistoryType {
  id: number;
  ProcessingDate: string;
  privilegeGroups: string;
  targetMembership: string;
  performerId: string;
  performanceWork: string;
  data: string;
  targetMemberId: string;
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
