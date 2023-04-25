import { View, Text, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { COLORS, FONTS, SIZES, images } from "../../constants";
import { InputField, TextButton } from "../../components";

const SignIn = () => {
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
      <View>
        <View
          style={{
            marginTop: SIZES.radius,
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Image
            source={images.logo02}
            resizeMode="contain"
            style={{
              width: SIZES.width * 0.6,
              height: SIZES.width * 0.3,
            }}
          />
        </View>
        <Text
          style={{
            color: COLORS.primary,
            ...FONTS.h4,
            marginBottom: SIZES.padding,
          }}
        >
          Oh no! Your account or password is incorrect please check again.
        </Text>
        <InputField placeholder="Email" keyboardType="email-address" />
        <InputField
          placeholder="Password"
          keyboardType="default"
          secureTextEntry={true}
          isPostIcon={true}
          isOpen={true}
        />
      </View>

      <TextButton
        label="Forgot password!"
        textStyle={{
          color: COLORS.lightGray,
          textAlign: "right",
        }}
        onPress={() => navigation.navigate("ForgotPassword")}
      />

      <View
        style={{
          marginTop: SIZES.radius,
        }}
      >
        <TextButton
          label="Sign In"
          onPress={() => {
            navigation.replace("SignIn");
          }}
          textStyle={{
            backgroundColor: COLORS.primary,
            paddingVertical: SIZES.padding2 * 1.5,
            marginBottom: SIZES.padding2,
            paddingHorizontal: SIZES.radius * 1.5,
            borderRadius: SIZES.padding,
          }}
        />
        <TextButton
          label="Sign In with Facebook"
          onPress={() => {
            navigation.replace("SignIn");
          }}
          textStyle={{
            backgroundColor: "deepskyblue",
            paddingVertical: SIZES.padding2 * 1.5,
            marginBottom: SIZES.padding2,
            paddingHorizontal: SIZES.radius * 1.5,
            borderRadius: SIZES.padding,
          }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <Text
          style={{
            ...FONTS.h4,
          }}
        >
          You don't have an account?{" "}
        </Text>
        <TextButton 
            label="Sign up"
            onPress={()=>navigation.navigate("CreateNewAccount")}
            textStyle={{
                color: COLORS.primary
            }}
        />
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
