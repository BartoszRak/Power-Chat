import { makeStyles } from '@material-ui/core'
import backgroundUrl from '~assets/images/lightning-out-of-the-skies-blur.jpg'

export default makeStyles(() => ({
  root: {},
  content: {
    width: '100%',
  },
  background: {
    background: `url(${backgroundUrl})`,
    zIndex: -1,
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
}))
