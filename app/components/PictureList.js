import React, {Component} from 'react';
import {View, Image, FlatList, TouchableHighlight, Dimensions} from 'react-native';


class PictureList extends Component{
    static defaultProps = {
        list: [],
        onClick: () => {}
    }

    render(){
        const {props} = this;
        const keyExtractor = item => item.id;
        return (
            <View style={{flex: 1}} >
                <FlatList 
                    numColumns={3}
                    data={props.list}
                    keyExtractor={keyExtractor}
                    renderItem={({item}) => <PictureListItem onClick={props.onClick} item={item} />}
                />
            </View>
        );
    }
}


function PictureListItem(props){
    const {item} = props,
        {width} = Dimensions.get('window');

    return (
        <TouchableHighlight onPress={() => {props.onClick(item)}} >
            <Image source={{uri: item.url}}
                style={{
                    width: width / 3 - 8,
                    height: width / 3 - 8,
                    margin: 2
                }}
             />
        </TouchableHighlight>
    );
}

export default PictureList;