import { makeStyles, Theme } from '@material-ui/core'

export default makeStyles(({ palette }: Theme): any => ({
  addNewText: {
    fontWeight: 'bold',
    color: palette.text.secondary,
  },
  addNewIconHolder: {
    height: 36,
    width: 36,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    border: `2px solid ${palette.primary.main}`
  },
  root: {},
  diffrent: {
    background: palette.secondary.main,
  },
}))
