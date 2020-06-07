import { createMuiTheme } from '@material-ui/core/styles';
import { blue, green, red } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffc928',
    },
    secondary: {
      main: '#20458f',
    },
    info: {
      main: blue[500],
    },
    success: {
      main: green[500],
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;
