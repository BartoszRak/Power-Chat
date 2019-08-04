import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

export function AuthorizedRoutes(): JSX.Element {
  return (
    <Switch>
      <Route path="/users" component={() => <div>users</div>} />
      <Route path="/conversations" component={() => <div>conversations</div>} />
      <Redirect from="*" to="/" />
    </Switch>
  )
}

export default AuthorizedRoutes
