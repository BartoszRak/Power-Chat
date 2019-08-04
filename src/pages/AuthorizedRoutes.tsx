import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

export function AuthorizedRoutes(): JSX.Element {
  return (
    <Switch>
      <Route path="/" component={() => <div>home</div>} />
      <Redirect from="*" to="/" />
    </Switch>
  )
}

export default AuthorizedRoutes
