import React from 'react'
import PropTypes from 'prop-types'

import useStyle from './ContactManager.style'

export function ContactManager({ match }: any): JSX.Element {
  const classes: { [key: string]: any } = useStyle()
  return <div className={classes.root}>ContactManager</div>
}

ContactManager.propTypes = {
  match: PropTypes.object,
}

export default ContactManager