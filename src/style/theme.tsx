import { createTheme } from '@mui/material';

const globalTheme = {
  typography: {
    fontFamily: 'Poppins, sans-serif ',
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
      fontSize: '1rem',
      color: 'white',
    },
    h4: {
      fontWeight: 500,
      fontSize: '0.8rem',
      color: '#adadb8',
    },
    h5: {
      fontWeight: 400,
      fontSize: '0.7rem',
      color: '#adadb8',
    },
  },

  palette: {
    primary: {
      main: '#622afa',
      hover: '#8960f7',
      active: '#4523a1',
      gray: '#101012',
    },
    background: {
      paper: '#18181b',
      dark: '#0e0e10',
    },
  },
  text: {
    light: '#dcdedc',
    dark: '#adadb8',
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
          background: #0e0e10;
          overflow-x: hidden;
          color: ${globalTheme.text.light};
        };
        a {
          color: rgba(0,0,0,0);
        }
        `,
    },
  },
});

//          display: flex;
//          justify-content: center;
//          align-items: center;
