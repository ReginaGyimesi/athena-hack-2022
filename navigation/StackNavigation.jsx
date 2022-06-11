import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import StartScreen, { StartScreenNavName } from "../screens/StartScreen";
import "react-native-gesture-handler";
import RequestDetailsScreen, {
  RequestDetailsScreenNavName,
} from "../screens/RequestDetailsScreen";
import LocationScreen, {
  LocationScreenNavName,
} from "../screens/LocationScreen";

const Stack = createStackNavigator();
const StackNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName={StartScreenNavName}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={StartScreenNavName} component={StartScreen} />
      <Stack.Screen
        name={RequestDetailsScreenNavName}
        component={RequestDetailsScreen}
      />
      <Stack.Screen name={LocationScreenNavName} component={LocationScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default StackNavigation;
