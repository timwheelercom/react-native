import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ComponentsScreen = () => {
    const name = 'Tim';
    return (
        <View>
            <Text style={ styles.headingStyle }>Getting started with React Native!</Text>
            <Text style={ styles.textStyle }>My name is { name }</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headingStyle: {
        fontSize: 45
    },
    textStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;
