import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';

const MaterialUISwitch = styled(Switch)(arg => {
  const { theme, checked } = arg;

  return {
    width: 80,
    height: 40,
    padding: 7,
    '& .MuiSwitch-switchBase': {
      height: '40px',
      margin: 1,
      padding: 0,
      transform: 'translateX(4px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(32px)',
        '& .MuiSwitch-thumb:before': {
          content: "''",
          position: 'absolute',
          width: '100%',
          height: '100%',
          left: 0,
          top: 10,
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            '#fff'
          )}" d="M0 1L20 0.999999" stroke="white" stroke-width="2"/></svg>')`,
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === 'dark' ? '#8796A5' : '#FFFFFF',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: checked ? '#ff6596' : '#24cca7',
      width: 44,
      height: 44,
      '&:before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff'
        )}" d="M10 0V20 M0 10L20 10" stroke="white" stroke-width="2"/></svg>')`,
      },
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#FFFFFF',
      borderRadius: 30,
      border: '1px solid #e0e0e0',
    },
  };
});

export default MaterialUISwitch;
