import fs from 'react-native-fs';

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
    }
}