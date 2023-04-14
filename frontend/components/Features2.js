import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, icons } from '../constants'
import IconButton from './IconButton'
import Card from './Card'
import Card2 from './Card2'

const Features2 = ({label, onPress, content}) => {
  return (
    <View style={{

    }}>
        <View 
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop:SIZES.padding * 2,
                marginBottom:SIZES.padding * 1.2
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
                        height: 14,
                        width: 14,
                        tintColor: COLORS.primary
                    }}
                />
            </View>

        </View>
        <FlatList 
            data={content}
            showsVerticalScrollIndicator={false}
            bounces={true}
            contentContainerStyle={{
                marginBottom: SIZES.padding
            }}
            
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item)=>{`Food__${item.id}`}}
            renderItem={({item, index})=> {
                return (
                    <Card2 
                        key={index}
                        data={item}
                    />
                )
            }}
        />
    </View>
  )
}

export default Features2