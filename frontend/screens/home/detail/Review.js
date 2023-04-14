import { View, Text, FlatList, Image, ScrollView } from 'react-native'
import React from 'react'
import { Divider, Features } from '../../../components'
import { COLORS, FONTS, SIZES, dummyData, icons } from '../../../constants'


const Comment=({data}) => {

    // render
    function renderRate({value}) {
        return (
            
            // value 5
            value==5 ?
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
             : value==4 ?
            <View>
            <Image 
                source={icons.star}
                resizeMode='contain'
                style={{
                    tintColor: 'orange',
                    height: 14,
                    width: 14,
                    marginRight:4
                }}
            />
        </View>
             : value==3 ?
            <View>
            <Image 
                source={icons.star}
                resizeMode='contain'
                style={{
                    tintColor: 'orange',
                    height: 14,
                    width: 14,
                    marginRight:4
                }}
            />
        </View>
            : value==2 ?
            <View>
            <Image 
                source={icons.star}
                resizeMode='contain'
                style={{
                    tintColor: 'orange',
                    height: 14,
                    width: 14,
                    marginRight:4
                }}
            />
        </View>
    :   <View>
            <Image 
                source={icons.star}
                resizeMode='contain'
                style={{
                    tintColor: 'orange',
                    height: 14,
                    width: 14,
                    marginRight:4
                }}
            />
        </View>

        )
    }


    return (
        // <FlatList
        //     data={data.rate}
        //     renderItem={({item, index})=>{
        //         return (

            
        //     <View style={{
        //         padding: SIZES.padding
        //     }}>
        //         <Image 
        //             source={item.image}
        //             resizeMode='contain'
        //             style={{
        //                 height: 50,
        //                 width: 50,
        //                 borderRadius: SIZES.padding * 0.5
        //             }}
        //         />

        //         <Text>{item.name}</Text>
        //         <View>
        //             {/* rate */}
        //             {/* {renderRate(data.rate_value)} */}
                    
        //             <Text>{item.date} {item.time}</Text>
        //         </View>
        //     </View>
        //  )
        // }}
        // />
        <Text>{data.title}</Text>
    )
}

const Review = ({item}) => {
  return (
    <FlatList
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
                    data={item}
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

            {/* <Comment data={item}/> */}

            <Text>{item.title}</Text>
        </View>
        }
    />
  )
}

export default Review