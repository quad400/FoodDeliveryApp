import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { useLayoutEffect } from 'react'
import { COLORS, FONTS, SIZES } from '../../constants'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Ongoing from './Ongoing'
import History from './History'
import MyCart from './MyCart'
import { TextButton } from '../../components'


const OrderTab = () => {

    const Tab = createMaterialTopTabNavigator()

    return (
        <Tab.Navigator 
        screenOptions={{
            tabBarScrollEnabled: false,
            tabBarIndicatorStyle: {
                backgroundColor: COLORS.primary
            },
            tabBarInactiveTintColor: COLORS.light,
            tabBarStyle: {
                backgroundColor: COLORS.white,
                elevation:1,
            },
            tabBarIndicatorContainerStyle:{
                padding: 0,
            },
            tabBarActiveTintColor: COLORS.primary,
            tabBarLabelStyle: {
                    ...FONTS.h4
            },
        }}
    >
        <Tab.Screen 
            name='MyCart'
            component={MyCart}
            options={{
                tabBarLabel: 'MyCart'
            }}
        />    
        <Tab.Screen 
            name='Ongoing'
            component={Ongoing}
            options={{
                tabBarLabel: 'Ongoing'
            }}
        />
       <Tab.Screen 
            name='History'
            component={History}
            options={{
                tabBarLabel: 'History'
            }}
     />
    </Tab.Navigator>
    )
}


const Order = () => {

  const navigation = useNavigation()

  useLayoutEffect(()=> {
    navigation.setOptions({
        headerShown: false,
    })
},[]);

  return (    
        <View style={{
            flex:1,
            flexDirection: 'column'
        }}>
            <View style={{
                paddingTop: 50,
                paddingHorizontal: SIZES.padding,
                backgroundColor:COLORS.white,
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <Text style={{
                    fontSize: 25,
                    lineHeight: 50,
                    fontWeight: 600,
                    ...FONTS.h5
                }}>Order</Text>
            </View>

            <OrderTab />
        </View>
  )
}

export default Order