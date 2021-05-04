import React, {useState} from 'react';
import {Dimensions, TextInput, ScrollView, StyleSheet, View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
import SentMsg from "./Components/SentMessage";
import ReceivedMsg from "./Components/ReceivedMessage";

export default function ChatRoom() {
    return(
        <View style={styles.container}>
            <ScrollView>
                <ReceivedMsg />
                <SentMsg />
            </ScrollView>
            <View style={styles.msgInput}>
                <TextInput  style={styles.input} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#52554c',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 20,
    },
    msgInput: {
      width: '100%',
      height: 100,
        backgroundColor: '#0d506a',
        borderColor: 'red',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
      width: '90%',
      height: 40,
        backgroundColor: 'white',
        borderRadius: 50,
    },
})
