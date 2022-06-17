import * as React from 'react';
import Pmodal from '@components/Common/Pmodal';
import { ModalProps } from '../type';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { Grid } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PostNoticeList from './PostFaqList';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

// 모달 필터
const ActiveSelectfilter = (props: { handleClose: () => void }) => {
  const { handleClose } = props;

  return (
    <Grid container direction="row" justifyContent="flex-end" alignItems="center">
      <IconButton aria-label="delete" onClick={handleClose}>
        <CloseIcon />
      </IconButton>
    </Grid>
  );
};

const PostFaqModal = (props: ModalProps) => {
  const { open, handleClose, width, height, ID } = props;

  return (
    <Pmodal open={open} handleClose={handleClose}>
      <div
        style={{
          width: width,
          height: height,
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
        }}
      >
        <ActiveSelectfilter handleClose={handleClose} />
        <PostNoticeList />
      </div>
    </Pmodal>
  );
};

PostFaqModal.defaultProps = {
  open: false,
  handleClose: () => {},
  width: 800,
  height: 700,
};

export default PostFaqModal;
