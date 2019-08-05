import React, { useState, SyntheticEvent } from 'react'
import { InputAdornment, TextField } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'

import useStyle from './MessageSender.style'

export function MessageSender(): JSX.Element {
  const classes: { [key: string]: any } = useStyle()
  const [message, setMessage]: any[] = useState('')

  const handleChange = (evt: SyntheticEvent): void => {
    const target: HTMLInputElement = evt.target as HTMLInputElement
    if (target.value[target.value.length - 1] === '\n') {
      setMessage('')
      // TODO: Add real submit here
      return
    }
    setMessage(target.value)
  }

  return (
    <form className={classes.root} onSubmit={() => console.log('submit')}>
      <TextField
        onChange={handleChange}
        value={message}
        fullWidth
        placeholder="Don't be so shy! Type something..."
        multiline
        type="text"
        variant="filled"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SendIcon className={classes.adornmentIcon} />
            </InputAdornment>
          ),
        }}
      />
    </form>
  )
}

export default MessageSender
