import { View, Text, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { IconButton, TextButton } from '../../components';
import { COLORS, SIZES, icons } from '../../constants';
import ProfileCard1 from '../../components/ProfileCard1';

const ProfileDetail = ({route}) => {

    const {profile} = route.params;    
    const navigation = useNavigation()

    useLayoutEffect(()=> {
        navigation.setOptions({
            headerShown: false,
        })
    },[]);
  return (
    <View style={{
        
        paddingTop: 50,
        paddingHorizontal: SIZES.padding,
    }}>
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>

        <IconButton 
            icon={icons.backArrow}
            iconStyle={{
                tintColor: COLORS.black
            }}
            onPress={()=> navigation.goBack()}
        />
        
        <TextButton 
            label="Save"
            textStyle={{
                color: COLORS.primary
            }}
        />
        </View>
        
        <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginVertical: SIZES.radius
        }}>
            <Image 
                source={profile.picture}
                resizeMode='center'
                style={{
                    height: 120,
                    width: 100,
                    borderRadius: SIZES.padding
                }}
            />
            <View>
                <IconButton 
                    icon={icons.picture}
                    iconStyle={{
                        tintColor: COLORS.white,
                        width: 13,
                        height: 13
                    }}
                    containerStyle={{
                        backgroundColor: 'green',
                        padding: 3,
                        borderRadius: 13,
                        borderColor: COLORS.white,
                        borderWidth: 2,
                        position: 'absolute',
                        bottom: -2,
                        right: -2
                    }}
                />
            </View>
        </View>

        <ProfileCard1 
            label="Full Name"
            profile={profile.name}
        />
        <ProfileCard1 
            label="Phone Number"
            profile={profile.phone}
        />
        <ProfileCard1 
            label="Email"
            profile={profile.email}
        />
        <ProfileCard1 
            label="Date of Birth"
            profile={profile.DOB}
        />
        
    </View>
  )
}

export default ProfileDetail