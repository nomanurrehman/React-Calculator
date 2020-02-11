import React, { Component } from 'react';
import { Button as ReactstrapButton } from 'reactstrap';

class Button extends Component {

  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.doSomething = this.doSomething.bind(this);
  }

  render() {
    return <ReactstrapButton onClick={this.doSomething}>{ this.props.text }</ReactstrapButton>;
  }

  doSomething(e) {
    e.preventDefault();
    console.log(this.props.text);
  }
}

export default Button;
