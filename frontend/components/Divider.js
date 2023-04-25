import { View, Text } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants'

const Divider = ({thick,width}) => {
  return (
        <View style={{
            height:1,
            width: '100%',
            ...thick,
            ...width,
            backgroundColor: COLORS.light,
            opacity: 0.5
        }}></View>
  )
}

export default Divider