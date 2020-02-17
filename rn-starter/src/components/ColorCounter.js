import React from 'react';
import {View, Text, Image, Button, StyleSheet} from 'react-native';

const ColorCounter = ({ color, onIncrement, onDecrement, onRandom }) => {
    return (
        <View>
            <Text style={styles.textStyle}>{color}</Text>
            {/*<Button onPress={() => onRandom()} title={`Random ${color}`}/>*/}
            <Button onPress={() => onIncrement()} title={`Increase ${color}`}/>
            <Button onPress={() => onDecrement()} title={`Decrease ${color}`}/>
        </View>
    )
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 25,
        textAlign: 'center',
        marginVertical: 10
    }
});

export default ColorCounter;
