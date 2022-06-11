import { StyleSheet, TouchableOpacity, Image, Text, View } from "react-native";
import { Colors } from "../styles";
import { FontSizes } from "../styles/FontSizes";
import Button from "./Button";

const ReserveBottomTab = ({ title, navScreenName }) => {
  return (
    <View style={styles.view}>
      <Button title={title} navScreenName={navScreenName} />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: Colors.white,
    borderTopWidth: 1,
    borderTopColor: "#D0D1D1",
    height: 60,
    position: "absolute",
    bottom: 0,
    zIndex: 1,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ReserveBottomTab;
