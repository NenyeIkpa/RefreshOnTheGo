import React, { useState } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

export const RestaurantDetailScreen = ({ route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="Breakfast Menu"
          id="1"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title="Yamarita and egg sauce" />
          <List.Item title="Akara and pap" />
          <List.Item title="Bread toast and hot chocolate" />
        </List.Accordion>
        <List.Accordion
          title="Lunch Menu"
          id="2"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="Starch and Banga soup" />
          <List.Item title="Fried rice and chicken" />
          <List.Item title="Jollof rice and turkey" />
        </List.Accordion>
        <List.Accordion
          title="Dinner Menu"
          id="3"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title="Fresh fish pepper soup" />
          <List.Item title="Mushroom soup" />
          <List.Item title="Spaghetti Bolognese" />
          <List.Item title="Chicken and chips" />
        </List.Accordion>
        <List.Accordion
          title="Drinks Menu"
          id="4"
          left={(props) => <List.Icon {...props} icon="cup" />}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title="Iced Tea" />
          <List.Item title="Coffee" />
          <List.Item title="Coke" />
          <List.Item title="Fanta" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};
