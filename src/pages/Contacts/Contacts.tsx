import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, Redirect } from 'react-router-dom'

import Conversation from './Conversation'
import ContactManager from './ContactManager'

export function Contacts({ match }: any): JSX.Element {
  return (
    <Switch>
      <Route path={`${match.path}`} exact component={ContactManager} />
      <Route path={`${match.path}/:contactId`} component={Conversation} />
      <Redirect from="*" to={match.url} />
    </Switch>
  )
}

Contacts.propTypes = {
  match: PropTypes.object,
}

export default Contacts
