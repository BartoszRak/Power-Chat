import { makeStyles } from '@material-ui/core'

export default makeStyles(({ spacing }): { [key: string]: any } => ({
  adornmentIcon: {
    fontSize: '1.1rem',
  },
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
}))
