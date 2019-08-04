import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Contacts from './Contacts'

export function AuthorizedRoutes(): JSX.Element {
  return (
    <Switch>
      <Route path="/users" component={() => <div>users</div>} />
      <Route path="/contacts" component={Contacts} />
      <Redirect from="*" to="/" />
    </Switch>
  )
}

export default AuthorizedRoutes
