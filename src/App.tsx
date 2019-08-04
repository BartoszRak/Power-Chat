import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import withMuiTheme from './theme/withMuiTheme'

import Layout from './layout'
import AuthContext from './contexts/AuthContext'

// MOCK
const mockedUser = {
  id: '4124',
  email: 'bartosz.rak.official@gmail.com',
  description: 'Hello guys! Here we are :D Enjoy every day of your awesome life.',
  nickname: 'TheMrMares',
  thumbnailUrl:
    'https://www.vibranthealthcentre.co.nz/wp-content/uploads/2018/03/warrior-1080x675.jpg',
}

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <AuthContext.Provider
        value={{
          user: mockedUser,
        }}
      >
        <Layout />
      </AuthContext.Provider>
    </BrowserRouter>
  )
}

export default withMuiTheme(App, true)
