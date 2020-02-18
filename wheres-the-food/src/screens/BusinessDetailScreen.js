import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, StyleSheet, ActivityIndicator, Linking } from 'react-native';
import yelp from '../api/yelp';
import TouchableOpacity from "react-native-web/src/exports/TouchableOpacity";
import { Foundation } from '@expo/vector-icons';

const BusinessDetailScreen = ({ navigation }) => {

    const [businessDetails, setBusinessDetails] = useState(null);

    const id = navigation.getParam('id');

    const fetchBusinessDetails = async () => {
        const response = await yelp.get(`/${ id }`);
        console.log('response.data:', response.data);
        setBusinessDetails(response.data);
    };

    const callNumber = phone => {
        console.log('callNumber ----> ', phone);
        let phoneNumber = phone;
        if (Platform.OS !== 'android') {
            phoneNumber = `telprompt:${ phone }`;
        } else {
            phoneNumber = `tel:${ phone }`;
        }
        Linking.canOpenURL(phoneNumber)
            .then(supported => {
                if (!supported) {
                    Alert.alert('Phone number is not available');
                } else {
                    return Linking.openURL(phoneNumber);
                }
            })
            .catch(err => console.log(err));
    };

    useEffect(() => {
        fetchBusinessDetails(id).catch(err => err);
    }, []);

    return businessDetails ? (
        <View style={ styles.containerViewStyle }>
            <View style={ styles.topDetailsViewStyle }>
                <Text style={ styles.businessNameStyle }>
                    { businessDetails.name }
                </Text>
                <View style={ styles.callButtonViewStyle }>
                    <Foundation style={ styles.phoneIconStyle } size={ 15 } name={ 'telephone' }
                                onPress={ () => callNumber(businessDetails.phone) }/>
                    <Text style={ styles.callButtonStyle }>Call</Text>
                </View>
            </View>
            <Text
                style={ styles.businessAddressStyle }>{ businessDetails.location.display_address[0] }, { businessDetails.location.display_address[1] }</Text>
            <View style={ styles.primaryBusinessImageView }>
                <Image style={ styles.primaryBusinessImage } source={ { uri: businessDetails.image_url } }/>
            </View>
            <View>

            </View>
            <Text>{ id }</Text>
        </View>
    ) : (
        <View style={ styles.activityIndicatorView }>
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
    containerViewStyle: {
        margin: 10
    },
    topDetailsViewStyle: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 10
    },
    businessNameStyle: {
        fontWeight: '700',
        fontSize: 20,
        flex: 1
    },
    callButtonViewStyle: {
        flexDirection: 'row',
        backgroundColor: '#f00',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 4
    },
    callButtonStyle: {
        color: '#fff',
        textTransform: 'uppercase',
        letterSpacing: 1
    },
    primaryBusinessImageView: {
        shadowColor: '#333',
        shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowOffset: {
            width: 2,
            height: 2
        },
        marginBottom: 20
    },
    primaryBusinessImage: {
        borderRadius: 10,
        height: 300,
        width: '100%',
    },
    businessAddressStyle: {
        marginBottom: 20
    },
    phoneIconStyle: {
        marginRight: 10,
        color: '#fff',

    },
    textStyle: {
        fontSize: 20,
        // textAlign: 'center',
        marginVertical: 20
    }
});

export default BusinessDetailScreen;
