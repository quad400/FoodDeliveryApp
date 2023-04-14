import { View, Text, TouchableWithoutFeedback, ImageBackground } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../constants'

const Card3 = ({data, onPress}) => {

  return (
<TouchableWithoutFeedback>
        <View 
            style={{
                backgroundColor: COLORS.white,
                justifyContent: 'center',
                marginRight: data - 1 ? null : SIZES.padding,
            }}
        >
            <ImageBackground
                source={data.image}
                style={{
                    height: 100,
                    width: 80,
                }}
                resizeMode='cover'
                borderTopLeftRadius={SIZES.padding * 0.6}
                borderTopRightRadius={SIZES.padding * 0.6}
            >
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
                    numberOfLines={2}
                    ellipsizeMode='tail'
                    style={{
                        fontSize: 13,
                        width: 80,
                        ...FONTS.body3
                    }}>{data.title}</Text>
                </View>
                <View style={{
                }}>
                    <Text 
                    style={{
                        color: COLORS.primary,
                    ...FONTS.h3,
                    }}
                    >$
                    {data.price}</Text>
                </View>
            </View>
            </View>
        </TouchableWithoutFeedback>
  )
}

export default Card3