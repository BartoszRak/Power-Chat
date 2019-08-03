import React from 'react'
import { Switch, Route } from 'react-router-dom'

export function AuthorizedRoutes() {
  return (
    <Switch>
      <Route path="/" component={() => <div>home</div>} />
    </Switch>
  )
}

export default AuthorizedRoutes
