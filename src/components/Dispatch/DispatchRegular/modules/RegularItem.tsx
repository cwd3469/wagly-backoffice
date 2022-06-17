import React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

interface ListProps {
  option: string;
  data: string | number;
  on: boolean;
}

const RegularItem = (props: ListProps): JSX.Element => {
  const { option, data, on } = props;

  return (
    <Item variant="outlined">
      <Grid container direction="row" justifyContent="space-between" alignItems="center">
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          sx={{
            width: '90%',
            textAlign: 'left',
          }}
        >
          <div>{option}</div>
          <div>{data}</div>
        </Stack>
        {on ? (
          <IconButton>
            <ContentCopyIcon fontSize="small" />
          </IconButton>
        ) : (
          ''
        )}
      </Grid>
    </Item>
  );
};
RegularItem.defaultProps = {
  on: false,
};
export default RegularItem;
