import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'


const Profile = () => {
            
  const navigation = useNavigation()

  useLayoutEffect(()=> {
    navigation.setOptions({
        headerShown: false,
    })
},[]);
  return (
    <View>
      <Text>Profile</Text>
    </View>
  )
}

export default Profile