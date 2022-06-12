import { StyleSheet, View } from "react-native";
import SuccessCard from "../components/SuccessCard";
import { Colors } from "../styles";

export const SuccessScreen2NavName = "SuccessScreen2";
const SuccessScreen2 = () => {
  return (
    <View style={styles.view}>
      <SuccessCard
        title={"Successful submission."}
        subtitle={"Your future guests can't wait to meet you."}
        image={require("../assets/success2.gif")}
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

export default SuccessScreen2;
