import React, {useState} from 'react';
import {Pressable, View, Text, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import Chats from './Chats';
import Profile from './Profile';

const Tab = createMaterialTopTabNavigator();

function hi2() {
    return(<View><Text style={{fontSize: 100, color: 'white'}}>FDFDSSDBwesdfSDFGs</Text></View>)
}

function profile() {
    const navigation = useNavigation();
    navigation.navigate('PROFILE')
}
export default function Tabs() {
    const navigation = useNavigation();
    return(
        <Tab.Navigator
            tabBarOptions={{
                labelStyle: {
                    color: 'white',
                },
                style: {
                    backgroundColor: '#0d506a',
                    color: 'white'
                }
            }}
            initialRouteName="CHATS">
            <Tab.Screen name="CHATS" component={Chats}/>
            <Tab.Screen name="CONTACTS" component={hi2} />
            <Tab.Screen name="PROFILE" component={Profile} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({

})
