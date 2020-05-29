import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import { Formik } from 'formik';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as SecureStore from 'expo-secure-store';

const goToCamera = () => {
    Actions.camera()
}

const Users = () => {
    const [UsersArray] = useState([])
    useEffect(() => {
        (async () => {
            var token = await SecureStore.getItemAsync('secure_token')
           await axios(`http://snapi.epitech.eu/all`, {
                method: "GET",
                headers: {
                    'token': token,
                    'timeout':1000,
                    'maxContentLength': 2000

                }
            }).then(status => {
                console.log(status);
                if (status.status == 200) {
                    console.log(status.data.data)
                    // UsersArray.push(status.data.data)
                    // console.log(UsersArray)
                } 
            }).catch(error => {
                console.log(error)
            })
        })();
    }, []);
    return (
        <View>
            <Text>izi</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF700',
        marginTop: 50,
    },
    text: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: '#fff',
        marginLeft: 70,
    },
    textinput: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        fontWeight: 'bold',
    },
    button: {
        color: '#FFF700'
    }
});

export default Users;