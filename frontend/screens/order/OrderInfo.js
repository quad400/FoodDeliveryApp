import { View, Text, TextInput, FlatList, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { COLORS, FONTS, SIZES, dummyData, icons } from '../../constants';
import { IconButton, TextButton } from '../../components';

const OrderInfo = ({route}) => {
    const navigation = useNavigation();

    const {items} = route.params

    const [profile, setProfile] = React.useState(dummyData?.profile)
  
    React.useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      });
    }, []);

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
      <IconButton
        icon={icons.backArrow}
        iconStyle={{
          height: 20,
          width: 20,
          tintColor: COLORS.black,
        }}
        containerStyle={{
          marginBottom: SIZES.padding,
        }}
        onPress={() => navigation.goBack()}
      />
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            ...FONTS.h5,
          }}
        >
            Order Information
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Text
            style={{
              color: COLORS.primary,
              ...FONTS.h4,
            }}
          >
            ID:
          </Text>
          <Text
            style={{
              ...FONTS.h4,
            }}
          >
            43e2116H
          </Text>
        </View>
      </View>
    </View>

    <FlatList
        ListHeaderComponent={
          <>
            <View
              style={{
                backgroundColor: COLORS.white,
              }}
            >
              <FlatList
                ListHeaderComponentStyle={{
                  backgroundColor: COLORS.light3,
                }}
                ListHeaderComponent={
                  <>
                    <View style={{
                        backgroundColor: COLORS.white,
                        paddingHorizontal: SIZES.padding
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingVertical: SIZES.padding
                        }}>
                            <Text style={{
                                ...FONTS.h4
                            }}>Delivery to</Text>
                            <TextButton 
                                label='Add new address'
                                textStyle={{
                                    ...FONTS.h4,
                                    color: COLORS.primary
                                }}
                            />
                        </View>
                        <View style={{
                            borderRadius: SIZES.padding * 0.5,
                            borderWidth: 1,
                            borderColor: COLORS.light
                        }}>
                            <View></View>
                            <View style={{
                                flex: 1
                            }}>
                                <View style={{
                                    flexDirection:'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start'
                                }}>
                                    <IconButton 
                                        icon={icons.location}
                                        iconStyle={{
                                            height: 11,
                                            width: 11,
                                            tintColor: COLORS.back
                                        }}
                                        disable={true}
                                    />
                                    <Text 
                                        numberOfLines={2}
                                        ellipsizeMode='tail'
                                        style={{
                                            width: 150,
                                            ...FONTS.h4,

                                        }}
                                    >{profile.location}</Text>
                                </View>
                                <View style={{
                                    flexDirection:'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start'
                                }}>
                                    <IconButton 
                                        icon={icons.location}
                                        iconStyle={{
                                            height: 11,
                                            width:11,
                                            tintColor: COLORS.black
                                        }}
                                    />
                                    <Text style={{
                                        ...FONTS.body1,
                                        color: COLORS.light
                                    }}>{profile.name}</Text>
                                </View>
                                <View style={{
                                    flexDirection:'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start'
                                }}>
                                <IconButton 
                                        icon={icons.location}
                                        iconStyle={{
                                            height: 11,
                                            width:11,
                                            tintColor: COLORS.black
                                        }}
                                    />
                                    <Text style={{
                                        ...FONTS.body1,
                                        color: COLORS.light
                                    }}>{profile.phone}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: SIZES.padding
                      }}
                    >
                      <Text
                        style={{
                          ...FONTS.h4,
                        }}
                      >
                        Delivery Time
                      </Text>
                      <Text
                        style={{
                          ...FONTS.body2,
                        }}
                      >
                        10:11AM
                      </Text>
                      <Text
                        style={{
                          ...FONTS.body2,
                        }}
                      >
                        Oct 6, 2020
                      </Text>
                      <TextButton
                        label="Edit"
                        textStyle={{
                          color: COLORS.primary,
                        }}
                      />
                    </View>
                  </>
                }
                data={items?.items}
                keyExtractor={(item) => `OrderInfo_${item.id}`}
                renderItem={({ item, index }) => {
                  return (
                    <View key={item.id} style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        padding: SIZES.padding,
                    }}>
                        <View
                            key={item.id}
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                        }}
                        >
                        <Image
                            source={item?.image}
                            style={{
                            height: 60,
                            width: 60,
                            borderRadius: SIZES.padding * 0.5,
                            }}
                        />
                        <View
                            style={{
                            marginLeft: SIZES.padding,
                            }}
                        >
                            <Text
                            style={{
                                ...FONTS.h4,
                            }}
                            >
                            {item.name}
                            </Text>
                            <Text
                            style={{
                                ...FONTS.body3,
                                color: COLORS.lightGray,
                            }}
                            >
                            x {item.count}
                            </Text>
                        </View>
                        </View>

                        <Text
                        style={{
                          ...FONTS.h4,
                        }}
                      >
                        ${item.price * item.count}
                      </Text>
                    </View>
                  );
                }}
                ListFooterComponent={
                  <View
                    style={{
                      padding: SIZES.padding,
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 18,
                          color: COLORS.primary,
                          ...FONTS.h4,
                        }}
                      >
                        Total
                      </Text>
                      <Text
                        style={{
                          fontSize: 18,
                          color: COLORS.primary,
                          ...FONTS.h2,
                        }}
                      >
                        ${items.total_price}
                      </Text>
                    </View>
                  </View>
                }
              />
            </View>
            {/* Note */}

            <View>
                <Text style={{
                        paddingHorizontal:SIZES.padding,
                        color: COLORS.black,
                        ...FONTS.h5
                    }}>Notes</Text>
                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    backgroundColor: COLORS.white,
                    // paddingVertical: SIZES.padding * 0.5,
                    paddingHorizontal: SIZES.padding
                }}>
                <TextInput
                    placeholder='Type your note here!'
                    placeholderTextColor={COLORS.light}
                    cursorColor={COLORS.black}
                    style={{
                        height: 100,
                        width: '100%',
                        margin: SIZES.padding *2,
                        backgroundColor: COLORS.light3,
                        borderRadius:SIZES.padding * 0.6,
                        paddingHorizontal: SIZES.padding * 0.5
                        }}
                    />
                    </View>
            </View>
            
            <View style={{
              flexDirection: 'row',
              backgroundColor: COLORS.white,
              flex: 1,
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
            <TextButton
                label="Rating"
                onPress={()=> navigation.navigate('Rating', {items: items})}
                textStyle={{
                color: COLORS.black,
                backgroundColor: COLORS.light2,
                paddingVertical: SIZES.padding2,
                marginHorizontal: SIZES.padding,
                marginBottom: SIZES.padding2,
                paddingHorizontal: SIZES.radius * 1.5,
                borderRadius: SIZES.padding,
                borderWidth: 1,
                borderColor: COLORS.light
            }}
            />
            <TextButton
                label="Re-Order"
                onPress={()=> navigation.navigate('ConfirmOrder')}
                textStyle={{
                backgroundColor: COLORS.primary,
                paddingVertical: SIZES.padding2,
                marginHorizontal: SIZES.padding,
                marginBottom: SIZES.padding2,
                paddingHorizontal: SIZES.radius * 1.5,
                borderRadius: SIZES.padding
            }}
            />
            </View>
          </>
        }
      />
    </View>
  )
}

export default OrderInfo