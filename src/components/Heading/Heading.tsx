import * as React from 'react'
import classNames from 'classnames'
import { setClassNames } from '../../utils/set-class-names'

export class Heading extends React.Component<HeadingProps, any> {
  render() {
    return (
      <div
        id={this.props.id ? this.props.id : null}
        style={this.props.style ? this.props.style : null}
        className={`${this.setClassNames()}`}
      >
        {this.props.children}
      </div>
    )
  }

  private setClassNames() {
    const { type, divider, bullet, line, element: Element } = this.props

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
