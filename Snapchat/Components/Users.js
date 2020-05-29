import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Button, Input, ListItem } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import { Formik } from 'formik';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/FontAwesome5';
import * as SecureStore from 'expo-secure-store';

const goToCamera = () => {
    Actions.camera()
}

const Users = () => {
    const [UsersArray, setUsers] = useState([])
    const [flag, setFlag] = useState(0)
    useEffect(() => {
        (async () => {
            var token = await SecureStore.getItemAsync('secure_token')
            await axios(`http://snapi.epitech.eu/all`, {
                method: "GET",
                headers: {
                    'token': token,
                }
            }).then(status => {
                if (status.status == 200) {
                    if (flag == 0) {
                        setFlag(+1)
                        for (let i = 0; i < 10; i++) {
                            var res = status.data.data[i]
                            // console.log(res)
                            setUsers(UsersArray => [...UsersArray, res])
                        }

                        // console.log(UsersArray)
                    }
                }

            }).catch(error => {
                console.log(error)
            })
        })();
    }, []);
    return (

        <View style={{ flex:1,flexDirection: 'column',justifyContent:'center',alignItems:'center'}}>
            <Icons style={{ fontSize: 70, }} name="users" />
            <View style={{flex:1,justifyContent:'center',alignItems:'center' }}>
                {
                    UsersArray.map((i) => (

                        <View>
                            <Button
                                title={i.email}
                                type="clear"
                            />
                        </View>

                    ))
                }
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        marginTop: 50,
    },
    text: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 100,
        fontWeight: 'bold',
       
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