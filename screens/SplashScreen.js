import { useNavigation } from '@react-navigation/core'
import React ,{useEffect , useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import HomeScreen from './HomeScreen'
import { updateLoginStatus,isLoggedIn } from '../global'

const SplashScreen = () => {

    const navigation = useNavigation();
    
    useEffect(() => {
        const timer = setTimeout(() => {
          if (isLoggedIn) {
            console.log('User is logged in');
            console.log('Navigating to home');
            navigation.navigate("Home");
          } else {
            console.log('User is not logged in');
            navigation.navigate("Login");
          }
        }, 2500); // Adjust the timeout duration as needed
    
        return () => clearTimeout(timer); // Cleanup the timer on component unmount
      }, [navigation]);

      
    
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior='padding'
    >
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://scontent.fmem1-1.fna.fbcdn.net/v/t39.30808-6/371949878_10162254718812195_7038577926478209017_n.png?stp=dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=2285d6&_nc_ohc=0aQYgOEm79oQ7kNvgHI7sV2&_nc_ht=scontent.fmem1-1.fna&oh=00_AYBCSMiVRYCnHP1X0pURn2KQntQVlnZ-HB3zuZ87dhOx1A&oe=66B46067' }}
          style={styles.image}
        />
      </View>

    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: -20,
    backgroundColor: '#545454'
  },
  imageContainer: {
    marginBottom: -20,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain'
  }
});

export default SplashScreen;