import { Image, StyleSheet, View } from "react-native";
import StartCard from "../components/StartCard";
import { Colors } from "../styles";
import { HomeScreenNavName } from "./HomeScreen";
import { RequestDetailsScreenNavName } from "./RequestDetailsScreen";

export const StartScreenNavName = "StartScreen";
const StartScreen = () => {
  return (
    <View style={styles.view}>
      <Image
        source={require("../assets/images/Logo.png")}
        style={styles.image}
      />

      <StartCard
        title="Find shelter"
        navScreenName={HomeScreenNavName}
        image={require("../assets/images/Search_Illustration.png")}
        {...styles.margin}
      />
      <StartCard
        title="Share shelter"
        image={require("../assets/images/Illustration.png")}
        navScreenName={RequestDetailsScreenNavName}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: Colors.white,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  margin: {
    marginBottom: 25,
    marginTop: 35,
  },
  image: {
    width: 162,
    height: 58,
    resizeMode: "contain",
  },
});

export default StartScreen;
