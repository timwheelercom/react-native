import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ListScreen = () => {

    const friends = [
        { name: 'Andrea', age: 26 },
        { name: 'Motta', age: 29 },
        { name: 'Berry', age: 28 },
        { name: 'Justin', age: 27 },
        { name: 'Erin', age: 28 },
        { name: 'Kayla', age: 26 }
    ];

    return (
        <View style={styles.containerStyle}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={ friends }
                keyExtractor={(item, index) => index.toString() }
                renderItem={ ({ item }) => {
                    return (<Text style={ styles.textStyle }>{ item.name } - { item.age }</Text>)
                } }
            />
        </View>
    )
};

const styles = StyleSheet.create({
    containerStyle: {
      paddingHorizontal: 20
    },
    textStyle: {
        marginVertical: 100
    }
});

export default ListScreen;
