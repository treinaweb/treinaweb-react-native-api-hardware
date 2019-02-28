import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ToastAndroid, TimePickerAndroid, DatePickerAndroid} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component{

  async componentDidMount(){ 
    ToastAndroid.showWithGravityAndOffset(
      'Uma mensagem', 
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
      50,
      20
    )

    const {action, hour, minute} = await DatePickerAndroid.open({
      hour: 14,
      minute: 30,
      is24Hour: false
    })
    console.log(action, hour, minute);

    const {action, year, month, day} = await DatePickerAndroid.open({
      date: new Date(2020, 8, 3)
    })
    console.log(action, year, month, day);

  }

  
  render() {
    
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
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
