import { View, Text, Image, FlatList } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import {
  COLORS,
  FONTS,
  SIZES,
  dummyData,
  icons,
  images,
} from "../../constants";
import { IconButton, ProfileCard } from "../../components";
import { TouchableOpacity } from "react-native-gesture-handler";

const Profile = () => {
  const navigation = useNavigation();
  const [profile, setProfile] = React.useState(dummyData.profile);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);


    function renderCard1(){
        return (
            <View style={{
              backgroundColor: COLORS.white,
              elevation: 1,
              marginHorizontal: SIZES.padding,
              marginTop: SIZES.radius,
              padding: SIZES.padding,
              borderRadius: SIZES.padding
            }}>
                <ProfileCard 
                    icon={icons.payment}
                    label='Payment Methods'
                    onPress={()=> navigation.navigate('Payment', {payment: profile.payment_type})}
                />
                <ProfileCard 
                    icon={icons.location}
                    label='Address'
                    onPress={()=> navigation.navigate('Address')}
                />
            </View>
        )
    }

    function renderCard2(){
        return (
            <View style={{
              backgroundColor: COLORS.white,
              elevation: 1,
              marginHorizontal: SIZES.padding,
              marginTop: SIZES.padding * 1.5,
              padding: SIZES.padding,
              borderRadius: SIZES.padding
            }}>
                <ProfileCard 
                    icon={icons.notification}
                    label='Notification'
                />
                <ProfileCard 
                    icon={icons.language}
                    label='Language'
                />
                <ProfileCard 
                    icon={icons.setting}
                    label='Settings'
                />
                <ProfileCard 
                    icon={icons.inviteFriend}
                    label='Invite Friends'
                />
                <ProfileCard 
                    icon={icons.support}
                    label='Support'
                />
            </View>
        )
    }

    function renderCard3(){
      return (
        <View style={{
          backgroundColor: COLORS.white,
          elevation: 1,
          marginHorizontal: SIZES.padding,
              marginVertical: SIZES.padding * 1.5,
          padding: SIZES.padding,
          borderRadius: SIZES.padding
        }}>
            <ProfileCard 
                icon={icons.logout}
                label='Log Out'
            />
        </View>
      )
    }


  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
      }}
    >
      <View
        style={{
          paddingTop: 50,
          paddingHorizontal: SIZES.padding,
          backgroundColor: COLORS.white,
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
          Profile
        </Text>

        <TouchableOpacity onPress={()=>navigation.navigate('ProfileDetail', {profile: profile})}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingVertical: SIZES.padding2,
            }}
          >
            <Image
              source={profile.picture}
              resizeMode="contain"
              style={{
                height: 90,
                width: 80,
                borderRadius: SIZES.padding,
              }}
            />
            <View
              style={{
                flex: 1,
                marginLeft: SIZES.padding,
              }}
            >
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={{
                  width: 200,
                  fontSize: 18,

                  ...FONTS.h3,
                }}
              >
                {profile.name}
              </Text>
              <Text
                style={{
                  color: COLORS.lightGray,
                  fontSize: 16,
                  ...FONTS.body1,
                }}
              >
                {profile.phone}
              </Text>
            </View>

            <IconButton
              icon={icons.chevronR}
              iconStyle={{
                height: 20,
                width: 20,
                tintColor: COLORS.light,
              }}
            />
          </View>
        </TouchableOpacity>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            {/* Card 1 */}
            {renderCard1()}
            {/* Card 2 */}
            {renderCard2()}
            {/* Card 3 */}
            {renderCard3()}
          </>
        }
      />
    </View>
  );
};

export default Profile;
