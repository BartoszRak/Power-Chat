export default {
  overrides: {
    MuiButton: {
      root: {
        fontWeight: 'normal',
      },
    },
  },
  palette: {
    action: {
      chosen: 'rgba(255, 255, 255, 0.07)',
    },
    primary: {
      dark: '#111111',
      light: '#222222',
      main: '#1f1f1f',
    },
    secondary: {
      dark: '#eeeeee',
      light: '#ffffff',
      main: '#fafafa',
    },
    success: {
      dark: '#1faa00',
      light: '#9cff57',
      main: '#64dd17',
    },
    type: 'light',
  },
  typography: {
    button: {
      textTransform: 'none',
    },
    fontFamily: 'Poppins, sans-serif',
    fontSize: 15,
    useNextVariants: true,
  },
  overrides: {
    MuiPaper: {
      root: {
        padding: 10,
      }
    }
  }
}
