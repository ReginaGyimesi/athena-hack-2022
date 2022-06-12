import { StyleSheet, View } from "react-native";
import SuccessCard from "../components/SuccessCard";
import { Colors } from "../styles";

export const SuccessScreenNavName = "SuccessScreen";
const SuccessScreen = () => {
  return (
    <View style={styles.view}>
      <SuccessCard
        title={"Successful reservation."}
        subtitle={"Your host will contact you with the details shortly."}
        image={require("../assets/success.gif")}
        style={styles.image}
      />
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
  image: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },
});

export default SuccessScreen;
