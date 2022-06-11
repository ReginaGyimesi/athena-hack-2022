import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Colors, FontSizes } from "../styles";
import { useNavigation } from "@react-navigation/native";

const Button = ({ title, navScreenName }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate(navScreenName)}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.secondary,
    width: "60%",
    height: 46,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: 1,
    borderColor: Colors.white,
    borderRadius: 5,
  },
  text: {
    color: Colors.white,
    fontFamily: "Poppins-SemiBold",
    fontSize: FontSizes.M16
  },
});

export default Button;
