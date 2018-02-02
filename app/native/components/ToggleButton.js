import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class ToggleButton extends Component {

  render() {
    const { onPress, color } = this.props;

    const styles = StyleSheet.create({
      button: {
        textAlign: 'center',
        margin: 10
      },
      buttonContainer: {
        borderRadius: 4,
        backgroundColor: color,
        width: 120
      }
    });
    return (
      <View>
        <View style={styles.buttonContainer}>
          <Text onPress={onPress} style={styles.button}>Toggle color</Text>
        </View>
      </View>
    );
  }
}

ToggleButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
}
