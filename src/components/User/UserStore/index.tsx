import React from 'react';
import { Button, Box } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import UserStoreFilter from './modules/UserStoreFilter';
import UserStoreSubModal from './modules/UserStoreSubModal';
import UserStoreStatusModal from './modules/UserStoreStatusModal';
import UserStoreProfileModal from './modules/UserStoreProfileModal';
import UserStoreContractModal from './modules/UserStoreContractModal';
import UserStoreInfoModal from './modules/UserStoreInfoModal';
import { UserStoretype } from './type';
import mockUserStore from '@mocks/mockUserStore.json';

const UserPacer = (): JSX.Element => {
  const [onSubscriber, setOnSubscriber] = React.useState<boolean>(false);
  const [onSubscriberId, setonSubscriberId] = React.useState<number>(0);
  const [onPublicNotice, setOnPublicNotice] = React.useState<boolean>(false);
  const [onPublicNoticeId, setOnPublicNoticeId] = React.useState<number>(0);
  const [onContract, setOnContract] = React.useState<boolean>(false);
  const [onContractId, setOnContractId] = React.useState<number>(0);

  const [onEmployeeStatus, setOnEmployeeStatus] = React.useState<boolean>(false);
  const [onEmployeeStatusId, setOnEmployeeStatusId] = React.useState<number>(0);
  const [onViewStoreInfo, setOnViewStoreInfo] = React.useState<boolean>(false);
  const [onViewStoreInfoId, setOnViewStoreInfoId] = React.useState<number>(0);

  // const data: UserPacertype[] = useAppSelector((state) => state.user.userPacerList);
  const data: UserStoretype[] = mockUserStore;
  // const dispatch = useAppDispatch();

  const handleSubscriberModal = () => {
    setOnSubscriber(!onSubscriber);
  };
  const handleStatusModal = () => {
    setOnPublicNotice(!onPublicNotice);
  };
  const handleContractModal = () => {
    setOnContract(!onContract);
  };
  const handleProfilesModal = () => {
    setOnEmployeeStatus(!onEmployeeStatus);
  };

  const handleViewStoreInfoIdModal = () => {
    setOnViewStoreInfo(!onViewStoreInfo);
  };

  const columns: GridColDef[] = [
    {
      field: 'accountCreateDate',
      headerName: ' 계정생성일시',
      width: 150,
      editable: false,
      headerClassName: 'super-app-theme--header',
    },
    {
      field: 'userId',
      headerName: '아이디',
      width: 150,
      editable: false,
    },
    {
      field: 'tradeName',
      headerName: '상호명',
      width: 150,
      editable: false,
    },
    {
      field: 'busiessNum',
      headerName: '사업자등록번호',
      width: 150,
      editable: false,
    },
    {
      field: 'mileage',
      headerName: '보유 마일리지',
      width: 150,
      editable: false,
    },
    {
      field: 'state',
      headerName: '상태',
      width: 150,
      editable: false,
    },
    {
      field: 'marketing',
      headerName: '마케팅',
      width: 150,
      editable: false,
    },
    {
      field: 'subscribers',
      headerName: '구독자',
      width: 150,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={() => {
            const id = params.row.id;
            setonSubscriberId(id);
            handleSubscriberModal();
          }}
        >
          보기
        </Button>
      ),
    },
    {
      field: 'publicNotice',
      headerName: '공고',
      width: 150,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={() => {
            const id = params.row.id;
            setOnPublicNoticeId(id);
            handleStatusModal();
          }}
        >
          보기
        </Button>
      ),
    },
    {
      field: 'contractStatus',
      headerName: '계약현황',
      width: 150,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={() => {
            const id = params.row.id;
            setOnContractId(id);
            handleContractModal();
          }}
        >
          보기
        </Button>
      ),
    },
    {
      field: 'employeeStatus',
      headerName: '직원 현황',
      width: 150,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={() => {
            const id = params.row.id;
            setOnEmployeeStatusId(id);
            handleProfilesModal();
          }}
        >
          보기
        </Button>
      ),
    },
    {
      field: 'viewStoreInfo',
      headerName: '상점 정보 보기',
      width: 150,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={() => {
            const id = params.row.id;
            setOnViewStoreInfoId(id);
            handleViewStoreInfoIdModal();
          }}
        >
          보기
        </Button>
      ),
    },
  ];

  const rows = data;

  return (
    <Box
      sx={{
        backgroundColor: '#FFF',
        padding: '10px',
      }}
    >
      <UserStoreFilter />
      <div style={{ height: 800, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={15}
          rowsPerPageOptions={[15]}
          disableSelectionOnClick
        />
      </div>
      <UserStoreSubModal
        open={onSubscriber}
        handleClose={handleSubscriberModal}
        ID={onSubscriberId}
      />
      <UserStoreStatusModal
        open={onPublicNotice}
        handleClose={handleStatusModal}
        ID={onPublicNoticeId}
      />
      <UserStoreContractModal
        open={onContract}
        handleClose={handleContractModal}
        ID={onContractId}
      />
      <UserStoreProfileModal
        open={onEmployeeStatus}
        handleClose={handleProfilesModal}
        ID={onEmployeeStatusId}
      />
      <UserStoreInfoModal
        open={onViewStoreInfo}
        handleClose={handleViewStoreInfoIdModal}
        ID={onViewStoreInfoId}
      />
    </Box>
  );
};

export default UserPacer;
