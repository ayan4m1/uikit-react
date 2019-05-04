import * as React from 'react';

export class Image extends React.Component<ImageProps, any> {
  render() {
    return (
      <img
        id={this.props.id ? this.props.id : null}
        className={this.props.className}
        width={this.props.width}
        height={this.props.height}
        style={this.props.style ? this.props.style : null}
        data-src={this.props.src}
        data-uk-img={this.props.options ? this.props.options : ''}
      />
    );
  }
}
