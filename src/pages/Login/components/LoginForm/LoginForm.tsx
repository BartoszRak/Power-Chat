import React, { useCallback, SyntheticEvent } from 'react'
import { TextField, InputAdornment } from '@material-ui/core'
import EmailIcon from '@material-ui/icons/Email'
import PasswordIcon from '@material-ui/icons/VpnKey'

import Button from '../../../../components/Button'
import useStyle from './LoginForm.style'
import LoginFormSchema from './interfaces/LoginForm.schema'
import useFormValues, { UserFormValuesResult } from '../../../../hooks/useFormValues'

export function LoginForm(): JSX.Element {
  const classes: { [key: string]: any } = useStyle()
  const {
    values,
    fieldOnChange,
    reset,
  }: UserFormValuesResult<LoginFormSchema> = useFormValues<LoginFormSchema>(
    new LoginFormSchema()
  )

  const submit: any = useCallback(
    (evt: SyntheticEvent) => {
      evt.preventDefault()
      // TODO: Handle real submition here.
      console.log('Submit form with values:', values)
      reset()
    },
    [values, reset]
  )

  return (
    <form className={classes.root}>
      <TextField
        className={classes.field}
        InputProps={{
          inputProps: {
            placeholder: 'Account email',
          },
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon className={classes.adornmentIcon} />
            </InputAdornment>
          ),
        }}
        type="email"
        id="email"
        onChange={fieldOnChange}
        value={values.email}
        variant="filled"
      />
      <TextField
        className={classes.field}
        InputProps={{
          inputProps: {
            placeholder: 'Password',
          },
          startAdornment: (
            <InputAdornment position="start">
              <PasswordIcon className={classes.adornmentIcon} />
            </InputAdornment>
          ),
        }}
        type="password"
        id="password"
        variant="filled"
        onChange={fieldOnChange}
        multiline
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

export default LoginForm
