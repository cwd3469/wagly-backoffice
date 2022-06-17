import React, { ReactText, useState } from 'react';
import Pmodal from '@components/Common/Pmodal';
import { Grid, Button, Typography, TextField } from '@mui/material';
import { history } from '@store/index';
import { ParsedQs } from 'qs';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import CloseIcon from '@mui/icons-material/Close';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
interface PropsMadal {
  type: string;
  open: boolean;
  handleClose: (txt: string) => void;
  id: string | ParsedQs | string[] | ParsedQs[] | undefined;
  getStoreData: (storeInfo: GridValueGetterParams, businessNum: string) => void | null;
}

const SecurityModal = (props: PropsMadal): JSX.Element => {
  const { type, open, handleClose, id, getStoreData } = props;
  const [businessNumber, setBusinessNumber] = useState<string>('');
  const [businessActive, setBusinessActive] = useState<boolean | undefined>(true);
  const onClickEvent = () => {
    handleClose('');
  };
  const clickDelete = () => {
    console.log(id);
    history.goBack();
  };

  const columns: GridColDef[] = [
    {
      field: 'businessName',
      headerName: '기업명',
      width: 150,
      editable: false,
    },
    {
      field: 'storeName',
      headerName: '매장명',
      width: 150,
      editable: false,
    },
    {
      field: 'phoneNumber',
      headerName: '전화번호',
      width: 150,
      editable: false,
    },
    {
      field: 'adress',
      headerName: '주소',
      width: 150,
      editable: false,
    },
    {
      field: 'detailAdress',
      headerName: '상세주소',
      width: 150,
      editable: false,
    },
    {
      field: 'interlock',
      headerName: '기존 연동',
      width: 150,
      editable: false,
      renderCell: (params) => {
        return params.value ? <CircleOutlinedIcon /> : <CloseIcon />;
      },
    },
    {
      field: 'select',
      headerName: '선택',
      width: 150,
      editable: false,
      renderCell: (params) => {
        return (
          <div
            onClick={() => {
              if (businessActive) {
                alert('사업자 등록번호를 입력해주세요');
              }
            }}
          >
            <Button
              variant="contained"
              disabled={businessActive}
              onClick={() => {
                getStoreData(params, businessNumber);
                onClickEvent();
              }}
            >
              선택
            </Button>
          </div>
        );
      },
    },
  ];

  const rows = [
    {
      id: 1,
      businessName: '푸드테크',
      storeName: '푸드테크 테스트점',
      phoneNumber: '01022356634',
      adress: '서울시 강남구 삼성로 23길 6',
      detailAdress: 'vs빌딩 4층',
      interlock: false,
    },
    {
      id: 2,
      businessName: '푸드테크',
      storeName: '푸드테크 테스트점2',
      phoneNumber: '0102237996',
      adress: '서울시 강남구 삼성로 2346길 6',
      detailAdress: 'vs빌딩 3층',
      interlock: true,
    },
  ];

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
    case 'codeFinder':
      return (
        <Pmodal open={open} handleClose={onClickEvent} width="70%">
          <Grid container direction="column" justifyContent="center" alignItems="center" gap="10px">
            <Grid container direction="row" justifyContent="end" alignItems="center" gap="10px">
              <Button variant="contained" onClick={onClickEvent}>
                닫기
              </Button>
            </Grid>
            <TextField
              fullWidth
              label="사업자 등록번호"
              placeholder="사업자 등록번호를 입력해 주세요"
              value={businessNumber || ''}
              onChange={(e) => {
                const { value } = e.target;
                setBusinessNumber(value);
                if (value.length > 10) {
                  setBusinessActive(false);
                } else {
                  setBusinessActive(true);
                }
              }}
            />
            <div style={{ height: 400, width: '100%' }}>
              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                disableSelectionOnClick
              />
            </div>
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
          <Grid container direction="column" justifyContent="center" alignItems="center" gap="5px">
            <Typography variant="h6" gutterBottom component="div">
              삭제 후 복구가 불가능 합니다.
            </Typography>
            <Typography variant="h6" gutterBottom component="div">
              정말 삭제 하시겠습니까?
            </Typography>
            <Grid container direction="row" justifyContent="center" alignItems="center" gap="10px">
              <Button variant="contained" onClick={clickDelete}>
                예
              </Button>
              <Button variant="contained" onClick={onClickEvent}>
                아니요
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
