import { makeStyles, Theme } from '@material-ui/core'

export default makeStyles(({ spacing }: Theme) => ({
  adornmentIcon: {
    fontSize: '1.1rem',
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: spacing(2),
  },
  field: {
    margin: spacing(2, 0),
  },
  submit: {
    marginTop: spacing(3),
  },
}))
