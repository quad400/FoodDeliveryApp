import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { COLORS, FONTS, SIZES, dummyData, icons } from "../../constants";
import { IconButton, TextButton } from "../../components";

const ConfirmOrder = () => {
  const navigation = useNavigation();

  const [isSelected, setIsSelected] = React.useState("")

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

    // render
    function renderPayment() {
        return (
            <View style={{
                    backgroundColor: COLORS.white,
                    padding: SIZES.padding,
                    paddingBottom: SIZES.radius
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingBottom: SIZES.padding
                    }}>
                        <Text style={{
                            ...FONTS.h4
                        }}>Payment Method</Text>
                        <TextButton 
                            label='Add payment method'
                            textStyle={{
                                color: COLORS.primary
                            }}
                        />
                    </View>

                    <FlatList 
                        data={dummyData.payment_options}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item)=> {item}}
                        renderItem={({item, index})=> {
                            return (
                            <TouchableOpacity key={index} onPress={()=> setIsSelected(item.payment_type)}>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: "center",
                                    alignItems: 'center',
                                    borderWidth: 1,
                                    borderRadius: SIZES.padding * 0.5,
                                    margin: SIZES.padding,
                                    paddingRight: isSelected==item.payment_type ? 30 : null,
                                    paddingHorizontal: SIZES.padding,
                                    borderColor: isSelected==item.payment_type ? COLORS.primary : COLORS.light
                                }}>
                                    {isSelected==item.payment_type && <View 
                                        style={{
                                            backgroundColor: 'transparent',
                                            height: 30,
                                            width: 40,
                                            position: 'absolute',
                                            right:0,
                                            top: 0,
                                            borderStyle: 'solid',
                                            borderLeftWidth: 0,
                                            borderRightWidth: 50,
                                            borderBottomWidth: 40,
                                            borderLeftColor: 'transparent',
                                            borderRightColor: 'transparent',
                                            borderBottomColor: COLORS.primary,
                                            transform: [{rotate: "180deg"}]
                                        }}
                                    >
                                        <IconButton 
                                            icon={icons.mark}
                                            iconStyle={{
                                                transform: [{rotate: "180deg"}],
                                                marginBottom: -30,
                                                height: 14,
                                                width:14
                                            }}
                                            disable={true}
                                        />
                                    </View>}
                                    <View style={{
                                        paddingVertical: item.payment_type=='paypal' ? SIZES.padding : null,
                                    
                                    }}>

                                    <Image 
                                        source={item.icon}
                                        resizeMode="contain"
                                        style={{
                                            height: item.payment_type=='paypal' ? 30 : 50,
                                            width: 50,
                                            
                                        }}
                                    />
                                    </View>

                                    <Text style={{
                                        ...FONTS.body3,
                                        paddingLeft: item.payment_type=='paypal' ? 5 : SIZES.padding
                                    }}>{item.card_number.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim()}</Text>
                                </View>
                            </TouchableOpacity>
                            )
                        }}
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
            Confirm Order
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
                data={dummyData?.order_item}
                keyExtractor={(item) => `OrderItem_${item}`}
                renderItem={({ item, index }) => {
                  return (
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        padding: SIZES.padding,
                      }}
                    >
                      <Image
                        source={item.image}
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
                          Kichi Coffee & Drink
                        </Text>
                        <Text
                          style={{
                            ...FONTS.body3,
                            color: COLORS.lightGray,
                          }}
                        >
                          Lemon Juice Fresh
                        </Text>
                      </View>
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
                          ...FONTS.h4,
                        }}
                      >
                        Subtotal(1 tem)
                      </Text>
                      <Text
                        style={{
                          ...FONTS.h4,
                        }}
                      >
                        $2.9
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={{
                          ...FONTS.h4,
                        }}
                      >
                        Ship Fee (2.4 Km)
                      </Text>
                      <Text
                        style={{
                          ...FONTS.h4,
                        }}
                      >
                        $1.3
                      </Text>
                    </View>
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
                        $4.2
                      </Text>
                    </View>
                  </View>
                }
              />
            </View>
            <View
              style={{
                paddingBottom: SIZES.padding,
              }}
            >
              <Text
                style={{
                  ...FONTS.h5,
                  paddingHorizontal: SIZES.padding,
                }}
              >
                Similar Products
              </Text>
              <FlatList
                showsHorizontalScrollIndicator={false}
                data={dummyData.itemContent}
                keyExtractor={(item) => {
                  item;
                }}
                horizontal
                renderItem={({ item, index }) => {
                  return (
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("FoodDetail", { item })
                      }
                    >
                      <View
                        style={{
                          backgroundColor: COLORS.white,
                          justifyContent: "center",
                          marginLeft: index == 0 ? SIZES.padding : null,
                          marginRight: SIZES.padding,
                          elevation: 2,
                          borderRadius: SIZES.padding * 0.4,
                        }}
                      >
                        <ImageBackground
                          source={item.image}
                          style={{
                            height: 100,
                            width: 100,
                          }}
                          resizeMode="cover"
                          borderTopLeftRadius={SIZES.padding * 0.4}
                          borderTopRightRadius={SIZES.padding * 0.4}
                        ></ImageBackground>
                        <View
                          style={{
                            paddingVertical: SIZES.padding,
                            paddingHorizontal: SIZES.padding,
                            justifyContent: "center",
                          }}
                        >
                          <View
                            style={
                              {
                                // flex: 1,
                              }
                            }
                          >
                            <Text
                              numberOfLines={2}
                              ellipsizeMode="tail"
                              style={{
                                fontSize: 13,
                                width: 80,
                                color: "black",
                                ...FONTS.h4,
                              }}
                            >
                              {item.title}
                            </Text>
                          </View>
                          <View
                            style={{
                              justifyContent: "space-between",
                              flexDirection: "row",
                            }}
                          >
                            <Text
                              style={{
                                color: COLORS.primary,
                                ...FONTS.h3,
                              }}
                            >
                              ${item.price}
                            </Text>
                            <IconButton
                              icon={icons.plus}
                              iconStyle={{
                                height: 12,
                                width: 12,
                              }}
                              containerStyle={{
                                backgroundColor: COLORS.primary,
                                borderRadius: 12,
                                height: 20,
                                width: 20,
                                padding: 3,
                              }}
                            />
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
                  );
                }}
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
                    alignItems: 'center',
                    backgroundColor: COLORS.white,
                    paddingVertical: SIZES.padding * 0.5,
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
                        padding: SIZES.padding, 
                        }}
                    />
                    </View>
            </View>

            {/* Payment Method */}
            {renderPayment()}

            <TextButton 
                label="Confirm"
                onPress={()=> navigation.dispatch(navigation.pop(1))}
                textStyle={{
                backgroundColor: COLORS.primary,
                paddingVertical: SIZES.padding2 * 1.5,
                marginHorizontal: SIZES.padding,
                marginBottom: SIZES.padding2,
                // paddingHorizontal: SIZES.padding,
                borderRadius: SIZES.padding
            }}
            />
          </>
        }
      />

        
    </View>
  );
};

export default ConfirmOrder;
