import * as React from 'react';
import Pmodal from '@components/Common/Pmodal';
import { ModalProps } from '../type';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import IconButton from '@mui/material/IconButton';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Grid } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import UserPacerSubBase from './UserPacerSubBase';
import UserPacerSubmileage from './UserPacerSubmileage';
import UserPacerSubArea from './UserPacerSubArea';
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
const UserPacerSubStoreTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ border: '#eee solid 1px' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="기본 정보" {...a11yProps(0)} />
          <Tab label="마일리지, 출금" {...a11yProps(1)} />
          <Tab label="지역1" {...a11yProps(2)} />
          <Tab label="지역2" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <UserPacerSubBase />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <UserPacerSubmileage />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <UserPacerSubArea />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <UserPacerSubArea />
      </TabPanel>
    </Box>
  );
};

// 모달 필터
const ActiveSelectfilter = (props: { handleClose: () => void }) => {
  const [active, setActive] = React.useState('active');
  const { handleClose } = props;
  const handleChange = (event: SelectChangeEvent) => {
    setActive(event.target.value as string);
  };

  return (
    <Grid container direction="row" justifyContent="space-between" alignItems="center">
      <Box sx={{ minWidth: 150 }}>
        <FormControl fullWidth>
          <Select
            labelId="active-select-label"
            id="active-select"
            size="small"
            value={active}
            onChange={handleChange}
            defaultValue={active}
          >
            <MenuItem value={'active'}>활성</MenuItem>
            <MenuItem value={'unActive'}>비활성</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <IconButton aria-label="delete" onClick={handleClose}>
        <CloseIcon />
      </IconButton>
    </Grid>
  );
};

const UserPacerSubModal = (props: ModalProps) => {
  const { open, handleClose, width, height, ID } = props;
  console.log(ID);

  return (
    <Pmodal open={open} handleClose={handleClose}>
      <div
        style={{ width: width, height: height, display: 'flex', flexDirection: 'column', gap: 10 }}
      >
        <ActiveSelectfilter handleClose={handleClose} />
        <UserPacerSubStoreTabs />
      </div>
    </Pmodal>
  );
};

UserPacerSubModal.defaultProps = {
  open: false,
  handleClose: () => {},
  width: 800,
  height: 650,
};

export default UserPacerSubModal;
