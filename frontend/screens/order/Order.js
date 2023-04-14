import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { useLayoutEffect } from 'react'

const Order = () => {

          
  const navigation = useNavigation()

  useLayoutEffect(()=> {
    navigation.setOptions({
        headerShown: false,
    })
},[]);

  return (
    <View>
      <Text>Order</Text>
    </View>
  )
}

export default Order