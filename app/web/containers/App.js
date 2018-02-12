import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// components
import Header from '../components/Header';
import ToggleButton from '../components/ToggleButton';
import Presentation from '../components/Presentation';
// actions
import { toggleColor } from '../../actions/actions';


class ReactNativeWeb extends Component {

  render() {

    const { dispatch, color } = this.props;

    return (
      <div className="react-native-web">
        <Header />
        <Presentation />
        <ToggleButton
          onClick={() => dispatch(toggleColor())}
          color={color}
        />
      </div>
    );
  }
}

ReactNativeWeb.propTypes = {
  dispatch: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired
};

const select = state => state;

export default connect(select)(ReactNativeWeb);
