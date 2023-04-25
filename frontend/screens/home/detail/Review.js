import { View, Text, FlatList, Image, ScrollView } from 'react-native'
import React from 'react'
import { Divider, Features } from '../../../components'
import { COLORS, FONTS, SIZES, dummyData, icons } from '../../../constants'
import { useRoute } from '@react-navigation/native'


const Comment=({data}) => {

    // render
    function renderRate(value) {
        return (
            <View style={{
                flexDirection: 'row'
            }}>
                <Image 
                    source={icons.star}
                    resizeMode='contain'
                    style={{
                        tintColor: value >= 1 ? 'orange' : COLORS.light3,
                        height: 14,
                        marginRight: 3,
                        width: 14,
                        marginBottom:4
                    }}
                />
                <Image 
                    source={icons.star}
                    resizeMode='contain'
                    style={{
                        tintColor: value >=2 ? 'orange' : COLORS.light3,
                        height: 14,
                        marginRight: 3,
                        width: 14,
                        marginBottom:4
                    }}
                />
                <Image 
                    source={icons.star}
                    resizeMode='contain'
                    style={{
                        tintColor: value >=3 ? 'orange' : COLORS.light3,
                        height: 14,
                        marginRight: 3,
                        width: 14,
                        marginBottom:4
                    }}
                />
                <Image 
                    source={icons.star}
                    resizeMode='contain'
                    style={{
                        tintColor: value >=4 ? 'orange' : COLORS.light3,
                        height: 14,
                        marginRight: 3,
                        width: 14,
                        marginBottom:4
                    }}
                />
                <Image 
                    source={icons.star}
                    resizeMode='contain'
                    style={{
                        tintColor: value == 5 ? 'orange': COLORS.light3,
                        height: 14,
                        width: 14,
                        marginBottom:4
                    }}
                />
            </View>
        )
    }


    return (
        <FlatList
            data={data.rate}
            renderItem={({item, index})=>{
                return (
            <View style={{
                paddingHorizontal: SIZES.padding,
                paddingBottom: index == data.rate.length - 1 ? SIZES.padding * 2 : null,
            }}>
            <View style={{
                paddingVertical: SIZES.padding,
                flexDirection: 'row',
                alignItems: 'flex-start',

            }}>
                <Image 
                    source={item.image}
                    resizeMode='contain'
                    style={{
                        height: 50,
                        width: 50,
                        borderRadius: SIZES.padding * 0.5
                    }}
                />

                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    paddingLeft: SIZES.padding
                }}>
                <Text style={{
                    lineHeight: 10,
                    ...FONTS.body3

                }}>{item.name}</Text>
                    {/* rate */}

                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}>
                    {renderRate(item.rate)}                    
                    <Text style={{
                        color: COLORS.light,
                        ...FONTS.body1
                    }}>{item.date} {item.time}</Text>

                    </View>
                <View>
                    <Text>{item?.comment}</Text>

                    <FlatList 
                        data={item?.content}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item)=> {item.id}}
                        renderItem={({item, index})=> {
                            return (
                                <View style={{
                                    marginRight: SIZES.padding
                                }}>
                                    <Image 
                                        source={item?.image}
                                        resizeMode='cover'
                                        style={{
                                            width: 80,
                                            height: 80,
                                            borderRadius: SIZES.padding * 0.5,
                                        }}
                                    />
                                </View>
                            )
                        }}
                    />
                </View>
                </View>
            </View>
            <Divider />
            </View>
         )
        }}
        />
    )
}

