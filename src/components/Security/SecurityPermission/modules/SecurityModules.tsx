import { Checkbox, Grid, Stack, Typography } from '@mui/material';
import { GridColumnHeaderParams, GridRenderCellParams } from '@mui/x-data-grid';

export const ListBox = (props: { children: JSX.Element }) => {
  const { children } = props;
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      lineHeight={1}
      gap="10px"
    >
      {children}
    </Grid>
  );
};

export const CheckPermission = (params: GridColumnHeaderParams) => {
  const field = (title: string): string[] => {
    switch (title) {
      case 'interlockingPattern':
        return ['C', 'R', 'U', 'D'];
      case 'termsConditions':
        return ['C', 'R', 'U', 'D'];
      case 'bulletinBoard':
        return ['C', 'R', 'U', 'D'];
      case 'banner':
        return ['C', 'R', 'U', 'D'];
      case 'member':
        return ['R', 'U'];
      case 'publicNotice':
        return ['R', 'U'];
      default:
        return ['R'];
    }
  };
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      width={params.colDef.computedWidth}
    >
      <Typography variant="subtitle2" gutterBottom component="div">
        {params.colDef.headerName}
      </Typography>
      <ListBox>
        <>
          {field(params.field).map((x, index) => {
            return (
              <Grid key={index} width="24px" textAlign="center">
                {x}
              </Grid>
            );
          })}
        </>
      </ListBox>
    </Stack>
  );
};

export const CheckBoxs = (params: GridRenderCellParams) => {
  let { value } = params;
  let arr: Array<boolean> | null = [];

  for (let objkey in value) {
    if (value.hasOwnProperty(objkey)) {
      arr.push(value[objkey]);
    }
  }
  return (
    <ListBox>
      <>
        {arr.map((x, index) => {
          return (
            <Checkbox
              key={index}
              checked={x}
              inputProps={{ 'aria-label': 'controlled' }}
              sx={{ padding: '0px' }}
              disabled
            />
          );
        })}
      </>
    </ListBox>
  );
};
