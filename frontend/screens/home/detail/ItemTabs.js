import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Products from './Products'
import { COLORS, FONTS } from '../../../constants'
import Review from './Review'
import Information from './Information'

const Tab = createMaterialTopTabNavigator()

const ItemTabs = ({item}) => {

  return (

    <Tab.Navigator 
        screenOptions={{
            tabBarShowLabel: true,
            tabBarIndicatorStyle: {
                backgroundColor: COLORS.primary
            },
            tabBarInactiveTintColor: COLORS.light,
            tabBarStyle: {
                backgroundColor: COLORS.white,
                elevation:1,
            },
            tabBarLabelStyle: {
                    ...FONTS.h4
            }
        }}

    >
        <Tab.Screen 

            name='Products'

            component={Products}
            initialParams={{item}}
        />
       <Tab.Screen 
            name='Review'
            component={Review}
            initialParams={{item}}
     />
        <Tab.Screen 
            name='Information'
            component={Information}
            initialParams={{item}}
        />
            
    </Tab.Navigator>
  )
}

export default ItemTabs