const Review = () => {
    const route = useRoute()

    const {item} = route.params;
  
  return (
    <>

   {
    item.rate.length !== 0 ? <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
            backgroundColor: COLORS.white
        }}
        ListHeaderComponent={
            <View>
                <Features 
                label="Photos & Videos"
                containerStyle={{
                    marginBottom: SIZES.padding
                }}
            >
                <FlatList 
                    data={item?.photos}
                    horizontal
                    bounces={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingBottom: SIZES.padding
                    }}
                    renderItem={({item, index})=>{
                        return (
                            <View
                                style={{
                                    marginRight: SIZES.padding,
                                    marginLeft: index ==0 ? 10 : 0,
                                    borderRadius: SIZES.padding * 0.5
                                }}
                            >
                                <Image 
                                    source={item.image}
                                    resizeMode='cover'
                                    style={{
                                        height: 80,
                                        width:80,
                                        borderRadius: SIZES.padding * 0.5
                                    }}
                                />
                            </View>
                        )
                    }}
                />
            </Features>
            <View style={{
                flexDirection:'row',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    paddingHorizontal: SIZES.padding,
                    paddingBottom: SIZES.padding
            }}>
                <Text style={{
                    ...FONTS.h4,
                    fontSize: 18,
                }}>Rate</Text>
                <View style={{
                    flex: 1,
                    flexDirection:'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                }}>

                    {/* 5 star */}
                    <View>
                        <Text style={{
                            fontSize: 17,
                            marginRight: SIZES.padding,
                            color: COLORS.light,
                            ...FONTS.body1
                        }}>99+</Text>
                        <View style={{
                        }}>
                            <Image 
                                source={icons.star}
                                resizeMode='contain'
                                style={{
                                    tintColor: 'orange',
                                    height: 18,
                                    width: 18,
                                    marginBottom:4
                                }}
                            />
                            <Image 
                                source={icons.star}
                                resizeMode='contain'
                                style={{
                                    tintColor: 'orange',
                                    height: 18,
                                    width: 18,
                                    marginBottom:4
                                }}
                            />
                            <Image 
                                source={icons.star}
                                resizeMode='contain'
                                style={{
                                    tintColor: 'orange',
                                    height: 18,
                                    width: 18,
                                    marginBottom:4
                                }}
                            />
                            <Image 
                                source={icons.star}
                                resizeMode='contain'
                                style={{
                                    tintColor: 'orange',
                                    height: 18,
                                    width: 18,
                                    marginBottom:4
                                }}
                            />
                            <Image 
                                source={icons.star}
                                resizeMode='contain'
                                style={{
                                    tintColor: 'orange',
                                    height: 18,
                                    width: 18,
                                    marginBottom:4
                                }}
                            />
                            
                        </View>
                    </View>
                    {/* 4 star */}
                    <View>
                        <Text style={{
                            fontSize: 17,
                            marginRight: SIZES.padding,
                            color: COLORS.light,
                            ...FONTS.body1
                        }}>56</Text>
                        <View style={{
                        }}>
                            <Image 
                                source={icons.star}
                                resizeMode='contain'
                                style={{
                                    tintColor: 'whitesmoke',
                                    height: 18,
                                    width: 18,
                                    marginBottom:4
                                }}
                            />
                            <Image 
                                source={icons.star}
                                resizeMode='contain'
                                style={{
                                    tintColor: 'orange',
                                    height: 18,
                                    width: 18,
                                    marginBottom:4
                                }}
                            />
                            <Image 
                                source={icons.star}
                                resizeMode='contain'
                                style={{
                                    tintColor: 'orange',
                                    height: 18,
                                    width: 18,
                                    marginBottom:4
                                }}
                            />
                            <Image 
                                source={icons.star}
                                resizeMode='contain'
                                style={{
                                    tintColor: 'orange',
                                    height: 18,
                                    width: 18,
                                    marginBottom:4
                                }}
                            />
                            <Image 
                                source={icons.star}
                                resizeMode='contain'
                                style={{
                                    tintColor: 'orange',
                                    height: 18,
                                    width: 18,
                                    marginBottom:4
                                }}
                            />
                            
                        </View>
                    </View>
                    {/* 3 star */}
                    <View>
                        <Text style={{
                            fontSize: 17,
                            marginRight: SIZES.padding,
                            color: COLORS.light,
                            ...FONTS.body1
                        }}>45</Text>
                        <View style={{
                        }}>
                            <Image 
                                source={icons.star}
                                resizeMode='contain'
                                style={{
                                    tintColor: 'whitesmoke',
                                    height: 18,
                                    width: 18,
                                    marginBottom:4
                                }}
                            />
                            <Image 
                                source={icons.star}
                                resizeMode='contain'
                                style={{
                                    tintColor: 'whitesmoke',
                                    height: 18,
                                    width: 18,
                                    marginBottom:4
                                }}
                            />
                            <Image 
                                source={icons.star}
                                resizeMode='contain'
                                style={{
                                    tintColor: 'orange',
                                    height: 18,
                                    width: 18,
                                    marginBottom:4
                                }}
                            />
                            <Image 
                                source={icons.star}
                                resizeMode='contain'
                                style={{
                                    tintColor: 'orange',
                                    height: 18,
                                    width: 18,
                                    marginBottom:4
                                }}
                            />
                            <Image 
                                source={icons.star}
                                resizeMode='contain'
                                style={{
                                    tintColor: 'orange',
                                    height: 18,
                                    width: 18,
                                    marginBottom:4
                                }}
                            />
                            
                        </View>
                    </View>
                    {/* 2 star */}
                    <View>
                        <Text style={{
                            fontSize: 17,
                            marginRight: SIZES.padding,
                            color: COLORS.light,
                            ...FONTS.body1
                        }}>12</Text>
                        <View style={{
                        }}>
                            <Image 
                                source={icons.star}
                                resizeMode='contain'
                                style={{
                                    tintColor: 'whitesmoke',
                                    height: 18,
                                    width: 18,
                                    marginBottom:4
                                }}
                            />
                            <Image 
                                source={icons.star}
                                resizeMode='contain'
                                style={{
                                    tintColor: 'whitesmoke',
                                    height: 18,
                                    width: 18,
                                    marginBottom:4
                                }}
                            />
                            <Image 
                                source={icons.star}
                                resizeMode='contain'
                                style={{
                                    tintColor: 'whitesmoke',
                                    height: 18,
                                    width: 18,
                                    marginBottom:4
                                }}
                            />
                            <Image 
                                source={icons.star}
                                resizeMode='contain'
                                style={{
                                    tintColor: 'orange',
                                    height: 18,
                                    width: 18,
                                    marginBottom:4
                                }}
                            />
                            <Image 
                                source={icons.star}
                                resizeMode='contain'
                                style={{
                                    tintColor: 'orange',
                                    height: 18,
                                    width: 18,
                                    marginBottom:4
                                }}
                            />
                            
                        </View>
                    </View>
                    {/* 1 star */}
                    <View>
                        <Text style={{
                            fontSize: 17,
                            marginRight: SIZES.padding,
                            color: COLORS.light,
                            ...FONTS.body1
                        }}>5</Text>
                        <View style={{
                        }}>
                            <Image 
                                source={icons.star}
                                resizeMode='contain'
                                style={{
                                    tintColor: 'whitesmoke',
                                    height: 18,
                                    width: 18,
                                    marginBottom:4
                                }}
                            />
                            <Image 
                                source={icons.star}
                                resizeMode='contain'
                                style={{
                                    tintColor: 'whitesmoke',
                                    height: 18,
                                    width: 18,
                                    marginBottom:4
                                }}
                            />
                            <Image 
                                source={icons.star}
                                resizeMode='contain'
                                style={{
                                    tintColor: 'whitesmoke',
                                    height: 18,
                                    width: 18,
                                    marginBottom:4
                                }}
                            />
                            <Image 
                                source={icons.star}
                                resizeMode='contain'
                                style={{
                                    tintColor: 'whitesmoke',
                                    height: 18,
                                    width: 18,
                                    marginBottom:4
                                }}
                            />
                            <Image 
                                source={icons.star}
                                resizeMode='contain'
                                style={{
                                    tintColor: 'orange',
                                    height: 18,
                                    width: 18,
                                    marginBottom:4
                                }}
                            />
                            
                        </View>
                    </View>

                </View>
            </View>
            <Divider />
            <Comment data={item}/>
        </View>
        }
    />:
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
                height: SIZES.height
            }}>
            <Text style={{
                fontSize: 18,
                ...FONTS.body1
            }}>This product has no reviews yet</Text>
            </View>}
    </>
  )
}

export default Review