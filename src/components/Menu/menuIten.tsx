import React from 'react'
import classNames from 'classnames'
export interface MenuItemProps {
  index?: number
  disabled?: boolean
  className?: string
  children: React.ReactNode
  style?: React.CSSProperties
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { index, disabled, className, style, children } = props
  const classes = classNames('menu-item', classNames, {
    'is-disabled': disabled,
  })
  return <li className={classes} style={style}></li>
}

export default MenuItem