import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import SidebarContext from '../../../contexts/SidebarContext'
import useStyle from './AuthorizedLayout.style'

export function AuthorizedLayout({ child }: any): JSX.Element {
  const classes: { [key: string]: any } = useStyle()
  const [isSidebarOpen, setSidebarState]: any[] = useState(true)
  return (
    <SidebarContext.Provider value={{ open: isSidebarOpen, set: setSidebarState }}>
      <div className={classes.root}>
        <Topbar />
        <Sidebar
          open={isSidebarOpen}
          onClose={(): any => setSidebarState(false)}
          onOpen={(): any => setSidebarState(true)}
        />
      </div>
    </SidebarContext.Provider>
  )
}

AuthorizedLayout.propTypes = {
  child: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
}

export default AuthorizedLayout
