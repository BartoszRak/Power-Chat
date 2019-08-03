import React from 'react'
import PropTypes from 'prop-types'
import { Paper, Typography, TextField, Button } from '@material-ui/core'

import LoginForm from './components/LoginForm'
import useStyle from './Login.style'

export function Login() {
  const classes = useStyle()
  return <div className={classes.root}>
    <Paper>
      <Typography className={classes.title} variant="h1">Login</Typography>
      <LoginForm />
    </Paper>
  </div>
}

Login.propTypes = {
  classes: PropTypes.object,
}

export default Login