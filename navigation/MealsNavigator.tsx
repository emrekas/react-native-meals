import React from "react";
import { Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import { Platform } from "react-native";
import colors from "../const/colors";
import FavoritesScreen from "../screens/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import FiltersScreen from "../screens/FiltersScreen";

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? colors.danger : "",
  },
  headerTitleStyle: {
    fontFamily: "open-sans-bold",
  },
  headerBackTitleStyle: {
    fontFamily: "open-sans",
  },
  headerTintColor: Platform.OS === "android" ? "white" : colors.info,
};

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        headerTitle: "Meal Categories",
      },
    },
    CategoryMeals: CategoryMealScreen,
    MealDetail: { screen: MealDetailScreen },
  },
  {
    // initialRouteName:'Categories',
    mode: "modal",
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const FavNavigator = createStackNavigator(
  {
    Favorite: FavoritesScreen,
    MealDetail: MealDetailScreen,
  },
  {
    // initialRouteName:'Categories',
    mode: "modal",
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const tabsScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo: any) => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: colors.danger,
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "open-sans-bold" }}>Meals</Text>
        ) : (
          "Meals"
        ),
    },
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo: any) => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: colors.success,
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "open-sans-bold" }}>Favorites</Text>
        ) : (
          "Favorites"
        ),
    },
  },
};

const MealsFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabsScreenConfig, {
        activeColor: "white",
        shifting: true,
      })
    : createBottomTabNavigator(tabsScreenConfig, {
        tabBarOptions: {
          labelStyle: {
            fontFamily: "open-sans",
          },
          activeTintColor: colors.danger,
        },
      });

const FiltersNavigator = createStackNavigator(
  {
    Filters: FiltersScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const MainNavigator = createDrawerNavigator(
  {
    MealsFavs: {
      screen: MealsFavTabNavigator,
      navigationOptions: {
        drawerLabel: "Meals",
      },
    },
    Filters: FiltersNavigator,
  },
  {
    contentOptions: {
      activeTintColor: colors.danger,
      labelStyle: {
        fontFamily: "open-sans-bold",
      },
    },
  }
);

export default createAppContainer(MainNavigator);
