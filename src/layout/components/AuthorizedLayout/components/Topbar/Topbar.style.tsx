import { makeStyles } from '@material-ui/core'
import { sidebarSize } from '../Sidebar/Sidebar'

import { topbarHeight } from './Topbar'

export default makeStyles(({ transitions, typography }): { [key: string]: any } => ({
  appBar: {
    height: 64,
    padding: 0,
    margin: 0,
    width: `calc(100% - ${sidebarSize.closed}px)`,
  },
  icon: {
    fontSize: '1.3rem',
  },
  toolbar: {
    justifyContent: 'space-between',
    height: topbarHeight,
  },
  sidebarShift: {
    width: `calc(100% - ${sidebarSize.open}px)`,
    transition: transitions.create('width', {
      easing: transitions.easing.sharp,
      duration: transitions.duration.enteringScreen,
    }),
  },
}))
