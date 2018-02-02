import React, { Component } from 'react';
import {
  View,
  Text,
  Platform,
  StyleSheet
} from 'react-native';

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
          Hello World!
        </Text>
        <Text style={styles.multiplatformExplanation}>
          I am a multiplaftorm application for iOS, Android and Web. Right now I'm running in an {Platform.OS === 'ios' ? 'iOS' : 'Android'} device, and I share all the logic with my brothers!
        </Text>
        <View style={styles.toggleExplanationContainer}>
          <Text>
            The following button dispatch an action to toggle the background color of this element. This logic has not been implemented three times... :)
          </Text>
        </View>
      </View>
    );
  }
}
