import React, { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Stack,
  Typography,
  TextField,
  Grid,
  Box,
  Checkbox,
  Button,
} from '@mui/material';
import { Permission, EditList, Permissions } from '../type';
import qs from 'qs';
import SecurityModal from './SecurityModal';
import { history } from '@store/index';

const dumi: Permissions = {
  id: 4,
  groupName: '운영',
  banner: { r: false, c: false, u: false, d: true },
  bulletinBoard: { r: false, c: false, u: false, d: true },
  interlockingPattern: { r: false, c: false, u: false, d: true },
  dispatch: { r: true },
  member: { r: false, u: true },
  pacerSettlement: { r: true },
  publicNotice: { r: true, u: false },
  storeSettlement: { r: false },
  termsConditions: { r: true, c: true, u: true, d: true },
};

export default function SecurityEdit() {
  const query = qs.parse(window.location.search, {
    ignoreQueryPrefix: true,
  });
  const fix: boolean = query.state === 'fix';
  const [modal, setModal] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);
  const [groupName, setGroupName] = useState<string>('');
  const [member, setMember] = useState<Permission>({ r: false, u: false });
  const [publicNotice, setPublicNotice] = useState<Permission>({
    r: false,
    u: false,
  });
  const [dispatch, setDispatch] = useState<Permission>({
    r: false,
  });
  const [pacerSettlement, setPacerSettlement] = useState<Permission>({
    r: false,
  });
  const [storeSettlement, setStoreSettlement] = useState<Permission>({
    r: false,
  });
  const [termsConditions, setTermsConditions] = useState<Permission>({
    r: false,
    c: false,
    u: false,
    d: false,
  });
  const [bulletinBoard, setBulletinBoard] = useState<Permission>({
    r: false,
    c: false,
    u: false,
    d: false,
  });
  const [banner, setBanner] = useState<Permission>({
    r: false,
    c: false,
    u: false,
    d: false,
  });
  const [interlock, setInterlock] = useState<Permission>({
    r: false,
    c: false,
    u: false,
    d: false,
  });

  const evetRegistering = () => {
    if (groupName) {
      const groupInfo = {
        groupName: groupName,
        member: member,
        interlockingPattern: interlock,
        publicNotice: publicNotice,
        dispatch: dispatch,
        pacerSettlement: pacerSettlement,
        storeSettlement: storeSettlement,
        termsConditions: termsConditions,
        bulletinBoard: bulletinBoard,
        banner: banner,
      };
      if (fix) {
        console.log('수정하였습니다.');
        console.log(groupInfo);
        setOpen(true);
        setModal('fix');
      } else {
        console.log('등록하였습니다.');
        console.log(groupInfo);
        setOpen(true);
        setModal('registration');
      }
    } else {
      alert('그룹명이 빈 값입니다.');
    }
  };

  const eventGroupName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value.length <= 10) {
      setGroupName(value);
    }
  };

  const openDelete = () => {
    setModal('delete');
    setOpen(true);
  };
  const listChange = (obj: Permission, title: string) => {
    switch (title) {
      case 'keys':
        return Object.keys(obj);
      case 'values':
        return Object.values(obj);
      default:
        return [];
    }
  };

  const listEvent = (
    event: boolean,
    useObj: Permission,
    setState: React.Dispatch<React.SetStateAction<Permission>>,
    idx: number
  ) => {
    const listKey = listChange(useObj, 'keys')[idx];
    const listValue = listChange(useObj, 'values')[idx];
    let result: Permission = {};
    for (let key in useObj) {
      key === listKey ? (result[key] = !listValue) : (result[key] = useObj[key]);
    }
    setState(result);
  };

  const editList: EditList[] = [
    {
      head: '회원',
      dataName: 'member',
      data: member,
      width: 200,
      setState: setMember,
      events: listEvent,
    },
    {
      head: '공고',
      dataName: 'publicNotice',
      data: publicNotice,
      width: 200,
      setState: setPublicNotice,
      events: listEvent,
    },
    {
      head: '배차',
      dataName: 'dispatch',
      data: dispatch,
      width: 200,
      setState: setDispatch,
      events: listEvent,
    },
    {
      head: '페이서 정산',
      dataName: 'pacerSettlement',
      data: pacerSettlement,
      width: 200,
      setState: setPacerSettlement,
      events: listEvent,
    },
    {
      head: '상점 정산',
      dataName: 'storeSettlement',
      data: storeSettlement,
      width: 200,
      setState: setStoreSettlement,
      events: listEvent,
    },
    {
      head: '약관 및 계약서',
      dataName: 'termsConditions',
      data: termsConditions,
      width: 200,
      setState: setTermsConditions,
      events: listEvent,
    },
    {
      head: '게시판',
      dataName: 'bulletinBoard',
      data: bulletinBoard,
      width: 200,
      setState: setBulletinBoard,
      events: listEvent,
    },
    {
      head: '배너',
      dataName: 'banner',
      data: banner,
      width: 200,
      setState: setBanner,
      events: listEvent,
    },
    {
      head: '정규 배차 연동 현황',
      dataName: 'interlock',
      data: interlock,
      width: 200,
      setState: setInterlock,
      events: listEvent,
    },
  ];

  let fixEdit = editList.filter((el) => {
    if (fix) {
      return el.head !== '정규 배차 연동 현황';
    } else {
      return el;
    }
  });

  useEffect(() => {
    if (fix) {
      setGroupName(dumi.groupName);
      setMember(dumi.member);
      setPublicNotice(dumi.publicNotice);
      setDispatch(dumi.dispatch);
      setPacerSettlement(dumi.pacerSettlement);
      setStoreSettlement(dumi.storeSettlement);
      setTermsConditions(dumi.termsConditions);
      setBulletinBoard(dumi.bulletinBoard);
      setBanner(dumi.banner);
    }
  }, [fix]);

  return (
    <Stack gap="30px">
      <Grid container direction="row" justifyContent="flex-end" alignItems="center">
        {fix ? (
          <Grid container gap="10px" width="auto">
            <Button variant="contained" onClick={openDelete}>
              삭제
            </Button>
            <Button variant="contained" onClick={evetRegistering}>
              수정
            </Button>
          </Grid>
        ) : (
          <Button variant="contained" onClick={evetRegistering}>
            등록
          </Button>
        )}
      </Grid>
      <Paper sx={{ padding: '16px' }}>
        <Stack gap="5px">
          <Typography variant="h6" gutterBottom component="div">
            권한 그룹명 *
          </Typography>
          <TextField
            id="outlined-basic"
            label="권한명을 입력해주세요"
            variant="outlined"
            value={groupName}
            onChange={eventGroupName}
          />
        </Stack>
      </Paper>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table sx={{ minWidth: 650, borderCollapse: 'collapse' }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ borderCollapse: 'collapse' }}>
                {fixEdit.map((item, index) => {
                  const keys = listChange(item.data, 'keys');

                  return (
                    <TableCell
                      key={index}
                      sx={{
                        padding: '5px 3px 3px',
                        borderBottom: '0px',
                        minWidth: item.width,
                      }}
                    >
                      <Typography sx={{ textAlign: 'center' }}>{item.head}</Typography>
                      <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        sx={{ width: '100%', border: '1px #eee solid', boxSizing: 'border-box' }}
                      >
                        {keys.map((x, idx) => {
                          return (
                            <Box
                              key={idx}
                              sx={{
                                width: `${100 / keys.length}%`,
                                textAlign: 'center',
                                border: '1px #eee solid',
                              }}
                            >
                              {x.toUpperCase()}
                            </Box>
                          );
                        })}
                      </Grid>
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                  borderCollapse: 'collapse',
                }}
              >
                {fixEdit.map((item, index) => {
                  const values = listChange(item.data, 'values');
                  return (
                    <TableCell
                      key={index}
                      sx={{ padding: '0px 3px 3px', borderBottom: '0px', minWidth: item.width }}
                    >
                      <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        sx={{ width: '100%', border: '1px #eee solid', boxSizing: 'border-box' }}
                      >
                        {values.map((foo, idx) => {
                          return (
                            <Box
                              key={idx}
                              sx={{
                                width: `${100 / values.length}%`,
                                textAlign: 'center',
                                border: '1px #eee solid',
                              }}
                            >
                              <Checkbox
                                checked={foo}
                                key={idx}
                                onChange={() => {
                                  item.events(foo, item.data, item.setState, idx);
                                }}
                              />
                            </Box>
                          );
                        })}
                      </Grid>
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <SecurityModal type={modal} open={open} id={query.id} />
    </Stack>
  );
}
