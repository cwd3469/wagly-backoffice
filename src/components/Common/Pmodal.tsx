import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { PmodalPorps } from './CommonType';

const Pmodal = (props: PmodalPorps) => {
  let { open, handleClose, children, width, height } = props;

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: `${width}`,
    height: `${height}`,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>{children}</Box>
      </Modal>
    </div>
  );
};

Pmodal.defaultProps = {
  open: false,
  handleClose: () => {},
  width: 'auto',
  height: 'auto',
};
export default Pmodal;
