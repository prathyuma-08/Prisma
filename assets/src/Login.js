import React, { useState, useEffect } from 'react';
import {
  View, Text, TextInput, Image, TouchableOpacity,
  ScrollView, StyleSheet, ImageBackground
} from 'react-native';
import auth from '@react-native-firebase/auth';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['new NativeEventEmitter']);


const background = require('../images/bg.jpg');
const logo = require('../images/VIT2-White.png');


export default function Login({ navigation }) {

  function LoginGoogle() {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
    function onAuthStateChanged(user) {
      setUser(user);
      if (initializing) setInitializing(false);
    }
    useEffect(() => {
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber;
    }, []);
    if (initializing) return null;
    if (!user) {
      return (
        <View style={{ padding: 5, margin: 20, flex: 1 }}>
          <Image style={{
            marginTop: 10,
            resizeMode: 'contain', height: 350, width: 350
          }} source={logo} />
        </View>
      );
    }
    navigation.navigate('Home');
    return <>
    </>
  
}

  function signIn(user, pass) {
    try{
    auth()
      .signInWithEmailAndPassword(user, pass)
      .then(() => {
        alert('Successfully signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          alert('Already have an account in this email');
        }
        if(error.code === 'auth/weak-password'){
          alert('Please provide a strong password');
        }
        if(error.code === 'auth/user-not-found'){
          alert('Please click on Register');
        }
        if (error.code === 'auth/invalid-email') {
          alert('Please provide a valid email');
        }
      });}
      catch(e){console.error(e);}
  }
  function createUser(user, pass) {
    try{
    auth()
      .createUserWithEmailAndPassword(user, pass)
      .then(() => {
        alert('Account created successfully and signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          alert('That email address is already in use!');
        }
        if (error.code === 'auth/invalid-email') {
          alert('That email address is invalid!');
        }
      });}
      catch(e){console.error(e);}
  }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
      <ScrollView >
        <View style={{flex: 1}}>
        <ImageBackground style={{flex: 1}} source={background}>
          <LoginGoogle />
          <View style={styles.box}>
            <Text style={styles.text}>EMAIL ADDRESS</Text>
            <TextInput style={styles.textinput}
              placeholder="Enter Email..."
              value={email}
              onChangeText={text => setEmail(text)} />
            <Text style={styles.text}>PASSWORD</Text>
            <TextInput style={styles.textinput}
              placeholder="Enter password..."
              value={password}
              onChangeText={text => setPassword(text)}
              secureTextEntry={true} />
            <TouchableOpacity style={styles.button} onPress={() => signIn(email, password)}>
              <Text style={styles.signIn}>SIGN IN</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.outerreg}>
            <Text style={styles.ques}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => createUser(email, password)}>
              <Text style={styles.register}>Register</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
        </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  ques: {
    color: 'black',
    fontSize: 15,
    marginBottom: 34
  },
  outerreg: {
    flex:1,
    flexDirection: 'row',
    marginLeft: 20,
  },
  register: {
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 5,
    fontSize: 16,
    flex: 1
  },
  signIn: {
    color: 'white',
    fontWeight: 'bold',
    paddingLeft: 85,
    flex: 1
  },
  box: {
    backgroundColor: '#CEB9FE',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    margin: 20,
    padding: 10,
    flex: 1
  },
  text: {
    color: 'black',
    marginTop: 8,
    fontWeight: 'bold',
    fontSize: 15,
    flex: 1
  },
  textinput: {
    color: 'black',
    borderBottomWidth: 3,
    borderBottomColor: 'black',
    padding: 5,
    fontSize: 15
  },
  button: {
    borderRadius: 10,
    backgroundColor: '#1091D0',
    padding: 5,
    borderWidth: 3,
    borderColor: '#1091D0',
    margin: 30,
    padding: 14,
    justifyContent: 'center',
    flex: 1
  }})

