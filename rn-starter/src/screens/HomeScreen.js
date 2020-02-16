import React from "react";
import { Text, View, Button, StyleSheet, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  const { navigate } = props.navigation;
  return (
      <View>
        <Text style={styles.text}>React Native</Text>
        <Button
            onPress={() => navigate('Components')}
            title={'Go to Components Demo'}
        />
        <TouchableOpacity onPress={() => navigate('List')}>
          <Text>Go to List Demo</Text>
        </TouchableOpacity>
        <Button
            onPress={() => navigate('Image')}
            title={'Go to Image Screen'}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
