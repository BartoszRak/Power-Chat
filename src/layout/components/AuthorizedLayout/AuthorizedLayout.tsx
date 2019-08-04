import React, { useState } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { Box } from '@material-ui/core'

import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import SidebarContext from '../../../contexts/SidebarContext'
import useStyle from './AuthorizedLayout.style'

export function AuthorizedLayout({ children }: any): JSX.Element {
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
        <Box
          p={8}
          className={classNames(classes.contentWrapper, {
            [classes.closedSidebarContentShift]: !isSidebarOpen,
            [classes.openSidebarContentShift]: isSidebarOpen,
          })}
        >
          <Box className={classes.content}>
            {children}
          </Box>
        </Box>
      </div>
    </SidebarContext.Provider>
  )
}

AuthorizedLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
}

export default AuthorizedLayout
