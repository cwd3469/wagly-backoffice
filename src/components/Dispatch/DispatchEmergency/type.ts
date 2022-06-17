export interface ModalProps {
  open: boolean;
  handleClose: () => void;
  width: string;
  height: string;
  ID: number;
}

export interface DispatchEmergencyType {
  id: number;
  dispatchDate: string;
  area: string;
  dispatchId: string;
  noticeId: string;
  shopId: string;
  pacerId: string;
  storeName: string;
  distributionName: string;
  status: boolean;
  details: boolean;
}
