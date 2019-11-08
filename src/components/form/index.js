import React from 'react';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static defaultProps = {
    onSubmit: () => {
      console.log("Nothing it's happening with the form state, define onSubmit prop");
    }
  };

  handleChange = (state) => {
    this.setState({
      [state.name]: state.value
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    const {children} = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        {React.Children.map(children, (children) => (
          React.cloneElement(children, {
            onChange: this.handleChange
          })
        ))}
      </form>
    );
  }
}


export {default as Input} from './input';