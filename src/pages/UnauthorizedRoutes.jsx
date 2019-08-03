import React from 'react'
import { Switch, Route } from 'react-router-dom'

export function UnauthorizedRoutes() {
  return (
    <Switch>
      <Route path="/register" component={() => <div>login</div>} />
      <Route path="/login" component={() => <div>login</div>} />
    </Switch>
  )
}

export default UnauthorizedRoutes
