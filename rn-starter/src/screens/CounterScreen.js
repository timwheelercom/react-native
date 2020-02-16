import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CounterScreen = () => {

  const [counter, setCounter] = useState(0);
  const [otherCounter, setOtherCounter] = useState(100);

  return (
      <View>
        <Button title={ 'Increase' } onPress={ () => {
          setCounter(counter + 1);
        } }/>
        <Button title={ 'Decrease' } onPress={ () => {
          setCounter(counter - 1);
        } }/>
        <Text style={ styles.textStyle }>Count: { counter }</Text>
        <Button title={ 'Increase' } onPress={ () => {
          setOtherCounter(otherCounter + 1);
        } }/>
        <Button title={ 'Decrease' } onPress={ () => {
          setOtherCounter(otherCounter - 1);
        } }/>
        <Text style={ styles.textStyle }>Other Count: { otherCounter }</Text>
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
