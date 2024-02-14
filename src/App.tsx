import TheNavbar from "./components/TheNavbar";
import CustomTabPanel from "./components/CustomTabPanel";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { blue, grey } from "@mui/material/colors";

import newAdapter from "./utils/newAdapter";
import thDate from "dayjs/locale/th";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfilePage from "./views/ProfilePage";

let theme = createTheme({
  palette: {
    primary: {
      main: "#02a2ec",
      contrastText: "#fff",
    },

    secondary: {
      main: grey[600],
    },
  },
  typography: {
    fontFamily: "Noto Sans Thai",
  },
  shape: {
    borderRadius: 8,
  },

  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "gradient", color: "primary" },
          style: {
            background: `linear-gradient(45deg, ${blue[700]} 35%, ${blue[300]} 90%)`,
            color: "#fff",
          },
        },
      ],
    },

    MuiTextField: {
      defaultProps: {
        size: "small",
        variant: "outlined",
      },
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#ddd",
            },
            "&:hover fieldset": {
              borderColor: "#02a2ec",
            },
            "&::placeholder": {
              color: "red",
              opacity: 1, // otherwise firefox shows a lighter color
            },
          },
        },
      },
    },
  },
});

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    gradient: true;
  }
}

function App() {
  return (
    <>
      {/* 
      // @ts-ignore */}
      <LocalizationProvider dateAdapter={newAdapter} adapterLocale={thDate}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Routes>
              <Route element={<TheNavbar />}>
                <Route path="/" element={<ProfilePage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </LocalizationProvider>
    </>
  );
}

export default App;
