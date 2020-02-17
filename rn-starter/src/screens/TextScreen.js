import React, {useState} from 'react';
import {View, Text, TextInput, Image, Button, StyleSheet} from 'react-native';

const TextScreen = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordValid, setPasswordValid] = useState(false);

    return (
        <View>
            <Text style={styles.textStyle}>TextScreen</Text>
            <Text style={styles.subText}>Enter Name:</Text>
            <TextInput
                type={'email'}
                onChangeText={(e) => setEmail(e)}
                placeholder={'email'}
                value={email}
                style={styles.inputStyle}
                autoCapitalize={'none'}
                autoCorrect={false}
            />
            <TextInput
                secureTextEntry
                type={'password'}
                onChangeText={(e) => setPassword(e)}
                placeholder={'password'}
                value={password}
                style={styles.inputStyle}
                autoCapitalize={'none'}
                autoCorrect={false}
            />
            { password && password.length > 4 ? ( passwordValid && password.length < 8 ? <Text style={styles.strongPassword}>Strong Password</Text> : <Text style={styles.weakPassword}>Weak Password</Text>) : <Text/>}
            {/*<Text style={styles.subText}>{inputText ? `Hello, my name is ${inputText}` : ''}</Text>*/}
        </View>
    )
};

const styles = StyleSheet.create({
    strongPassword: {
      color: 'green',
      fontWeight: '500'
    },
    weakPassword: {
        color: 'red',
        fontWeight: '500',
    },
    textStyle: {
        fontSize: 30,
        textAlign: 'center',
        marginVertical: 20
    },
    subText: {
      fontSize: 20,
      marginVertical: 10,
      marginHorizontal: 15
    },
    inputStyle: {
        marginHorizontal: 15,
        borderColor: '#000',
        borderBottomWidth: 1,
        fontSize: 20,
        lineHeight: 30,
        height: 50,
        fontWeight: '700'
    }
});

export default TextScreen;
