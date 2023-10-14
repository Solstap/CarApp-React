import { createTheme } from "@mui/material/styles";
import red from '@mui/material/colors/red';

let theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
    secondary: {
      main: "#edf2ff",
    },
  },
});

export default theme;