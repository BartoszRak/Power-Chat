import React, { useCallback, SyntheticEvent } from 'react'
import classNames from 'classnames'
import { TextField, InputAdornment, Box } from '@material-ui/core'
import EmailIcon from '@material-ui/icons/Email'
import PasswordIcon from '@material-ui/icons/VpnKey'
import RepeatEmailIcon from '@material-ui/icons/MailOutline'
import NicknameIcon from '@material-ui/icons/Person'

import Button from '../../../../components/Button'
import useStyle from './RegisterForm.style'
import useFormValues, { UserFormValuesResult } from '../../../../hooks/useFormValues'
import RegisterFormSchema from './interfaces/RegisterForm.schema'

export function RegisterForm(): JSX.Element {
  const classes: { [key: string]: any } = useStyle()
  const {
    values,
    fieldOnChange,
    reset,
  }: UserFormValuesResult<RegisterFormSchema> = useFormValues<RegisterFormSchema>(
    new RegisterFormSchema()
  )

  const submit = useCallback(
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
        className={classNames(classes.field, classes.nickname)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <NicknameIcon className={classes.adornmentIcon} />
            </InputAdornment>
          ),
        }}
        type="text"
        id="nickname"
        label="Nickname"
        inputProps={{
          placeholder: 'Your username',
        }}
        onChange={fieldOnChange}
        value={values.nickname}
      />
      <Box component="div" className={classes.box}>
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
                <RepeatEmailIcon className={classes.adornmentIcon} />
              </InputAdornment>
            ),
          }}
          type="email"
          id="repeatEmail"
          label="Repeat email"
          inputProps={{
            placeholder: 'Repeated account email',
          }}
          onChange={fieldOnChange}
          value={values.repeatEmail}
        />
      </Box>
      <Box component="div" className={classes.box}>
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
          value={values.password}
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
          id="repeatPassword"
          label="Repeat password"
          inputProps={{
            placeholder: 'Repeated password',
          }}
          onChange={fieldOnChange}
          value={values.repeatPassword}
        />
      </Box>
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

export default RegisterForm
