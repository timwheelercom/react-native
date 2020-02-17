import React, { useReducer } from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const isPositiveNumber = (counter, payload) => {
    return (counter + payload) >= 0;
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT_COUNTER':
            return isPositiveNumber(state.counter, action.payload) ? { ...state, counter: state.counter + action.payload } : state;
        case 'DECREMENT_COUNTER':
            return isPositiveNumber(state.counter, action.payload) ? { ...state, counter: state.counter + action.payload } : state;
        case 'INCREMENT_OTHER_COUNTER':
            return isPositiveNumber(state.otherCounter, action.payload) ? { ...state, otherCounter: state.otherCounter + action.payload } : state;
        case 'DECREMENT_OTHER_COUNTER':
            return isPositiveNumber(state.otherCounter, action.payload) ? { ...state, otherCounter: state.otherCounter + action.payload } : state;
        default:
            return state;
    }
};

const incrementCounter = () => ({type: 'INCREMENT_COUNTER', payload: 1});
const decrementCounter = () => ({type: 'DECREMENT_COUNTER', payload: -1});
const incrementOtherCounter = () => ({type: 'INCREMENT_OTHER_COUNTER', payload: 1});
const decrementOtherCounter = () => ({type: 'DECREMENT_OTHER_COUNTER', payload: -1});

const CounterScreen = () => {
    const initialState = {counter: 0, otherCounter: 0};
    const [state, dispatch] = useReducer(reducer, initialState);
    const {counter, otherCounter} = state;
    return (
        <View>
            <Button title={'Increase'} onPress={() => dispatch(incrementCounter())}/>
            <Button title={'Decrease'} onPress={() => dispatch(decrementCounter())}/>
            <Text style={styles.textStyle}>Count: {counter}</Text>
            <Button title={'Increase'} onPress={() => dispatch(incrementOtherCounter())}/>
            <Button title={'Decrease'} onPress={() => dispatch(decrementOtherCounter())}/>
            <Text style={styles.textStyle}>Other Count: {otherCounter}</Text>
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

export default CounterScreen;
