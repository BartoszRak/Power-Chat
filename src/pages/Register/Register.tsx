import React from 'react'
import { Paper, Typography } from '@material-ui/core'

import useStyle from './Register.style'

export function Register(): JSX.Element {
  const classes: { [key: string]: any } = useStyle()
  return <div className={classes.root}>
    <Paper>
      <Typography className={classes.title} variant="h1">Register</Typography>
    </Paper>
  </div>
}

export default Register
