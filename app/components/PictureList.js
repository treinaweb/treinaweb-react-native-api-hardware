import React, {Component} from 'react';
import {View, Image, FlatList, TouchableHighlight} from 'react-native';


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
    const {item} = props;

    return (
        <TouchableHighlight onPress={() => {props.OnClick(item)}} >
            <Image source={{uri: item.url}}
                style={{
                    width: 80,
                    height: 80
                }}
             />
        </TouchableHighlight>
    );
}

export default PictureList;