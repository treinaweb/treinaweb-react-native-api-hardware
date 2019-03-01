import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

import PictureList from './app/components/PictureList';
import CameraDialog from './app/components/CameraDialog';

export default class App extends Component {

  state = {
    pictureList: [
      {id: '1', url: 'http://www.daninoce.com.br/wp-content/uploads/2017/10/dani-noce-bolo-brigadeiro-morango-imagem-destaque.jpg'},
      {id: '2', url: 'http://www.daninoce.com.br/wp-content/uploads/2017/10/dani-noce-bolo-brigadeiro-morango-imagem-destaque.jpg'},
      {id: '3', url: 'http://www.daninoce.com.br/wp-content/uploads/2017/10/dani-noce-bolo-brigadeiro-morango-imagem-destaque.jpg'},
      {id: '4', url: 'http://www.daninoce.com.br/wp-content/uploads/2017/10/dani-noce-bolo-brigadeiro-morango-imagem-destaque.jpg'}
    ],
    isModalOpen: false
  }

  onPictureSelect = (item) => {

  }

  openModal = () => {
    this.setState({isModalOpen: true});
  }

  closeModal = (response) => {
    this.setState({isModalOpen: false});
  }

  render() {
    const {state} = this;
    return (
      <View style={styles.container}>
        <PictureList list={state.pictureList} onClick={this.onPictureSelect} />
        <View style={styles.footer} >
          <Button
            onPress={this.openModal}
            title="Nova Foto"
            color="#0062ac"
           />
        </View>
        <CameraDialog isOpen={state.isModalOpen} onClose={this.closeModal} />
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
  footer: {
    padding: 15,
    backgroundColor: '#999',
    width: '100%',
    textAlign: 'center'
  }
});
