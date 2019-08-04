import { makeStyles, Theme } from '@material-ui/core'

export default makeStyles(({ palette }: Theme): any => ({
  avatar: {
    border: `2px solid ${palette.primary.main}`
  },
  root: {},
  diffrent: {
    background: palette.secondary.main,
  },
}))
