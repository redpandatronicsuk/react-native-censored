import React from 'react'
import Svg from 'react-native-svg'
import { censoredStampPath } from './data/censored-stamp-path'

export default class CensoredStamp extends React.Component {
  render() {
    const { height = 65.5, width = 339.4, style, scale = 1, fill = '#BE1622' } = this.props
    return (
        <Svg style={style} height={height * scale} width={width * scale} viewBox="0 0 339.4 65.5">
            <Svg.Path fill={fill} d={censoredStampPath} />
        </Svg>
    )
  }
}