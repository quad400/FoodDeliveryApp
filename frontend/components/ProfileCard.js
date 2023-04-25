import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import IconButton from './IconButton'
import { COLORS, FONTS, SIZES, icons } from '../constants'

const ProfileCard = ({icon, label, onPress, }) => {
  return (
    <TouchableOpacity onPress={onPress}>
        <View style={{
            flexDirection:'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: SIZES.padding * 0.7
        }}>
            <View style={{
            flexDirection:'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            }}>

            <IconButton 
                icon={icon}
                iconStyle={{
                    height: 20,
                    width: 20,
                    tintColor: COLORS.light
                }}
                disable={true}
            />
            <Text style={{
                marginLeft: SIZES.radius,
                ...FONTS.body1,
                fontSize: 14
            }}>{label}</Text>
            </View>


            <IconButton 
                icon={icons.chevronR}
                iconStyle={{
                    height: 16,
                    width: 16,
                    tintColor: COLORS.light
                }}
                disable={true}
            />
        </View>
    </TouchableOpacity>
  )
}

export default ProfileCard