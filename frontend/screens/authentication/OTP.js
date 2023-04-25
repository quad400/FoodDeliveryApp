import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { SafeAreaView } from "react-native-safe-area-context";
import { IconButton, TextButton } from "../../components";
import { COLORS, FONTS, SIZES, icons } from "../../constants";
import { useNavigation } from "@react-navigation/native";

const OTP = () => {
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
          Verification
        </Text>
        <Text
          style={{
            ...FONTS.body3,
            color: COLORS.lightGray,
          }}
        >
          Please enter your Email so we can help you recover your password.
        </Text>
      </View>

      <View>
        <OTPInputView
          pinCount={4}
          style={{
            width: "100%",
            height: 60,
          }}
          placeholderCharacter="*"
          autoFocusOnLoad
          placeholderTextColor={COLORS.light}
          codeInputFieldStyle={{
            paddingTop: 20,
            width: 60,
            height: 60,
            justifyContent: "center",
            alignItems: "center",
            fontSize: 30,
            flexDirection: "row",
            textAlign: "center",
            alignContent: "center",
            borderRadius: SIZES.padding * 0.6,
            backgroundColor: COLORS.white,
            elevation: 1,
            ...FONTS.h4,
            color: COLORS.black,
          }}
          onCodeFilled={(code) => {
            console.log(code);
          }}
          keyboardType="number-pad"
        />

        <Text
          style={{
            color: COLORS.primary,
            ...FONTS.h4,
            marginTop: SIZES.padding * 2,
          }}
        >
          Oh no! You entered wrong OTP code, please check it again.
        </Text>

        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.padding * 2,
          }}
        >
          <Text
            style={{
              color: COLORS.light,
              ...FONTS.body3,
            }}
          >
            Didn't receive OTP code! 
          </Text>

          <TextButton
            label="Resend"
            textStyle={{
                marginLeft: 10,
              color: COLORS.black,
              ...FONTS.body3,
              fontSize: 17,
            }}
          />
        </View>
      </View>
      
      <TextButton
            label="Submit"
            onPress={() => {
              navigation.navigate("MainLayout");
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
    </SafeAreaView>
  );
};

export default OTP;
