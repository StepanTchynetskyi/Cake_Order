import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainMenu from "../screens/MainMenu";
import CupCake from "../screens/CupCake";
import ResultPage from "../screens/ResultPage";
import Order from "../screens/Order";
import CompleteOrder from "../screens/CompleteOrder";
import Pastry from "../screens/Pastry"
import Pie from "../screens/Pie"
import Tart from "../screens/Tart"
import Cake from "../screens/Cake"
import MousseCake from "../screens/MousseCake"

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
            component={CupCake}
            options={{ headerShown: false }}
          />
          <Stack.Screen
                      name="Pastry"
                      component={Pastry}
                      options={{ headerShown: false }}
                    />
           <Stack.Screen
                       name="Pie"
                       component={Pie}
                       options={{ headerShown: false }}
                     />
                     <Stack.Screen
                        name="Tart"
                        component={Tart}
                        options={{ headerShown: false }}
                      />
          <Stack.Screen
                      name="MousseCake"
                      component={MousseCake}
                      options={{ headerShown: false }}
                    />
          <Stack.Screen
                                name="Cake"
                                component={Cake}
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
