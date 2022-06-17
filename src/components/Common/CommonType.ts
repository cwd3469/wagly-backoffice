import { GridColDef } from '@mui/x-data-grid';

export interface ModalProps {
  open: boolean;
  handleClose: () => void;
  width: string;
  height: string;
}

export interface PmodalPorps extends ModalProps {
  children: JSX.Element;
}

export interface PtabelListProps {
  data: object[];
  form: GridColDef[];
}
