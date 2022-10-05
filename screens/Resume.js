import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import config from '../config';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function Resume({ navigation, route }) {

    const [distance, setDistance] = useState(null);
    const [duration, setDuration] = useState(null);

    const mapEl = useRef(null);

    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#fff',
            flex: 1,
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            alignItems: 'center',
        },
        map: {
            height: '50%',
            width: '100%'
        },
        informations: {
            height: '50%',
            width: '100%',
            backgroundColor: 'white',
            borderBottomStartRadius: 10
        },
        titles: {
            fontSize: 17,
            fontWeight: "500",
            margin: 8,
            textAlignVertical: 'center'
        },
        subTitles: {
            marginLeft: 20,
        },
        textReload: {
            color: 'black',
            alignSelf: 'flex-end',
            marginTop: '25%',
            fontSize: 25
        }
    });

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <MapView style={styles.map}
                initialRegion={route.params.origin}
                showsUserLocation={true}
                zoomEnabled={true}
                loadingEnabled={true}
                ref={mapEl}
            >
                {route.params.destination &&
                    <MapViewDirections
                        origin={route.params.origin}
                        destination={route.params.destination}
                        apikey={config.googleApi}
                        strokeWidth={3}
                        onReady={result => {
                            setDistance(result.distance)
                            setDuration(result.duration)
                            mapEl.current.fitToCoordinates(
                                result.coordinates, {
                                edgePadding: {
                                    top: 50,
                                    bottom: 50,
                                    left: 50,
                                    right: 50
                                }
                            }
                            )
                        }}
                    />
                }
            </MapView>


            <View style={styles.informations}>
                <Text style={styles.titles}>Local de partida:</Text>
                <Text style={styles.subTitles}><Entypo name="location" size={15} color="black" />  {route.params.origin.latitude + '' + route.params.origin.longitude}</Text>
                <Text style={styles.titles}>Destino:</Text>
                <Text style={styles.subTitles}><Entypo name="location" size={15} color="black" />  {route.params.destination.name}</Text>
                <Text style={styles.titles}>Distância total:</Text>
                <Text style={styles.subTitles}><MaterialCommunityIcons name="map-marker-distance" size={15} color="black" />  {distance} Metros</Text>
                <Text style={styles.titles}>Duração total:</Text>
                <Text style={styles.subTitles}><FontAwesome name="hourglass-1" size={15} color="black" />  {duration} Min</Text>
                <Text style={styles.textReload} onPress={()=>{navigation.navigate('Setlocation')}}>Refazer cálculo<Feather name="arrow-right" size={20} color="black" />  </Text>
            </View>
        </View>
    );
}
