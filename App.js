import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Initcalculator from './screens/Initcalculator';
import Searchlocation from './screens/Searchlocation';
import Setlocation from './screens/Setlocation';
import Resume from './screens/Resume';
import Splashlocation from './screens/Splashlocation';
import Splashcalculator from './screens/Splashcalculator';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Initcalculator" component={Initcalculator} />
        <Stack.Screen options={{ headerShown: false }} name="Searchlocation" component={Searchlocation} />
        <Stack.Screen options={{ headerShown: false }} name="Setlocation" component={Setlocation} />
        <Stack.Screen options={{ headerShown: false }} name="Resume" component={Resume} />
        <Stack.Screen options={{ headerShown: false }} name="Splashlocation" component={Splashlocation} />
        <Stack.Screen options={{ headerShown: false }} name="Splashcalculator" component={Splashcalculator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



