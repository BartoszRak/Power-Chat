import React, { useContext } from 'react'

import AuthorizedRoutes from '~pages/AuthorizedRoutes'
import UnauthorizedRoutes from '~pages/UnauthorizedRoutes'
import AuthContext from '~contexts/AuthContext'

export function Layout() {
  const { user } = useContext(AuthContext)
  return <div>{user ? <AuthorizedRoutes /> : <UnauthorizedRoutes />}</div>
}

export default Layout
