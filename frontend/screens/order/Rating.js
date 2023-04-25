import { View, Text, Image, FlatList, TextInput } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { COLORS, FONTS, SIZES, icons } from "../../constants";
import { Divider, IconButton, TextButton } from "../../components";

const Rating = ({ route }) => {
  const { items } = route.params;

  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  function renderContent() {
    return (
      <View
        style={{
          paddingTop: 15,
        }}
      >
        <View
          style={{
            paddingHorizontal: SIZES.radius,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 16,
              ...FONTS.h3,
            }}
          >
            What do you think about this restaurant?
          </Text>

          <Text
            style={{
              paddingTop: 10,
              textAlign: "center",
              fontSize: 13,
              color: COLORS.light,
              ...FONTS.body3,
            }}
          >
            Your feedback will help us improve restaurants experience better
          </Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginVertical: SIZES.padding2 * 2,
            }}
          >
            <IconButton
              icon={icons.star}
              iconStyle={{
                height: 30,
                width: 30,
                tintColor: "orange",
              }}
              containerStyle={{
                marginRight: SIZES.padding2,
              }}
            />
            <IconButton
              icon={icons.star}
              iconStyle={{
                height: 30,
                width: 30,
                tintColor: "orange",
                marginRight: 5,
              }}
              containerStyle={{
                marginRight: SIZES.padding2,
              }}
            />
            <IconButton
              icon={icons.star}
              iconStyle={{
                height: 30,
                width: 30,
                tintColor: "orange",
                marginRight: 5,
              }}
              containerStyle={{
                marginRight: SIZES.padding2,
              }}
            />
            <IconButton
              icon={icons.star}
              iconStyle={{
                height: 30,
                width: 30,
                tintColor: "orange",
                marginRight: 5,
              }}
              containerStyle={{
                marginRight: SIZES.padding2,
              }}
            />
            <IconButton
              icon={icons.star}
              iconStyle={{
                height: 30,
                width: 30,
                tintColor: COLORS.light3,
                marginRight: 5,
              }}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: SIZES.padding,
          }}
        >
          <TextInput
            placeholder="Type your note here!"
            placeholderTextColor={COLORS.light}
            cursorColor={COLORS.black}
            style={{
              height: 70,
              width: "100%",
              backgroundColor: COLORS.light3,
              borderRadius: SIZES.padding * 0.6,
              padding: SIZES.padding,
            }}
          />
          <IconButton
            icon={icons.picture}
            iconStyle={{
              height: 20,
              width: 20,
              tintColor: COLORS.light,
            }}
            containerStyle={{
              position: "absolute",
              bottom: 10,
              right: 15,
            }}
          />
          <View
            style={{
              backgroundColor: "red",
              position: "absolute",
              bottom: 20,
              // padding: 2,
              justifyContent: "center",
              alignItems: "center",
              height: 14,
              borderRadius: 7,
              width: 14,
              right: 15,
            }}
          >
            <Text
              style={{
                color: COLORS.white,
                // ...FONTS.h3,
                fontWeight: 700,
                fontSize: 10,
              }}
            >
              3
            </Text>
          </View>
        </View>
      </View>
    );
  }

  function renderResturant(item) {
    return (
      <View
        style={{
          backgroundColor: COLORS.white,
          elevation: 1,
          borderRadius: SIZES.padding * 0.5,
          paddingVertical: SIZES.padding * 0.6,
        }}
      >
        {/* Top */}
        <View
          style={{
            paddingHorizontal: SIZES.padding * 0.6,
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: SIZES.padding,
          }}
        >
          <Image
            source={item.resturant_image}
            resizeMode="cover"
            style={{
              height: 100,
              width: 100,
              borderRadius: SIZES.padding * 0.5,
            }}
          />
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              marginLeft: SIZES.padding,
            }}
          >
            <Text
              style={{
                ...FONTS.h3,
              }}
            >
              {item.resturant_name}
            </Text>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <IconButton
                icon={icons.location}
                disable={true}
                iconStyle={{
                  tintColor: COLORS.light,
                  height: 13,
                  width: 13,
                }}
                containerStyle={{
                  height: 13,
                  width: 13,
                }}
              />
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={{
                  width: 160,
                  fontSize: 14,
                  color: COLORS.light,
                  ...FONTS.body,
                }}
              >
                76A Eight Avenue,New York,US
              </Text>
            </View>
          </View>

          <IconButton
            disable={true}
            icon={icons.favorite}
            iconStyle={{
              tintColor: COLORS.primary,
              height: 20,
              width: 20,
            }}
          />
        </View>

        <Divider />

        {/* Content */}
        {renderContent()}
      </View>
    );
  }

  function renderItemsCard(item) {
    return (
      <View>
        <FlatList
          data={items.items}
          keyExtractor={(item) => `Rate_${item.id}`}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                    backgroundColor: COLORS.white,
                    elevation: 1,
                    borderRadius: SIZES.padding * 0.5,
                    paddingVertical: SIZES.padding * 0.6,
                  paddingHorizontal: SIZES.padding * 0.6,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: SIZES.padding,
                }}
              >
                <Image
                  source={item.image}
                  resizeMode="cover"
                  style={{
                    height: 60,
                    width: 60,
                    borderRadius: SIZES.padding * 0.5,
                  }}
                />
                <View
                  style={{
                    flex: 1,
                    justifyContent: "space-between",
                    flexDirection: "row",
                    alignItems: "center",
                    marginLeft: SIZES.padding,
                  }}
                >
                  <Text
                    style={{
                      ...FONTS.h3,
                    }}
                  >
                    {item.name}
                  </Text>
                  <View
                    style={{
                      justifyContent: "space-between",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <IconButton
                      icon={icons.thumbsUp}
                      iconStyle={{
                        tintColor: COLORS.light,
                        height: 20,
                        width: 20,
                      }}
                      containerStyle={{
                        marginRight: 10,
                      }}
                    />
                    <IconButton
                      icon={icons.thumbsDown}
                      iconStyle={{
                        tintColor: COLORS.light,
                        height: 20,
                        width: 20,
                      }}
                    />
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
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
            Rating
          </Text>
        </View>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <View
              style={{
                marginHorizontal: SIZES.padding,
                // backgroundColor: COLORS.,
              }}
            >
              {/* resturant */}
              <View
                style={{
                  paddingVertical: SIZES.padding2,
                }}
              >
                <Text
                  style={{
                    color: COLORS.light,
                    ...FONTS.h4,
                  }}
                >
                  Resturant
                </Text>
              </View>
              {renderResturant(items)}
            </View>
            <View
              style={{
                marginHorizontal: SIZES.padding,
                  marginBottom: 70
                // backgroundColor: COLORS.,
              }}
            >
              {/* Foods */}
              <View
                style={{
                  paddingVertical: SIZES.padding2,
                }}
              >
                <Text
                  style={{
                    color: COLORS.light,
                    ...FONTS.h4,
                  }}
                >
                  Foods
                </Text>
              </View>
              {renderItemsCard(items)}
            </View>
          </>
        }
      />
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <TextButton
          label="Complete"
          onPress={() => navigation.navigate("ConfirmOrder")}
          textStyle={{
            backgroundColor: COLORS.primary,
            paddingVertical: SIZES.padding2 * 1.5,
            marginHorizontal: SIZES.padding,
            marginBottom: SIZES.padding2,
            paddingHorizontal: SIZES.radius,
            borderRadius: SIZES.padding,
          }}
        />
      </View>
    </View>
  );
};

export default Rating;
