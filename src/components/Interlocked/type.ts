export interface ModalProps {
  open: boolean;
  handleClose: () => void;
  width: string;
  height: string;
  ID: number;
}

export interface InterlockedType {
  id: number;
  registrationDate: string;
  pos: string;
  posStoreCode: string;
  inInterworkingId: string;
  interworkingPacingStoreId: string;
  companyName: string;
  storeName: string;
  businessRegistrationNumber: string;
  interworkingStatus: string;
}

export interface RegistrationInfo {
  pacingStoreId: string;
  posCompany: string;
  posDeliveryStoreCode: string;
  companyName: string;
  storeName: string;
  businessNumber: string;
  storePhoneNumber: string;
  storeAddress: string;
  storeDetailAddress: string;
}
