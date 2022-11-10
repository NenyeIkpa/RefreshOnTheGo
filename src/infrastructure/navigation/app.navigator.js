import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { SafeArea } from "../../components/utility/safe-area.component";
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
import { MapScreen } from "../../features/map/screens/map.screen";
import { RestaurantDetailScreen } from "../../features/restaurants/screens/restaurant-details.screen";

function SettingsScreen() {
  return (
    <SafeArea>
      <Text>Settings!</Text>
    </SafeArea>
  );
}

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ color, size }) => {
    let iconName;

    if (route.name === "Restaurants") {
      iconName = "md-restaurant";
    } else if (route.name === "Settings") {
      iconName = "md-settings";
    } else if (route.name === "Map") {
      iconName = "md-map";
    }

    // You can return any component that you like here!
    return <Ionicons name={iconName} size={size} color={color} />;
  },

  tabBarActiveTintColor: "tomato",
  tabBarInactiveTintColor: "gray",
});

function Root() {
  return (
    <Tab.Navigator screenOptions={(screenOptions, { headerShown: false })}>
      <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}
      >
        <Stack.Screen
          name="Root"
          component={Root}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RestaurantDetailScreen"
          component={RestaurantDetailScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
