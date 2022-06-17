import * as React from 'react';
import Pmodal from '@components/Common/Pmodal';
import { ModalProps } from '../type';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import IconButton from '@mui/material/IconButton';
import { Grid } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import RegularInfo from './RegularInfo';
import RegularPacerInfo from './RegularPacerInfo';
import ReqularProductInfo from './ReqularProductInfo';
import RegularClient from './RegularClient';
import RegularStoreInfo from './RegularStoreInfo';
import Switch from '@mui/material/Switch';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
//tab 본문
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ padding: '10px 0' }}>{children}</Box>}
    </div>
  );
}
// tab id 생산 함수
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

// tab 기능
const NoticeTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ border: '#eee solid 1px' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="주문 정보" {...a11yProps(0)} />
          <Tab label="주문 상품 정보" {...a11yProps(1)} />
          <Tab label="배달 고객 정보" {...a11yProps(2)} />
          <Tab label="배차 페이서 정보" {...a11yProps(3)} />
          <Tab label="상점 정보" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <RegularInfo />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ReqularProductInfo />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <RegularClient />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <RegularPacerInfo />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <RegularStoreInfo />
      </TabPanel>
    </Box>
  );
};

// 모달 필터
const ActiveSelectfilter = (props: { handleClose: () => void }) => {
  const [active, setActive] = React.useState('active');
  const { handleClose } = props;
  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  return (
    <Grid container direction="row" justifyContent="space-between" alignItems="center">
      <Box sx={{ minWidth: 150 }}></Box>
      <IconButton aria-label="delete" onClick={handleClose}>
        <CloseIcon />
      </IconButton>
    </Grid>
  );
};

const RegularModal = (props: ModalProps) => {
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
        <NoticeTabs />
      </div>
    </Pmodal>
  );
};

RegularModal.defaultProps = {
  open: false,
  handleClose: () => {},
  width: 800,
  height: 700,
};

export default RegularModal;
