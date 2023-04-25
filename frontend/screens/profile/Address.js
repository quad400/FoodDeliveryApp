import { View, Text, FlatList } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { IconButton, TextButton } from "../../components";
import { COLORS, FONTS, SIZES, dummyData, icons } from "../../constants";
import AddressCard from "../../components/AddressCard";

const Address = () => {
  const navigation = useNavigation();

  const [address, setAddress] = useState(dummyData.profile.address)
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    // <View
    //   style={{
    //     flex: 1,
    //     flexDirection: "column",
    //   }}
    // >
    <>
      <View
        style={{
          paddingTop: 50,
          paddingHorizontal: SIZES.padding,
        //   height: '100%'
        }}
      >
        <IconButton
          icon={icons.backArrow}
          iconStyle={{
            tintColor: COLORS.black,
          }}
          onPress={()=> navigation.goBack()}
        />

        <View style={{
            marginVertical: SIZES.padding
        }}><Text
          style={{
            fontSize: 25,
            lineHeight: 50,
            fontWeight: 600,
            ...FONTS.h5,
          }}
        >
          Address
        </Text></View>
      </View>
        <View style={{
        marginHorizontal: SIZES.padding,
        height: SIZES.height
        }}>
            <FlatList 
                data={address}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={ <TextButton 
                                label="Add new Address"
                                textStyle={{
                                    color: COLORS.lightGray,
                                    backgroundColor: 'gainsboro',
                                    paddingVertical: SIZES.padding2,
                                    borderStyle: 'dashed',
                                    borderWidth: 2,
                                    borderColor: COLORS.light,
                                    borderRadius: SIZES.padding,
                                    marginHorizontal: SIZES.padding
                                }}
                            />}
                keyExtractor={(item)=> {item.id}}
                renderItem={({item, index})=>{
                    return (
                            <AddressCard 
                                key={index}
                                content={item}
                            />
                    )
                }}
            />
        </View>
    </>
    // </View>
  );
};

export default Address;
