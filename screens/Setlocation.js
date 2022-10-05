import React, { useState, useEffect, useRef } from 'react';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import config from '../config';
import { Entypo } from '@expo/vector-icons';

export default function Setlocation({ navigation, routes }) {

    const [origin, setOrigin] = useState(null);
    const [destination, setDestination] = useState(null);

    useEffect(() => {
        (async function () {
            const { status, permissions } = await Permissions.askAsync(Permissions.LOCATION_FOREGROUND);
            if (status === 'granted') {
                let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
                setOrigin({
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.00922,
                    longitudeDelta: 0.00421
                })
            } else {
                throw new Error('Location permission not granted');
            }
        })();
    }, [])

    const goResume = () => {
        navigation.navigate('Resume', {origin: origin, destination: destination})
    }

    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#fff',
            flex: 1,
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
        },
        titlePage: {
            fontSize: 25,
            marginTop: '20%',
            alignSelf: 'center'
        },
        currentLocation: {
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
            alignSelf: 'center'
        },
        button: {
            backgroundColor: 'black',
            width: '75%',
            height: 40,
            justifyContent: 'center',
            borderRadius: 20,
            alignSelf: 'center',
            marginTop: '70%'
        },
    });

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.titlePage}>Sua localização atual é:</Text>
            {origin &&
                <Text style={styles.currentLocation}><Entypo name="location" size={20} color="black" />    {origin.latitude + ' ' + origin.longitude}</Text>
            }
            <Text style={{ fontSize: 20, marginTop: '20%', alignSelf: 'center' }}>Selecione seu destino:</Text>

            <GooglePlacesAutocomplete
                placeholder='Digite aqui o endereço.'
                onPress={async (data, details = null) => {
                    setDestination({
                        name: details.name,
                        latitude: details.geometry.location.lat,
                        longitude: details.geometry.location.lng,
                        longitudeDelta: 0.00922,
                        latitudeDelta: 0.00421
                    });
                }}
                query={{
                    key: config.googleApi,
                    language: 'pt-br',
                }}
                fetchDetails={true}
                styles={{ container: {flex:0, marginTop: '10%'}}}
            />           

            <TouchableOpacity style={styles.button}>
                <Text style={{ color: 'white', alignSelf: 'center', fontSize: 20 }} onPress={()=>goResume()}>Calcular distância</Text>
            </TouchableOpacity>

        </View>
    );
}
