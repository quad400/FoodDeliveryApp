import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, dummyData, icons } from '../../constants'
import { IconButton } from '../../components'

const Food = () => {
  return (
    <>
        <FlatList 
            data={dummyData?.nearBy}
            keyExtractor={(item)=> {`NearBy_${item}`}}
            renderItem={({item, index})=>{
                return (
                    <View
                        style={{
                        marginHorizontal: SIZES.padding,
                        marginTop: index==0 ? SIZES.padding * 2: null,
                        marginBottom: index==dummyData.nearBy.length -1 ? SIZES.padding * 2 : SIZES.padding,
                        elevation:2,
                        borderRadius: SIZES.padding * 0.5,
                        backgroundColor: COLORS.white,
                        flexDirection: 'row',
                        flex: 1
                        }}
                    >

                {/* Image */}
                <Image
                    source={item.image}
                    resizeMode='cover'
                    borderBottomLeftRadius={SIZES.padding * 0.5}
                    borderTopLeftRadius={SIZES.padding * 0.5}
                    style={{
                        height: 117,
                        width: 100,
                    }}
                />

                {/* Content */}
                <View style={{
                    flex: 2,
                    marginLeft: SIZES.padding,
                    paddingRight: 10,
                    paddingVertical: 10,
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
                            width: 150,
                            ...FONTS.h4}}
                        >{item.title}</Text>
                        <IconButton
                            icon={icons.favorite}
                            containerStyle={{
                                marginLeft: SIZES.padding
                            }}
                            iconStyle={{
                                height: 18,
                                width: 18,
                                tintColor: COLORS.primary,
                            }}
                        />
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "flex-start"
                        }}
                    >
                    <IconButton 
                        disable={true}
                        icon={icons.location}
                        iconStyle={{
                            height: 12,
                            width: 12,
                            tintColor: COLORS.light
                        }}
                    />
                        <Text 
                        numberOfLines={1}
                        ellipsizeMode='tail'
                        style={{
                            fontSize: 12,
                            width: SIZES.width * 0.5,
                            color: COLORS.lightGray,
                            ...FONTS.body4}}>{item.detail}</Text>
                    </View>
                    <View style={{
                        // flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                    }}>
                        <View
                            style={{
                                flexDirection:'row',
                                justifyContent: 'flex-start',
                                alignItems: 'center'
                            }}
                        >
                            <IconButton 
                                icon={icons.star}
                                iconStyle={{
                                    tintColor: 'orange',
                                    width: 14,
                                    height: 14
                                }}
                            />
                            <Text
                                style={{
                                fontSize: 14,
                                ...FONTS.h4
                                }}
                            >4.5</Text>
                            <Text
                                style={{
                                    color:COLORS.light
                                }}
                            >(1256 Reviews)</Text>
                        </View>
                        <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                            <Text style={{
                                fontSize: 14,
                                ...FONTS.body3
                                }}>30 Min</Text>
                            <View 
                                style={{
                                    height: 6,
                                    width: 6,
                                    marginHorizontal: 3,
                                    borderRadius: 3,
                                    backgroundColor: COLORS.primary
                                }}
                            ></View>
                            <Text style={{
                                fontSize: 14,
                                ...FONTS.body3
                            }}>0.4 Km</Text>
                        </View>
                    </View>
                </View>
            </View>
                )
            }}
        />
    </>
  )
}

export default Food