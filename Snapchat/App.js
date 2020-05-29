import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Router, Scene } from 'react-native-router-flux'
import Inscription from './Components/Inscription.js'
import Connection from './Components/Connection.js'
import Camera from './Components/CameraComponent'

export default function App() {
  return (
    <Router>
      <Scene key="root">
        <Scene key="inscription" component={Inscription} title="Register" initial={true} />
        <Scene key="connection" component={Connection} title="Login" />
        <Scene key="camera" component={Camera} title="Snap" />
      </Scene>
    </Router>
  );
}
