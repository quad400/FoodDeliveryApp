import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, dummyData, icons } from '../../constants'
import { TextButton } from '../../components'

const Ongoing = ({navigation}) => {
  return (
        
        dummyData.ongoing_order.length==0? 
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style={{
                fontSize: 22,
                ...FONTS.h5
            }}>Ongoing is Empty</Text>
            <Text style={{
                ...FONTS.body4,
                color: COLORS.lightGray
            }}>You can go to Discover to add products</Text>

            <TextButton 
                label="Go Discover"
                onPress={()=> navigation.navigate('Home')}
                textStyle={{
                    backgroundColor: COLORS.primary,
                    paddingVertical: SIZES.padding2,
                    marginTop: SIZES.radius,
                    paddingHorizontal: SIZES.radius,
                    borderRadius: SIZES.padding
                }}
            />
        </View>:
        <FlatList
            data={dummyData?.ongoing_order}
            keyExtractor={(item)=> {`NearBy_${item}`}}
            renderItem={({item, index})=>{
                return (
                    <TouchableOpacity onPress={()=>{navigation.navigate('OrderInfo', {items: item})}}>
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
                                source={item.resturant_image}
                                resizeMode='cover'
                                borderBottomLeftRadius={SIZES.padding * 0.5}
                                borderTopLeftRadius={SIZES.padding * 0.5}
                                style={{
                                    height: 100,
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
                                        width: 200,
                                        ...FONTS.h4}}
                                    >{item.resturant_name}</Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "flex-start"
                                    }}
                                >
                                <Text style={{
                                    color: COLORS.primary,
                                    ...FONTS.body1
                                }}>ID:</Text>
                                    <Text 
                                    style={{
                                        ...FONTS.h4}}>{item.id}</Text>
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
                                    <Text style={{
                                        color: COLORS.light,
                                        ...FONTS.body3
                                    }}>{item.item_count}</Text>
                                        <Text style={{
                                        marginLeft: 3,                                
                                        color: COLORS.light,
                                        ...FONTS.body3
                                        }}>{item.item_count == 1? 'item': 'items'}</Text>
                                    </View>
                                    <Text style={{
                                        ...FONTS.body3,
                                        color: item.status == 'Waiting'? 'blue': COLORS.primary
                                    }}>{item.status}</Text>
                                    </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                )
            }}
        />

  )
}

export default Ongoing