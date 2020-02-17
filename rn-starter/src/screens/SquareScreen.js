import React, {useReducer} from 'react';
import {ScrollView, Text, StyleSheet} from 'react-native';
import ColorCounter from "../components/ColorCounter";
import ColorCard from "../components/ColorCard";

const reducer = (state, action) => {
    // state === { red: number, green: number, blue: number }
    // action === { type: 'CHANGE_RED' || 'CHANGE_GREEN' || 'CHANGE_BLUE', payload: 15 || -15 }
    const isInvalidRgbRange = (color, state, value) => {
        const RGB_LOWER_BOUND = 0;
        const RGB_UPPER_BOUND = 255;
        return state[color] + value < RGB_LOWER_BOUND || state[color] + value > RGB_UPPER_BOUND;
    };

    switch (action.type) {
        case 'CHANGE_RED':
            return isInvalidRgbRange('red', state, action.payload)
                ? state
                : {...state, red: state.red + action.payload};
        case 'CHANGE_GREEN':
            return isInvalidRgbRange('green', state, action.payload)
                ? state
                : {...state, green: state.green + action.payload};
        case 'CHANGE_BLUE':
            return isInvalidRgbRange('blue', state, action.payload)
                ? state
                : {...state, blue: state.blue + action.payload};
        default:
            return state;
    }
};

const SquareScreen = () => {

    const initialState = {red: 0, green: 0, blue: 0};
    const [state, dispatch] = useReducer(reducer, initialState);

    const COLOR_INCREMENT = 15;
    const COLOR_DECREMENT = -15;

    const {red, green, blue} = state;
    const rgb = `rgb(${red}, ${green}, ${blue})`;

    return (
        <ScrollView>
            <Text style={styles.textStyle}>SquareScreen</Text>
            <ColorCounter
                onIncrement={() => dispatch({type: 'CHANGE_RED', payload: COLOR_INCREMENT})}
                onDecrement={() => dispatch({type: 'CHANGE_RED', payload: COLOR_DECREMENT})}
                color={'Red'}
            />
            <ColorCounter
                onIncrement={() => dispatch({type: 'CHANGE_GREEN', payload: COLOR_INCREMENT})}
                onDecrement={() => dispatch({type: 'CHANGE_GREEN', payload: COLOR_DECREMENT})}
                color={'Green'}
            />
            <ColorCounter
                onIncrement={() => dispatch({type: 'CHANGE_BLUE', payload: COLOR_INCREMENT})}
                onDecrement={() => dispatch({type: 'CHANGE_BLUE', payload: COLOR_DECREMENT})}
                color={'Blue'}
            />
            <ColorCard backgroundColor={rgb} title={rgb} />
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
