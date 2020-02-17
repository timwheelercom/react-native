import React, { useState } from 'react';
import { ScrollView, Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import SearchBar from "../components/SearchBar";
import useResults from '../hooks/useResults';
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        })
    };

    return results.length ? (
        <ScrollView style={styles.scrollViewStyle}>
            <SearchBar
                searchTerm={ searchTerm }
                onSearchTermSubmit={ () => {
                    searchApi(searchTerm);
                    setSearchTerm("");
                }}
                onSearchTermChange={ (newSearchTerm) => setSearchTerm(newSearchTerm) }
            />
            <Text
                style={ styles.resultsCount }>{ results.length === 1 ? '1 result found' : `${ results.length } results found` }</Text>
            { errorMessage ? <Text style={ styles.errorMessage }>{ errorMessage }</Text> : null }
            <ResultsList results={filterResultsByPrice('$')} title={'Cost Effective'}/>
            <ResultsList results={filterResultsByPrice('$$')} title={'Bit Pricier'} />
            <ResultsList results={filterResultsByPrice('$$$')} title={'Big Spender'}/>
        </ScrollView>
    ): (
        <View style={styles.activityIndicatorView}>
            <ActivityIndicator/>
        </View>
    )
};

const styles = StyleSheet.create({
    activityIndicatorView: {
        flex: 1,
        justifyContent: 'center',
    },
    scrollViewStyle: {
        paddingBottom: 100
    },
    textStyle: {
        fontSize: 30,
        textAlign: 'center',
        marginVertical: 20
    },
    resultsCount: {
        textAlign: 'left',
        margin: 10,
        marginHorizontal: 20,
        fontSize: 12,
        color: '#aaa'
    },
    errorMessage: {
        textAlign: 'center',
        margin: 10,
        fontSize: 20,
        color: 'red',
        fontWeight: '500'
    }
});


export default SearchScreen;
