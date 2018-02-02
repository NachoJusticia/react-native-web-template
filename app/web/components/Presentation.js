import React, { Component } from 'react';

export default class Presentation extends Component {
  render() {
    return (
      <div className="presentation">
        <p className="hello-world-text">
          Hello World!
        </p>
        <p className="multiplatform-explanation">
          I am a multiplaftorm application for iOS, Android and Web. Right now I'm running in an web browser, and I share all the logic with my brothers!
        </p>
        <div className="toggle-explanation-container">
          <p className="multiplatform-explanation">
          The following button dispatch an action to toggle the background color of this element. This logic has not been implemented three times... :)
          </p>
        </div>
      </div>
    );
  }
}
