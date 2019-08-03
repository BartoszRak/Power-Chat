import React from 'react'
import { CssBaseline, MuiThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core'
import theme from './theme'

const withMuiTheme = (Component: any, withBaseline: any, additionalTheme?: any) => {
  const muiTheme = responsiveFontSizes(createMuiTheme(
    additionalTheme ? { ...theme, ...additionalTheme } : theme
  ), {})
  if (process.env.NODE_ENV !== 'production') {
    console.info('[THEME]', muiTheme)
  }
  const HOC = (componentProps: any) => (
    <MuiThemeProvider theme={muiTheme}>
      {withBaseline && <CssBaseline />}
      <Component {...componentProps} />
    </MuiThemeProvider>
  )

  const name = Component.displayName || Component.name || ''
  HOC.displayName = `withMuiTheme(${name})`

  return HOC
}

export default withMuiTheme
