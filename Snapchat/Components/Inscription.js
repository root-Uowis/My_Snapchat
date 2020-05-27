import React from 'react'
import { Text, Button, View, TextInput } from 'react-native'
import { Actions } from 'react-native-router-flux';
import { Formik } from 'formik';
import axios  from 'axios';

const goToConnection = () => {
    Actions.connection()
}

const Inscription = () => {
    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={values => axios.post(`http://snapi.epitech.eu/inscription/`, values).then(response => {
                if (response.data.status) {
                    console.log(response);
                }
            }).catch(error => { console.log(error) })}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View>
                    <TextInput
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        placeholder={'email'}

                    />
                    <TextInput
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        placeholder={'password'}
                        secureTextEntry={true}
                    />
                    <Button onPress={handleSubmit} title="Submit" />
                </View>
            )}
        </Formik>
    )
}

export default Inscription