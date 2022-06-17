import * as React from 'react';
import LayoutItem from './LayoutItem';

import {
  Home as HomeIcon,
  AccessibilityNew as AccessibilityNewIcon,
  CircleNotifications as CircleNotificationsIcon,
  CarRepair as CarRepairIcon,
  Calculate as CalculateIcon,
  Functions as FunctionsIcon,
  Gavel as GavelIcon,
  Signpost as SignpostIcon,
  ViewCarousel as ViewCarouselIcon,
  PrivacyTip as PrivacyTipIcon,
  Link as LinkIcon,
} from '@mui/icons-material';
export default function CustomizedAccordions() {
  let foo: boolean[] = [];
  for (let i = 0; i < 26; i++) {
    foo.push(false);
  }
  const [expanded, setExpanded] = React.useState<string | false>('panel1');
  const [active, setActive] = React.useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };
  const getItemNum = (number: number) => {
    let foo2 = active.map((x, index) => {
      if (index === number) {
        return (x = true);
      } else {
        return (x = false);
      }
    });

    setActive(foo2);
  };

  return (
    <>
      {/* #1 데시보드 */}
      <LayoutItem
        expanded={expanded}
        handleChange={handleChange}
        Icon={HomeIcon}
        number={1}
        name="데시보드"
        noChild
      />
      <LayoutItem
        expanded={expanded}
        handleChange={handleChange}
        Icon={LinkIcon}
        number={2}
        name="정규 배차 연동 현황"
        path="/interlock"
        noChild
      />
      {/* #2 회원*/}
      <LayoutItem
        expanded={expanded}
        handleChange={handleChange}
        Icon={AccessibilityNewIcon}
        number={3}
        name="회원"
        child={[
          {
            name: '페이서 관리',
            path: '/user/pacer',
            num: 0,
            active: active[0],
            getItemNum: getItemNum,
          },
          {
            name: '상점 관리',
            path: '/user/store',
            num: 1,
            active: active[1],
            getItemNum: getItemNum,
          },
          {
            name: '휴면 관리',
            path: '/user/dormant',
            num: 2,
            active: active[2],
            getItemNum: getItemNum,
          },
        ]}
      />
      {/* #3 공고*/}
      <LayoutItem
        expanded={expanded}
        handleChange={handleChange}
        Icon={CircleNotificationsIcon}
        number={4}
        name="공고"
        child={[
          {
            name: '채용',
            path: '/notice/employment',
            num: 3,
            active: active[3],
            getItemNum: getItemNum,
          },
          {
            name: '긴급',
            path: '/notice/emergency',
            num: 4,
            active: active[4],
            getItemNum: getItemNum,
          },
          {
            name: '예약',
            path: '/notice/reservation',
            num: 5,
            active: active[5],
            getItemNum: getItemNum,
          },
        ]}
      />
      {/* #4 배차*/}
      <LayoutItem
        expanded={expanded}
        handleChange={handleChange}
        Icon={CarRepairIcon}
        number={5}
        name="배차"
        child={[
          {
            name: '정규',
            path: '/dispatch/regular',
            num: 6,
            active: active[6],
            getItemNum: getItemNum,
          },
          {
            name: '긴급',
            path: '/dispatch/emergency',
            num: 7,
            active: active[7],
            getItemNum: getItemNum,
          },
          {
            name: '예약',
            path: '/dispatch/reservation',
            num: 8,
            active: active[8],
            getItemNum: getItemNum,
          },
        ]}
      />
      {/* #5 페이서정산*/}
      <LayoutItem
        expanded={expanded}
        handleChange={handleChange}
        Icon={CalculateIcon}
        number={6}
        name="페이서정산"
        child={[
          {
            name: '적립',
            path: '/settlement/pacer/accumulation',
            num: 9,
            active: active[9],
            getItemNum: getItemNum,
          },
          {
            name: '출금',
            path: '/settlement/pacer/withdrawal',
            num: 10,
            active: active[10],
            getItemNum: getItemNum,
          },
        ]}
      />
      {/* #6 싱점 정산*/}
      <LayoutItem
        expanded={expanded}
        handleChange={handleChange}
        Icon={FunctionsIcon}
        number={7}
        name="상점 정산"
        child={[
          {
            name: '차감 / 회수',
            path: '/settlement/store/deducted',
            num: 11,
            active: active[11],
            getItemNum: getItemNum,
          },
          {
            name: '충전 / 환불',
            path: '/settlement/store/charging',
            num: 12,
            active: active[12],
            getItemNum: getItemNum,
          },
          {
            name: '거래내역서',
            path: '/settlement/store/statement',
            num: 13,
            active: active[13],
            getItemNum: getItemNum,
          },
        ]}
      />
      {/* #7 약관 및 계약서*/}
      <LayoutItem
        expanded={expanded}
        handleChange={handleChange}
        Icon={GavelIcon}
        number={8}
        name="약관 및 계약서"
        child={[
          {
            name: '서비스 이용약관',
            path: '/conditions/service',
            num: 14,
            active: active[14],
            getItemNum: getItemNum,
          },
          {
            name: '2',
            path: '/conditions/store',
            num: 15,
            active: active[15],
            getItemNum: getItemNum,
          },
          {
            name: '3',
            path: '/conditions/dormant',
            num: 16,
            active: active[16],
            getItemNum: getItemNum,
          },
        ]}
      />

      {/* #9 게시판*/}
      <LayoutItem
        expanded={expanded}
        handleChange={handleChange}
        Icon={SignpostIcon}
        number={9}
        name="게시판"
        child={[
          {
            name: '공지사항',
            path: '/post/notice',
            num: 17,
            active: active[17],
            getItemNum: getItemNum,
          },
          { name: 'FAQ', path: '/post/faq', num: 18, active: active[18], getItemNum: getItemNum },
          {
            name: '이벤트',
            path: '/post/event',
            num: 19,
            active: active[19],
            getItemNum: getItemNum,
          },
        ]}
      />
      {/* #10 배너*/}
      <LayoutItem
        expanded={expanded}
        handleChange={handleChange}
        Icon={ViewCarouselIcon}
        number={10}
        name="배너"
        child={[
          {
            name: '페이서',
            path: '/banner/pacer',
            num: 20,
            active: active[20],
            getItemNum: getItemNum,
          },
          {
            name: '상점',
            path: '/banner/store',
            num: 21,
            active: active[21],
            getItemNum: getItemNum,
          },
        ]}
      />
      {/* #11 정보보안*/}
      <LayoutItem
        expanded={expanded}
        handleChange={handleChange}
        Icon={PrivacyTipIcon}
        number={11}
        name="정보보안"
        child={[
          {
            name: '사용자 현황',
            path: '/security/user',
            num: 22,
            active: active[22],
            getItemNum: getItemNum,
          },
          {
            name: '권한 그룹 현황',
            path: '/security/permission',
            num: 23,
            active: active[23],
            getItemNum: getItemNum,
          },
          {
            name: '생성/삭제 기록',
            path: '/security/exist',
            num: 24,
            active: active[24],
            getItemNum: getItemNum,
          },
          {
            name: '로그인/로그아웃 기록',
            path: '/security/log',
            num: 25,
            active: active[25],
            getItemNum: getItemNum,
          },
          {
            name: '개인정보 처리기록',
            path: '/security/history',
            num: 26,
            active: active[26],
            getItemNum: getItemNum,
          },
        ]}
      />
    </>
  );
}
