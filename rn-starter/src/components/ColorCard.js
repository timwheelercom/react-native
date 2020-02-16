import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ColorCard = (props) => {
    return (
        <View style={{ ...styles.cardContainer, backgroundColor: props.backgroundColor }}>
            <View style={ styles.colorBlock } />
            <Text style={ styles.rgbText }>{ props.title }</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    colorBlock: {
        backgroundColor: '#333'
    },
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
    },
    rgbText: {
        fontSize: 30,
        color: '#fff',
        textAlign: 'center'
    }
});

export default ColorCard;
