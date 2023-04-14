import { View, Text } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants'

const Header = ({children}) => {
  return (
    <View style={{
        backgroundColor: COLORS.primary,
        paddingTop: 50,
        paddingBottom: 20,
        paddingHorizontal: SIZES.padding,

    }}>
        {children}
    </View>
  )
}

export default Header