import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS } from '../constants'

const IconButton = ({icon,onPress,disable,iconStyle,containerStyle}) => {
  return (
    <TouchableOpacity 
        disabled={disable}
        onPress={onPress}
        style={{
            height: 25,
            width: 25,
            justifyContent: 'center',
            alignItems: 'center',
            ...containerStyle
        }}
    >
        <Image 
            source={icon}
            resizeMode='contain'
            style={{
                height:23,
                width: 23,
                tintColor: COLORS.white,
                ...iconStyle    
            }}
        />

    </TouchableOpacity>
  )
}

export default IconButton