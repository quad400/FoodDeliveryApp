import { View, Text, Image, Animated, ImageBackground } from "react-native";
import React, { useLayoutEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { COLORS, FONTS, SIZES, dummyData, images } from "../../constants";
import { TextButton } from "../../components";

const Onboarding = () => {
  const navigation = useNavigation();
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();
  const scrollX = new Animated.Value(0)
  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / SIZES.width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != dummyData.onboarding_screens.length) {
      const offset = nextSlideIndex * SIZES.width;
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const skip = () => {
    const lastSlideIndex = dummyData.onboarding_screens.length - 1;
    const offset = lastSlideIndex * SIZES.width;
    ref?.current.scrollToOffset({ offset });
    setCurrentSlideIndex(lastSlideIndex);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const Dots = () => {
    const dotPosition = Animated.divide(scrollX, SIZES.width);
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {dummyData.onboarding_screens.map((item, index) => {
          const dotColor = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [COLORS.light, COLORS.primary, COLORS.light],
            extrapolate: "clamp",
          });
          const dotWidth = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [10, 20, 10],
            extrapolate: "clamp",
          });
          return (
            <Animated.View
              key={`dot-${index}`}
              style={{
                borderRadius: 5,
                marginHorizontal: 6,
                width: dotWidth,
                height: 10,
                backgroundColor: dotColor,
              }}
            />
          );
        })}
      </View>
    );
  };

  // render
  function renderHeaderLogo() {
    return (
      <View
        style={{
          position: "absolute",
          top: SIZES.height > 800 ? 50 : 25,
          left: 0,
          right: 0,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={images.logo02}
          resizeMode="contain"
          style={{
            width: SIZES.width * 0.5,
            height: 100,
          }}
        />
      </View>
    );
  }

  function renderFooter() {
    return (
      <View
        style={{
          height: 130,
        }}
      >
        {/* pagination */}

        <View
          style={{
            flex: 1,
            justifyContent: "center",
          }}
        >
          <Dots />
        </View>

        {/* Buttons */}
        {currentSlideIndex == dummyData.onboarding_screens.length - 1 ? (
          <View>
            <TextButton
              label="Let's get Started"
              onPress={() => {
                navigation.replace("SignIn");
              }}
              textStyle={{
                backgroundColor: COLORS.primary,
                paddingVertical: SIZES.padding2,
                marginHorizontal: SIZES.padding,
                marginBottom: SIZES.padding2,
                paddingHorizontal: SIZES.radius * 1.5,
                borderRadius: SIZES.padding,
              }}
            />
          </View>
        ) : (
          <View
            style={{
              flexDirection: "row",
              backgroundColor: COLORS.white,
              flex: 1,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TextButton
              label="Skip"
              onPress={skip}
              textStyle={{
                color: COLORS.black,
                backgroundColor: COLORS.light2,
                paddingVertical: SIZES.padding2,
                marginHorizontal: SIZES.padding,
                marginBottom: SIZES.padding2,
                paddingHorizontal: SIZES.radius * 1.5,
                borderRadius: SIZES.padding,
                borderWidth: 1,
                borderColor: COLORS.light,
              }}
            />
            <TextButton
              label="Next"
              onPress={goToNextSlide}
              textStyle={{
                backgroundColor: COLORS.primary,
                paddingVertical: SIZES.padding2,
                marginHorizontal: SIZES.padding,
                marginBottom: SIZES.padding2,
                paddingHorizontal: SIZES.radius * 1.5,
                borderRadius: SIZES.padding,
              }}
            />
          </View>
        )}
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      {renderHeaderLogo()}

      <Animated.FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={dummyData.onboarding_screens}
        pagingEnabled
        keyExtractor={(item) => {
          item.id;
        }}
        onScroll={Animated.event([{
            nativeEvent: {
                contentOffset: {x: scrollX}
            }
        }], {useNativeDriver: false})}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                width: SIZES.width,
              }}
            >
              {/* Header */}
              <View style={{ flex: 3 }}>
                <ImageBackground
                  source={item.backgroundImage}
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "flex-end",
                    height: index == 1 ? "87%" : "100%",
                    width: "100%",
                  }}
                >
                  <Image
                    source={item.bannerImage}
                    resizeMode="contain"
                    style={{
                      width: SIZES.width * 0.8,
                      height: SIZES.width * 0.8,
                      marginBottom: -SIZES.padding,
                    }}
                  />
                </ImageBackground>
              </View>

              {/* Detail */}
              <View
                style={{
                  flex: 1,
                  marginTop: 30,
                  alignItems: "center",
                  justifyContent: "center",
                  paddingHorizontal: SIZES.radius,
                }}
              >
                <Text
                  style={{
                    ...FONTS.h4,
                    lineHeight: 30,
                    fontSize: 23,
                    textAlign: "center",
                  }}
                >
                  {item.title}
                </Text>

                <Text
                  style={{
                    marginTop: SIZES.padding,
                    ...FONTS.body3,
                    color: COLORS.light,
                    textAlign: "center",
                  }}
                >
                  {item.detail}
                </Text>
              </View>
            </View>
          );
        }}
      />

      {renderFooter()}
    </View>
  );
};

export default Onboarding;
