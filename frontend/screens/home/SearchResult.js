import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Header, SearchTab, SearchCard } from '../../components';
import { COLORS, FONTS, SIZES, dummyData } from '../../constants';

const SearchResult = () => {

    
    const navigation = useNavigation()
    
    React.useLayoutEffect(()=> {
        navigation.setOptions({
            headerShown: false,
        })
    },[]);

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


        <View style={{
            padding: SIZES.padding
        }}>            
            <View style={{
                flexDirection: 'row',
                marginBottom: SIZES.body4
            }}>
                <Text style={{
                    color: COLORS.lightGray,
                    ...FONTS.body3
                }}>Approximately</Text>
                <Text
                    style={{
                        color: COLORS.primary,
                        ...FONTS.h4,
                        marginHorizontal: 3
                    }}
                >200</Text>
                <Text style={{
                    color: COLORS.lightGray,
                    ...FONTS.body3
                }}>results.</Text>
            </View>

        <FlatList 
            data={dummyData.itemContent}
            keyExtractor={(item)=> item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index})=> {
                return (
                    <TouchableOpacity onPress={()=> navigation.navigate("FoodDetail")}>
                        <SearchCard 
                            item={item}
                        />
                    </TouchableOpacity>
                )
            }}
        />
        </View>
    </View>
  )
}

export default SearchResult