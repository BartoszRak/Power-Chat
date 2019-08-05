import React from 'react'

import useStyle from './Messages.style'

export function Messages(): JSX.Element {
  const classes: { [key: string]: any } = useStyle()
  return <div className={classes.root}>Messages</div>
}

export default Messages