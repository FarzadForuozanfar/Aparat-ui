import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  direction: 'rtl',
  palette: {
    primary:{
      main:'#df0f50',
      text:'#fff'
    },
    secondary:{
      main:'#05a3e8',
      text:'#fff'
    }
  },
  typography:{
    fontFamily:
      'IRANSans, Roboto, Helvetica, Arial, sans-serif',
    fontSize : 12
  }
});

export default theme;
