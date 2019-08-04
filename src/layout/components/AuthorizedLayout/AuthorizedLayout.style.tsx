import { makeStyles } from '@material-ui/core'

import { topbarHeight } from './components/Topbar/Topbar'
import { sidebarSize } from './components/Sidebar/Sidebar'

export default makeStyles((): { [key: string]: any } => ({
  root: {},
  content: {
    flex: '1 1 auto',
  },
  contentWrapper: {
    marginTop: topbarHeight,
    height: `calc(100vh - ${topbarHeight}px)`,
    display: 'flex',
  },
  openSidebarContentShift: {
    marginLeft: sidebarSize.open,
  },
  closedSidebarContentShift: {
    marginLeft: sidebarSize.closed,
  },
}))
