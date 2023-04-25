import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { COLORS, FONTS, SIZES, icons } from '../../constants'
import { useNavigation } from '@react-navigation/native'
import { IconButton } from '../../components'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Food from './Food'
import Cakes from './Cakes'
import Drink from './Drink'
import Noodles from './Noodles'


const NearByTab = () => {

    const Tab = createMaterialTopTabNavigator()

    return (
        <Tab.Navigator 
        screenOptions={{
            tabBarScrollEnabled: true,
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
            tabBarItemStyle: {
                width: 100,
            }
        }}

    >
        <Tab.Screen 
            name='Food'
            component={Food}
            options={{
                tabBarLabel: 'Food'
            }}
        />
       <Tab.Screen 
            name='Cakes'
            component={Cakes}
            options={{
                tabBarLabel: 'Cakes'
            }}
     />
        <Tab.Screen 
            name='Drink'
            component={Drink}
            options={{
                tabBarLabel: 'Drink'
            }}
        />
        <Tab.Screen 
            name='Noodles'
            component={Noodles}
            options={{
                tabBarLabel: 'Noodles'
            }}
        />
            
    </Tab.Navigator>
    )
}


const NearBy = () => {

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
                lineHeight: 30,
                fontWeight: 600,
                ...FONTS.h5
            }}>Nearby</Text>

            {/* location */}
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: 'whitesmoke',
                elevation: 1,
                borderRadius: 3,
                paddingHorizontal: SIZES.padding * 0.5
            }}>
                <IconButton 
                    icon={icons.location}
                    disable={true}
                    iconStyle={{
                        tintColor: COLORS.light,
                        height: 13,
                        width:13
                    }}
                />
                <Text
                    numberOfLines={1}
                    ellipsizeMode='tail'
                    style={{
                        width: 150,
                        ...FONTS.h4
                    }}
                >76A Eight Avenue,New York,US</Text>
                <IconButton 
                    icon={icons.chevronDown}
                    iconStyle={{
                        tintColor: COLORS.black,
                        height: 13,
                        width:13
                    }}
                />
            </View>

        </View>
        
        <NearByTab />
    </View>
  )
}

export default NearBy