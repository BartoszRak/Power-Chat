const headerProps: { [key: string]: any } = {
  fontWeight: 'bold',
  textTransform: 'uppercase',
  letterSpacing: 1,
}

export default {
  overrides: {
    MuiButton: {
      root: {
        fontWeight: 'normal',
        borderRadius: 12,
        minWidth: 120,
      },
    },
    MuiPaper: {
      root: {
        padding: 16,
      },
      rounded: {
        borderRadius: 12,
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
    h1: headerProps,
    h2: headerProps,
    h3: headerProps,
    h4: headerProps,
    h5: headerProps,
    h6: headerProps,
    fontFamily: 'Poppins, sans-serif',
    fontSize: 15,
    useNextVariants: true,
  },
}
