import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import HomeScreen, { HomeScreenNavName } from "../screens/HomeScreen";
import LocationScreen, {
  LocationScreenNavName,
} from "../screens/LocationScreen";
import ReserveScreen, { ReserveScreenNavName } from "../screens/ReserveScreen";
import ShelterSingleScreen, {
  ShelterSingleScreenNavName,
} from "../screens/ShelterSingleScreen";
import StartScreen, { StartScreenNavName } from "../screens/StartScreen";

const Stack = createStackNavigator();
const StackNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName={StartScreenNavName}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={StartScreenNavName} component={StartScreen} />

      <Stack.Screen name={LocationScreenNavName} component={LocationScreen} />
      <Stack.Screen name={HomeScreenNavName} component={HomeScreen} />
      <Stack.Screen
        name={ShelterSingleScreenNavName}
        component={ShelterSingleScreen}
      />
      <Stack.Screen name={ReserveScreenNavName} component={ReserveScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default StackNavigation;
