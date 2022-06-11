import { StyleSheet, TouchableOpacity, Image, Text, View } from "react-native";
import { Colors } from "../styles";
import { FontSizes } from "../styles/FontSizes";
import Button from "./Button";

const ReserveBottomTab = () => {
  return (
    <View style={styles.view}>
      <Button title={"Reserve"} />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: Colors.white,
    borderTopWidth: 1,
    borderTopColor: "#D0D1D1",
    height: "10%",
    position: "absolute",
    bottom: 0,
    zIndex: 1,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: Colors.secondary,
    width: "80%",
    height: 46,
  }
});

export default ReserveBottomTab;
