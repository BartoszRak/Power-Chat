import React from 'react'
import PropTypes from 'prop-types'

import useStyle from './AuthorizedLayout.style'

export function AuthorizedLayout({ child }: any): JSX.Element {
  const classes: { [key: string]: any } = useStyle()
  return <div className={classes.root}>{child}</div>
}

AuthorizedLayout.propTypes = {
  child: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
}

export default AuthorizedLayout