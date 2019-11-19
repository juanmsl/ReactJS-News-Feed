import React from 'react';

class LoadImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      loader: "https://i.pinimg.com/originals/b8/c8/d8/b8c8d8b7f26bfd7e065f6fc82a4cc13e.gif"
    };
  }

  static defaultProps = {
    alt: ""
  };

  handleLoaded = (e) => {
    this.setState({loaded: true})
  };

  render() {
    const {src, alt, ...props} = this.props;
    const {loaded, loader} = this.state;
    return (
      <img
        {...props}
        alt={alt}
        src={loaded ? src : loader}
        onLoad={this.handleLoaded}
      />
    );
  }
}

export default LoadImage;