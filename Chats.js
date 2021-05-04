import React, {useState} from 'react';
import {StyleSheet, Pressable, View, Text, FlatList} from 'react-native';
import {useNavigation} from "@react-navigation/native";

export default function Chats() {
    return(
        <ChatsList />
       )
}

function ChatsList() {
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <FlatList style={{width: '100%'}} data={chatsList} renderItem={(item, index) => {
                console.log(item.item.name)
                return (<Pressable onPress={() => {
                    navigation.navigate('ChatRoom');
                }} key={item.name} style={{flexDirection: 'row', height: 75, width: '100%', backgroundColor: 'white', borderBottomColor: 'rgba(0,0,0,0.1)', borderBottomWidth: 1,}}>
                    <View style={styles.avatarContainer}>
                        <View style={[styles.avatar, {backgroundColor: item.item.avatar}]} />
                    </View>
                    <View style={styles.chatInfoTextContainer}>
                        <View styles={styles.chatInfo}>
                            <View style={styles.chatInfoText}>
                                <Text style={styles.chatName}>{item.item.name}</Text>
                            </View>
                            <View style={styles.chatInfoText}>
                                <Text numberOfLines={1} style={styles.chatLastMsg}>{item.item.lastMessage}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.chatNewInfo}>
                        {item.item.newMessages
                            ? <View style={styles.newMsgTime}>
                                <Text style={styles.lastText}>{item.item.lastText}</Text>
                                <View style={styles.newMsgInd}><Text style={styles.newMsgIndText}>{item.item.newMessages}</Text></View>
                            </View>
                            : <Text style={styles.lastMsgText}>{item.item.lastText}</Text>
                        }
                    </View>
                </Pressable>)
            }
            } />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatarContainer: {
        height: 75,
        width: '25%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar: {
        height: 65,
        width: 65,
        borderRadius: 100,
    },
    chatInfoTextContainer: {
        height: 75,
        width: '55%',
    },
    chatInfoText: {
        width: '100%',
        height: '50%',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    chatName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    chatLastMsg: {
        fontSize: 12,
        color: 'grey',
    },
    chatNewInfo: {
        height: 75,
        width: '20%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    newMsgTime: {
        width: '100%',
        height: '100%',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        paddingRight: 10,
    },
    newMsgInd: {
        height: 25,
        width: 25,
        backgroundColor: 'rgba(0,255,0,0.75)',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    newMsgIndText: {
        color: 'white',
    },
    lastText: {
        fontSize: 12,
        fontWeight: 'bold'
    },
    lastMsgText: {
        color: 'grey',
        fontSize: 16,
        fontWeight: 'bold',
    }
});

const chatsList = [
    {
        name: 'Walt Whitman',
        avatar: 'red',
        lastText: '11:30am',
        newMessages: '1',
        lastMessage: 'Hi there, how about this weather? Supposed to suck.'
    },
    {
        name: 'WaltA Whitman',
        avatar: '#246672',
        lastText: '11:30am',
        newMessages: '2',
        lastMessage: 'Hi there, how about this weather? Supposed to suck.'
    },
    {
        name: 'Walt Whitman',
        avatar: '#b6ae6d',
        lastText: '11:30am',
        lastMessage: 'Hi there, how about this weather? Supposed to suck.'
    },
    {
        name: 'Waldt Whitman',
        avatar: '#8e0001',
        lastText: '11:30am',
        lastMessage: 'Hi there, how about this weather? Supposed to suck.'
    },
    {
        name: 'Walt Whditman',
        avatar: 'red',
        lastText: '11:30am',
        lastMessage: 'Hi there, how about this weather? Supposed to suck.'
    },
];
