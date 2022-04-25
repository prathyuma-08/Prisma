import React, { Component, useCallback } from 'react';
import { View, Button, Linking, TouchableOpacity } from 'react-native';
import { GiftedChat, Bubble } from 'react-native-gifted-chat';
import { Dialogflow_V2 } from 'react-native-dialogflow';
import { dialogflowConfig } from '../../env';
import { LogBox } from "react-native";
import Tts from 'react-native-tts';
import { WebView } from 'react-native-webview';

LogBox.ignoreLogs(["EventEmitter.removeListener"]);

const botAvatar = require('../images/images.jpg');

const BOT = {
  _id: 2,
  name: 'Mr.Bot',
  avatar: botAvatar
}
const OpenSettingsButton = ({ children }) => {
  const handlePress = useCallback(async () => {
    await Linking.openSettings();
  }, []);

  return <Button title={children} onPress={handlePress} />;
};

class Chat extends Component {
  state = {
    messages: [{
      _id: 2, text: 'I am Prisma', createdAt: new Date(),
      user: BOT
    }, {
      _id: 1, text: 'Hi', createdAt: new Date(),
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

    if (text == 'Wikipedia') {
      msg = {
        _id: this.state.messages.length + 1,
        text,
        createdAt: new Date(),
        user: BOT,
        isUrl: true,
        url: 'https://en.wikipedia.org/wiki/Main_Page',
        holder: 'Open Wikipedia'
      };
    }
    else if (text == 'Google') {
      msg = {
        _id: this.state.messages.length + 1,
        text,
        createdAt: new Date(),
        user: BOT,
        isUrl: true,
        url: 'https://www.google.com/',
        holder: 'Open Google'
      };
    }
    else if (text == 'Settings') {
      msg = {
        _id: this.state.messages.length + 1,
        text,
        createdAt: new Date(),
        user: BOT,
        isSettings: true,
        holder: 'Open Settings'
      };
    }
    else if (text == 'Maps') {
      msg = {
        _id: this.state.messages.length + 1,
        text,
        createdAt: new Date(),
        user: BOT,
        isUrl: true,
        url: 'https://www.google.com/maps',
        holder: 'Open Maps'
      };
    }
    else if (text == 'Youtube') {
      msg = {
        _id: this.state.messages.length + 1,
        text,
        createdAt: new Date(),
        user: BOT,
        isUrl: true,
        url: 'https://www.youtube.com/',
        holder: 'Open Youtube'
      };
    }
    else if (text == 'Instagram') {
      msg = {
        _id: this.state.messages.length + 1,
        text,
        createdAt: new Date(),
        user: BOT,
        isUrl: true,
        url: 'https://www.instagram.com/',
        holder: 'Open Instagram'
      };
    }
    else if (text == 'StackOverflow') {
      msg = {
        _id: this.state.messages.length + 1,
        text,
        createdAt: new Date(),
        user: BOT,
        isUrl: true,
        url: 'https://stackoverflow.com/',
        holder: 'Open StackOverflow'
      };
    }
    else if (text == 'Gmail') {
      msg = {
        _id: this.state.messages.length + 1,
        text,
        createdAt: new Date(),
        user: BOT,
        isUrl: true,
        url: 'https://www.google.com/intl/en-GB/gmail/about/',
        holder: 'Open Gmail'
      };
    }
    else if (text == 'News') {
      msg = {
        _id: this.state.messages.length + 1,
        text,
        createdAt: new Date(),
        user: BOT,
        isUrl: true,
        url: 'https://timesofindia.indiatimes.com/home/headlines',
        holder: 'Latest News'
      };
    }
    else {
      msg = {
        _id: this.state.messages.length + 1,
        text,
        createdAt: new Date(),
        user: BOT
      };
    }

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
    if (props.currentMessage.isUrl) {
      return (
        <WebView style={{ height: 500 }} source={{ uri: props.currentMessage.url }}
          onShouldStartLoadWithRequest={(request) => {
            if (request.url !== { uri: props.currentMessage.url }) {
              Linking.openURL(request.url);
              return false;
            }
            return true;
          }} />
      );
    }
    if (props.currentMessage.isSettings) {
      return (
        <OpenSettingsButton>{props.currentMessage.holder}</OpenSettingsButton>
      );
    }
    return (<Bubble {...props} />
    );
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <GiftedChat messages={this.state.messages}
          onSend={(message) => this.onSend(message)}
          renderBubble={this.renderBubble}
          user={{ _id: 1 }} />
      </View>
    );
  }
}

export default Chat;