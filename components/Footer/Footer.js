import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';

export default class Footer extends Component {
  render() {
    return (
      <LazyLoad height={400}>
        <div id="footer-desktop-main" className="row mt-2">
        </div>
      </LazyLoad>
    );
  }
}
