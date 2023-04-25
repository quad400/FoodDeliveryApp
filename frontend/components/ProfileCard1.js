import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import IconButton from './IconButton'
import { COLORS, FONTS, SIZES, icons } from '../constants'

const ProfileCard1 = ({profile, label, onPress}) => {
  return (
    <View style={{
        backgroundColor: COLORS.white,
        elevation: 1,
        // marginHorizontal: SIZES.padding,
        marginTop: SIZES.padding * 1.5,
        padding: SIZES.padding,
        borderRadius: SIZES.padding
      }}>
        <TouchableOpacity onPress={onPress}>
            <View style={{
                flexDirection:'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingVertical: 7,
                elevation: 1
            }}>
                <Text 
                
                numberOfLines={1}
                ellipsizeMode='tail'
                style={{
                    width: 100,
                    ...FONTS.body1,
                    color: COLORS.light,
                    fontSize: 14
                }}>{label}</Text>

                <Text 
                numberOfLines={1}
                ellipsizeMode='tail'
                style={{
                    width: 100,
                    marginLeft: SIZES.radius,
                    flex: 1,
                    ...FONTS.h4,
                    fontSize: 14
                }}>{profile}</Text>

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
    </View>
  )
}

export default ProfileCard1