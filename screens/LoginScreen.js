import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from '../firebase'
import HomeScreen from './HomeScreen'
import { updateLoginStatus,isLoggedIn } from '../global'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
// Commented cause implemented in splash screen 
      // console.log('User is:', user, 'and logged in value is:', isLoggedIn)

      // if (isLoggedIn == true) {
      //   navigation.replace("Home")
      //   updateLoginStatus(true)
      //   console.log('Is already Logged in and logged in value is:', isLoggedIn)

      // }
      // if (user && isLoggedIn == false) {
      if (user) {
        navigation.replace("Home")
        updateLoginStatus(true)
        console.log('Logged in and value is:', isLoggedIn)

      }
      
    })

    return unsubscribe
  }, [isLoggedIn, navigation, updateLoginStatus])

  // }, [isLoggedIn, navigation, updateLoginStatus])

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
      })
      .catch(error => alert(error.message))
  }

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
      })
      .catch(error => alert(error.message))
  }

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

      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Email'
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder='Password'
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleLogin}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
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
  },
  inputContainer: {
    width: '80%',
    marginTop: -40,
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 15,
    marginTop: 10,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#3F3A35',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutline: {
    backgroundColor: '#3F3A35',
    marginTop: 5,
  },
  buttonOutlineText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
});

export default LoginScreen;
