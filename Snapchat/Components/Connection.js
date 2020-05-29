import React from 'react'
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

async function setToken(token) {
  await SecureStore.deleteItemAsync('secure_token');
  await SecureStore.setItemAsync('secure_token', token);
  var e = await SecureStore.getItemAsync('secure_token');
  console.log(e)
}
function Connection() {

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={values => axios.post(`http://snapi.epitech.eu/connection/?email=${values.email}&password=${values.password}`).then(status => {
        if (status.status == 200) {
          var token = status.data.data.token
          if (setToken(token)) {
            goToCamera()
          }else {
            console.log('error with token')
          }
          console.log('logged in')
        }
      }).catch(error => {
        console.log(error)
      })}

    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View >
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
          <Button onPress={handleSubmit} title="LOGIN" />
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

export default Connection;