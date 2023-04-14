import { View, Text, Image, ImageBackground, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, icons, images } from '../constants'
import IconButton from './IconButton'

const Card = ({data}) => {
  return (
        <View 
            style={{
                backgroundColor: COLORS.white,
                marginLeft: SIZES.body5,
                borderRadius: SIZES.padding,
                elevation: 3,
                shadowColor: COLORS.black,
                shadowOffset: {width: 0, height: 1},
                shadowOpacity: 0.8,
                shadowRadius: 1,
            }}
        >
            <ImageBackground
                source={data.image}
                style={{
                    height: 200,
                    width:180,
                }}
                resizeMode='cover'
                borderTopLeftRadius={SIZES.padding * 0.6}
                borderTopRightRadius={SIZES.padding * 0.6}
            >
                <IconButton 
                    icon={icons.favorite}
                    containerStyle={{
                        position: "absolute",
                        top: 10,
                        right: 10
                    }}
                />
            </ImageBackground>
            <View
                style={{
                    paddingVertical: SIZES.padding * 1.5,
                    justifyContent: 'center',
                }}
            >
                <View
                    style={{
                    flex: 1,
                    justifyContent: 'center',
                    flexDirection: 'row'
                }}
                >
                    <Text 
                    numberOfLines={1}
                    ellipsizeMode='tail'
                    style={{
                        fontSize: 16,
                        width: 155,
                        ...FONTS.h4
                    }}>{data.title}</Text>
                </View>
                <View style={{
                    flexDirection:'row',
                    justifyContent:'center',
                    alignItems: 'center',

                }}>
                    <IconButton 
                        disable={true}
                        icon={icons.location}
                        iconStyle={{
                            height: 14,
                            width: 14,
                            tintColor: COLORS.light
                        }}
                        containerStyle={{
                            
                        }}
                    />
                    <Text 
                    numberOfLines={1}
                    ellipsizeMode='tail'
                    style={{
                        width: 150,
                        color: COLORS.lightGray,
                    ...FONTS.body2,
                    }}
                    >
                    {data.detail}</Text>
                </View>
            </View>
        </View>
  )
}

export default Card