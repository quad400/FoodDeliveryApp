import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import React from 'react'
import { useLayoutEffect } from 'react'

const Notification = () => {

            
  const navigation = useNavigation()

  useLayoutEffect(()=> {
    navigation.setOptions({
        headerShown: false,
    })
},[]);
  return (
    <View>
      <Text>Notification</Text>
    </View>
  )
}

export default Notification