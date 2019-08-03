import { makeStyles } from '@material-ui/core'

export default makeStyles(({ palette, spacing }: any) => ({
  active: {
    background: palette.action.chosen,
  },
  icon: {
    fontSize: '1.1rem',
    margin: spacing(0, 1, 0, -0.5),
  },
  iconOnly: {
    minWidth: 0,
  },
  label: {
    marginRight: spacing(0.5),
  },
  link: {
    fontSize: 'inherit',
    fontWeight: 'normal',
    textDecoration: 'underline',
  },
}))
