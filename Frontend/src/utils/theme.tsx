import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#a88aac',
    },
    secondary: {
      main: '#9c27b0',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },

    text: {
      primary: '#1f2933',
      secondary: '#6b7280',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem',
    },
    h3:{
        fontWeight: 500,
        fontSize: '1.75rem',
    },
    h4:{
        fontWeight: 500,
        fontSize: '1.5rem',
    },
    h5:{
        fontWeight: 500,
        fontSize: '1.25rem',
    },
    h6:{
        fontWeight: 500,
        fontSize: '1rem',
    },
    body1: {
      fontSize: '1rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
        },
      },
      defaultProps: {
        variant: 'contained',
        color: 'primary',
      },
    },
  },
});

export default theme;