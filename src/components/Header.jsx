import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import Images from "../../assets/images";

const HeaderLeftSide = () => (
  <Text
    style={{
      fontSize: 30,
      fontFamily: "StyleScript-Regular",
      textAlignVertical: "center",
      paddingTop: 10,
    }}
  >
    Instagram
  </Text>
);

const HeaderRightSide = () => (
  <View style={{ flexDirection: "row", gap: 9 * 2, alignItems: "center" }}>
    <TouchableOpacity activeOpacity={0.2}>
      <FontAwesome6 name="square-plus" size={24} color="black" />
    </TouchableOpacity>
    <TouchableOpacity activeOpacity={0.2}>
      <FontAwesome6 name="heart" size={24} color="black" />
    </TouchableOpacity>
    <TouchableOpacity activeOpacity={0.2}>
      <Image
        source={Images.facebookMessenger}
        style={{
          width: 24,
          height: 24,
          marginLeft: -2.5,
        }}
      ></Image>
    </TouchableOpacity>
  </View>
);

function Header() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
      }}
    >
      <HeaderLeftSide />
      <HeaderRightSide />
    </View>
  );
}

export default Header;
