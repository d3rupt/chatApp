import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';
import { Pressable, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Amplify from 'aws-amplify';
import config from './src/aws-exports';
Amplify.configure(config);
import Tabs from './Tabs';
import ChatRoom from "./ChatRoom";
import Profile from "./Profile";

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator
              initialRouteName="ChatRoom"
              screenOptions={{
              headerStyle: {
                  backgroundColor: '#0d506a',
              },
              headerTitleStyle: {
                  color: 'white',
              },
          }}>
              <Stack.Screen screenOptions={{
                  headerShown: false
              }} name='ChatRoom' component={ChatRoom} />
              <Stack.Screen name="chatApp" component={Tabs} />
              <Stack.Screen screenOptions={{
                  headerShown: false
              }} name="PROFILE" component={Profile} />

          </Stack.Navigator>
      </NavigationContainer>
  );
}
