import React, { Component } from 'react';

class ChildClass extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, this.props);
  }

  render() {
    return <h1> Root Class 1 {this.props.appName}</h1>;
  }
}

export default ChildClass;
