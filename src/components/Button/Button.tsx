import classNames from 'classnames'
import type { Props } from './types'
import './button.scss'

export function Button({
  children,
  variant = 'action',
  onClick,
  ...nativeProps
}: Props) {
  return (
    <button
      className={classNames('btn', {
        [`btn--${variant}`]: variant
      })}
      onClick={onClick}
      {...nativeProps}
    >
      {children}
    </button>
  )
}
