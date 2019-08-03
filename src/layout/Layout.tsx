import React, { useContext } from 'react'

import AuthorizedRoutes from '../pages/AuthorizedRoutes'
import UnauthorizedRoutes from '../pages/UnauthorizedRoutes'
import AuthContext from '../contexts/AuthContext'
import useStyle from './Layout.style'

export function Layout() {
  const classes = useStyle()
  const { user }: any = useContext(AuthContext)
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        {user ? <AuthorizedRoutes /> : <UnauthorizedRoutes />}
      </div>
      <div className={classes.background} />
    </div>
  )
}

export default Layout
