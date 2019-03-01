import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

import {StorageService} from './app/services/StorageService';

import PictureList from './app/components/PictureList';
import CameraDialog from './app/components/CameraDialog';

export default class App extends Component {

  state = {
    pictureList: [],
    isModalOpen: false
  }

  async componentDidMount(){
    const pictureList = (await StorageService.get('pictureList') || []);
    this.setState({pictureList});
  }

  onPictureSelect = (item) => {

  }

  openModal = () => {
    this.setState({isModalOpen: true});
  }

  closeModal = (response) => {
    const toUpdate = {
      isModalOpen: false
    }
    if(typeof response === 'string'){
      const newItem = {url: response, id: (Date.now()).toString()},
        pictureList = [...this.state.pictureList, newItem];
      toUpdate.pictureList = pictureList;
      StorageService.set('pictureList', pictureList);
    }

    this.setState(toUpdate);
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
