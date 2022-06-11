import { StyleSheet, View } from "react-native";
import SuccessCard from "../components/SuccessCard";
import { Colors } from "../styles";

export const SuccessScreenNavName = "SuccessScreen";
const SuccessScreen = () => {
  return (
    <View style={styles.view}>
      <SuccessCard subtitle={"Your host will contact you with the details shortly."} />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: Colors.lightBlue,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default SuccessScreen;
