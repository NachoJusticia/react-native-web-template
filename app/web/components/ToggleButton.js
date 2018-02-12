import React, { Component } from 'react';
import PropTypes from 'prop-types';
import I18n from './../../i18n';


export default class ToggleButton extends Component {

  render() {

    const { onClick, color } = this.props;
    return (
      <div>
        <div className="toggle-button" onClick={onClick} style={{ backgroundColor: color }}>
          {I18n.TOGGLE_BUTTON}
        </div>
      </div>
    );
  }
}

ToggleButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired
}
