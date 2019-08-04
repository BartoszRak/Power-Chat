import { makeStyles } from '@material-ui/core'

import { sidebarSize } from './Sidebar'

export default makeStyles(({ palette, spacing, transitions }): {
  [key: string]: any
} => ({
  avatar: {
    border: `2px solid ${palette.primary.main}`,
  },
  root: {},
  drawer: {
    width: sidebarSize.open,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  subtitle: {
    fontSize: '1.2rem',
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
