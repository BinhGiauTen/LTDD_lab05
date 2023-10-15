import { View, Text } from 'react-native'
import React from 'react'
import FirstScreen from './FirstScreen';
import Screen2 from './Screen2';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
const RootComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstScreen" screenOptions={{headerShown: false}}>
        <Stack.Screen  name="FirstScreen" component={FirstScreen} />
        <Stack.Screen name="Screen2" component={Screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootComponent