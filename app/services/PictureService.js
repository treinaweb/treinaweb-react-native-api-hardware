import {Alert, CameraRoll} from 'react-native';
import fs from 'react-native-fs';

import {NetworkService} from './NetworkService';

export const PictureService = {
    async save(filepath){
        if(filepath.startsWith('file:///')){
            filepath = await PictureService.saveToCamera(filepath);
        }else if(filepath.startsWith('http')){
            filepath = await PictureService.saveRemote(filepath);
            filepath = await PictureService.save(filepath);
        }
        return filepath;
    },
    async saveToCamera(filepath){
        const url = await CameraRoll.saveToCameraRoll(filepath, 'photo');
        return url;
    },
    async saveRemote(fromUrl){
        const toFile = `${fs.DocumentDirectoryPath}/${Date.now()}.png`,
        result = await fs.downloadFile({
            fromUrl,
            toFile
        });
        await result.promise;
        return 'file://' + toFile;
    },
    selectPicture(item, onRemoveCallback){
        Alert.alert(
            'Minha Imagem',
            item.id,
            [
                {
                    text: 'Compartilhar',
                    onPress: () => PictureService.onShare(item)
                },
                {
                    text: 'Apagar',
                    onPress: () => onRemoveCallback(item)
                },
                {
                    text: 'Cancelar',
                    style: 'cancel'
                }
            ],
            {cancelable: false}
        )
    },
    async onShare (item){
        const response = await NetworkService.share(item.url);
    }
}