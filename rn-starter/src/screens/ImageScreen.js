import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import ImageCard from '../components/ImageCard';
import ForestImg from '../assets/img/forest.jpg';
import MountainImg from '../assets/img/mountain.jpg';
import OceanImg from '../assets/img/ocean.jpg';

const ImageScreen = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={ styles.textStyle }>Image Screen</Text>
            <ImageCard title={ 'Forest' } img={ ForestImg } imgScore={8} />
            <ImageCard title={ 'Mountain' } img={ MountainImg } imgScore={10}/>
            <ImageCard title={ 'Ocean' } img={ OceanImg } imgScore={6}/>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        textAlign: 'center',
        marginVertical: 20
    }
});

export default ImageScreen;
