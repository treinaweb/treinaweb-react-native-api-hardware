import { AsyncStorage } from 'react-native';

export const StorageService = {
    async get(key){
        return JSON.parse(await AsyncStorage.getItem(key));
    },
    async set(key, value){
        return await AsyncStorage.setItem(key, JSON.stringify(value));
    }
}