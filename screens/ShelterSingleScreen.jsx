import { StyleSheet, Image } from "react-native";
import ScreenWrapper from "../components/ScreenWrapper";

export const ShelterSingleScreenNavName = "ShelterSingleScreen";
const ShelterSingleScreen = () => {
  return <ScreenWrapper title="Accommodation details">
    <Image source={require("../assets/images/roomImage.png")} />
  </ScreenWrapper>;
};

const styles = StyleSheet.create({
  container: {},
});

export default ShelterSingleScreen;
