import fs from 'react-native-fs';
import Share from 'react-native-share';

export const NetworkService = {
    async share(filepath){
        const file = 'data:image/png;base64,' + (await fs.readFile(filepath, 'base64'));
        const result = await Share.open({
            title: 'Compartilhar',
            url: file
        });
        return result;
    }
}