import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Colors, FontSizes } from "../styles";
import { AntDesign } from "@expo/vector-icons";
import { HomeScreenNavName } from "../screens/HomeScreen";
import { useNavigation } from "@react-navigation/native";
import { StartScreenNavName } from "../screens/StartScreen";

const SuccessCard = ({ title, subtitle, image, ...imageprops }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.view}>
      <TouchableOpacity
        onPress={() => navigation.navigate(StartScreenNavName)}
        style={{ position: "absolute", top: 20, right: 20 }}
      >
        <AntDesign name="close" size={24} color="black" />
      </TouchableOpacity>
      <Image
        source={image}
        {...imageprops}
      />
      <Text style={styles.text}>Hoorayy!</Text>
      <Text style={styles.text}>{title}</Text>
      <Text style={{ maxWidth: "80%", textAlign: "center", marginTop: 10 }}>
        {subtitle}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: Colors.white,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    paddingVertical: 60,
    borderRadius: 24,
    paddingHorizontal: 20,
  },
  image: {
    resizeMode: "contain",
  },
  text: {
    fontFamily: "Poppins-Bold",
    fontSize: FontSizes.XL22,
    color: Colors.secondary,
    lineHeight: 33,
  },
});

export default SuccessCard;
