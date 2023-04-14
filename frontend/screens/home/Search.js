import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Divider, Features, Header, IconButton, SearchTab } from '../../components';
import { COLORS, FONTS, SIZES, dummyData, icons } from '../../constants';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";

const Search = () => {

    const navigation = useNavigation()
    
    React.useLayoutEffect(()=> {
        navigation.setOptions({
            headerShown: false,
        })
    },[]);

    // render

    function renderHistory(){
        return (
            <View>
                <View
                    style={{
                        flexDirection:'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}
                >
                    <Text
                        style={{
                            fontSize: 17,
                            ...FONTS.h3
                        }}
                    >History</Text>
                    <Text style={{
                        color:COLORS.lightGray,
                        ...FONTS.body1
                    }}>Clear All</Text>
                </View>
                
                {renderItems({})}
            </View>
        )
    }

    function renderItems({}){
        return (
            <View>
                <View style={{
                    flexDirection:'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingVertical: SIZES.padding
                }}>
                    <Text style={{
                        color:COLORS.lightGray
                    }}>Milk Tea</Text>
                    <IconButton 
                        icon={icons.minus}
                        iconStyle={{
                            tintColor: COLORS.lightGray
                        }}
                        onPress={()=>console.log("remove")}
                    />
                </View>
                <Divider />

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: SIZES.padding * 1.5
                }}>
                    <Text
                        style={{
                            fontSize: 15,
                            color: COLORS.primary,
                            fontWeight: 400,
                            ...FONTS.h4
                        }}
                    >View more</Text>
                    <IconButton 
                        icon={icons.chevronDown}
                        iconStyle={{
                            width: 14,
                            height: 14,
                            tintColor: COLORS.primary
                        }}
                    />
                </View>
            </View>
        )
    }

    function renderSuggestions(){
        return (
            <Features
                label="Suggestions"
            >
            <View style={{
                flexDirection:'row',
                flexWrap: 'wrap'
            }}>
                {dummyData.categoryItem.map((item)=> {
                    return (
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            width: SIZES.width * 0.45,
                        }}>
                            <Image 
                                source={item.icon}
                                resizeMode='cover'
                                style={{
                                    height: 80,
                                    width:80,
                                    marginHorizontal: SIZES.padding,
                                    marginBottom: SIZES.padding * 2,
                                    borderRadius: SIZES.padding
                                }}
                            />
                            <Text   
                                numberOfLines={2}
                                style={{
                                    width: 70,
                                    fontSize: 16,
                                    ...FONTS.h4
                                }}
                            >{item.label}</Text>
                        </View>
                    )
                })}
                </View>
            </Features>
        )
    }


  return (
    <View>

        {/* Header */}
        <Header>
            <SearchTab
                searchPress={()=> navigation.navigate('SearchResult')} 
                placeholder="Searching..."
                isIcon={false}
                isText={true}
                inputDisable={false}
                textOnPress={()=>navigation.goBack()}
            />
        </Header>

        {/* Content */}
        <ScrollView 
        contentContainerStyle={{
            paddingTop:SIZES.padding,
            paddingHorizontal: SIZES.padding
        }}
        showsVerticalScrollIndicator={false}
        >

            {/* History */}
            {renderHistory()}

            {/* Suggestions */}

            {renderSuggestions()}
        </ScrollView>

    </View>
  )
}

export default Search