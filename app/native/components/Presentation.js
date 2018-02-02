import React, { Component } from 'react';
import {
  View,
  Text,
  Platform,
  StyleSheet
} from 'react-native';
import I18n from './../../i18n';

const styles = StyleSheet.create({
  container: {
    margin: 25
  },
  helloWorld: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  multiplatformExplanation: {
    fontSize: 22
  },
  toggleExplanationContainer: {
    marginTop: 20
  }
});

export default class Presentation extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.helloWorld}>
          {I18n.HELLO_WORLD}
        </Text>
        <Text style={styles.multiplatformExplanation}>
          {I18n.PRESENTATION1}{Platform.OS === 'ios' ? 'iOS' : 'Android'}{I18n.PRESENTATION2}
        </Text>
        <View style={styles.toggleExplanationContainer}>
          <Text>
            {I18n.TOGGLE_BUTTON_EXPLANATION}
          </Text>
        </View>
      </View>
    );
  }
}
