import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { COLORS, FONTS, SIZES, icons } from "../../constants";
import { IconButton, TextButton } from "../../components";

const Payment = ({ route }) => {
  const navigation = useNavigation();
  const { payment } = route.params;
  const [isSelected, setIsSelected] = useState(payment[0].payment_type)
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View
      style={{
        paddingTop: 50,
        paddingHorizontal: SIZES.padding,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <IconButton
          icon={icons.backArrow}
          iconStyle={{
            tintColor: COLORS.black,
          }}
          onPress={() => navigation.goBack()}
        />

        <TextButton
          label="Edit"
          textStyle={{
            color: COLORS.primary,
          }}
        />
      </View>
      <View
        style={{
          marginVertical: SIZES.padding,
        }}
      >
        <Text
          style={{
            fontSize: 25,
            lineHeight: 50,
            fontWeight: 600,
            ...FONTS.h5,
          }}
        >
          Payment Methods
        </Text>
      </View>

      <FlatList
        data={payment}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => {
          item;
        }}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => setIsSelected(item.payment_type)}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: COLORS.white,
                  elevation: 1,
                  borderRadius: SIZES.padding * 0.5,
                  margin: SIZES.padding,
                  paddingHorizontal: SIZES.padding,
                  paddingVertical: SIZES.padding,
                }}
              >
                
                <View
                style={{
                  
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                >
                  <Image
                    source={item.icon}
                    resizeMode="contain"
                    style={{
                      height: item.payment_type == "paypal" ? 30 : 50,
                      width: 50,
                    }}
                  />
                  <View 
                style={{
                  marginLeft: SIZES.padding2,
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}>
                    <Text
                      style={{
                        ...FONTS.body3,
                      }}
                    >
                      {item.card_number
                        .replace(/\s/g, "")
                        .replace(/(\d{4})/g, "$1 ")
                        .trim()}
                    </Text>
                    <Text style={{
                      ...FONTS.h4,
                      fontSize: 11,
                      color: COLORS.light
                    }}>
                      {item.expiry_date}
                    </Text>
                  </View>
                  </View>
                  {isSelected == item.payment_type && (
                  
                    <IconButton 
            icon={icons.mark}
            iconStyle={{
                height: 11,
                width: 11,
                
            }}
            containerStyle={{
                height: 18,
                width: 18,
                borderRadius: 9,
                borderColor: COLORS.primary,
                backgroundColor: COLORS.primary
            }}
        />
              )}
                </View>

            </TouchableOpacity>
          );
        }}
      />
      <View
        style={{
          marginVertical: SIZES.padding,
        }}
      >
        <Text
          style={{
            fontSize: 25,
            lineHeight: 50,
            fontWeight: 600,
            ...FONTS.h5,
          }}
        >
          Add Payment Methods
        </Text>
      </View>

    </View>
  );
};

export default Payment;
