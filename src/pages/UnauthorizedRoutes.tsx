import React, { ReactComponentElement } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Login from './Login'
import Register from './Register'

export function UnauthorizedRoutes(): JSX.Element {
  return (
    <Switch>
      <Route path="/register" exact component={Register} />
      <Route path="/login" exact component={Login} />
      <Redirect from="*" to="/login" />
    </Switch>
  )
}

export default UnauthorizedRoutes
