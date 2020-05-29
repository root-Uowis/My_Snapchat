import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import { Input } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import { Formik } from 'formik';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';

const goToConnection = () => {
    Actions.connection()
}

const Inscription = () => {
    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={values => axios.post(`http://snapi.epitech.eu/inscription/?email=${values.email}&password=${values.password}`).then(status => {
                console.log(status);
                if (status.status == 200) {
                    goToConnection()
                    alert('U are registered')
                }
            }).catch(error => {
                console.log(error)
            })}
                style={{flex:1}}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View style={{flex:1,justifyContent:"space-around"}}>
                    <Input
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        placeholder='Email'
                        leftIcon={
                            <Icon
                                name='user'
                                size={24}
                                color='black'
                            />
                        }
                    />


                    <Input
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        placeholder={'password'}
                        secureTextEntry={true}
                        placeholder="Password"
                        leftIcon={{ type: 'font-awesome', name: 'lock' }}
                        style={styles}
                    />
                    <Button onPress={handleSubmit} title="Sign Up" color="#dA2c38"  />
                    <Text onPress={goToConnection} style={styles.text}>U already have an account ?</Text>

                </View>
            )}
        </Formik>
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
        marginLeft: 60,
        marginBottom: 80,
    },
    textinput: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        fontWeight: 'bold',
    },
});

export default Inscription