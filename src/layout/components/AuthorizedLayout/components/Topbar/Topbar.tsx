import React, { useContext } from 'react'
import classNames from 'classnames'
import { AppBar, Toolbar, IconButton } from '@material-ui/core'
import ArrowBack from '@material-ui/icons/ArrowBackIos'
import ArrowForward from '@material-ui/icons/ArrowForwardIos'
import LogoutIcon from '@material-ui/icons/PowerSettingsNew'

import Button from '../../../../../components/Button'
import SidebarContext from '../../../../../contexts/SidebarContext'
import useStyle from './Topbar.style'

export function Topbar(): JSX.Element {
  const classes: { [key: string]: any } = useStyle()
  const { open, set }: any = useContext(SidebarContext)
  const iconProps: { [key: string]: any } = {
    className: classes.icon,
  }
  return (
    <AppBar
      position="fixed"
      className={classNames(classes.appBar, {
        [classes.sidebarShift]: open,
      })}
      color="secondary"
    >
      <Toolbar className={classes.toolbar}>
        <IconButton onClick={(): any => set(!open)}>
          {open ? <ArrowBack {...iconProps} /> : <ArrowForward {...iconProps} />}
        </IconButton>
        <Button
          onClick={(): any => console.log('[LOGOUT]')}
          color="primary"
          icon={LogoutIcon}
        >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Topbar
