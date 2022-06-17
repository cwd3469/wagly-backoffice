export interface ModalProps {
  open: boolean;
  handleClose: () => void;
  width: string;
  height: string;
  ID: number;
}

export interface PostNoticeType {
  id: number;
  exposureStatus: string;
  firstRegistrarId: string;
  initialRegistrationDate: string;
  lastModifierId: string;
  lastRevisionDate: string;
  title: string;
  reasonModification: string;
}

export interface PostNoticeListType {
  id: number;
  modificationTime: string;
  modificationId: string;
  authority: string;
  reason: string;
}
