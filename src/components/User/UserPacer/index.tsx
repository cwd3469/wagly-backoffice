import React, { useEffect } from 'react';
import { Button, Box } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { userPacerListDataGetData } from '@store/modules/user';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import UserPacerFilter from './modules/UserPacerFilter';
import UserPacerSubModal from './modules/UserPacerSubModal';
import UserPacerStatusModal from './modules/UserPacerStatusModal';
import UserPacerProfileModal from './modules/UserPacerProfileModal';
import UserPacerContractModal from './modules/UserPacerContractModal';
import { UserPacertype } from './type';
import mockTestData from '@mocks/mockTestData.json';

const UserPacer = (): JSX.Element => {
  const [onSubStore, setOnSubStore] = React.useState<boolean>(false);
  const [onSubStoreId, setonSubStoreId] = React.useState<number>(0);
  const [onStatus, setOnStatus] = React.useState<boolean>(false);
  const [onStatusId, setOnStatusId] = React.useState<number>(0);
  const [onContract, setOnContract] = React.useState<boolean>(false);
  const [onContractId, setOnContractId] = React.useState<number>(0);
  const [onProfiles, setOnProfiles] = React.useState<boolean>(false);
  const [onProfilesId, setOnProfilesId] = React.useState<number>(0);

  // const data: UserPacertype[] = useAppSelector((state) => state.user.userPacerList);
  const data: UserPacertype[] = mockTestData;
  const dispatch = useAppDispatch();

  const handleSubStoreModal = () => {
    setOnSubStore(!onSubStore);
  };
  const handleStatusModal = () => {
    setOnStatus(!onStatus);
  };
  const handleContractModal = () => {
    setOnContract(!onContract);
  };
  const handleProfilesModal = () => {
    setOnProfiles(!onProfiles);
  };

  const columns: GridColDef[] = [
    {
      field: 'creationDate',
      headerName: ' 계정생성일',
      width: 150,
      editable: false,
      headerClassName: 'super-app-theme--header',
    },
    {
      field: 'ID',
      headerName: '아이디',
      width: 150,
      editable: false,
    },
    {
      field: 'phoneNumber',
      headerName: '휴대폰 뒷자리',
      width: 150,
      editable: false,
    },
    {
      field: 'area1',
      headerName: '지역1',
      width: 150,
      editable: false,
    },
    {
      field: 'area2',
      headerName: '지역2',
      width: 150,
      editable: false,
    },
    {
      field: 'optionalTerms',
      headerName: '선택약관',
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
      field: 'status',
      headerName: '상태',
      width: 150,
      editable: false,
    },
    {
      field: 'subscriptionStore',
      headerName: '구독 상점',
      width: 150,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={() => {
            const id = params.row.id;
            setonSubStoreId(id);
            handleSubStoreModal();
          }}
        >
          구독 상점
        </Button>
      ),
    },
    {
      field: 'supportStatus',
      headerName: '지원  현황',
      width: 150,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={() => {
            const id = params.row.id;
            setOnStatusId(id);
            handleStatusModal();
          }}
        >
          지원현황
        </Button>
      ),
    },
    {
      field: 'contractStatus',
      headerName: '계약 현황',
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
          계약 현황
        </Button>
      ),
    },
    {
      field: 'viewProfiles',
      headerName: '프로필 보기',
      width: 150,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={() => {
            const id = params.row.id;
            setOnProfilesId(id);
            handleProfilesModal();
          }}
        >
          프로필 보기
        </Button>
      ),
    },
  ];

  // useEffect(() => {
  //   dispatch(userPacerListDataGetData());
  // }, [dispatch]);

  const rows = data;

  return (
    <Box
      sx={{
        backgroundColor: '#FFF',
        padding: '10px',
      }}
    >
      <UserPacerFilter />
      <div style={{ height: 800, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={15}
          rowsPerPageOptions={[15]}
          disableSelectionOnClick
        />
      </div>
      <UserPacerSubModal open={onSubStore} handleClose={handleSubStoreModal} ID={onSubStoreId} />
      <UserPacerStatusModal open={onStatus} handleClose={handleStatusModal} ID={onStatusId} />
      <UserPacerContractModal
        open={onContract}
        handleClose={handleContractModal}
        ID={onContractId}
      />
      <UserPacerProfileModal
        open={onProfiles}
        handleClose={handleProfilesModal}
        ID={onProfilesId}
      />
    </Box>
  );
};

export default UserPacer;
