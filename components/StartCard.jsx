import { StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import { Colors } from "../styles";
import { useNavigation } from "@react-navigation/native";
import { FontSizes } from "../styles/FontSizes";

const StartCard = ({ title, image, navScreenName, ...props }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={[styles.view, props]}
      onPress={() => navigation.navigate(navScreenName)}
    >
      <Image source={image} />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    width: 266,
    height: 209,
  },
  text: {
    fontFamily: "Poppins-SemiBold",
    fontSize: FontSizes.XL22,
    marginTop: 20,
    lineHeight: 33,
  },
});

export default StartCard;
