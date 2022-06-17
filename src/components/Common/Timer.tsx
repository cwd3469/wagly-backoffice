import React from 'react';
import { useState, useEffect } from 'react';
import { Typography } from '@mui/material';

interface Props {
  initialMinute: number;
  initialSeconds: number;
  close: () => void;
  size?: string;
}

const Timer = (props: Props) => {
  const { initialMinute, initialSeconds, close, size } = props;
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });
  useEffect(() => {
    if (minutes === 0 && seconds === 0) {
      close();
    }
  }, [close, minutes, seconds]);
  const sizeChange = (size: string | undefined): string => {
    switch (size) {
      case 'small':
        return '0.700rem';
      case 'medium':
        return '0.875rem';
      case 'large':
        return '1rem';
      case 'x-large':
        return '1.5rem';
      case 'xx-large':
        return '2rem';
      default:
        return '0.875rem';
    }
  };
  return (
    <div>
      {minutes === 0 && seconds === 0 ? null : (
        <Typography
          variant="subtitle2"
          gutterBottom
          component="div"
          sx={{
            color: minutes <= 1 ? 'red' : '',
            textAlign: 'center',
            fontSize: sizeChange(size),
          }}
        >
          {' '}
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </Typography>
      )}
    </div>
  );
};
Timer.defaultProps = {
  size: 'medium',
};
export default Timer;
