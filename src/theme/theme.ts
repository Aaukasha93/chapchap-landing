'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#7042f8', // Web3 Purple
      light: '#9c7dff',
      dark: '#4a00e0',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#00ffa3', // Neon Cyan
      light: '#69ffc8',
      dark: '#00b374',
      contrastText: '#000000',
    },
    background: {
      default: '#030014', // Deep Space Black
      paper: '#111029',   // Dark Glass Card
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B4B4B4',
    },
    action: {
      hover: 'rgba(112, 66, 248, 0.08)',
    },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    h1: {
      fontWeight: 800,
      fontSize: '4rem',
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
      background: 'linear-gradient(to right, #ffffff, #b4b4b4)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      '@media (max-width:600px)': {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontWeight: 700,
      fontSize: '3rem',
      letterSpacing: '-0.01em',
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: '0.02em',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#030014',
          backgroundImage: `
            radial-gradient(circle at 50% 0%, #2a0e61 0%, transparent 50%),
            radial-gradient(circle at 100% 0%, #1a1a40 0%, transparent 50%)
          `,
          backgroundAttachment: 'fixed',
          scrollbarColor: '#7042f8 #030014',
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#030014',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#7042f8',
            borderRadius: '4px',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "50px", // Pill shape
          padding: '12px 32px',
          fontSize: '1rem',
          boxShadow: '0 0 10px rgba(112, 66, 248, 0.3)',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 0 20px rgba(112, 66, 248, 0.6)',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(90deg, #7042f8 0%, #8b5cf6 100%)',
          border: '1px solid rgba(139, 92, 246, 0.3)',
        },
        containedSecondary: {
          background: 'transparent',
          border: '1px solid #00ffa3',
          color: '#00ffa3',
          boxShadow: '0 0 10px rgba(0, 255, 163, 0.1)',
          '&:hover': {
            background: 'rgba(0, 255, 163, 0.1)',
            boxShadow: '0 0 20px rgba(0, 255, 163, 0.4)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: 'rgba(17, 16, 41, 0.6)', // Glass effect base
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
        },
      },
    },
  },
});

export default theme;
