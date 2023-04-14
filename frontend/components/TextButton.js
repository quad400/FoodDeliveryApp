import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../constants'

const TextButton = ({label,onPress,textStyle}) => {
  return (
    <TouchableOpacity onPress={onPress}>
        <Text
          style={{
            color: COLORS.white,
            ...FONTS.body3,
            ...textStyle
          }}
        >{label}</Text>
    </TouchableOpacity>
  )
}

export default TextButton