import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';

export default function Searchlocation({ navigation, routes }) {

    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#fff',
            flex: 1,
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            alignItems: 'center',
            justifyContent: 'center'
        },
        titlePage: {
            fontSize: 25,
        },
        button: {
            backgroundColor: 'black',
            width: '75%',
            height: 40,
            justifyContent: 'center',
            borderRadius: 20,
            marginTop: 50
        }
    });

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.titlePage}>Buscar</Text>
            <Text style={styles.titlePage}>Localização</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={{ color: 'white', alignSelf: 'center', fontSize: 20 }} onPress={() => { navigation.navigate('Setlocation') }}>Fazer busca</Text>
            </TouchableOpacity>
        </View>
    );
}
