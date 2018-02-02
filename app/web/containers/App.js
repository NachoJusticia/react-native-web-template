import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// components
import Header     from '../components/Header';
import HelloWorld from '../components/HelloWorld';
// actions
import { toggleColor } from '../../actions/actions';


class ReactNativeWebHelloWorld extends Component {

  render() {
    const { dispatch, color } = this.props;

    return (
      <div className="react-native-web">
        <Header />
        <HelloWorld
          onClick={() => dispatch(toggleColor())}
          color={color}
        />
      </div>
    );
  }
}

ReactNativeWebHelloWorld.propTypes = {
  dispatch: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired
};

const select = state => state;

export default connect(select)(ReactNativeWebHelloWorld);
