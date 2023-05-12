import { createTheme } from '@mui/material/styles';

const themeModes = {
  light: 'light',
  dark: 'dark',
};

const themeConfigs = {
  custom: ({ mode }) => {
    const customPalette = mode === themeModes.dark ? {
      primary: {
        main: "#ff0000",
        contrastText: "#ffffff"
      },
      secondary: {
        main: "#f44336",
        contrastText: "#ffffff"
      },
      background: {
        default: "#000000",
        paper: "#131313"
      },
      text: {
        primary: "#ffffff",
        secondary: "#aaaaaa"
      }
    } : {
      primary: {
        main: "#ff0000"
      },
      secondary: {
        main: "#f44336"
      },
      background: {
        default: "#ffffff",
        paper: "#f5f5f5"
      },
      text: {
        primary: "#000000",
        secondary: "#ffffff"
      }
    };

    return createTheme({
      palette: customPalette,
    });
  },
};

export { themeConfigs, themeModes };
