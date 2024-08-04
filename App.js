import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import SplashScreen from './screens/SplashScreen';
import Roommate from './screens/RoommateFinder';
import RoomFinder from './screens/RoomFinder';
import MultiFilters from './utils/MultiFilters';
import MultiFilters2 from './utils/MultiFilters.2.0';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Filters2'>
        <Stack.Screen options={{ headerShown: false }} name="Splash" component={SplashScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Roommate" component={Roommate} />
        <Stack.Screen options={{ headerShown: false }} name="RoomFinder" component={RoomFinder} />
        <Stack.Screen options={{ headerShown: false }} name="Filters" component={MultiFilters} />
        <Stack.Screen options={{ headerShown: false }} name="Filters2" component={MultiFilters2} />



      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
