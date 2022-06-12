import { createDrawerNavigator } from "@react-navigation/drawer";
import BadgeScreen from "../screens/BadgeScreen";
import HomeScreen, { HomeScreenNavName } from "../screens/HomeScreen";
import SubmitShelterScreen from "../screens/SubmitShelterScreen";
import { Colors } from "../styles";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName={HomeScreenNavName}
      drawerType="back"
      drawerStyle={{
        width: "65%",
        backgroundColor: Colors.white,
        paddingTop: "10%",
      }}
      defaultStatus={open}
      drawerContentOptions={{
        activeTintColor: Colors.secondary,
        activeBackgroundColor: Colors.white,
        inactiveTintColor: Colors.secondary,
        itemStyle: {},
        labelStyle: {
          marginLeft: 5,
          padding: 2.5,
          fontSize: 17.5,
        },
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen
        name="List accommmodation"
        component={SubmitShelterScreen}
      />
      <Drawer.Screen name="Profile" component={SubmitShelterScreen} />
      <Drawer.Screen name="Messages" component={HomeScreen} />
      <Drawer.Screen name="Social badge" component={BadgeScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
