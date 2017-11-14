import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={{uri: 'https://media.mnn.com/assets/images/2017/04/Red-Panda-Standing-Enclosure.jpg.638x0_q80_crop-smart.jpg'}}  style={{width: 320, height: 380}} />
        <Text style={{ fontSize: 30 }}>Red Panda!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
