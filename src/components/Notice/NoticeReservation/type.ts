export interface Employmenttype {
  id: number;
  period: string;
  postingId: string;
  area: string;
  storeId: string;
  storeName: string;
  noticeName: string;
  noticeStatus: string;
  exposure: boolean;
  applicationsNum: number;
}

export interface EmploymentListtype {
  id: number;
  supportIime: string;
  profileId: string;
  deliveryFee: string;
  premium: string;
  suggestionMeans: string;
  intro: string;
  accepted: boolean;
}

export interface ModalProps {
  open: boolean;
  handleClose: () => void;
  width: string;
  height: string;
  ID: number;
}
