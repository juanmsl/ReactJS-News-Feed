import React from 'react';

class LoadImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      loader: "https://loading.io/spinners/cutiefox/lg.cutie-fox-spinner.gif"
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