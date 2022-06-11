import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import BadgeScreen, { BadgeScreenNavName } from "../screens/BadgeScreen";
import HomeScreen, { HomeScreenNavName } from "../screens/HomeScreen";
import LocationScreen, {
  LocationScreenNavName,
} from "../screens/LocationScreen";
import ReserveScreen, { ReserveScreenNavName } from "../screens/ReserveScreen";
import ShelterSingleScreen, {
  ShelterSingleScreenNavName,
} from "../screens/ShelterSingleScreen";
import StartScreen, { StartScreenNavName } from "../screens/StartScreen";
import SubmitShelterScreen, {
  SubmitShelterScreenNavName,
} from "../screens/SubmitShelterScreen";
import SuccessScreen, { SuccessScreenNavName } from "../screens/SuccessScreen";
import SuccessScreen2, { SuccessScreen2NavName } from "../screens/SuccessScreen2";

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
      <Stack.Screen name={SuccessScreenNavName} component={SuccessScreen} />
      <Stack.Screen
        name={SubmitShelterScreenNavName}
        component={SubmitShelterScreen}
      />
      <Stack.Screen name={SuccessScreen2NavName} component={SuccessScreen2} />
      <Stack.Screen name={BadgeScreenNavName} component={BadgeScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default StackNavigation;
