import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import IconButton from "./IconButton";
import { COLORS, FONTS, SIZES, icons } from "../constants";

const AddressCard = ({ content }) => {
  return (
    <TouchableOpacity onPress={()=>{}}>
      <View
        style={{
          backgroundColor: COLORS.white,
          elevation: 2,
          marginHorizontal: SIZES.padding,
          marginBottom: SIZES.padding,
          padding: SIZES.padding,
          borderRadius: SIZES.padding * 0.5,
        }}
      >
        <Text
          style={{
            ...FONTS.h2,
            fontSize: 17,
          }}
        >
          {content.place}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
              }}
            >
              <IconButton
                icon={icons.location}
                iconStyle={{
                  tintColor: COLORS.light,
                  height: 14,
                  width: 14,
                }}
              />
              <Text
                style={{
                  marginLeft: 10,
                  ...FONTS.h3,
                  fontSize: 15,
                  width: SIZES.width * 0.65,
                }}
              >
                {content.address}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <IconButton
                icon={icons.person}
                iconStyle={{
                  tintColor: COLORS.light,
                  height: 14,
                  width: 14,
                }}
              />
              <Text
                style={{
                  marginLeft: 10,
                  ...FONTS.body1,
                  fontSize: 15,
                  color: COLORS.lightGray,
                }}
              >
                {content.user_address_name}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <IconButton
                icon={icons.phone}
                iconStyle={{
                  tintColor: COLORS.light,
                  height: 14,
                  width: 14,
                }}
              />
              <Text
                style={{
                  marginLeft: 10,
                  ...FONTS.body1,
                  fontSize: 15,
                  color: COLORS.lightGray,
                }}
              >
                {content.phone}
              </Text>
            </View>
          </View>
          <IconButton
            icon={icons.chevronR}
            iconStyle={{
              tintColor: COLORS.lightGray,
              height: 16,
              width: 16,
            }}
            disable={true}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AddressCard;
