import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Tabs from './navigation/tabs';
import { io } from 'socket.io-client';
const Stack = createNativeStackNavigator();
 export const socket=io('http://10.7.86.9:3000');
socket.on('connect',()=>{
  console.log('connected');
});


const App = () => {
 
  return (
    
    <NavigationContainer> 
      
      <Tabs/>

    </NavigationContainer>
  
    
  );
};

const styles=StyleSheet.create({

divider:{
  height:StyleSheet.hairlineWidth,
  backgroundColor:'#A9ABB1',
  marginHorizontal:16,
  marginTop:16

},
});

export default App;