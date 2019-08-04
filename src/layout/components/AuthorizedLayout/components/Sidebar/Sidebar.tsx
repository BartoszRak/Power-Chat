import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { SwipeableDrawer } from '@material-ui/core'

import useStyle from './Sidebar.style'

export const sidebarSize: { open: number, closed: number } = {
  open: 300,
  closed: 80,
}

export function Sidebar({ open, onClose, onOpen }: any): JSX.Element {
  const classes: { [key: string]: any } = useStyle()
  return (
    <SwipeableDrawer
      variant="permanent"
      open={open}
      onClose={onClose}
      onOpen={onOpen}
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: classNames({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      Hejkatrololtorrtadsa
    </SwipeableDrawer>
  )
}

Sidebar.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
}

export default Sidebar
