import React, { Component, PropTypes } from 'react';
const VOZ_SOCKET_SERVER = 'http://128.199.183.35:3030';

export default class App extends Component {

  componentWillReceiveProps(nextProps) {
    // this.removeAds(nextProps);
  }

  render() {
    return (
      <div>Hello</div>
    );
  }
}
