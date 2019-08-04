import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { SwipeableDrawer, Divider, Typography } from '@material-ui/core'

import ContactList from './components/ContactList'
import useStyle from './Sidebar.style'

const mockedContacts: any[] = [{
  nickname: 'Dragon5123',
  url: 'https://boygeniusreport.files.wordpress.com/2017/01/cat.jpg?quality=98&strip=all&w=782',
}, {
  nickname: 'MsAnna',
  url: 'https://cdn.theatlantic.com/assets/media/img/mt/2017/10/Pict1_Ursinia_calendulifolia/lead_720_405.jpg?mod=1533691909',
}, {
  nickname: 'DarkWarrior',
  url: 'https://www.wprost.pl/_thumb/c9/19/8db359c789723076e9084efb316d.jpeg',
}, {
  nickname: 'PlanetEarth',
  url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7nkW7q-9yAl5gB75i-wTbo33ABNbVM8YD4yu8t4LGo9wXgZrjpg',
}]

export const sidebarSize: { open: number, closed: number } = {
  open: 300,
  closed: 70,
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
        paper: classNames(classes.paper, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      User avatar
      <Divider />
      <Typography className={classes.subtitle} variant="h2">Contacts</Typography>
      <ContactList contacts={mockedContacts} />
    </SwipeableDrawer>
  )
}

Sidebar.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
}

export default Sidebar
