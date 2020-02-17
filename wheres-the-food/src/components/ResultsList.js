import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import BusinessCard from "./BusinessCard";

const ResultsList = ({ title, results }) => {
    return (
        <View>
            <Text style={ styles.textStyle }>{ title }</Text>
            <FlatList
                data={ results }
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={ (result) => result.id }
                renderItem={ ({ item }) => {
                    return (
                        <BusinessCard
                            businessName={item.name}
                            displayAddress={item.location.display_address}
                            imgUrl={item.image_url}
                            rating={item.rating}
                            reviewCount={item.review_count}
                        />
                    )
                } }

            />
        </View>
    )
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 22,
        textAlign: 'left',
        fontWeight: '700',
        marginVertical: 20,
        marginHorizontal: 20
    }
});


export default ResultsList;
