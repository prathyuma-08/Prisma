import React,{useState,useEffect} from 'react';
import {View,Text,TextInput,TouchableOpacity,StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';


export default function Login({navigation}){

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
            <View >
              <Text style={styles.welcome}>Login to get started!</Text>
            </View>
          );
        }       
        navigation.navigate('Home');
        return<></>
      }

    function signIn(user,pass){
        auth()
        .signInWithEmailAndPassword(user, pass)
        .then(() => {
          alert('Successfully signed in!');
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            alert('That email address is already in use!');
          }
      
          if (error.code === 'auth/invalid-email') {
            alert('That email address is invalid!');
          }
      
          console.error(error);
        });
    }
    function createUser(user,pass){
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
      
          console.error(error);
        });
    }

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    
    return(
        <View style={styles.view}>
            <LoginGoogle/>
            <TextInput style={styles.textinput} placeholder="Enter Email.."
            value={email}
            onChangeText={text => setEmail(text)}/>
            <TextInput style={styles.textinput} placeholder="Enter Password.." 
            value={password}
            onChangeText={text=> setPassword(text)}
            secureTextEntry={true}/>
            <View style={styles.buttonview}>
            <TouchableOpacity style={styles.button} onPress={()=>signIn(email,password)}>
                <Text style={styles.text}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>createUser(email,password)}>
                <Text style={styles.text}>Sign Up</Text>
            </TouchableOpacity>
            </View>            
        </View>
    );
}

const styles = StyleSheet.create({
    view:{
        flex:1,
        justifyContent: 'center'
    },
    text:{
      color: 'white',
    },
    textinput:{
        color: 'black',
        borderWidth: 3,
        borderColor: 'black',
        borderRadius: 35,
        margin: 8,
        padding: 10,
        paddingLeft: 25
    },
    buttonview:{
      flexDirection: 'row',
      justifyContent: 'center'
    },
    button:{
      borderRadius: 10,
      backgroundColor: '#1d90f5',
      padding: 5,
      borderWidth: 3,
      borderColor: '#244365',
      margin: 30,
      padding: 14,
    },
    welcome:{
      fontSize: 30,
      color:  'black',
    }
})

