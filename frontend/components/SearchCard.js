import { View, Text, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, icons } from '../constants'
import IconButton from './IconButton'

const SearchCard = ({item}) => {
  return (
    <View
        style={{
            backgroundColor: COLORS.white,
            borderRadius: SIZES.padding * 0.5,
            elevation: 1,
            marginBottom: SIZES.body5,
            flexDirection: 'row'
        }}
    >
        <Image
            source={item.image}
            resizeMode='cover'
            style={{
                height: 100,
                width: 100,
                borderBottomLeftRadius: SIZES.padding * 0.5,
                borderTopLeftRadius: SIZES.padding * 0.5,
                marginRight: SIZES.body5
            }}
        />
                <View style={{
                        flex: 2,
                        paddingVertical: SIZES.padding,
                        paddingRight: SIZES.padding,
                        // marginLeft: SIZES.padding
                }}>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "flex-start",
                            justifyContent: "space-between"
                        }}
                    >
                        <Text
                        numberOfLines={1}
                        ellipsizeMode='tail'
                        style={{
                            fontSize: 16,
                            width: 170,
                            ...FONTS.h4}}
                        >{item.title}</Text>
                        <IconButton
                            icon={icons.favoriteWhite}
                            containerStyle={{
                                marginLeft: SIZES.padding
                            }}
                            iconStyle={{
                                height: 17,
                                width:17,
                                tintColor: COLORS.lightGray,
                            }}
                        />
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                            // backgroundColor: 'red'
                            padding: 0,
                            margin: 0,
                            flex:1,
                        }}
                    >
                    <IconButton 
                        disable={true}
                        icon={icons.location}
                        iconStyle={{
                            height: 14,
                            width: 14,
                            padding:0,
                            margin:0,
                            tintColor: COLORS.light
                        }}
                        containerStyle={{
                            margin: 0,
                            padding: 0
                        }}
                    />
                        <Text 
                        numberOfLines={1}
                        ellipsizeMode='tail'
                        style={{
                            fontSize: 12,
                            width: SIZES.width * 0.5,
                            color: COLORS.light,
                            ...FONTS.body2}}>{item.detail}</Text>
                    </View>
                    <View
                        style={{
                            flexDirection:'row',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}
                    >

                    <View style={{
                            flexDirection:'row',
                            justifyContent: 'flex-start',
                            alignItems: 'center'
                        }}>

                        <IconButton 
                            icon={icons.star}
                            iconStyle={{
                                hieght: 20,
                                width: 20,
                                tintColor: COLORS.primary
                            }}
                        />
                        <Text
                            style={{
                            fontSize: 16,
                            ...FONTS.h4
                            }}
                        >4.5</Text>
                    </View>
                        
                        <Text style={{
                            fontSize: 14,
                            color: COLORS.lightGray,
                            ...FONTS.body3
                        }}>0.4 Km</Text>
                    </View>
                </View>
    </View>
  )
}

export default SearchCard