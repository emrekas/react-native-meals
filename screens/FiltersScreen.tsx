import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const FiltersScreen = (props: any) => {
  return (
    <View style={styles.screen}>
      <Text>FiltersScreen</Text>
    </View>
  );
};

FiltersScreen.navigationOptions = (navData: any) => {
  return {
    headerTitle: "Filters Meals",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default FiltersScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
