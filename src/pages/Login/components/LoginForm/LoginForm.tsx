import React, { useCallback, SyntheticEvent } from 'react'
import PropTypes from 'prop-types'
import { TextField, InputAdornment } from '@material-ui/core'
import EmailIcon from '@material-ui/icons/Email'
import PasswordIcon from '@material-ui/icons/VpnKey'

import Button from '../../../../components/Button'
import useStyle from './LoginForm.style'
import LoginFormSchema from './interfaces/LoginForm.schema'
import useFormValues, { UserFormValuesResult } from '../../../../hooks/useFormValues'

export function LoginForm() {
  const classes: { [key: string]: any } = useStyle()
  const {
    values,
    fieldOnChange,
    reset,
  }: UserFormValuesResult<LoginFormSchema> = useFormValues<LoginFormSchema>(
    new LoginFormSchema()
  )

  const submit = useCallback(
    (evt: SyntheticEvent) => {
      evt.preventDefault()

      console.log('Submit form with values:', values)
      reset()
    },
    [values]
  )

  return (
    <form className={classes.root}>
      <TextField
        className={classes.field}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon className={classes.adornmentIcon} />
            </InputAdornment>
          ),
        }}
        type="email"
        id="email"
        label="Email"
        inputProps={{
          placeholder: 'Account email',
        }}
        onChange={fieldOnChange}
        value={values.email}
      />
      <TextField
        className={classes.field}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PasswordIcon className={classes.adornmentIcon} />
            </InputAdornment>
          ),
        }}
        type="password"
        id="password"
        label="Password"
        inputProps={{
          placeholder: 'Password',
        }}
        onChange={fieldOnChange}
      />
      <Button
        className={classes.submit}
        color="primary"
        onClick={submit}
        variant="contained"
      >
        Submit
      </Button>
    </form>
  )
}

LoginForm.propTypes = {
  classes: PropTypes.object,
}

export default LoginForm
