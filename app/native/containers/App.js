import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { appStyle } from '../styles/styles';
// components
import Header from '../components/Header';
import HelloWorld from '../components/HelloWorld';
import Presentation from '../components/Presentation';
// actions
import { toggleColor } from '../../actions/actions';


class ReactNativeWebHelloWorld extends Component {

  render() {
    const { dispatch, color } = this.props;

    return (
      <View style={appStyle.reactNativeWeb}>
        <Header />
        <Presentation />
        <HelloWorld
          onPress={() => dispatch(toggleColor())}
          color={color}
        />
      </View>
    );
  }
}

ReactNativeWebHelloWorld.propTypes = {
  dispatch: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired
};

const select = state => state;

export default connect(select)(ReactNativeWebHelloWorld);
