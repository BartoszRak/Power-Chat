import { makeStyles, Theme } from '@material-ui/core'

export default makeStyles(({ palette }: Theme): any => ({
  addNewText: {
    fontWeight: 'bold',
    color: palette.text.secondary,
    fontSize: '1rem'
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
  contactNickname: {
    fontSize: '1rem',
  },
  link: {
    textDecoration: 'none',
  },
  root: {},
  diffrent: {
    background: palette.secondary.main,
  },
}))
