import React from 'react'
import { Paper, Typography } from '@material-ui/core'

import LoginForm from './components/LoginForm'
import useStyle from './Login.style'

export function Login(): JSX.Element {
  const classes = useStyle()
  return <div className={classes.root}>
    <Paper>
      <Typography className={classes.title} variant="h1">Login</Typography>
      <LoginForm />
    </Paper>
  </div>
}

export default Login