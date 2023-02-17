import { createTheme } from '@mui/material';

const themeGreen = createTheme({
  palette: {
    primary: {
      main: '#24CCA7',
    },
  },
  components: {
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: '20px',
          boxShadow: '0px 1px 8px rgba(36, 204, 167, 0.5)',
        },
      },
    },
  },
});
export default themeGreen;
