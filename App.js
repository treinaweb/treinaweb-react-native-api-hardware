import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Image, CameraRoll } from 'react-native';

import ImagePicker from 'react-native-image-picker';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component{

  state = {
    img: ''
  }

  async componentDidMount(){
    ImagePicker.showImagePicker({
      title: 'Escolha uma foto',
      cancelButtonTitle: 'Nao quero',
      takePhotoButtonTitle: 'Abrir camera',
      chooseFromLibraryButtonTitle: 'Abrir album'
    }, (response) => {
      console.log(response);
      if(response.uri){
        this.setState({img: response.uri});
      }
    })

    //ImagePicker.launchCamera({}, () => {});
    //ImagePicker.launchImageLibrary({}, () => {});
  }


  
  render() {
    
    return (
      <View style={styles.container}>
        <Image source={{uri: this.state.img}} style={{width: 100, height: 100}} />
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
