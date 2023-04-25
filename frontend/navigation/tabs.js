import {COLORS,SIZES,icons} from '../constants'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TabIcon from '../components/TabIcon'
import {Home,Order,Favourite,Profile} from '../screens'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'
import NearBy from '../screens/nearby/NearBy'

const Tab = createBottomTabNavigator()

const Tabs = () => { 
    const navigation = useNavigation()

    useLayoutEffect(()=> {
      navigation.setOptions({
          headerShown: false,
      })
  },[]);
  return (
    <Tab.Navigator 
        
        screenOptions={{
            tabBarShowLabel:false,
            tabBarHideOnKeyboard:true,
            tabBarStyle: {
                backgroundColor: COLORS.white,
                position:"relative",
                height: SIZES.h1 * 2,
                paddingVertical: SIZES.padding,
                borderRadius: SIZES.padding * 0.6,
                height: 70,
                borderTopColor:"transparent",
            }
        }}
    >
        <Tab.Screen 
            name='Home'
            component={Home}
            options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        <TabIcon
                            focused={focused}
                            icon={icons.home}
                            label='Home'
                        />
                    )
                }
            }}

        />
        <Tab.Screen 
            name='Nearby'
            component={NearBy}
            options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        <TabIcon
                            focused={focused}
                            icon={icons.compass}
                            label='Nearby'
                        />
                    )
                }
            }}

        />
        <Tab.Screen 
            name='Order'
            component={Order}
            options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        <TabIcon
                            focused={focused}
                            icon={icons.cart}
                            label='Order'
                        />
                    )
                }
            }}

        />
        <Tab.Screen 
            name='Favourite'
            component={Favourite}
            options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        <TabIcon
                            focused={focused}
                            icon={icons.favoriteWhite}
                            label='Favourite'
                        />
                    )
                }
            }}

        />
        <Tab.Screen 
            name='Profile'
            component={Profile}
            options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        <TabIcon
                            focused={focused}
                            icon={icons.person}
                            label='Profile'
                        />
                    )
                }
            }}

        />
    </Tab.Navigator>
  )
}

export default Tabs