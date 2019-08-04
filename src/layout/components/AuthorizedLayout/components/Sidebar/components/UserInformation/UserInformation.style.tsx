import { makeStyles } from '@material-ui/core'

export default makeStyles(({ palette, spacing }): { [key: string]: any } => ({
  avatar: {
    width: 100,
    height: 100,
    border: `2px solid ${palette.primary.main}`,
  },
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  title: {
    marginTop: spacing(2),
    fontSize: '1.5rem',
  },
  link: {
    textDecoration: 'none',
  },
  description: {
    marginTop: spacing(1),
    fontSize: '1rem',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    width: '90%',
  },
}))
