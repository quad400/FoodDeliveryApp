import { View, Text, Platform, ScrollView } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTS, SIZES, icons } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import { IconButton, InputField, TextButton } from "../../components";
import DateTimePicker from "@react-native-community/datetimepicker";

const CreateNewAccount = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const [isShowDate, setIsShowDate] = useState(false);
  const [date, setDate] = useState(new Date());

  return (
    <SafeAreaView
      style={{
        height: "100%",
        width: "100%",
        paddingHorizontal: SIZES.padding,
      }}
    >
      <IconButton
        icon={icons.backArrow}
        iconStyle={{
          tintColor: COLORS.black,
        }}
        onPress={() => navigation.goBack()}
      />

      <View
        style={{
          marginVertical: SIZES.radius,
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
          Create New Account
        </Text>
      </View>

      <ScrollView 
        showsVerticalScrollIndicator={false}
      >
        <View>
          {/* fullname */}
          <InputField placeholder="Full name" keyboardType="default" />
          {/* fullname */}
          <InputField placeholder="Email" keyboardType="email-address" />

          {/* password */}
          <InputField
            placeholder="Password"
            keyboardType="default"
            secureTextEntry={true}
            isPostIcon={true}
            isOpen={true}
          />

          <InputField placeholder="Phone number" keyboardType="phone-pad" />
          <InputField placeholder="Your location" keyboardType="default" />
          <InputField placeholder="Date of Birth" keyboardType="default" />

          <TextButton
            label="Continue"
            onPress={() => {
              navigation.navigate("OTP");
            }}
            textStyle={{
              backgroundColor: COLORS.primary,
              paddingVertical: SIZES.padding2 * 1.5,
              marginBottom: SIZES.padding2,
              paddingHorizontal: SIZES.radius * 1.5,
              borderRadius: SIZES.padding,
              marginTop: SIZES.padding,
            }}
            
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateNewAccount;
