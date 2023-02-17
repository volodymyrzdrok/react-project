import { createTheme } from '@mui/material';

const themeRed = createTheme({
  palette: {
    primary: {
      main: '#db2007',
    },
  },
  components: {
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: '20px',
          boxShadow: '0px 1px 8px rgba(204, 36, 36, 0.5)',
        },
      },
    },
  },
});
export default themeRed;
