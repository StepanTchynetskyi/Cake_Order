import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainMenu from "../screens/MainMenu";
import ChooseOne from "../screens/ChooseOne";
import ResultPage from "../screens/ResultPage";
import Order from "../screens/Order";
import CompleteOrder from "../screens/CompleteOrder";

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
        <Stack.Navigator>
          <Stack.Screen
            name="MainMenu"
            component={MainMenu}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CupCake"
            component={ChooseOne}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ResultPage"
            component={ResultPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Order"
            component={Order}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CompleteOrder"
            component={CompleteOrder}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
  );
}
