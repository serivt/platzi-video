import React, { Component } from 'react';


class RegularError extends Component {

  state = {
    handleError: false
  }

  componentDidCatch(err, info) {
    console.log(info);
    this.setState({ handleError: true });
  }

  render() {
    if (this.state.handleError) {
      return <p>Error</p>
    } else {
      return this.props.children;
    }
  }

}

export default RegularError;
