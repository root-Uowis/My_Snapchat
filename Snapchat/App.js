import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Router, Scene } from 'react-native-router-flux'
import Inscription from './Components/Inscription.js'
import Connection from './Components/Connection.js'

export default function App() {
  return (
    <Router>
      <Scene key= "root">
         <Scene key= "inscription" component = {Inscription} title = "inscription" initial = {true} />
         <Scene key= "connection" component = {Connection} title = "Connection" />
      </Scene>
   </Router>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF700'
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold'
  }
});
