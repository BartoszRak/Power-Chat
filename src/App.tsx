import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import withMuiTheme from './theme/withMuiTheme'

import Layout from './layout'
import AuthContext from './contexts/AuthContext'

// MOCK
const mockedUser = {
  email: 'bartosz.rak.official@gmail.com',
  firstName: 'Bartosz',
  lastName: 'Rak',
}

function App() {
  return <BrowserRouter>
    <AuthContext.Provider value={{
      user: undefined
    }}>
      <Layout />
    </AuthContext.Provider>
  </BrowserRouter>
}

export default withMuiTheme(App, true)
