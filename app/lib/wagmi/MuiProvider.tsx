"use client";

import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 576,
            md: 768,
            lg: 992,
            xl: 1280,
            yl: 1480,
            zl: 1720 
        }
    },
    palette: {
        primary: {
            main: "#0F62FE", // Blue color
        },
        secondary: {
            main: "#dc004e", // Pink color
        },
        text: {
            primary: "#21272A",
        }
    },
    typography: {
        fontFamily: "'Roboto', sans-serif",
    },
});

interface MuiThemeProviderProps {
  children: React.ReactNode;
}

const MuiThemeProvider: React.FC<MuiThemeProviderProps> = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
};

export default MuiThemeProvider;
