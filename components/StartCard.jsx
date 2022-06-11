import { StyleSheet, TouchableOpacity, Image, Text, View } from "react-native";
import { Colors } from "../styles";
import { useNavigation } from "@react-navigation/native";
import { FontSizes } from "../styles/FontSizes";

const StartCard = ({ title, image, navScreenName, ...props }) => {
  const navigation = useNavigation();
  return (
    <View style={[styles.view, props]}>
      <TouchableOpacity
        onPress={() => navigation.navigate(navScreenName)}
        style={{ justifyContent: "center", alignItems: "center", padding: 15 }}
      >
        <Image source={image} style={styles.image} />
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
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
    border: "1px solid #D0D1D1",
    borderColor: "#D0D1D1",
    borderWidth: 1,
    borderRadius: 10,
    shadowColor: "#D0D1D1",
    shadowOffset: {
      width: 4,
      height: 8,
    },
    shadowOpacity: 0.5,
  },
  text: {
    fontFamily: "Poppins-Medium",
    fontSize: FontSizes.XL22,
    marginTop: 20,
    lineHeight: 33,
  },
  image: {
    width: 160,
    height: 102,
    flex: 1,
    resizeMode: "contain",
  },
});

export default StartCard;
