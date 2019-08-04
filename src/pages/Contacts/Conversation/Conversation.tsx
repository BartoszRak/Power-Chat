import React from 'react'
import PropTypes from 'prop-types'

import useStyle from './Conversation.style'

export function Conversation({ match }: any): JSX.Element {
  const classes: { [key: string]: any } = useStyle()
  return <div className={classes.root}>Conversation</div>
}

Conversation.propTypes = {
  match: PropTypes.object,
}

export default Conversation