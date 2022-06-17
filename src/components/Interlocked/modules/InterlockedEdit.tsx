import { Grid, Button, Paper, TextField, MenuItem, InputLabel, FormControl } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { history } from '@store/index';
import InterlockedModal from './InterlockedModal';
import { RegistrationInfo } from '../type';
import qs from 'qs';
import { GridValueGetterParams } from '@mui/x-data-grid';

interface InputProps {
  type: string;
  state: string;
  label: string;
  placeholder: string;
  setState: Dispatch<SetStateAction<string>>;
  select?: { name: string; value: string }[] | null;
  randerEvent?: () => void | null;
}

// input 컴퍼넌트
const Inputs = (props: InputProps) => {
  const { type, state, setState, label, select, placeholder, randerEvent } = props;
  switch (type) {
    case 'text':
      return (
        <TextField
          fullWidth
          label={label}
          placeholder={placeholder}
          value={state || ''}
          onChange={(e) => {
            const { value } = e.target;
            setState(value);
          }}
        />
      );
    case 'search':
      return (
        <Grid container direction="row" justifyContent="space-between" alignItems="center" gap={2}>
          <TextField
            label={label}
            sx={{ width: '80%' }}
            value={state || ''}
            placeholder={placeholder}
            onChange={(e) => {
              const { value } = e.target;
              setState(value);
            }}
          />
          <Button variant="contained" sx={{ width: '15%' }} onClick={randerEvent}>
            검색
          </Button>
        </Grid>
      );
    case 'select':
      return (
        <FormControl fullWidth>
          <InputLabel id="permission-label">{label}</InputLabel>
          <Select
            labelId="permission-label"
            id="permission"
            value={state}
            label={label}
            onChange={(event: SelectChangeEvent) => {
              setState(event.target.value as string);
            }}
          >
            {select?.map((item, idx) => {
              return (
                <MenuItem key={idx} value={item.value}>
                  {item.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      );
    default:
      return <></>;
  }
};
Inputs.defaultProps = {
  select: [{ name: '', value: '' }],
};

// 더미 데이터 api 연결 시 삭제 해주세요
const dumi: RegistrationInfo = {
  pacingStoreId: '아이디',
  posCompany: 'foodtech',
  posDeliveryStoreCode: 'VJ331BE',
  companyName: 'PLZ',
  storeName: 'PLZ 대림점',
  businessNumber: '1237444-2213',
  storePhoneNumber: '010-1234-5677',
  storeAddress: '서울시 성동구 행당동',
  storeDetailAddress: '220-31',
};

const InterlockedEdit = () => {
  //editInfo
  const [pacingStoreId, setPacingStoreId] = useState<string>('');
  const [posCompany, setPosCompany] = useState<string>('');
  const [posDeliveryStoreCode, setPosDeliveryStoreCode] = useState<string>('');
  const [companyName, setCompanyName] = useState<string>('');
  const [storeName, setStoreName] = useState<string>('');
  const [businessNumber, setBusinessNumber] = useState<string>('');
  const [storePhoneNumber, setStorePhoneNumber] = useState<string>('');
  const [storeAddress, setStoreAddress] = useState<string>('');
  const [storeDetailAddress, setStoreDetailAddress] = useState<string>('');
  // modal
  const [activeRegistaration, setActiveRegistaration] = useState<boolean>(true);
  const [checkClose, setCheckClose] = useState<boolean>(false);
  const [checkRegistaration, setCheckRegistration] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [modalType, setModalType] = useState<string>('');

  // 모달 컨트롤러
  const handleModal = (txt: string) => {
    setModalType(txt);
    setOpen(!open);
  };

  //취소
  const cancellation = () => {
    if (checkClose) {
      handleModal('cancellation');
    } else {
      history.goBack();
    }
  };

  // 삭제
  const deletRequest = () => {
    handleModal('delete');
  };

  // 등록 및 수정
  const registerClick = () => {
    const securityUserInfo: RegistrationInfo = {
      pacingStoreId: pacingStoreId,
      posCompany: posCompany,
      posDeliveryStoreCode: posDeliveryStoreCode,
      companyName: companyName,
      storeName: storeName,
      businessNumber: businessNumber,
      storePhoneNumber: storePhoneNumber,
      storeAddress: storeAddress,
      storeDetailAddress: storeDetailAddress,
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

  // Store 검색 결과 입력
  const getStoreData = (storeInfo: GridValueGetterParams, businessNum: string) => {
    setPosDeliveryStoreCode(storeInfo.row.id);
    setCompanyName(storeInfo.row.businessName);
    setStoreName(storeInfo.row.storeName);
    setBusinessNumber(businessNum);
    setStorePhoneNumber(storeInfo.row.phoneNumber);
    setStoreAddress(storeInfo.row.adress);
    setStoreDetailAddress(storeInfo.row.detailAdress);
  };

  //qs fix 모드일때 입력
  const query = qs.parse(window.location.search, {
    ignoreQueryPrefix: true,
  });
  const fix: boolean = query.state === 'fix';

  useEffect(() => {
    if (fix) {
      setPacingStoreId(dumi.pacingStoreId);
      setPosCompany(dumi.posCompany);
      setPosDeliveryStoreCode(dumi.posDeliveryStoreCode);
      setCompanyName(dumi.companyName);
      setStoreName(dumi.storeName);
      setBusinessNumber(dumi.businessNumber);
      setStorePhoneNumber(dumi.storePhoneNumber);
      setStoreAddress(dumi.storeAddress);
      setStoreDetailAddress(dumi.storeDetailAddress);
    }
  }, [fix]);

  // 입력 체크
  useEffect(() => {
    if (
      pacingStoreId &&
      posCompany &&
      posDeliveryStoreCode &&
      companyName &&
      storeName &&
      businessNumber &&
      storePhoneNumber &&
      storeAddress &&
      storeDetailAddress
    ) {
      setCheckRegistration(true);
      setActiveRegistaration(false);
    } else {
      setCheckRegistration(false);
      setActiveRegistaration(true);
      setCheckClose(false);
    }
    if (
      pacingStoreId ||
      posCompany ||
      posDeliveryStoreCode ||
      companyName ||
      storeName ||
      businessNumber ||
      storePhoneNumber ||
      storeAddress ||
      storeDetailAddress
    ) {
      setCheckClose(true);
    }
  }, [
    pacingStoreId,
    posCompany,
    posDeliveryStoreCode,
    companyName,
    storeName,
    businessNumber,
    storePhoneNumber,
    storeAddress,
    storeDetailAddress,
  ]);

  // input 리스트
  const inputs: InputProps[] = [
    {
      label: '등록할 페이싱 상점 ID *',
      placeholder: '등록할 페이싱 상점 ID를 입력해주세요.',
      type: 'text',
      state: pacingStoreId,
      setState: setPacingStoreId,
    },
    {
      label: 'POS 회사 *',
      placeholder: 'POS 회사를 선택해주세요. ',
      type: 'select',
      state: posCompany,
      setState: setPosCompany,
      select: [
        { name: '푸드테크', value: 'foodtech' },
        { name: '카페', value: 'cafe' },
        { name: 'pos', value: 'pos' },
      ],
    },
    {
      label: 'POS 배달 상점 코드 *',
      placeholder: 'POS 배달 상점 코드 직접 입력하기',
      type: 'search',
      state: posDeliveryStoreCode,
      setState: setPosDeliveryStoreCode,
      randerEvent: () => {
        handleModal('codeFinder');
      },
    },
    {
      label: '기업명 *',
      placeholder: '기업명 직접 입력하기',
      type: 'text',
      state: companyName,
      setState: setCompanyName,
    },
    {
      label: '매장명 *',
      placeholder: '매장명 직접 입력하기',
      type: 'text',
      state: storeName,
      setState: setStoreName,
    },
    {
      label: '사업자번호  *',
      placeholder: '사업자번호 직접 입력하기',
      type: 'text',
      state: businessNumber,
      setState: setBusinessNumber,
    },
    {
      label: '매장 전화번호  *',
      placeholder: '매장 전화번호 직접 입력하기',
      type: 'text',
      state: storePhoneNumber,
      setState: setStorePhoneNumber,
    },
    {
      label: '매장 주소  *',
      placeholder: '매장 주소 직접 입력하기',
      type: 'text',
      state: storeAddress,
      setState: setStoreAddress,
    },
    {
      label: '매장 상세 주소  *',
      placeholder: '매장 상세 주소 직접 입력하기',
      type: 'text',
      state: storeDetailAddress,
      setState: setStoreDetailAddress,
    },
  ];

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
              <Button variant="contained" onClick={deletRequest} disabled={activeRegistaration}>
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
          {inputs.map((x, idx) => {
            return (
              <Inputs
                key={idx}
                label={x.label}
                placeholder={x.placeholder}
                type={x.type}
                state={x.state}
                setState={x.setState}
                select={x.select}
                randerEvent={x.randerEvent}
              ></Inputs>
            );
          })}
        </Grid>
      </Grid>
      <InterlockedModal
        type={modalType}
        open={open}
        handleClose={handleModal}
        id={query.id}
        getStoreData={getStoreData}
      />
    </Paper>
  );
};

export default InterlockedEdit;
