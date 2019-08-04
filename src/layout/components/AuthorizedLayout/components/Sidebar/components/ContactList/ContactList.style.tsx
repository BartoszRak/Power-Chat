import { makeStyles, Theme } from '@material-ui/core'

export default makeStyles(({ palette }: Theme): any => ({
  root: {},
  diffrent: {
    background: palette.secondary.main,
  },
}))
