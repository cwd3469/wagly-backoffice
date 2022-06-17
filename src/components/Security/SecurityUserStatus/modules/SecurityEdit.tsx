import { Grid, Button, Paper, TextField, MenuItem, InputLabel, FormControl } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React, { useEffect, useState } from 'react';
import { history } from '@store/index';
import SecurityModal from './SecurityModal';
import { SecurityUserInfo } from '../type';
import { isEmptyArr } from '@utils/arrCheck';
import qs from 'qs';

const SecurityEdit = () => {
  const query = qs.parse(window.location.search, {
    ignoreQueryPrefix: true,
  });

  const detail: boolean = query.state === 'fix';
  const dumi: SecurityUserInfo = {
    userId: 'plz1111',
    permission: 'outside',
    name: '최이랑',
    phone: '0114453774',
    part: '개발 3팀',
    email: 'korean@korea.com',
    end: '2022-05-11',
    isWeek: ['월', '목', '토'],
    accessible: '2022-05-06',
    expiration: '2022-05-28',
    ipadress: '12.33.476.77',
    basis: '개발 3팀 팀장',
  };

  //fix info
  const [fix, setFix] = useState<boolean>(detail);

  //editInfo
  const [permission, setPermission] = useState<string>('');
  const weeks = ['월', '화', '수', '목', '금', '토', '일 '];
  const handleChange = (event: SelectChangeEvent) => {
    setPermission(event.target.value as string);
  };
  const [userId, setUserId] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [part, setPart] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [end, setEnd] = useState<string>('');
  const [isWeek, setIsWeek] = useState<string[]>([]);
  const [accessible, setAccessible] = useState<string>('');
  const [expiration, setExpiration] = useState<string>('');
  const [ipadress, setIpadress] = useState<string>('');
  const [basis, setBasis] = useState<string>('');
  // modal
  const [activeRegistaration, setActiveRegistaration] = useState<boolean>(true);
  const [checkClose, setCheckClose] = useState<boolean>(false);
  const [checkRegistaration, setCheckRegistration] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [modalType, setModalType] = useState<string>('');

  useEffect(() => {
    if (fix) {
      setPermission(dumi.permission);
      setUserId(dumi.userId);
      setName(dumi.name);
      setPhone(dumi.phone);
      setPart(dumi.part);
      setEmail(dumi.email);
      setEnd(dumi.end);
      setIsWeek(dumi.isWeek);
      setAccessible(dumi.accessible);
      setExpiration(dumi.expiration);
      setIpadress(dumi.ipadress);
      setBasis(dumi.basis);
    }
  }, [fix]);

  const cancellation = () => {
    if (checkClose) {
      handleModal('cancellation');
    } else {
      history.goBack();
    }
  };

  useEffect(() => {
    if (
      userId &&
      name &&
      phone &&
      part &&
      email &&
      end &&
      isEmptyArr(isWeek) &&
      accessible &&
      expiration &&
      ipadress &&
      basis
    ) {
      setCheckRegistration(true);
      setActiveRegistaration(false);
    } else {
      setCheckRegistration(false);
      setActiveRegistaration(true);
      setCheckClose(false);
    }
    if (
      userId ||
      name ||
      phone ||
      part ||
      email ||
      end ||
      isEmptyArr(isWeek) ||
      accessible ||
      expiration ||
      ipadress ||
      basis
    ) {
      setCheckClose(true);
    }
  }, [userId, name, phone, part, email, end, isWeek, accessible, expiration, ipadress, basis]);

  const handleModal = (txt: string) => {
    setModalType(txt);
    setOpen(!open);
  };

  const registerClick = () => {
    const securityUserInfo: SecurityUserInfo = {
      userId: userId,
      permission: permission,
      name: name,
      phone: phone,
      part: part,
      email: email,
      end: end,
      isWeek: isWeek,
      accessible: accessible,
      expiration: expiration,
      ipadress: ipadress,
      basis: basis,
    };
    if (checkRegistaration) {
      if (fix) {
        if (JSON.stringify(dumi) === JSON.stringify(securityUserInfo)) {
          handleModal('nonFix');
        } else {
          console.log(`수정 하기 : ${securityUserInfo}`);
          console.log(securityUserInfo);
          handleModal('fix');
        }
      } else {
        console.log(`신규 등록자: ${securityUserInfo}`);
        console.log(securityUserInfo);
        handleModal('registration');
      }
    }
  };
  const deletUserId = () => {
    handleModal('delete');
  };
  const checkUserId = (): void => {
    if (userId) {
      if (userId === 'plz1234') {
        handleModal('double');
      } else {
        handleModal('userIdOk');
      }
    } else {
      alert('아이디를 입력해주세요!!');
    }
  };

  return (
    <Paper
      elevation={1}
      sx={{
        padding: '20px',
      }}
    >
      <Grid container direction="column" justifyContent="center" alignItems="center" gap={4}>
        <Grid container direction="row" justifyContent="flex-end" alignItems="center" gap={2}>
          <Button variant="contained" onClick={cancellation}>
            취소
          </Button>

          {fix ? (
            <>
              <Button variant="contained" onClick={deletUserId} disabled={activeRegistaration}>
                삭제하기
              </Button>
              <Button variant="contained" onClick={registerClick} disabled={activeRegistaration}>
                수정하기
              </Button>
            </>
          ) : (
            <Button variant="contained" onClick={registerClick} disabled={activeRegistaration}>
              등록하기
            </Button>
          )}
        </Grid>
        <Grid container direction="column" justifyContent="center" alignItems="center" gap={2}>
          <FormControl fullWidth>
            <InputLabel id="permission-label">권한 그룹 선택</InputLabel>
            <Select
              labelId="permission-label"
              id="permission"
              value={permission}
              label="권한 그룹을 선택해 주세요"
              onChange={handleChange}
            >
              <MenuItem value={'outside'}>외부 CS</MenuItem>
              <MenuItem value={'inside'}>내부 CS</MenuItem>
            </Select>
          </FormControl>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            gap={2}
          >
            <TextField
              label="아이디"
              sx={{ width: 1200 }}
              value={userId || ''}
              onChange={(e) => {
                const { value } = e.target;
                setUserId(value);
              }}
            />
            <Button variant="contained" sx={{ width: 200 }} onClick={checkUserId}>
              중복 확인
            </Button>
          </Grid>
          <TextField
            fullWidth
            label="이름"
            value={name || ''}
            onChange={(e) => {
              const { value } = e.target;
              setName(value);
            }}
          />
          <TextField
            fullWidth
            label="휴대폰 번호"
            value={phone || ''}
            type="number"
            onChange={(e) => {
              const { value } = e.target;
              setPhone(value);
            }}
          />
          <TextField
            fullWidth
            label="부서명"
            value={part || ''}
            onChange={(e) => {
              const { value } = e.target;
              setPart(value);
            }}
          />
          <TextField
            fullWidth
            label="메일 주소"
            value={email || ''}
            onChange={(e) => {
              const { value } = e.target;
              setEmail(value);
            }}
          />
          <TextField
            fullWidth
            id="end-date"
            label="만료일"
            type="date"
            value={end || ''}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => {
              const { value } = e.target;
              setEnd(value);
            }}
          />
          <Grid container direction="row" justifyContent="start" alignItems="center" gap={2}>
            <div>접속 가능 요일</div>
            {weeks.map((x, index) => {
              return (
                <Button
                  variant="contained"
                  color={isWeek.includes(x) ? 'success' : 'primary'}
                  key={index}
                  onClick={() => {
                    if (!isWeek.includes(x)) {
                      const add = [...isWeek, x];
                      setIsWeek(add);
                    } else {
                      const subtract = isWeek.filter((e) => e !== x);
                      setIsWeek(subtract);
                    }
                  }}
                >
                  {x}
                </Button>
              );
            })}
          </Grid>
          <Grid container direction="row" justifyContent="start" alignItems="center" gap={2}>
            <TextField
              id="accessible-date"
              label="접속 가능 시작 시간"
              type="date"
              value={accessible || ''}
              sx={{ width: 420 }}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => {
                const { value } = e.target;
                setAccessible(value);
              }}
            />
            <TextField
              id="expiration-date"
              label="접속 가능 만료 시간"
              type="date"
              value={expiration || ''}
              sx={{ width: 420 }}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => {
                const { value } = e.target;
                setExpiration(value);
              }}
            />
          </Grid>
        </Grid>
        <TextField
          fullWidth
          label="허용 아이피"
          value={ipadress || ''}
          onChange={(e) => {
            const { value } = e.target;
            setIpadress(value);
          }}
        />
        <TextField
          fullWidth
          label="승인 근거 *"
          value={basis || ''}
          onChange={(e) => {
            const { value } = e.target;
            setBasis(value);
          }}
        />
      </Grid>
      <SecurityModal type={modalType} open={open} handleClose={handleModal} id={query.id} />
    </Paper>
  );
};

export default SecurityEdit;
