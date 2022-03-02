import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  CssBaseline,
  responsiveFontSizes,
  StyledEngineProvider,
} from "@mui/material";
import { Fragment } from "react";
import LandingPage from "./components/LandingPage";

function App() {
  let theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#d0e1f2",
      },
      background: {
        default: "#282c34",
      },
    },
    typography: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      h1: {
        fontSize: "2rem",
        lineHeight: 1.3,
        fontWeight: 400,
        letterSpacing: "3px",
      },
      h2: {
        fontSize: "1.3rem",
      },
      h3: {
        fontSize: "1rem",
        letterSpacing: "1px",
        lineHeight: 1.5,
        color: "darkgray",
      },
    },
  });

  theme = responsiveFontSizes(theme);
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst>
          <CssBaseline />
          <LandingPage />
        </StyledEngineProvider>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
