import { createTheme } from '@mui/material';

const globalTheme = {
  typography: {
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
    },
    h2: {
      fontWeight: 600,
      fontSize: '1.8rem',
    },
    h3: {
      fontWeight: 500,
      fontSize: '1.5rem',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.2rem',
    },
    h5: {
      fontWeight: 600,
      fontSize: '1rem',
    },
  },

  palette: {
    primary: {
      main: '#622afa',
      hover: '#8960f7',
      active: '#4523a1',
    },
  },
  text: {
    light: '#dcdedc',
    dark: '#121212',
  },
};

export const theme = createTheme({
  ...globalTheme,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          background: `${globalTheme.palette.primary.main}`,
          color: 'white',
          borderRadius: '0.4rem',
          textTransform: 'capitalize',
          ':hover': {
            background: `${globalTheme.palette.primary.hover}`,
          },
          ':active': {
            background: `${globalTheme.palette.primary.active}`,
          },
        },
      },
    },

    MuiCircularProgress: {
      styleOverrides: {
        root: {
          position: 'absolute',
          top: '50%',
          left: '50%',
          color: `${globalTheme.palette.primary.main}`,
        },
      },
    },

    MuiDivider: {
      styleOverrides: {
        root: {
          background: `${globalTheme.palette.primary.main}`,
        },
      },
    },

    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: `${globalTheme.palette.primary.main}`,
          textTransform: 'capitalize',
          transition: '0.2s',
          ':hover': {
            color: `${globalTheme.palette.primary.hover}`,
          },
        },
      },
    },

    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: `${globalTheme.palette.primary.main}`,
          borderRadius: '0.5rem',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
        body {
          background: #18181b;
          overflow-x: hidden;
          color: ${globalTheme.text.light};
        }
        `,
    },
  },
});

//          display: flex;
//          justify-content: center;
//          align-items: center;
