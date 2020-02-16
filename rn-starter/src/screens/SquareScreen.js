import React, {useState} from 'react';
import {ScrollView, Text, Image, Button, StyleSheet} from 'react-native';
import ColorCounter from "../components/ColorCounter";
import ColorCard from "../components/ColorCard";

const SquareScreen = (props) => {

    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    const MIN_VALUE = 0;
    const MAX_VALUE = 255;
    const rgb = `rgb(${red}, ${green}, ${blue})`;
    return (
        <ScrollView>
            <Text style={styles.textStyle}>SquareScreen</Text>
            <ColorCounter
                onRandom={() => setRed(Math.floor(Math.random() * 256))}
                onIncrement={() => red < MAX_VALUE ? setRed(red + 1) : red}
                onDecrement={() => red > MIN_VALUE ? setRed(red - 1) : red}
                color={'Red'}
            />
            <ColorCounter
                onRandom={() => setBlue(Math.floor(Math.random() * 256))}
                onIncrement={() => blue < MAX_VALUE ? setBlue(blue + 1) : blue}
                onDecrement={() => blue > MIN_VALUE ? setBlue(blue - 1) : blue}
                color={'Blue'}
            />
            <ColorCounter
                onRandom={() => setGreen(Math.floor(Math.random() * 256))}
                onIncrement={() => green < MAX_VALUE ? setGreen(green + 1) : green}
                onDecrement={() => green > MIN_VALUE ? setGreen(green - 1) : green}
                color={'Green'}
            />
            <ColorCard backgroundColor={rgb}/>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        textAlign: 'center',
        marginVertical: 20
    }
});

export default SquareScreen;
