import React, {Component} from 'react';
import { StyleSheet, View, Image, Modal, TouchableOpacity, Text, Button, Clipboard } from 'react-native';
import {RNCamera} from 'react-native-camera';
import {PictureService} from '../services/PictureService';

class CameraDialog extends Component{

    static defaultProps = {
        isOpen: false,
        onClose: () => {}
    }

    state = {
        currentImage: 'http://www.daninoce.com.br/wp-content/uploads/2017/10/dani-noce-bolo-brigadeiro-morango-imagem-destaque.jpg'
    }

    getImageFromClipboard = async () => {
        const imageUrl = await Clipboard.getString(),
            extensions = ['.png', '.jpg', '.jpeg'],
            isImage = extensions.some(extension => imageUrl.toLowerCase().includes(extension));
        if(isImage){
            this.setState({
                currentImage: imageUrl
            })
        }
    }

    save = async () => {
        const result = await PictureService.save(this.state.currentImage);
        this.props.onClose(result);
    }

    shot = async () => {
        if(this.camera){
            const options = {quality: 0.5, base64: true},
                data = await this.camera.takePictureAsync(options);
            this.setState({currentImage: data.uri});
        }
    }


    render(){
        const {props, state} = this;
        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={props.isOpen}
            >   
                <View style={styles.modalView} >
                    <View style={styles.previewContainer}  >
                        <Image source={{uri: state.currentImage}} style={styles.preview}  />
                        <TouchableOpacity onPress={props.onClose} >
                            <Text style={styles.closeButton}  >X</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.cameraContainer} >
                        <RNCamera
                            ref={ref => {
                                this.camera = ref;
                            }}
                            style={styles.camera}
                            type={RNCamera.Constants.Type.front}
                            flashMode={RNCamera.Constants.FlashMode.on}
                        />
                    </View>
                    <View style={styles.buttonContainer}  >
                        <Button 
                            title="Salvar"
                            onPress={this.save}
                            color="#0062ac"
                        />
                        <Button 
                            title="Bater"
                            onPress={this.shot}
                            color="#0062ac"
                        />
                        <Button 
                            title="Colar"
                            onPress={this.getImageFromClipboard}
                            color="#0062ac"
                        />
                    </View>
                </View>
                
            </Modal>
        );
    }
}


const styles = StyleSheet.create({
    modalView: {
        flex: 1
    },
    previewContainer: {
        backgroundColor: 'gray',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    preview: {
        width: 100,
        height: 75,
        borderWidth: 2,
        borderColor: 'black'
    },
    closeButton: {
        padding: 15,
        backgroundColor: 'red',
        fontSize: 20,
        color: 'white'
    },
    cameraContainer: {
        flex: 1,
        flexDirection: 'column'
    },
    camera: {
        flex: 1,
        height: 250,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 40,
        backgroundColor: 'gray'
    }
})



export default CameraDialog;