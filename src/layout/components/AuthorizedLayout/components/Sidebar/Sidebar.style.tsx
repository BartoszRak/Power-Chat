import { makeStyles } from '@material-ui/core'

import { sidebarSize } from './Sidebar'

export default makeStyles(({ spacing, transitions }): { [key: string]: any } => ({
  root: {},
  drawer: {
    width: sidebarSize.open,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  subtitle: {
    fontSize: '1.5rem',
    margin: spacing(2, 2, 0, 2),
  },
  paper: {
    padding: spacing(1, 0),
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
