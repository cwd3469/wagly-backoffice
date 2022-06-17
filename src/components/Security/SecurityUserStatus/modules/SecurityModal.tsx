import React, { useState } from 'react';
import Pmodal from '@components/Common/Pmodal';
import { Grid, Button, Typography, TextField } from '@mui/material';
import { history } from '@store/index';
import { ParsedQs } from 'qs';

interface PropsMadal {
  type: string;
  open: boolean;
  handleClose: (txt: string) => void;
  id: string | ParsedQs | string[] | ParsedQs[] | undefined;
}

const SecurityModal = (props: PropsMadal): JSX.Element => {
  const { type, open, handleClose, id } = props;
  const [reason, setReason] = useState<string>('');
  const [reasonActive, setReasonActive] = useState<boolean | undefined>(true);
  const onClickEvent = () => {
    handleClose('');
  };
  const clickDelete = () => {
    history.goBack();
    console.log(`삭제할 아이디 : ${id}`);
  };

  switch (type) {
    case 'double':
      return (
        <Pmodal open={open} handleClose={onClickEvent} width="600px">
          <Grid container direction="column" justifyContent="center" alignItems="center" gap="10px">
            <Typography variant="h6" gutterBottom component="div">
              중복된 아이디가 있습니다.
            </Typography>
            <Button variant="contained" onClick={onClickEvent}>
              확인
            </Button>
          </Grid>
        </Pmodal>
      );
    case 'userIdOk':
      return (
        <Pmodal open={open} handleClose={onClickEvent} width="600px">
          <Grid container direction="column" justifyContent="center" alignItems="center" gap="10px">
            <Typography variant="h6" gutterBottom component="div">
              사용 할수 있는 아이디 입니다.
            </Typography>
            <Button variant="contained" onClick={onClickEvent}>
              확인
            </Button>
          </Grid>
        </Pmodal>
      );
    case 'registration':
      return (
        <Pmodal open={open} handleClose={() => history.goBack()} width="600px">
          <Grid container direction="column" justifyContent="center" alignItems="center" gap="10px">
            <Typography variant="h6" gutterBottom component="div">
              등록되었습니다.
            </Typography>
            <Button variant="contained" onClick={() => history.goBack()}>
              확인
            </Button>
          </Grid>
        </Pmodal>
      );
    case 'fix':
      return (
        <Pmodal open={open} handleClose={() => history.goBack()} width="600px">
          <Grid container direction="column" justifyContent="center" alignItems="center" gap="10px">
            <Typography variant="h6" gutterBottom component="div">
              수정하였습니다.
            </Typography>
            <Button variant="contained" onClick={() => history.goBack()}>
              확인
            </Button>
          </Grid>
        </Pmodal>
      );
    case 'nonFix':
      return (
        <Pmodal open={open} handleClose={onClickEvent} width="600px">
          <Grid container direction="column" justifyContent="center" alignItems="center" gap="10px">
            <Typography variant="h6" gutterBottom component="div">
              수정한 부분이 없습니다.
            </Typography>
            <Button variant="contained" onClick={onClickEvent}>
              확인
            </Button>
          </Grid>
        </Pmodal>
      );
    case 'cancellation':
      return (
        <Pmodal open={open} handleClose={onClickEvent} width="600px">
          <Grid container direction="column" justifyContent="center" alignItems="center" gap="10px">
            <Typography variant="h6" gutterBottom component="div">
              입력중이던 정보가 있습니다.
            </Typography>
            <Typography variant="h6" gutterBottom component="div">
              취소하시겠습니까?
            </Typography>
            <Grid container direction="row" justifyContent="center" alignItems="center" gap="10px">
              <Button variant="contained" onClick={() => history.goBack()}>
                예
              </Button>
              <Button variant="contained" onClick={onClickEvent}>
                아니요
              </Button>
            </Grid>
          </Grid>
        </Pmodal>
      );
    case 'delete':
      return (
        <Pmodal open={open} handleClose={onClickEvent} width="600px">
          <Grid container direction="column" justifyContent="center" alignItems="center" gap="10px">
            <Typography variant="h6" gutterBottom component="div">
              삭제 사유
            </Typography>
            <TextField
              fullWidth
              label="삭제사유를 10자 이상으로 작성해주세요"
              value={reason || ''}
              onChange={(e) => {
                const { value } = e.target;
                setReason(value);
                if (value.length >= 10) {
                  setReasonActive(false);
                }
                if (value.length < 10) {
                  setReasonActive(true);
                }
              }}
            />
            <Grid container direction="row" justifyContent="center" alignItems="center" gap="10px">
              <Button variant="contained" onClick={clickDelete} disabled={reasonActive}>
                삭제
              </Button>
              <Button variant="contained" onClick={onClickEvent}>
                취소
              </Button>
            </Grid>
          </Grid>
        </Pmodal>
      );

    default:
      return <></>;
  }
};
SecurityModal.defaultProps = {
  open: false,
  handleClose: () => {},
  id: 0,
};

export default SecurityModal;
