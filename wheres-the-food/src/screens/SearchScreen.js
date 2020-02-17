import React, { useState } from 'react';
import { ScrollView, Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import SearchBar from "../components/SearchBar";
import useResults from '../hooks/useResults';
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [location, setLocation] = useState("providence");
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        })
    };

    return results.length ? (
        <ScrollView style={styles.scrollViewStyle}>
            <SearchBar
                placeholder={'Search'}
                iconName={'search'}
                size={20}
                searchTerm={ searchTerm }
                onSearchTermSubmit={ () => {
                    searchApi(searchTerm, location);
                    setSearchTerm("");
                }}
                onSearchTermChange={ (newSearchTerm) => setSearchTerm(newSearchTerm) }
            />
            <SearchBar
                placeholder={'Location'}
                iconName={'navigation'}
                size={20}
                searchTerm={ location }
                onSearchTermSubmit={ () => {
                    searchApi(searchTerm, location);
                    setLocation(location);
                }}
                onSearchTermChange={ (newLocation) => setLocation(newLocation) }
            />
            <Text
                style={ styles.resultsCount }>{ results.length === 1 ? '1 result found' : `${ results.length } results found` }</Text>
            { errorMessage ? <Text style={ styles.errorMessage }>{ errorMessage }</Text> : null }
            <ResultsList results={filterResultsByPrice('$')} title={'Cheap Date'}/>
            <ResultsList results={filterResultsByPrice('$$')} title={'Pretty Average'} />
            <ResultsList results={filterResultsByPrice('$$$')} title={'Bit Pricey'}/>
            <ResultsList results={filterResultsByPrice('$$$$')} title={'Ball Out'}/>
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
        backgroundColor: '#dddddd55'
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
