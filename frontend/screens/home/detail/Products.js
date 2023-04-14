import { View, Text, TouchableOpacity, FlatList, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Card2, Card3, Card4, Features, IconButton } from '../../../components';
import { COLORS, FONTS, SIZES, dummyData, icons } from '../../../constants';

const Products = (item) => {
    const navigation = useNavigation()

    React.useLayoutEffect(()=> {
      navigation.setOptions({
          headerShown: false,
      })
  },[]);

//   const {item} = route.params

  

  return (
    <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={

        //         <View>
        //         <Features
        //             label="Popular Items"
        //         >
        //             <FlatList
        //                 data={dummyData.itemContent}
        //                 horizontal
        //                 bounces={true}
        //                 contentContainerStyle={{
        //                     paddingBottom: SIZES.padding
        //                 }}
        //                 showsHorizontalScrollIndicator={false}
        //                 keyExtractor={(item)=>{`Food__${item.id}`}}
        //                 renderItem={({item, index})=> {
        //                 return (
        //                     <TouchableOpacity onPress={()=>navigation.navigate("FoodDetail")}>
        //                         <View 
        //                             style={{
        //                                 backgroundColor: COLORS.white,
        //                                 justifyContent: 'center',
        //                                 marginRight: item - 1 ? null : SIZES.padding,
        //                                 elevation: 2,
        //                                 borderRadius: SIZES.padding * 0.4
        //                             }}
        //                         >
        //                             <ImageBackground
        //                                 source={item.image}
        //                                 style={{
        //                                     height: 100,
        //                                     width: 100,
        //                                 }}
        //                                 resizeMode='cover'
        //                                 borderTopLeftRadius={SIZES.padding * 0.4}
        //                                 borderTopRightRadius={SIZES.padding * 0.4}
        //                             >
        //                             </ImageBackground>
        //                             <View
        //                                 style={{
        //                                     paddingVertical: SIZES.padding,
        //                                     paddingHorizontal: SIZES.padding,
        //                                     justifyContent: 'center',
        //                                 }}
        //                             >
        //                                 <View
        //                                     style={{
        //                                     // flex: 1,
        //                                 }}
        //                                 >
        //                                     <Text 
        //                                     numberOfLines={2}
        //                                     ellipsizeMode='tail'
        //                                     style={{
        //                                         fontSize: 13,
        //                                         width: 80,
        //                                         color: 'black',
        //                                         ...FONTS.h4
        //                                     }}>{item.title}</Text>
        //                                 </View>
        //                                 <View style={{
        //                                     justifyContent: 'space-between',
        //                                     flexDirection: 'row'
        //                                 }}>
        //                                     <Text 
        //                                     style={{
        //                                         color: COLORS.primary,
        //                                     ...FONTS.h3,
        //                                     }}
        //                                     >$
        //                                     {item.price}</Text>
        //                                     <IconButton 
        //                                         icon={icons.plus}
        //                                         iconStyle={{
        //                                             height: 12,
        //                                             width: 12
        //                                         }}
        //                                         containerStyle={{
        //                                             backgroundColor: COLORS.primary,
        //                                             borderRadius: 12,
        //                                             height: 20,
        //                                             width: 20,
        //                                             padding: 3
        //                                         }}
        //                                     />
        //                                 </View>
        //                             </View>
        //                             </View>
        //                     </TouchableOpacity>
        //                     )
        //                 }}
        //             />
        //         </Features>
                
                // <FlatList
                //     data={item}
                //     keyExtractor={(item)=> item.id}
                //     showsVerticalScrollIndicator={false}
                //     contentContainerStyle={{
                //         marginBottom: SIZES.padding
                //     }}
                //     renderItem={({item,index})=> {
                //         return (
                //             <View style={{
                //                 marginBottom: SIZES.padding * 1.5
                //             }}>
                //                 {/* <Card4 /> */}<Text>{item.title}</Text>
                //             </View>
                //         )
                //     }}

                // />
        //     </View>
        <Text>{item.title}</Text>
            }
        />
  )
}

export default Products