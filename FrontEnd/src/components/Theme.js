import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      light: '#ffc246',
      main: '#ff9100',
      dark: '#c56200',
      contrastText: '#000',
    },
    secondary: {
      light: '#8b6b61',
      main: '#5d4037',
      dark: '#321911',
      contrastText: '#fff',
    },
  },
});

export default theme