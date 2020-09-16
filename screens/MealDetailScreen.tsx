import React, { useEffect, useCallback } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import { ScrollView } from "react-native-gesture-handler";
import DefaultText from "../components/DefaultText";
import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../store/actions/meals";

const ListItem = (props: any) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const MealDetailScreen = (props: any) => {
  const availableMeals = useSelector((state: any) => state.meals.meals);
  const mealId: string = props.navigation.getParam("mealId");
  const selectedMeal = availableMeals.find((meal: any) => meal.id === mealId);

  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    props.navigation.setParams({ toggleFav: toggleFavoriteHandler });
  }, [toggleFavoriteHandler]);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal?.imageUrl }} style={styles.image} />
      <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
        <DefaultText>{selectedMeal?.duration}</DefaultText>
        <DefaultText>{selectedMeal?.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal?.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal?.ingredients.map((ingredient: any) => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}

      <Text style={styles.title}>Steps</Text>
      {selectedMeal?.steps.map((step: any) => (
        <ListItem key={step}>{step}</ListItem>
      ))}

      <View style={styles.screen}>
        <Text>{selectedMeal?.title}</Text>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 200,
  },
  mealRow: {},
  mealDetail: {},
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
  },
  listItem: {
    marginVertical: 2,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
});

MealDetailScreen.navigationOptions = (navigationData: any) => {
  // const mealId: string = navigationData.navigation.getParam("mealId");
  const mealTitle = navigationData.navigation.getParam("mealTitle");
  const toggleFavorite = navigationData.navigation.getParam("toggleFav");

  return {
    headerTitle: mealTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => toggleFavorite}
        />
      </HeaderButtons>
    ),
  };
};
