import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { CensoredExpo } from './react-native-censored'

console.disableYellowBox = true

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <CensoredExpo intensity={100} scale={.75} rotate="45deg" fill="black" platforms={['isisos']} >
          <Text style={styles.imageTitle}>Jesus Christ</Text>
          <Image source={require('./assets/uncensored.jpg')} style={styles.image} />
        </CensoredExpo>
        
        <CensoredExpo intensity={100} scale={.75} rotate="45deg" platforms={['ios', 'android']} >
          <Text style={styles.imageTitle}>Prophet Muhammad</Text>
          <Image source={require('./assets/censored.jpg')} style={styles.image} />
        </CensoredExpo>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  imageTitle: {
    color: 'black',
    fontSize: 24,
    textAlign: 'center'
  },
  image: {
    resizeMode: 'contain',
    maxHeight: 0.4 * Dimensions.get('window').height
  }
})
