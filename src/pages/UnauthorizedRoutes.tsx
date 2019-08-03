import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Login from './Login'

export function UnauthorizedRoutes() {
  return (
    <Switch>
      <Route path="/register" exact component={() => <div>login</div>} />
      <Route path="/login" exact component={Login} />
      <Redirect from="*" to="/login" />
    </Switch>
  )
}

export default UnauthorizedRoutes
