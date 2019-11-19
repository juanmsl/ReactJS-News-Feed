import React from 'react';
import loader from 'assets/images/loader.gif';

class LoadImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      loader: loader
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