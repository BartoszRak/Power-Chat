import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import { NavLink } from 'react-router-dom'
import { Button as MaterialButton } from '@material-ui/core'
import useStyles from './Button.style'

export function Button({
  active,
  classes: overridingClasses,
  className,
  children,
  button: ButtonComponent = MaterialButton,
  icon: IconComponent,
  href,
  variant,
  color,
  onClick,
}: any): JSX.Element {
  const classes: { [key: string]: any } = { ...useStyles(), ...overridingClasses }
  const linkButtonProps: { [key: string]: any } = href
    ? {
        component: React.forwardRef((props: any, ref: any) => (
          <NavLink
            activeClassName={classes.active}
            exact
            innerRef={ref}
            to={props.to}
            {...props}
          />
        )),
        to: href,
      }
    : {}

  return (
    <ButtonComponent
      classes={{
        label: Boolean(children) && classes.label,
        root: classNames(className, classes.root, {
          [classes.active]: active,
          [classes.iconOnly]: Boolean(IconComponent && !children),
        }),
      }}
      className={classNames({
        [classes.link]: variant === 'link',
      })}
      role="button"
      variant={variant === 'link' ? 'text' : variant}
      color={color}
      onClick={onClick}
      {...linkButtonProps}
    >
      {Boolean(IconComponent) && <IconComponent className={classes.icon} />}
      {children}
    </ButtonComponent>
  )
}

Button.propTypes = {
  active: PropTypes.bool,
  button: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  className: PropTypes.string,
  classes: PropTypes.object,
  color: PropTypes.string,
  onClick: PropTypes.func,
  href: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  variant: PropTypes.string,
}

export default Button
