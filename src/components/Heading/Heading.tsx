import * as React from 'react'
import classNames from 'classnames'
import { setClassNames } from '../../utils/set-class-names'

export class Heading extends React.Component<HeadingProps, any> {
  render() {
    const { id, style, children, line, element } = this.props

    const newChildren = line ? <span>{children}</span> : children

    return React.createElement(
      element ? element : 'h1',
      {
        id: id ? id : null,
        style: style ? style : null,
        className: this.setClassNames(),
      },
      newChildren ? newChildren : '',
    )
  }

  private setClassNames() {
    const { type, divider, bullet, line } = this.props

    return classNames({
      [`uk-heading-primary`]: type === 'primary',
      [`uk-heading-hero`]: type === 'primary',
      [`uk-heading-divider`]: !!divider,
      [`uk-heading-bullet`]: !!bullet,
      [`uk-heading-line`]: !!line,
      [`${setClassNames(this.props)}`]: true,
    })
  }
}
