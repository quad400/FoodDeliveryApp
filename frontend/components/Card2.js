import { View, Text, TouchableWithoutFeedback, Image, FlatList } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, icons,dummyData } from '../constants'
import {Card3, IconButton} from './'

const Card2 = ({data, onPress}) => {

    // render
    function renderCardHeader(){
        return (
            <View
                style={{
                    margin:0,
                    padding: SIZES.padding,
                    backgroundColor: COLORS.white,
                    flexDirection: 'row',
                    flex: 1
                }}
            >

                {/* Image */}
                <Image 
                    source={data.image}
                    resizeMode='cover'
                    borderRadius={SIZES.padding * 0.6}
                    style={{
                        flex:1,
                        height:100,
                        width: 120,
                    }}
                />

                {/* Content */}
                <View style={{
                    flex: 2,
                    marginLeft: SIZES.padding
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
                        >{data.title}</Text>
                        <IconButton 
                            icon={icons.favorite}
                            containerStyle={{
                                marginLeft: SIZES.padding
                            }}
                            iconStyle={{
                                tintColor: COLORS.primary,
                            }}
                        />
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "flex-start",
                            justifyContent: "flex-start"
                        }}
                    >
                    <IconButton 
                        disable={true}
                        icon={icons.location}
                        iconStyle={{
                            height: 14,
                            width: 14,
                            tintColor: COLORS.light
                        }}
                    />
                        <Text 
                        numberOfLines={1}
                        ellipsizeMode='tail'
                        style={{
                            fontSize: 12,
                            width: SIZES.width * 0.5,
                            color: COLORS.light,
                            ...FONTS.body2}}>{data.detail}</Text>
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
                                    tintColor: '#f0b435',
                                    width: 20,
                                    height: 20
                                }}
                            />
                            <Text
                                style={{
                                fontSize: 16,
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
    }

    function renderContent(){
        return (
                <FlatList
                    data={dummyData.itemContent}
                    keyExtractor={(item) => `${item.id}`}
                    showsHorizontalScrollIndicator={false}
                    alwaysBounceHorizontal={true}
                    nestedScrollEnabled={true}
                    horizontal
                    contentContainerStyle={{
                        paddingLeft: 10,
                        marginTop: SIZES.padding
                    }}
                    renderItem={({item, index}) => {
                        return (
                            <Card3 
                                data={item}
                                key={index}
                                onPress={onPress}
                            />
                        )
                    }}
                />
        )
    }

  return (
    <TouchableWithoutFeedback>
        <View 
            style={{
                backgroundColor: COLORS.white,
                marginBottom: SIZES.padding,
                elevation: 3,
                shadowColor: COLORS.black,
                shadowOffset: {width: 0, height: 1},
                shadowOpacity: 0.8,
                shadowRadius: 1,
            }}
            >

                {/* Card Header */}
                {renderCardHeader()}

                {/* Content */}
                {renderContent()}
        </View>
    </TouchableWithoutFeedback>
  )
}

export default Card2