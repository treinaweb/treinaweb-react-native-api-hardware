import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, AlertIOS, ActionSheetIOS } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component{

  async componentDidMount(){
    /*AlertIOS.prompt(
      'meu titulo',
      'uma mensagem',
      [
        {
          text: 'Confirmar',
          onPress: (texto) => console.log(texto)
        }
      ],
      'secure-text',
      '',
      'number-pad'
    )*/

    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Confirmar', 'Apagar', 'Cancelar'],
        cancelButtonIndex: 2,
        destructiveButtonIndex: 1
      },
      (buttonIndex) => {
        console.log(buttonIndex);
        if(buttonIndex === 0){
          console.log('confirmou')
        }
      }
    )
    
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
