import React from 'react';
import {Pressable, ScrollView, View, Text, StyleSheet} from 'react-native';

export default function Profile() {
    return(
        <View style={styles.container}>
            <ScrollView
                contentContainerStyle={{
                    alignItems: 'center',
                }}
                style={styles.scrollContainer}>
                <View style={styles.profileBasicInfo}>
                    <View style={styles.profileAvatarContainer}>
                        <View style={styles.profileAvatar}>

                        </View>
                    </View>
                    <View style={styles.basicInfoContainer}>
                        <Text style={styles.userText}>User Name!</Text>
                        <Text style={{color: 'grey', fontWeight: 'bold'}}>Status: <Text style={{color: '#333', fontWeight: 'normal'}}>Feelin' like a sparrow in a hurricane!</Text></Text>
                    </View>
                </View>
                <View style={styles.settingsContainer}>
                    <Pressable style={styles.settingsButton}>
                        <Text>Change Status</Text>
                    </Pressable>
                </View>
                <View style={styles.settingsContainer}>
                    <Pressable style={styles.settingsButton}>
                        <Text>Log out</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#52554c',
    },
    scrollContainer: {
        flex: 1,
    },
    profileBasicInfo: {
        height: 300,
        width: '95%',
        borderColor: '#333',
        borderWidth: 1,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.75,
        shadowRadius: 6.27,

        elevation: 10,
        marginBottom: 10,
    },
    profileAvatarContainer: {
      height: 175,
      width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileAvatar: {
      backgroundColor: '#333',
      borderRadius: 100,
      height: 150,
      width: 150,
    },
    basicInfoContainer: {
        width: '100%',
        height: 125,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10,
    },
    userText: {
        fontSize: 25,
        fontWeight: '600',
    },
    settingsContainer: {
        width: '95%',
        height: 50,
        backgroundColor: 'white',
        marginBottom: 10,
    },
    settingsButton: {
        borderWidth: 1,
        borderColor: '#333',
        width: '100%',
        height: '100%',
        paddingLeft: 20,
        justifyContent: 'center',


    }
})
