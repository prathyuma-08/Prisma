import React, {useEffect,useState} from 'react';
import {Text,StyleSheet,TouchableOpacity} from 'react-native';
import Voice from 'react-native-voice';
 
const VoiceTest = () =>{ 

    const [results, setResults] = useState(['These are results']);
    useEffect(()=>{
        Voice.onSpeechResults = onSpeechResults;
    });
    const onSpeechResults = (e) => {
		//Invoked when SpeechRecognizer is finished recognizing
		console.log('onSpeechResults: ', e);
		setResults(e.value);
	};
    const startRecognizing = async () => {
		//Starts listening for speech for a specific locale
		try {
			await Voice.start('en-US');
			setResults([]);
		} catch (e) {
			//eslint-disable-next-line
			console.error(e);
		}
	};

      return(
          <>
          <TouchableOpacity onPress={startRecognizing} style={styles.button}>
            <Text style={styles.text}>VOICE</Text>
          </TouchableOpacity>
          <Text>{results}</Text>
          </>
      );
  }

export default VoiceTest;

const styles=StyleSheet.create({
    button:{
        backgroundColor: 'blue',
    },
    text:{
        color: 'white',
        marginLeft: 150,
        padding: 20
    }
})