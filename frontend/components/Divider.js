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
            backgroundColor: COLORS.light
        }}></View>
  )
}

export default Divider