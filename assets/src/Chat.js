import React, { Component} from 'react';
import { View,ImageBackground} from 'react-native';
import { GiftedChat, Bubble } from 'react-native-gifted-chat';
import { Dialogflow_V2 } from 'react-native-dialogflow';
import { dialogflowConfig } from '../../env';
import { LogBox } from "react-native";
import Tts from 'react-native-tts';

LogBox.ignoreLogs(["EventEmitter.removeListener"]);
LogBox.ignoreLogs(["Possible Unhandled Promise Rejection"]); //TTs not working in Emulator

const botAvatar = require('../images/VIT2.png');
const back = require('../images/bg_chat.jpg');

const BOT = {
  _id: 2,
  name: 'Mr.Bot',
  avatar: botAvatar
}

class Chat extends Component {
  state = {
    messages: [{
      _id: 2, text: 'How may I assist?', createdAt: new Date(),
      user: BOT
    }, {
      _id: 1, text: 'Welcome to FAQ Bot', createdAt: new Date(),
      user: BOT
    }],
    id: 1,
    name: ''
  };

  componentDidMount() {
    Dialogflow_V2.setConfiguration(
      dialogflowConfig.client_email,
      dialogflowConfig.private_key,
      Dialogflow_V2.LANG_ENGLISH_US,
      dialogflowConfig.project_id);
  }

  handleGoogleResponse(result) {
    let text = result.queryResult.fulfillmentText;
    this.sendBotResponse(text);
  }

  handleVoice(text) {
    Tts.speak(text);
  }

  sendBotResponse(text) {
    let msg;

      msg = {
        _id: this.state.messages.length + 1,
        text,
        createdAt: new Date(),
        user: BOT
      };


    this.handleVoice(text);
    this.setState((previouseState) =>
    ({
      messages: GiftedChat.append(previouseState.messages,
        [msg]),
    }));
  }

  onSend(messages = []) {
    this.setState((previouseState) => ({
      messages: GiftedChat.append(previouseState.messages, messages)
    }));

    let message = messages[0].text;

    Dialogflow_V2.requestQuery(
      message,
      (result) => this.handleGoogleResponse(result),
      (error) => console.log(error)
    );
  }

  renderBubble = (props) => {
    return (
    <Bubble {...props} 
    textStyle={{right:{color:'white'}}}
    wrapperStyle={{
      right:{backgroundColor:'#302F7D'}
    }}
    />
    );
  };

  render() {
    return (
        <ImageBackground style={{flex: 1}} source={back}>
        <GiftedChat messages={this.state.messages}
          onSend={(message) => this.onSend(message)}
          renderBubble={this.renderBubble}
          user={{ _id: 1 }} />
          </ImageBackground>
    );
  }
}

export default Chat;