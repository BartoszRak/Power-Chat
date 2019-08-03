import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import AuthorizedRoutes from '~pages/AuthorizedRoutes'
import UnauthorizedRoutes from '~pages/UnauthorizedRoutes'
import AuthContext from '~contexts/AuthContext'
import useStyle from './Layout.style'

export function Layout() {
  const classes = useStyle()
  const { user } = useContext(AuthContext)
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        {user ? <AuthorizedRoutes /> : <UnauthorizedRoutes />}
      </div>
      <div className={classes.background} />
    </div>
  )
}

Layout.propTypes = {
  classes: PropTypes.object,
}

export default Layout
