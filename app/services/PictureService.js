import {Alert} from 'react-native';
import fs from 'react-native-fs';

import {NetworkService} from './NetworkService';

export const PictureService = {
    async save(filepath){
        if(filepath.startsWith('http')){
            filepath = await PictureService.saveRemote(filepath);
        }
        return filepath;
    },
    async saveRemote(fromUrl){
        const toFile = `${fs.DocumentDirectoryPath}/${Date.now()}.png`,
        result = await fs.downloadFile({
            fromUrl,
            toFile
        });
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