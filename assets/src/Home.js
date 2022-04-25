import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';

export default function Home({navigation}){
    function logOff(){
        auth()
  .signOut()
  .then(() => alert('User signed out!'));
    }
    return(
        <View style={styles.view}>
            <TouchableOpacity onPress={()=> navigation.navigate('Chat')}>
                <Text style={styles.text}>Go to ChatRoom</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box} onPress={logOff}>
                <Text style={styles.signout}>Sign Out</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles=StyleSheet.create({
    view:{
        flex:1,
        alignContent: 'center',

    },
    text: {
        color: '#1d90f5',
        marginTop: 180,
        marginLeft: 130,
        fontSize: 20
    },
    box:{
       margin: 40,     
    },
    signout:{
        borderWidth: 4,
        borderColor: 'black',
        backgroundColor: '#f84445',
        color: 'white',
        padding: 4,
        marginLeft: 120,
        marginRight: 122,
        borderRadius: 10
    }
})
