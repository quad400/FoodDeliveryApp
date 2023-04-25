import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, dummyData } from '../../constants'
import { TextButton } from '../../components'

const History = () => {
  return (
    <View>
        <View style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            paddingHorizontal: SIZES.padding
        }}>

        <TextButton 
                    label='Clear History'
                    textStyle={{
                        marginTop: 10,
                        fontSize: 15,
                        color: COLORS.lightGray
                    }}
                />
        </View>  

    
            <FlatList
                data={dummyData?.order_history}
                keyExtractor={(item)=> {item.id}}
                renderItem={({item,index})=> {
                    return(
                <View style={{
                    marginHorizontal: SIZES.padding,
                    marginTop: index==0 ? SIZES.padding: null,
                    marginBottom: index==dummyData.nearBy.length -1 ? SIZES.padding * 2 : SIZES.padding,
                    elevation:2,
                    borderRadius: SIZES.padding * 0.5,
                    backgroundColor: COLORS.white,
                    flexDirection: 'row',
                    flex: 1
                }}>
                    <Image 
                        source={item.resturant_image}
                        resizeMode='cover'
                        borderBottomLeftRadius={SIZES.padding * 0.5}
                        borderTopLeftRadius={SIZES.padding * 0.5}
                        style={{
                            height: 100,
                            width: 100,
                        }}/>
                    <View style={{
                        flex:1,
                        marginLeft: SIZES.padding,
                        paddingRight: SIZES.padding,
                        paddingTop: SIZES.padding
                    }}>
                        <Text style={{
                            fontSize: 17,
                            ...FONTS.h4
                        }}>{item.resturant_name}</Text>
                        <View style={{
                            flexDirection:'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flex:1
                
                        }}>
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
                                    color: COLORS.light,
                                    ...FONTS.body3
                            }}>{item.date}</Text>
                        </View>
                    </View>
            </View>
            )
        }} 
    />
    </View>
  )
}

export default History