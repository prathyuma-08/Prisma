import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Chat from './assets/src/Chat';
import Login from './assets/src/Login';
import Home from './assets/src/Home';

const Stack = createNativeStackNavigator();

function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
    headerShown: false
  }} >
      <Stack.Screen name="Login" component={Login}/> 
      <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Chat" component={Chat}/>        
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;

