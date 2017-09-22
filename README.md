# react-native-censored

[![Greenkeeper badge](https://badges.greenkeeper.io/redpandatronicsuk/react-native-censored.svg)](https://greenkeeper.io/)
`react-native-censored` is a tool for quickly censoring potentially objectionable content in your app so it conforms to the guidelines of the app market you are publishing too.

The Apple AppStore and Google PlayStore have similar - yet different - guidelines, Google's guidelines generally being more lenient. React Native apps share most (if not all) code between the iOS and Android app and it becomes hard having to manage different content. `react-native-censored` lets you easily censor content for specific platforms.

## Installation
`react-native-censored` uses [react-native-blur](https://github.com/react-native-community/react-native-blur) to achieve the blur effect and [react-native-svg](https://github.com/react-native-community/react-native-svg) to display the censored stamp. If you are using [Expo](https://expo.io/) you already have these dependencies pre-installed. If your app is not using Expo you will have to install `react-native-blur` and `react-native-svg` before you can use `react-native-censored`.

## Usage
### Example

```jsx
import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { Censored } from 'react-native-censored'
// For Expo apps use line below instead of above line:
// import { Censored } from 'react-native-censored/expo'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Censored intensity={100} scale={.75} rotate="45deg" fill="black" platforms={['isisos']} >
          <Text style={styles.imageTitle}>Jesus Christ</Text>
          <Image source={require('./assets/uncensored.jpg')} style={styles.image} />
        </Censored>
        <Censored intensity={100} scale={.75} rotate="45deg" platforms={['ios', 'android']} >
          <Text style={styles.imageTitle}>Prophet Muhammad</Text>
          <Image source={require('./assets/censored.jpg')} style={styles.image} />
        </Censored>
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
```
<p align="center">
<img alt="demo" title="demo" src="https://github.com/redpandatronicsuk/react-native-censored/blob/master/demo/react-native-censor-demo.png"/>
</p>

### Parameters
| Name      | Default   | Description                                                                                                                                                                                                               |
|-----------|-----------|-------------------------------------------------------------------------------|
| intensity | 100       | Blur amount                                                                                                                                                                                                               |
| tint      | 'light'   | Blur tint, either light or dark                                                                                                                                                                                           |
| scale     | 1         | Scale factor for the censored stamp                                                                                                                                                                                       |
| rotate    | '45deg'   | Rotation of the censored stamp                                                                                                                                                                                            |
| fill      | '#BE1622' | Colour of the stamp                                                                                                                                                                                                       |
| platforms | []        | The platforms the content should be censored on. For example, ['ios'] would blur the content on iOS devices, but leave it uncensored on Android devices, ['ios', 'android'] would censor it on iOS and Android platforms. |


### Who uses react-native-censored
## TrumpTweetTrumps
<p align="center">
<a href="https://trumptweettrumps.com/">
<img alt="TrumpTweetTrumps" title="TrumpTweetTrumps" src="https://github.com/redpandatronicsuk/react-native-censored/blob/master/stuff/new-android-logo-05.png"/></a>
</p>