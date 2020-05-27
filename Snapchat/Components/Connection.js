import React, { Component } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux';


const Connection = () => {
    const goToInscription = () => {
        Actions.inscription()
     }
    return (
        <TouchableOpacity style = {{ margin: 128 }} onPress = {goToInscription}>
        <Text>This is Connection!</Text>
     </TouchableOpacity>
    )
  }
export default Connection