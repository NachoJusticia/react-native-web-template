import React, { Component } from 'react';
import I18n from './../../i18n';


export default class Presentation extends Component {

  render() {

    return (
      <div className="presentation">
        <p className="hello-world-text">
          {I18n.HELLO_WORLD}
        </p>
        <p className="multiplatform-explanation">
          {I18n.PRESENTATION1}{I18n.WEB_BROWSER}{I18n.PRESENTATION2}
        </p>
        <div className="toggle-explanation-container">
          <p className="multiplatform-explanation">
            {I18n.TOGGLE_BUTTON_EXPLANATION}
          </p>
        </div>
      </div>
    );
  }
}
