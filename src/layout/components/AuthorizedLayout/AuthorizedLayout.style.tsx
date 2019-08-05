import { makeStyles } from '@material-ui/core'

import { topbarHeight } from './components/Topbar/Topbar'
import { sidebarSize } from './components/Sidebar/Sidebar'

export default makeStyles(({ transitions }): { [key: string]: any } => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  content: {
    flex: '1 1 auto',
  },
  contentWrapper: {
    marginTop: topbarHeight,
    height: `calc(100vh - ${topbarHeight}px)`,
    display: 'flex',
  },
  openSidebarContentShift: {
    width: `calc(100vw - ${sidebarSize.open}px)`,
    transition: transitions.create('width', {
      easing: transitions.easing.sharp,
      duration: transitions.duration.enteringScreen,
    }),
  },
  closedSidebarContentShift: {
    width: `calc(100vw - ${sidebarSize.closed}px)`,
    transition: transitions.create('width', {
      easing: transitions.easing.sharp,
      duration: transitions.duration.leavingScreen,
    }),
  },
}))
