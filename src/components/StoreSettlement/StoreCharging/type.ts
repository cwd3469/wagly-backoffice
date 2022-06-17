export interface ModalProps {
  open: boolean;
  handleClose: () => void;
  width: string;
  height: string;
  ID: number;
}

export interface StoreChargingType {
  id: number;
  chargingDate: string;
  storeId: string;
  chargingType: string;
  chargingMeans: string;
  chargeAmount: string;
  mileage: string;
}
