import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, ImageBackground } from 'react-native';
import Icons from './Icons';
import auth from '@react-native-firebase/auth';

const background = require('../images/bg2.jpg');
const bot = require('../images/bot.jpg');
const vit =  require('../images/VIT.png');
const logout = require('../images/logout.png');


export default function Home({ navigation }) {
    function logOff() {
        auth()
            .signOut()
            .then(() => alert('User signed out!'));
    }
    return (
        <View style={{flex: 1}}>
            <ImageBackground style={{flex: 1}} source={background}> 
            <Image style={styles.vit} source={vit}/>
                <Icons/>
            <View style={{flexDirection: 'row'}}>            
                <TouchableOpacity onPress={() => navigation.navigate('Chat')} >
                    <Image style={styles.bot} source={bot} />
                </TouchableOpacity>              
                <TouchableOpacity style={styles.box} onPress={logOff}>
                <Image style={styles.sign} source={logout} />
                </TouchableOpacity>                
            </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    bot: {
        height: 100,
        width: 100,
        resizeMode: 'contain',
        marginTop: 40,
        marginLeft: 90,
        borderRadius: 80
    },
    text: {
        color: '#1d90f5',
        marginTop: 180,
        marginLeft: 130,
        fontSize: 20
    },
    vit:{
        height: 100,
        width: 300,
        resizeMode: 'contain',
        margin: 40
    },
    sign:{
        height: 100,
        width: 100,
        resizeMode: 'contain',
        marginTop: 40,
        marginLeft: 40,
        borderRadius: 30
    }
})
