import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/FontAwesome5';
import { Container, Content } from 'native-base';
import Swiper from 'react-native-swiper';
import { Camera } from 'expo-camera';
import Users from './Users'

export default function CameraComponent() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <Container>
      <Content>
        <Swiper
          loop={false}
          showsPagination={false}
          index={1}
        >
          <View style={styles.containerr}>
            <Text style={styles.text}> Snap </Text>
          </View >
          <View style={{ flex: 1 }}>
            <Camera style={{ flex: 1 }} type={type} ratio='16:9'>
              <View
                style={{
                  flex: 1,
                  backgroundColor: 'transparent',
                  flexDirection: 'row',
                }}>
                <TouchableOpacity
                  style={{
                    flex: 0.2,
                    alignSelf: 'flex-end',
                    alignItems: 'flex-end',
                  }}
                  onPress={() => {
                    setType(
                      type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                    );
                  }}>
                  <Icons style={{ fontSize: 40, flex: 0.95, color: 'white' }} name="camera" />
                </TouchableOpacity>
                <TouchableOpacity
                style={{
                  flex: 1.2,
                  alignSelf: 'flex-end',
                  alignItems: "flex-end",
                }}
                >
                  <Icons name="snapchat" style={{fontSize:40,flex:0.95,color:"#FFFF"}} />
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={{ flex: 0.3 }}>
                <View>
                  <Icon style={{
                    fontSize: 100,
                    fontWeight: 'bold',
                    alignSelf: 'center',
                    alignItems: 'baseline',
                    color: "#FFFF"
                  }}
                    name="bullseye"
                  />
                </View>
              </TouchableOpacity>
            </Camera>
          </View>

          <View style={styles.container}>
            <Users />
          </View >
        </Swiper>
      </Content >
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2FF49'
  },
  containerr: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DA2C38'
  },
});
