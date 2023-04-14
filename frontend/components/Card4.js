import React from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import { COLORS, FONTS, SIZES, dummyData, icons } from '../constants'
import IconButton from './IconButton'

const Card4 = ({data}) => {
  return (        
    <View style={{
        padding: SIZES.padding,
        backgroundColor: COLORS.white
    }}>
        <FlatList
            data={dummyData.itemContent}
            contentContainerStyle={{
                padding: 0,
                margin: 0,
            }}
            ListHeaderComponent={
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontSize: 18,
                        ...FONTS.h4
                    }}>Juice</Text>
                    <Text style={{
                        marginLeft: 10,
                        color: COLORS.lightGray,
                        ...FONTS.body1
                    }}>2 items</Text>
                </View>
            }
            renderItem={({item, index})=> {
                return (
                    <TouchableOpacity>
                        <View style={{
                            flexDirection: 'row',
                            marginBottom: SIZES.padding,
                            justifyContent: 'space-between',
                            // alignItems: 'stretch',
                            // flex: 1
                        }}>

                            <Image 
                                source={item.image}
                                resizeMode='cover'
                                style={{
                                    height: 90,
                                    width:90,
                                    borderRadius: SIZES.padding * 0.5
                                }}
                            />
                            <View style={{
                                flex:1,
                                marginLeft: SIZES.padding,
                                alignItems: 'stretch',
                                justifyContent: 'space-between'
                            }}>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',

                                }}>
                                    <Text 
                                        numberOfLines={1}
                                        ellipsizeMode='tail'
                                        style={{
                                        width: SIZES.width * 0.5,
                                        fontSize:16,
                                        ...FONTS.h4,}}
                                >{item.title}</Text>
                                <IconButton 
                                    icon={icons.favoriteWhite}
                                    iconStyle={{
                                        tintColor: COLORS.light,
                                        height: 18,
                                        width: 18
                                    }}
                                />
                                </View>
                                <Text
                                numberOfLines={2}
                                    ellipsizeMode='tail'
                                    style={{
                                    width: SIZES.width * 0.63,
                                    fontSize:12,
                                    ...FONTS.body4,
                                    lineHeight: 15,
                                    }}
                                >{item.detail}</Text>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                    <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'flex-start',
                                    alignItems: 'center'
                                }}>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                <Text style={{
                                    color: COLORS.primary,
                                    fontSize: 16,
                                    ...FONTS.h3
                                }}>$2.9</Text>
                                <IconButton 
                                    icon={icons.line}
                                    iconStyle={{
                                            tintColor: COLORS.light,
                                            height: 16,
                                            width:16,
                                    }}
                                    containerStyle={{
                                        height: 16,
                                        width:16,
                                    }}
                                />
                                    <IconButton 
                                        icon={icons.share}
                                        iconStyle={{
                                            tintColor: COLORS.light,
                                            height: 16,
                                            width:16,
                                        }}
                                    />
                                    <Text style={{
                                        ...FONTS.body3,
                                        color: COLORS.lightGray
                                    }}>99+</Text>
                                </View>
                                
                                <IconButton 
                                    icon={icons.line}
                                    iconStyle={{
                                        tintColor: COLORS.light,
                                        height: 16,
                                        width:16,
                                    }}
                                    containerStyle={{
                                        height: 16,
                                        width:16,
                                    }}
                                />
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <IconButton 
                                        icon={icons.like}
                                        iconStyle={{
                                            tintColor: COLORS.light,
                                            height: 16,
                                            width:16,
                                        }}
                                    />
                                    <Text style={{
                                        ...FONTS.body3,
                                        color: COLORS.lightGray
                                    }}>56+</Text>
                                </View>
                                    </View>
                                    <IconButton 
                                        icon={icons.plus}
                                        iconStyle={{
                                            height: 12,
                                            width: 12
                                        }}
                                        containerStyle={{
                                            backgroundColor: COLORS.primary,
                                            borderRadius: 12,
                                            height: 20,
                                            width: 20,
                                            padding: 3
                                        }}
                                    />
                                </View>
                            </View>
                            
                            
                        </View>
                    </TouchableOpacity>
                )
            }} 
        />
    </View>
  )
}

export default Card4