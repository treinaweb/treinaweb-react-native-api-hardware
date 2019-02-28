import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Image, CameraRoll } from 'react-native';
import { RNCamera } from 'react-native-camera';
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
    const response = await CameraRoll.getPhotos({
      first: 10,
      assetType: 'Photos'
    });
    console.log(response);
  }

  async shot(){
    if(this.camera){
      const options = {quality: 0.5, base64: true};
      const data = await this.camera.takePictureAsync(options);
      this.setState({img: data.uri});
      CameraRoll.saveToCameraRoll(data.uri);
      console.log(data);
    }
  }

  
  render() {
    
    return (
      <View style={styles.container}>
        <Button title="Tirar Foto"
           onPress={this.shot.bind(this)} />
        <Image source={{uri: this.state.img}} style={{width: 100, height: 100}} />
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <RNCamera
          ref={ref => {this.camera = ref;}}
          style={{height: 200, width: 200}}
          type={RNCamera.Constants.Type.front}
          flashMode={RNCamera.Constants.FlashMode.on}
         />
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
