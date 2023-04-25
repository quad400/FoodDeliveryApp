import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import IconButton from "./IconButton";
import { COLORS, SIZES, icons } from "../constants";

const InputField = ({ 
    placeholder, 
    isPostIcon, 
    secureTextEntry,
    isOpen=false,
    keyboardType="default", 
    autoComplete="off",
    autoCapitalize="none",
}) => {

    const [open, setOpen] = useState(isOpen)

  return (
    <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
        elevation:1,
        paddingHorizontal: SIZES.padding,
        borderRadius: SIZES.padding * 0.5,
        backgroundColor: COLORS.white,
        marginBottom: SIZES.padding * 2
    }}>
      <TextInput
        style={{
            width: '90%'
        }}
        placeholder={placeholder}
        keyboardAppearance="default"
        keyboardType={keyboardType}
        secureTextEntry={open ? true : false}
        autoCapitalize={autoCapitalize}
        autoComplete={autoComplete}
        cursorColor={COLORS.black}
      />
      {isPostIcon &&
        (!open ? (
          <IconButton
          onPress={()=> setOpen(!open)}
            icon={icons.eyeOpen}
            iconStyle={{
              height: 20,
              width: 20,
              tintColor: COLORS.light,
            }}
          />
        ) : (
          <IconButton
            onPress={()=> setOpen(!open)}
            icon={icons.eyeClose}
            iconStyle={{
              height: 20,
              width: 20,
              tintColor: COLORS.light,
            }}
          />
        ))
        }

    </View>
  );
};

export default InputField;
