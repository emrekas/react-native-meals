import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import colors from "../const/colors";

const CustomHeaderButton = (props: any) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={22}
      color="white"
    />
  );
};

export default CustomHeaderButton;

const styles = StyleSheet.create({});
