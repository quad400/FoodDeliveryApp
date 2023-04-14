import { View, Text, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../constants'

const TabIcon = ({icon, label, iconStyle,focused}) => {
  return (
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Image 
          source={icon}
          resizeMode='contain'
          style={{
            height:23,
            width:23,
            tintColor: focused ? COLORS.primary : COLORS.light
          }}
        />
        <Text style={{fontSize:11,
        color: focused ? COLORS.primary : COLORS.light,
        ...FONTS.h4
        }}>{label}</Text>
      </View>
  )
}

export default TabIcon