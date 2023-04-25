import { View, Text } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../../constants'
import { useRoute } from '@react-navigation/native'

const Information = () => {

  const route = useRoute()
  const {item} = route.params

  return (
    <View style={{
      padding: SIZES.padding2,
      backgroundColor: COLORS.white,
      height: SIZES.height
    }}>
      {/* info */}
      <View style={{
        marginBottom: SIZES.padding
      }}>
        <Text style={{
          fontSize: 18,
          ...FONTS.h4
        }}>Informations</Text>
        <Text style={{
          marginTop: SIZES.padding,
          ...FONTS.body3
        }}>{item.detail}</Text>
      </View>


     {/* address */}
     <View >
      <Text style={{
      fontSize: 18,
          ...FONTS.h4
     }}>Address</Text>
     </View>
    </View>
  )
}

export default Information