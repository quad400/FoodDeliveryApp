import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const COLORS = {
    primary: "#F05600",

    black:"#22222C",
    darkGray: "#2A2C39",
    gray: "#53586F",
    lightGray: "#83849C",
    light: "#B9BBC9",
    light2: "#FBFBFB",
    light3: "#F5F5F8",
    white: "#FFFFFF"
};

const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 30,
    padding: 10,
    padding2: 12,

    // font sizes
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 20,
    h4: 18,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,
    // app dimensions
    width,
    height
};

const FONTS = {
    largeTitle: { fontFamily: "PoppinsRegular", lineHeight: 56 },
    largeTitle2: { fontFamily: "PoppinsBold", lineHeight: 56 },
    h1: { fontFamily: "PoppinsBlack", lineHeight: 36 },
    h2: { fontFamily: "PoppinsBold", lineHeight: 30 },
    h3: { fontFamily: "PoppinsBold", lineHeight: 22 },
    h4: { fontFamily: "PoppinsSemiBold", lineHeight: 22 },
    h5: { fontFamily: "PoppinsSemiBold", lineHeight: 50 },
    body1: { fontFamily: "PoppinsRegular", lineHeight: 36 },
    body2: { fontFamily: "PoppinsRegular", lineHeight: 30 },
    body3: { fontFamily: "PoppinsMedium", lineHeight: 22 },
    body4: { fontFamily: "PoppinsLight", lineHeight: 20 },
    body5: { fontFamily: "PoppinsThin", lineHeight: 18 },
};

export { COLORS, SIZES, FONTS };