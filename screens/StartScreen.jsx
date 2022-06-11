import { useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, Text, View } from "react-native";
import { LocationScreenNavName } from "./LocationScreen";
import { RequestDetailsScreenNavName } from "./RequestDetailsScreen";

export const StartScreenNavName = "StartScreen";
const StartScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <Text>Start screen</Text>

      <Button
        title="Request a ride"
        onPress={() => navigation.navigate(RequestDetailsScreenNavName)}
      />
      <Button
        title="Rides near me"
        onPress={() => navigation.navigate(LocationScreenNavName)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default StartScreen;
