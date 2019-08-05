import { makeStyles } from '@material-ui/core'

export default makeStyles(({ palette, spacing }): { [key: string]: any } => ({
  avatar: {
    width: 30,
    height: 30,
  },
  paper: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  messages: {
    flexGrow: '1',
    display: 'flex',
    background: palette.secondary.main,
    borderRadius: spacing(3),
    border: `1px solid ${palette.secondary.dark}`,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  nickname: {
    marginLeft: spacing(1),
    fontSize: '1.1rem',
  }
}))