import { StyleSheet, View } from "react-native";
import StartCard from "../components/StartCard";
import { Colors } from "../styles";
import { LocationScreenNavName } from "./LocationScreen";
import { RequestDetailsScreenNavName } from "./RequestDetailsScreen";

export const StartScreenNavName = "StartScreen";
const StartScreen = () => {
  return (
    <View style={styles.view}>
      <StartCard
        title="Choose a Ride"
        navScreenName={RequestDetailsScreenNavName}
        image={require("../assets/images/ride_request_icon.png")}
        {...styles.margin34}
      />
      <StartCard
        title="Offer a Ride"
        image={require("../assets/images/ride_offer_icon.png")}
        navScreenName={LocationScreenNavName}
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
    backgroundColor: Colors.primary,
  },
  margin34: {
    marginBottom: 34,
  },
});

export default StartScreen;
