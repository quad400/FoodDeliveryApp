import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, icons } from '../constants'
import IconButton from './IconButton'
import Card from './Card'

const Features = ({label, onPress, children, containerStyle}) => {
  return (
    <View style={{
        ...containerStyle
    }}>
        <View 
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop:SIZES.padding * 2,
                marginBottom:SIZES.padding * 1.2,
                paddingHorizontal: SIZES.padding
            }}
        >
            <Text style={{
                fontSize: 18,
                fontWeight: '400',
                ...FONTS.h4
            }}>{label}</Text>

            <View style={{
                flexDirection:'row',
            }}>
                <Text 
                    style={{
                        color: COLORS.primary,
                        ...FONTS.body2
                    }}
                >View all</Text>
                <IconButton 
                    onPress={onPress}
                    disable={true}
                    icon={icons.chevronRight}
                    iconStyle={{
                        height: 13,
                        width: 13,
                        tintColor: COLORS.primary
                    }}
                />
            </View>

        </View>
        {children}
    </View>
  )
}

export default Features