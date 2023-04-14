import { View, Text, SafeAreaView, Image, TouchableOpacity, TextInput, ScrollView, FlatList, TouchableWithoutFeedback } from 'react-native'
import {useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import { COLORS, FONTS, SIZES, dummyData, icons } from "../../constants";
import { Card, Card2, Features, Features2, Header, IconButton,SearchTab } from '../../components';
import { useRef } from 'react';

const Home = () => {

    const navigation = useNavigation()

    const contentRef = useRef(0)

  useLayoutEffect(()=> {
    navigation.setOptions({
        headerShown: false,
    })
},[]);

    //render
    function renderHeader(){
        return (
        <Header>
            <View>
                <Text className='text-gray-500' style={{
                    ...FONTS.h4
                }}>DELIVERING TO</Text>
                <View style={{
                    flexDirection:'row',
                    alignItems:'center'
                }}>
                    <IconButton 
                        icon={icons.location}
                        iconStyle={{
                            height:18,
                            width:18
                        }}
                        disable={true}
                    />
                    <Text style={{
                        color:COLORS.white,
                        ...FONTS.body1
                    }}>76A Eight Avenue,New York,US.</Text>
                    <IconButton 
                        icon={icons.chevronDown}
                        iconStyle={{
                            height:18,
                            width:18
                        }}
                        containerStyle={{
                            marginLeft:5
                        }}
                    />
                </View>
                
                {/* Search */}
                    <TouchableOpacity onPress={()=> navigation.navigate("Search")}>
                        <SearchTab 
                            placeholder="Searching..."
                            isIcon={true}
                            isText={false}
                            inputDisable={true}
                            // filterPress={}
                        />
                    </TouchableOpacity>
                </View>
        </Header>
        )
    }

    function renderContent(){
        return (
            <FlatList
                ListHeaderComponent={
                <View>
                <Features label="Categories">
                
                    <FlatList 
                            data={dummyData.categoryItem}
                            horizontal
                            bounces={true}
                            contentContainerStyle={{
                                paddingBottom: SIZES.padding
                            }}
                            
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item)=>{`category__${item.id}`}}
                            renderItem={({item, index})=> {
                            return (
                                <TouchableOpacity>
                                    <View style={{
                                        paddingHorizontal: SIZES.padding,
                                        paddingVertical: SIZES.padding * 0.5,
                                        elevation: 2,
                                        backgroundColor: COLORS.white,
                                        borderRadius: SIZES.padding * 0.5,
                                        marginLeft: index==0 ? SIZES.padding : 0,
                                        marginRight: index == dummyData.categoryItem.length -1? 0 : SIZES.padding
                                    }}>
                                        <Image 
                                            source={item.icon}
                                            resizeMode='contain'
                                            style={{
                                                height: 35,
                                                width: 35
                                            }}
                                        />
                                    </View>
                                    <Text
                                        style={{
                                            textAlign: 'center',
                                            ...FONTS.h4
                                        }}
                                    >{item.label}</Text>
                                </TouchableOpacity>
                                )
                            }}
                        />
                </Features>

                <Features
                    label="Hot Sales"
                >
                    <FlatList 
                        data={dummyData.itemContent}
                        horizontal
                        bounces={true}
                        contentContainerStyle={{
                            paddingBottom: SIZES.padding
                        }}
                        
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item)=>{`Food__${item.id}`}}
                        renderItem={({item, index})=> {
                        return (

                            <TouchableOpacity onPress={()=>navigation.navigate("FoodDetail",{
                                item
                            })}>
                                <Card
                                    key={index}
                                    data={item}
                                />
                            </TouchableOpacity>
                            )
                        }}
                    />
                </Features>

                {/* Feature 2 */}
                <TouchableOpacity>
                    <View 
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginTop:SIZES.padding * 2,
                            marginBottom:SIZES.padding * 1.2,
                            paddingHorizontal: SIZES.padding
                        }}
                    >
                        <Text style={{
                            fontSize: 18,
                            fontWeight: '400',
                            ...FONTS.h4
                        }}>Nearby</Text>

                        <View style={{
                            flexDirection:'row',
                        }}>
                            <Text 
                                style={{
                                    color: COLORS.primary,
                                    ...FONTS.body2
                                }}
                            >View all</Text>
                            <IconButton 
                                // onPress={onPress}
                                disable={true}
                                icon={icons.chevronRight}
                                iconStyle={{
                                    height: 14,
                                    width: 14,
                                    tintColor: COLORS.primary
                                }}
                            />
                        </View>

                    </View>
                    <FlatList 
                        data={dummyData.nearBy}
                        showsVerticalScrollIndicator={false}
                        bounces={true}
                        style={{
                            marginHorizontal: SIZES.padding
                        }}
                        contentContainerStyle={{
                            marginBottom: SIZES.padding,
                        }}
                        
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item)=>{`Food__${item.id}`}}
                        renderItem={({item, index})=> {
                            return (
                                <Card2
                                    key={index}
                                    data={item}
                                />
                            )
                        }}
                    />
                </TouchableOpacity>
            </View>
                }
            />
        )
    }

    return (
        <View 
            style={{
                height: '100%',
                width: '100%',
            }}
        >

            {/* Header */}

            {renderHeader()}

            {/* Content */}
           
            {renderContent()}

        </View>
  )
}

export default Home;