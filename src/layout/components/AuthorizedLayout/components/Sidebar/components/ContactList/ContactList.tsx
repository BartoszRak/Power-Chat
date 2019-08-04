import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
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
  thumbnailUrl: string
  nickname: string
  id: string
}

export function ContactList({ contacts }: any): JSX.Element {
  const classes: { [key: string]: any } = useStyle()
  return (
    <List>
      {contacts.map((contact: Contact, index: number) => (
        <Link
          key={contact.nickname}
          className={classes.link}
          to={`contacts/${contact.id}`}
        >
          <ListItem
            className={classNames({
              [classes.diffrent]: Boolean(index % 2 === 1),
            })}
            button
          >
            <ListItemAvatar>
              <Avatar
                className={classes.avatar}
                alt={contact.nickname}
                src={contact.thumbnailUrl}
              />
            </ListItemAvatar>
            <ListItemText>
              <Typography
                className={classes.contactNickname}
                variant="h3"
                color="textPrimary"
              >
                {contact.nickname}
              </Typography>
            </ListItemText>
          </ListItem>
        </Link>
      ))}
      <Link className={classes.link} to="contacts/add">
        <ListItem
          className={classNames({
            [classes.diffrent]: Boolean(contacts.length % 2 === 1),
          })}
          button
          role="button"
          aria-label="Add new contact"
        >
          <ListItemIcon>
            <Box className={classes.addNewIconHolder}>
              <AddContactIcon />
            </Box>
          </ListItemIcon>
          <ListItemText>
            <Typography className={classes.addNewText} variant="h2">
              Add new contact
            </Typography>
          </ListItemText>
        </ListItem>
      </Link>
    </List>
  )
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      nickname: PropTypes.string,
    })
  ).isRequired,
}

export default ContactList
