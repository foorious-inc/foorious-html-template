import React, { Component, Fragment } from 'react';

import '../../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';

class Container extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        {this.props.children}
      </div>
    );
  }
}

class Row extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        {this.props.children}
      </div>
    );
  }
}

class Col extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col">
        {this.props.children}
      </div>
    );
  }
}

export {
  Container,
  Row,
  Col
};


