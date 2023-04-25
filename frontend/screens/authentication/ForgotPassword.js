import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTS, SIZES, icons } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import { IconButton, InputField, TextButton } from "../../components";

const ForgotPassword = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

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
          Forgot Password
        </Text>

        <Text style={{
            ...FONTS.body4,
            color: COLORS.lightGray
        }}>Please enter your Email so we can help you recover your password.</Text>
      </View>

      <View>
      <InputField placeholder="Email" keyboardType="email-address" />
      <TextButton
        label="Next"
        onPress={() => {
          navigation.replace("ResetPassword");
        }}
        textStyle={{
          backgroundColor: COLORS.primary,
          fontSize: 17,
          paddingVertical: SIZES.padding2 * 1.5,
          marginBottom: SIZES.padding2,
          paddingHorizontal: SIZES.radius * 1.5,
          borderRadius: SIZES.padding,
          marginTop: SIZES.padding
        }}
      />
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;
