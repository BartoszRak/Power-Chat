import { makeStyles } from '@material-ui/core'

import { sidebarSize } from './Sidebar'

export default makeStyles(({ transitions }): { [key: string]: any } => ({
  root: {},
  drawer: {
    width: sidebarSize.open,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: sidebarSize.open,
    transition: transitions.create('width', {
      easing: transitions.easing.sharp,
      duration: transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    width: sidebarSize.closed,
    transition: transitions.create('width', {
      easing: transitions.easing.sharp,
      duration: transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
  },
}))
