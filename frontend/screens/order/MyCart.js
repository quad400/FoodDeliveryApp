import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES, dummyData, icons } from "../../constants";
import { IconButton, TextButton } from "../../components";

const MyCart = ({navigation}) => {
  return (
    <>
      <FlatList
        data={dummyData?.order_history}
        keyExtractor={(item) => {
          item.id;
        }}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                marginHorizontal: SIZES.padding,
                marginTop: index == 0 ? SIZES.padding : null,
                marginBottom:
                  index == dummyData.nearBy.length - 1
                    ? SIZES.padding * 2
                    : SIZES.padding,
                elevation: 2,
                borderRadius: SIZES.padding * 0.5,
                backgroundColor: COLORS.white,
                flexDirection: "row",
                flex: 1,
              }}
            >
              <Image
                source={item.resturant_image}
                resizeMode="cover"
                borderBottomLeftRadius={SIZES.padding * 0.5}
                borderTopLeftRadius={SIZES.padding * 0.5}
                style={{
                  height: 100,
                  width: 100,
                }}
              />
              <View
                style={{
                  flex: 1,
                  marginLeft: SIZES.padding,
                  paddingRight: SIZES.padding,
                  paddingTop: SIZES.padding,
                }}
              >
                <Text
                  style={{
                    fontSize: 17,
                    ...FONTS.h4,
                  }}
                >
                  {item.resturant_name}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    flex: 1,
                  }}
                >
                  <IconButton
                    icon={icons.location}
                    disable={true}
                    iconStyle={{
                      tintColor: COLORS.light,
                      height: 13,
                      width: 13,
                    }}
                    containerStyle={{
                      height: 13,
                      width: 13,
                    }}
                  />
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={{
                      width: 200,
                      color: COLORS.light,
                      ...FONTS.body3,
                    }}
                  >
                    76A Eight Avenue,New York,US
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: COLORS.light,
                      ...FONTS.body3,
                    }}
                  >
                    {item.item_count}
                  </Text>
                  <Text
                    style={{
                      marginLeft: 3,
                      color: COLORS.light,
                      ...FONTS.body3,
                    }}
                  >
                    {item.item_count == 1 ? "item" : "items"}
                  </Text>
                </View>
              </View>
            </View>
          );
        }}
      />

        <View style={{
            position: 'absolute',
            bottom: 0,
            left:0,
            right: 0
        }}>
            <TextButton 
                label="Order Items"
                onPress={()=> navigation.navigate('ConfirmOrder')}
                textStyle={{
                    backgroundColor: COLORS.primary,
                    paddingVertical: SIZES.padding2 * 1.5,
                    marginHorizontal: SIZES.radius,
                    marginBottom: SIZES.padding2,
                    paddingHorizontal: SIZES.radius,
                    borderRadius: SIZES.padding
                }}
            />
      </View>
    </>
  );
};

export default MyCart;
