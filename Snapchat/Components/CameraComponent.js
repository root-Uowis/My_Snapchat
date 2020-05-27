import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Container, Content } from 'native-base';
import Swiper from 'react-native-swiper';
import { Camera } from 'expo-camera';

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
          <View style={styles.container}>
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
                    flex: 0.1,
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                  }}
                  onPress={() => {
                    setType(
                      type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                    );
                  }}>
                  <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
                </TouchableOpacity>
              </View>
            </Camera>
          </View>

          <View style={styles.container}>
            <Text style={styles.text} > Stories
              </Text>
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
    backgroundColor: '#FFF700'
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold'
  }
});
