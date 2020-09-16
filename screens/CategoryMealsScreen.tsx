import React from "react";
import { useSelector } from "react-redux";
import MealList from "../components/MealList";

const CategoryMealScreen = (props: any) => {
  const catId: string = props.navigation.getParam("categoryId");

  const availableMeals = useSelector((state) => state.meals.filteredMeals);
  const displayedMeals = availableMeals.filter(
    (meal: any) => meal.categoryIds.indexOf(catId) >= 0
  );

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

export default CategoryMealScreen;
