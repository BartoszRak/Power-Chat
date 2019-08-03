import { makeStyles } from '@material-ui/core'
import backgroundUrl from '~assets/images/landscape-architecture-skyline-night-city-skyscraper.jpg'

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
    width: '100%',
    height: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
}))
