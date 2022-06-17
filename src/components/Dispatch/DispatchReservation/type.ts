export interface ModalProps {
  open: boolean;
  handleClose: () => void;
  width: string;
  height: string;
  ID: number;
}

export interface DispatchReservationType {
  id: number;
  dispatchDate: string;
  requestPeriod: string;
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
