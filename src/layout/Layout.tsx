import React, { useContext } from 'react'

import AuthorizedRoutes from '../pages/AuthorizedRoutes'
import UnauthorizedRoutes from '../pages/UnauthorizedRoutes'
import AuthContext from '../contexts/AuthContext'
import useStyle from './Layout.style'
import AuthorizedLayout from './components/AuthorizedLayout'

export function Layout() {
  const classes: { [key: string]: any } = useStyle()
  const { user }: any = useContext(AuthContext)
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        {user ? (
          <AuthorizedLayout>
            <AuthorizedRoutes />
          </AuthorizedLayout>
        ) : (
          <UnauthorizedRoutes />
        )}
      </div>
      <div className={classes.background} />
    </div>
  )
}

export default Layout
