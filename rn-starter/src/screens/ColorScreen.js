import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, FlatList } from 'react-native';
import ColorCard from "../components/ColorCard";

const ColorScreen = () => {

    const [colors, setColors] = useState([]);

    const generateRandomRgb = () => {
        const rValue = Math.floor(Math.random() * 256);
        const gValue = Math.floor(Math.random() * 256);
        const bValue = Math.floor(Math.random() * 256);
        return `rgb(${ rValue }, ${ gValue }, ${ bValue })`;
    };

    return (
        <View>
            <Text style={styles.textStyle}>ColorScreen</Text>
            <Button title={'New Color'} onPress={() => {
                setColors([generateRandomRgb(), ...colors])
            }} />
            <FlatList
                data={colors}
                keyExtractor={(item, index) => index.toString() }
                renderItem={({ item }) => {
                    return ( <ColorCard backgroundColor={item} title={item} /> )
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        textAlign: 'center',
        marginVertical: 20
    }
});

export default ColorScreen;
