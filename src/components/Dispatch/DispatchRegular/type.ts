export interface ModalProps {
  open: boolean;
  handleClose: () => void;
  width: string;
  height: string;
  ID: number;
}

export interface DispatchRegularType {
  id: number;
  pos: string;
  requestDate: string;
  dispatchId: string;
  dispatchArea: string;
  dispatchStoreId: string;
  dispatchStatus: string;
  dispatchStatusChangeDate: string;
  dispatchPacerId: string;
  deliveryMethod: string;
  finalDeliveryAmount: string;
}
