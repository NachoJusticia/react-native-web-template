import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class HelloWorld extends Component {
  render() {
    const { onClick, color } = this.props;
    return (
      <div>
        <div className="hello-world" onClick={onClick} style={{ backgroundColor: color }}>
          Toggle color
        </div>
      </div>
    );
  }
}

HelloWorld.propTypes = {
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
}
