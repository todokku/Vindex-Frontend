import { createMuiTheme } from '@material-ui/core/styles';
import {orange, grey} from '@material-ui/core/colors/';

export const theme = createMuiTheme({
  palette: {
    primary: grey,
    secondary: orange,
  },
  spacing: 8
});