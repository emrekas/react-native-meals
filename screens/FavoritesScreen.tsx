import React from "react";
import MealList from "../components/MealList";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import { useSelector } from "react-redux";

const FavoritesScreen = (props: any) => {

  const favMeals = useSelector((state) => state.meals.favoriteMeals);

  return <MealList listData={favMeals} navigation={props.navigation} />;
};

export default FavoritesScreen;

FavoritesScreen.navigationOptions = (navData: any) => {
  return {
    headerTitle: "Your favorites",
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
