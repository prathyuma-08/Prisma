import React, { useCallback, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, ImageBackground, Image, Linking } from 'react-native';

const insta = require('../images/insta.webp');
const linkedin = require('../images/linkedin.png');
const info = require('../images/info.png');
const loc = require('../images/loc.jpg');
const tele = require('../images/call2.png');
const fb = require('../images/fb.jpg');
const tw = require('../images/twitter.png');
const yt = require('../images/youtube.png');
const map = require('../images/map.jpeg');
const route = require('../images/route.png');


const Insta = () => {
    const handlePress = useCallback(async () => {
        await Linking.openURL('https://www.instagram.com/vit.chennai/?hl=en');
    }, []);
    return (
        <TouchableOpacity onPress={handlePress}>
            <Image style={styles.insta} source={insta} />
        </TouchableOpacity>);
};

const LinkedIn = () => {
    const handlePress = useCallback(async () => {
        await Linking.openURL('https://in.linkedin.com/in/vitchennai?original_referer=https%3A%2F%2Fwww.google.com%2F');
    }, []);
    return (
        <TouchableOpacity onPress={handlePress}>
            <Image style={styles.image} source={linkedin} />
        </TouchableOpacity>)
};

const Info = () => {
    const handlePress = useCallback(async () => {
        await Linking.openURL('https://chennai.vit.ac.in/about/');
    }, []);
    return (
        <TouchableOpacity onPress={handlePress}>
            <Image style={styles.insta} source={info} />
        </TouchableOpacity>)
};

const Loc = () => {
    const handlePress = useCallback(async () => {
        await Linking.openURL('https://www.google.com/maps/place/Vellore+Institute+of+Technology+-+VIT+Chennai/@12.840641,80.1512396,17z/data=!3m1!4b1!4m5!3m4!1s0x3a5259af8e491f67:0x944b42131b757d2d!8m2!3d12.840641!4d80.1534283');
    }, []);
    return (
        <TouchableOpacity onPress={handlePress}>
            <Image style={styles.image} source={loc} />
        </TouchableOpacity>);
};

const FB = () => {
    const handlePress = useCallback(async () => {
        await Linking.openURL('https://www.facebook.com/VITCChennai/');
    }, []);
    return (
        <TouchableOpacity onPress={handlePress}>
            <Image style={styles.image} source={fb} />
        </TouchableOpacity>);
};

const Twitter = () => {
    const handlePress = useCallback(async () => {
        await Linking.openURL('https://twitter.com/ChennaiVit');
    }, []);
    return (
        <TouchableOpacity onPress={handlePress}>
            <Image style={styles.twitter} source={tw} />
        </TouchableOpacity>);
};

const Youtube = () => {
    const handlePress = useCallback(async () => {
        await Linking.openURL('https://www.youtube.com/c/VITChennaic');
    }, []);
    return (
        <TouchableOpacity onPress={handlePress}>
            <Image style={styles.insta} source={yt} />
        </TouchableOpacity>);
};


const Tele = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const onClick = () => {
        setModalVisible(!modalVisible);
    }
    return (
        <>
            <Modal animationType='fade' transparent={false} visible={modalVisible} onRequestClose={onClick}>
            <ImageBackground opacity = {0.3} style={{flex: 1,justifyContent:'center'}} source={route}>
            <View>
            <Image style={styles.map} source={map}/>
            </View>
            <TouchableOpacity onPress={onClick} style={styles.button}>
            <Text style={styles.close}>Back to Home</Text>
            </TouchableOpacity> 
            </ImageBackground>
            </Modal>
            <View style={styles.view}>
                <TouchableOpacity onPress={onClick} >
                    <Image style={styles.image} source={tele} />
                </TouchableOpacity>
            </View>
        </>
    );
}

export default function Icons({ navigation }) {
    return (
        <>
            <View style={styles.view}>
                <Twitter />
                <Youtube />
            </View>
            <View style={styles.view}>
                <Insta />
                <FB />
                <LinkedIn />
            </View>
            <View style={styles.view}>
                <Info />
                <Loc />
                <Tele />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row'
    },
    close:{
        fontSize: 30,
        marginLeft: 100,
        backgroundColor: 'black',
        marginRight: 80,
        padding: 8,
        color: 'white',
        fontWeight:'bold'
    },
    map:{
       height: 400,
       width: 400,
       resizeMode: 'contain'
    },
    viewmodal: {
        backgroundColor: 'grey',
        flex: 1,
        padding: 40
    },
    insta: {
        marginLeft: 65,
        height: 65,
        width: 65,
        margin: 20,
        resizeMode: 'contain',
        borderRadius: 20
    },
    image: {
        height: 65,
        width: 65,
        margin: 20,
        borderRadius: 20,
    },
    twitter: {
        height: 65,
        width: 65,
        marginLeft: 100,
        marginRight: 10,
        margin: 20,
        resizeMode: 'contain',
        borderRadius: 20
    }
})