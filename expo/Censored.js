import React from 'react'
import { Image, Platform, StyleSheet, Text, View } from 'react-native'
import { BlurView } from 'expo'
import { styles } from '..'
import { CensoredStamp } from '.'

export default class Censored extends React.Component {
  render() {
    const { children, intensity = 100, tint = 'light', scale, rotate = '45deg', fill, platforms = [] } = this.props
    return (
      platforms.includes(Platform.OS) ?
      <View style={styles.container}>
        { children }
        <BlurView tint={tint} intensity={intensity} style={[StyleSheet.absoluteFill, styles.unblurred]}>
          <CensoredStamp scale={scale} fill={fill} style={{ transform: [{ rotate }] }} />
        </BlurView>
      </View>
      : <View>{ children }</View>
    )
  }
}
