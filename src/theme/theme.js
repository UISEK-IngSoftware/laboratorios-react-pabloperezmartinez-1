import { createTheme } from '@mui/material/styles';

export const themeOptions = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#054690',
    },
    secondary: {
      main: '#f50057',
    },
    warning: {
      main: '#d8613c',
    },
    error: {
      main: '#d8613c',
    },
    success: {
      main: '#00d084',
    },
  },
});

export const darkThemeOptions = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#5ea1ff',
    },
    secondary: {
      main: '#ff5c8a',
    },
    warning: {
      main: '#ff9d6c',
    },
    error: {
      main: '#ff7b7b',
    },
    success: {
      main: '#2dd4a3',
    },
    background: {
      default: '#0b1220',
      paper: '#111a2b',
    },
    text: {
      primary: '#f3f6ff',
      secondary: '#b8c3d9',
    },
  },
});