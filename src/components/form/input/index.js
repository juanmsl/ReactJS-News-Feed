import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      value: props.value
    };
  }

  static defaultProps = {
    type: "text",
    value: ""
  };

  handleChange = (e) => {
    e.preventDefault();
    const {value} = e.target;
    const nextState = {...this.state, value};
    this.setState(nextState);
    this.props.onChange(nextState);
  };

  render() {
    return (
      <input
        {...this.props}
        {...this.state}
        onChange={this.handleChange}
      />
    );
  }
}

export default Input;