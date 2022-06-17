export interface ModalProps {
  open: boolean;
  handleClose: () => void;
  width: string;
  height: string;
  ID: number;
}

export interface PostFaqType {
  id: number;
  exposureStatus: string;
  firstRegistrarId: string;
  lastModifierId: string;
  lastRevisionDate: string;
  type: string;
  title: string;
  usingModifications: string;
  viewDetails: boolean;
}

export interface PostNoticeListType {
  id: number;
  modificationTime: string;
  modificationId: string;
  authority: string;
  reason: string;
}
