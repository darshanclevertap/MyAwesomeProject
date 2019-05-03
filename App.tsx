/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React, {Component} from 'react';
import {Platform, StyleSheet,TouchableHighlight, Text, View} from 'react-native';

const CleverTap = require('clevertap-react-native');

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

interface Props {}
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native iOS</Text>
        <Text style={styles.instructions}>To get started, edit App.tsx</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <TouchableHighlight style={styles.button}
              onPress={this._recordEvent}>
              <Text>Record Events</Text>
            </TouchableHighlight>
      </View>
    );
  }
  _recordEvent(event) {

    CleverTap.initializeInbox();
          CleverTap.setDebugLevel(3);

          CleverTap.recordEvent('test ios');
          CleverTap.recordEvent('Interstitial ios');
          CleverTap.recordEvent('testEvent');
          CleverTap.recordEvent('testEventWithProps', {'foo': 'bar'});
          CleverTap.showInbox();
          CleverTap.onUserLogin({'Name': 'Aditi', 'Identity': '10109', 'Email': 'aditi@clevertap.com', 'custom1': 123})
          //CleverTap.setPushToken("FCM","abcdfcm");

          CleverTap.profileGetCleverTapID((err, res) => {
            console.log('CleverTapID profile:', res, err);
        });

        CleverTap.profileGetCleverTapAttributionIdentifier((err, res) => {
           console.log('CleverTapAttributionIdentifier', res, err);
       });

       CleverTap.getInboxMessageCount((err, res) => {
           console.log('Total Messages: ', res, err);
       });
       CleverTap.getInboxMessageUnreadCount((err, res) => {
           console.log('Unread Messages: ', res, err);
       });

      }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
