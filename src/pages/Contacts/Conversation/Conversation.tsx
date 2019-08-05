import React from 'react'
import PropTypes from 'prop-types'
import { Paper, Box, Divider, Avatar, Typography } from '@material-ui/core'

import MessageSender from './components/MessageSender'
import Messages from './components/Messages'
import useStyle from './Conversation.style'

export function Conversation({ match }: any): JSX.Element {
  const classes: { [key: string]: any } = useStyle()
  return (
    <Paper className={classes.paper}>
      <Box mb={1} className={classes.header}>
        <Avatar
          className={classes.avatar}
          src="https://cdn.theatlantic.com/assets/media/img/mt/2017/10/Pict1_Ursinia_calendulifolia/lead_720_405.jpg?mod=1533691909"
        />
        <Typography className={classes.nickname} variant="h1">
          MsAnna
        </Typography>
      </Box>
      <Box mt={1} mb={1} p={2} className={classes.messages}>
        <Messages />
      </Box>
      <Box mt={1}>
        <MessageSender />
      </Box>
    </Paper>
  )
}

Conversation.propTypes = {
  match: PropTypes.object,
}

export default Conversation
