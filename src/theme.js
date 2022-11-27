import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#605DEC",
    },
    secondary: {
      main: "#7C8DB0",
    },
  },
  typography: {
    h2: {
      fontSize: 24,
      lineHeight: "32px",
      fontWeight: 700,
    },
    h3: {
      fontSize: 18,
      lineHeight: "25px",
      fontWeight: 600,
      color: "#6E7491",
    },
    body1: {
      fontSize: 18,
      lineHeight: "25px",
      fontWeight: 400,
    },
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          width: "100%",
          height: "48px",
          borderColor: "#A1B0CC;",
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          width: "100%",
        },
      },
    },
  },
});

export default theme;
