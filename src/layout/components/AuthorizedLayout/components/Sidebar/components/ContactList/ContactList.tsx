import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemIcon,
  Typography,
  Box,
} from '@material-ui/core'
import AddContactIcon from '@material-ui/icons/PersonAdd'

import useStyle from './ContactList.style'

interface Contact {
  url: string
  nickname: string
}

export function ContactList({ contacts, add }: any): JSX.Element {
  const classes: { [key: string]: any } = useStyle()
  return (
    <List>
      {contacts.map((contact: Contact, index: number) => (
        <ListItem
          key={contact.nickname}
          className={classNames({
            [classes.diffrent]: Boolean(index % 2 === 1),
          })}
          button
          onClick={(): any => console.log(`[CONTACT CLICK] ${contacts.nickname}`)}
        >
          <ListItemAvatar>
            <Avatar
              className={classes.avatar}
              alt={contact.nickname}
              src={contact.url}
            />
          </ListItemAvatar>
          <ListItemText>{contact.nickname}</ListItemText>
        </ListItem>
      ))}
      {add && (
        <ListItem
          className={classNames({
            [classes.diffrent]: Boolean(contacts.length % 2 === 1),
          })}
          button
          onClick={add}
        >
          <ListItemIcon>
            <Box className={classes.addNewIconHolder}>
              <AddContactIcon />
            </Box>
          </ListItemIcon>
          <ListItemText>
            <Typography className={classes.addNewText}>Add new</Typography>
          </ListItemText>
        </ListItem>
      )}
    </List>
  )
}

ContactList.propTypes = {
  add: PropTypes.func,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      nickname: PropTypes.string,
    })
  ).isRequired,
}

export default ContactList
