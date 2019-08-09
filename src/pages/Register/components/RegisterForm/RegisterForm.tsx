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
          inputProps: {
            placeholder: 'Your username',
          },
          startAdornment: (
            <InputAdornment position="start">
              <NicknameIcon className={classes.adornmentIcon} />
            </InputAdornment>
          ),
        }}
        type="text"
        id="nickname"
        onChange={fieldOnChange}
        value={values.nickname}
        variant="filled"
      />
      <Box component="div" className={classes.box}>
        <TextField
          className={classes.field}
          InputProps={{
            inputProps:{
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
              placeholder: 'Repeated account email',
            },
            startAdornment: (
              <InputAdornment position="start">
                <RepeatEmailIcon className={classes.adornmentIcon} />
              </InputAdornment>
            ),
          }}
          type="email"
          id="repeatEmail"
          onChange={fieldOnChange}
          value={values.repeatEmail}
          variant="filled"
        />
      </Box>
      <Box component="div" className={classes.box}>
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
          onChange={fieldOnChange}
          value={values.password}
          variant="filled"
        />
        <TextField
          className={classes.field}
          InputProps={{
            inputProps: {
              placeholder: 'Repeated password',
            },
            startAdornment: (
              <InputAdornment position="start">
                <PasswordIcon className={classes.adornmentIcon} />
              </InputAdornment>
            ),
          }}
          type="password"
          id="repeatPassword"
          onChange={fieldOnChange}
          value={values.repeatPassword}
          variant="filled"
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
