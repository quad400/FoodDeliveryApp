import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, icons } from '../constants'
import IconButton from './IconButton'

const ItemContentCard = ({item, selectedItem, onPress}) => {
  return (
    <TouchableOpacity style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: SIZES.padding,
        paddingVertical: SIZES.padding * 1.5,
    }} onPress={onPress}>

        { selectedItem==item.price ?<IconButton 
            icon={icons.mark}
            iconStyle={{
                height: 14,
                width: 14,
                
            }}
            containerStyle={{
                height: 22,
                width: 22,
                borderRadius: 11,
                borderColor: COLORS.primary,
                backgroundColor: COLORS.primary
            }}
        /> :
        <IconButton 
            icon={icons.radioEmpty}
            iconStyle={{
                tintColor: COLORS.light
            }}
            containerStyle={{
                height: 22,
                width: 22,
                borderRadius: 11,
            }}
        />
}
    <View style={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flex: 1,
        marginLeft: SIZES.padding
    }}>
        <Text style={{
            ...FONTS.h4,
            fontSize: 18
        }}>Size {item.size}</Text>
        {item.liter && <Text style={{
            marginLeft: 6,
            color: COLORS.light,
            ...FONTS.body2
        }}>({item.liter})</Text>}
    </View>
    <Text style={{
        ...FONTS.h4,
        fontSize: 18
    }}>${item.price}</Text>
    </TouchableOpacity>
  )
}

export default ItemContentCard