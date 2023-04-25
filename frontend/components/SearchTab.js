import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import {IconButton, TextButton} from './'
import { COLORS, FONTS, SIZES, icons } from '../constants'

const SearchTab = ({
    textOnPress,
    placeholder,
    inputDisable,
    searchPress,
    isIcon,
    isText,
    filterPress
}) => {
  return (
        <View style={{
            flexDirection:'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%'
        }}>
            <View style={{
                flexDirection:'row',
                marginVertical:SIZES.padding,
                padding:SIZES.padding,
                borderRadius: SIZES.padding * 0.6,
                backgroundColor: COLORS.white,
                alignItems: 'center',
                flex: 1
                
            }}>
                <IconButton 
                    onPress={searchPress}
                    icon={icons.search}
                    iconStyle={{
                        height: 18,
                        width: 18,
                        tintColor:COLORS.black,
                        marginRight: SIZES.padding
                    }}
                    disable={false}
                />
                    {!inputDisable ? <TextInput 
                        placeholder={placeholder}
                        cursorColor={COLORS.black}
                        placeholderTextColor={COLORS.lightGray}
                        style={{
                            width: '100%'
                        }}
                    />: <Text
                        style={{
                            color: COLORS.lightGray,
                            ...FONTS.body1
                        }}
                    >Searching...</Text>}
            </View>
            <View style={{
                marginLeft: SIZES.padding,
            }}> 

            {isIcon && <IconButton 
                    onPress={filterPress}
                    icon={icons.filter}
                    
                    iconStyle={{
                        height: 18,
                        width: 18,
                        tintColor:COLORS.white,
                        marginRight: SIZES.padding
                    }}
                />}
            {isText && <TextButton 
                label='Exit'
                onPress={textOnPress}
            />}
            </View>
        </View>
  )
}

export default SearchTab