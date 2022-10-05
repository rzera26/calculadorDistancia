import React, { useState, useEffect, useRef } from 'react'; 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import loading from '../imgs/loading.gif';
import cachorro from '../imgs/cachorro.png'

export default function Splashlocation({ navigation, routes }) {

    useEffect(()=>{
        setTimeout(() => {
            navigation.navigate('Setlocation')
        }, 3000);
    }, [])

    const styles = StyleSheet.create({
        container: {
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '60%',
            backgroundColor: '#fff'
        },
        titlePage: {
            fontSize: 25,
            color: 'black'
        },
    });

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.titlePage}>Localizando</Text>
            <Image source={require('../imgs/loading.gif')} />
        </View>
    );
}
