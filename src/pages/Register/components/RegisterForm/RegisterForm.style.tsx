import { makeStyles, Theme } from '@material-ui/core'

export default makeStyles(({ spacing }: Theme): { [key: string]: any } => ({
  adornmentIcon: {
    fontSize: '1.1rem',
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    margin: spacing(2),
  },
  field: {
    margin: spacing(2, 2),
  },
  nickname: {
    alignSelf: 'stretch',
  },
  submit: {
    marginTop: spacing(3),
    alignSelf: 'center',
  },
}))
