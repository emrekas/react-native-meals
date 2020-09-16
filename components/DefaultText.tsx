import React from "react";
import { StyleSheet, Text, View } from "react-native";

const DefaultText = (props: any) => {
  return (
    <View>
      <Text style={styles.text}>{props.children}</Text>
    </View>
  );
};

export default DefaultText;

const styles = StyleSheet.create({
  text: {
    fontFamily: "open-sans",
  },
});
