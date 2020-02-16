import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ImageCard = ({ img, title, imgScore}) => {
    return (
        <View style={ styles.cardContainer }>
            <Image source={ img }/>
            <Text>{ title }</Text>
            <Text>Image Score: { imgScore }</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#fff',
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 4,
        borderStyle: 'solid',
        paddingVertical: 30,
        paddingHorizontal: 20,
        marginVertical: 10,
        marginHorizontal: 10,
        shadowColor: '#333333',
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowOpacity: 0.1
    }
});

export default ImageCard;
