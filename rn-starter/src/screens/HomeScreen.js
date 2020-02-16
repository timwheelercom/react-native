import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

const HomeScreen = (props) => {
    const { navigate } = props.navigation;
    return (
        <View>
            <Text style={ styles.text }>React Native</Text>
            <Button
                onPress={ () => navigate('Components') }
                title={ 'Go to Components Demo' }
            />
            <Button
                onPress={ () => navigate('List') }
                title={ 'Go to List Demo' }
            />
            <Button
                onPress={ () => navigate('Image') }
                title={ 'Go to Image Demo' }
            />
            <Button
                onPress={ () => navigate('Counter') }
                title={ 'Go to Counter Demo' }
            />
            <Button
                onPress={ () => navigate('Color') }
                title={ 'Go to Color Demo' }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        textAlign: 'center',
        marginVertical: 20
    }
});

export default HomeScreen;
