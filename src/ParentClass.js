import React, { Component } from 'react';
import ChildClass from './ChildClass';

class ParentClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Guest',
      msg: 'Hi this is :'
    };
  }

  componentDidMount() {
    console.log('Component Did Mount being called');

    // let myInterval = setInterval(() => {
    //   console.log('Interval execution looping');
    // }, 2000);
    // console.log(myInterval);
    setTimeout(() => {
      this.setState({ name: 'John' });
    }, 5000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, this.props);
  }

  componentWillUnmount() {
    //  clearInterval(id)
  }

  render() {
    return (
      <h1>
        {this.state.msg} <ChildClass appName={this.state.name} />
      </h1>
    );
  }
}

export default ParentClass;

// 1. Constructor
// 2. Render Method to load the component view
// 3. componentDidMount
