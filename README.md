# VITC-bot

This app is used to view the details of VIT Chennai in an easier way. It also has a Chatbot feature which helps to resolve the most frequently asked questions about the Admissions and Contact details. 

## Installing Dependencies

**DIALOGFLOW**

DialogFlow is used to generate the responses required for the Chatbot. 

Install [Dialogflow](https://www.npmjs.com/package/react-native-dialogflow) using the commands:
```
npm install --save react-native-dialogflow react-native-voice
react-native link react-native-dialogflow
react-native link react-native-voice
```

**GIFTED CHAT**

Gifted chat is used here to build the UI for chatbot and handle the responses got from Dialogflow.

Install [Gifted Chat](https://www.npmjs.com/package/react-native-gifted-chat) using the command:
```
npm install react-native-gifted-chat --save
```

**FIREBASE**

Firebase is used to authenticate the user login. It records the username and their login details in the firebase dashboard.

Install [Firebase](https://rnfirebase.io/) using the command:
```
npm install --save @react-native-firebase/app
```

**STACK NAVIGATOR**

Stack navigation used to navigate between the screens where each new screen is placed on the top of a stack.

Install [Stack Navigation](https://reactnavigation.org/docs/stack-navigator/) using the commands:
```
npm install @react-navigation/native
npm install react-native-screens react-native-safe-area-context
npm install @react-navigation/stack
npm install react-native-gesture-handler
```

**TEXT TO SPEECH**

This feature converts the text output got from Dialogflow to speech.

Install [Text to Speech](https://www.npmjs.com/package/react-native-tts) using the commands:
```
npm install --save react-native-tts
react-native link react-native-tts
```

## Screenshot of the App

**Image 1: The Login Screen**

<img src="https://user-images.githubusercontent.com/88975859/168877061-59017dc1-538a-411a-a388-017e30ef6f59.png" width="200">

**Image 2: ScrollView used to avoid Keyboard**

<img src="https://user-images.githubusercontent.com/88975859/168877068-84b70d44-a1f3-4c8f-a46e-77c906ace3de.png" width="200">

**Image 3: The Home Screen**

<img src="https://user-images.githubusercontent.com/88975859/168876867-db4bfab3-e4df-4878-a607-402cab812258.png" width="200">

**Image 4: The Modal Screen**

<img src="https://user-images.githubusercontent.com/88975859/168876904-3a6b7e47-34c9-4461-abeb-932a627ab76d.png" width="200">

**Image 5: The FAQ bot Screen**

<img src="https://user-images.githubusercontent.com/88975859/168877030-e5f86581-9f97-43c7-ba09-3aeba2b4a496.png" width="200">

**Image 6: Alert after SignOut**

<img src="https://user-images.githubusercontent.com/88975859/168877045-e84bf86f-6f18-45c0-91a8-8014b52bb2c7.png" width="200">

## Working Demo

[](https://user-images.githubusercontent.com/88975859/168883906-560be55b-70d1-4bf1-bbfc-68118504fbf4.mp4)


