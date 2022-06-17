import React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { ListItemButton, SvgIconTypeMap } from '@mui/material';
import { history } from '@store/index';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary {...props} />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: '5px 0',
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

interface Common {
  name: string;
  path: string;
}

interface TextProp extends Common {
  Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
    muiName: string;
  };
}

interface Child extends Common {
  num: number;
  active: boolean;
  getItemNum: (number: number) => void;
}

interface LayoutItems extends TextProp {
  num: number;
  active: boolean;
  getItemNum: (number: number) => void;
}

interface Props extends TextProp {
  expanded: string | false;
  handleChange: (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => void;
  number: number;
  noChild: boolean;
  child: Child[];
}

const LayoutText = (props: LayoutItems) => {
  const { Icon, name, path, num, active, getItemNum } = props;

  const ClickHistory = () => {
    getItemNum(num);
    history.push(`${path}`);
  };
  return (
    <ListItemButton selected={active} onClick={ClickHistory}>
      <Typography
        variant="caption"
        display="flex"
        gutterBottom
        sx={{
          alignItems: 'center',
          lineHeight: 1,
          fontSize: '12px',
          marginBottom: 0,
        }}
      >
        <Icon fontSize="small" sx={{ marginRight: '10px' }} />
        <div>{name}</div>
      </Typography>
    </ListItemButton>
  );
};

const LayoutItem = (props: Props) => {
  const { expanded, handleChange, Icon, number, name, noChild, child, path } = props;

  const LinkClick = () => {
    return noChild ? history.push(`${path}`) : false;
  };
  return (
    <div onClick={LinkClick}>
      <Accordion
        expanded={noChild ? false : expanded === `panel${number}`}
        onChange={handleChange(`panel${number}`)}
      >
        <AccordionSummary
          expandIcon={noChild ? false : <ArrowForwardIosSharpIcon sx={{ fontSize: '0.6rem' }} />}
          sx={{
            minHeight: '38px',
          }}
          aria-controls={`panel${number}d-content`}
          id={`panel${number}d-header`}
        >
          <Typography
            variant="caption"
            display="flex"
            gutterBottom
            sx={{
              alignItems: 'center',
              lineHeight: 1,
              fontSize: '12px',
              marginBottom: 0,
            }}
          >
            <Icon fontSize="small" sx={{ marginRight: '10px' }} />
            <div>{name}</div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {child.map((item, inx) => {
            return (
              <LayoutText
                key={inx}
                Icon={Icon}
                name={item.name}
                path={item.path}
                num={item.num}
                active={item.active}
                getItemNum={item.getItemNum}
              />
            );
          })}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
LayoutItem.defaultProps = {
  noChild: false,
  path: '/',
  child: [],
};
export default LayoutItem;
