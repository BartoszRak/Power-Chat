import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Box, Avatar, Typography } from '@material-ui/core'

import AuthContext from '../../../../../../../contexts/AuthContext'
import useStyle from './UserInformation.style'

export function UserInformation(): JSX.Element {
  const classes: { [key: string]: any } = useStyle()
  const { user }: any = useContext(AuthContext)
  console.log(user)
  return <Box p={2} className={classes.root}>
    <Avatar className={classes.avatar} src={user.thumbnailUrl}/>
    <Link className={classes.link} to={`/users/${user.id}`}>
    <Typography color="textPrimary" className={classes.title} variant="h1">{user.nickname}</Typography>
    </Link>
    <Typography className={classes.description} variant="body1">{user.description}</Typography>
  </Box>
}

export default UserInformation