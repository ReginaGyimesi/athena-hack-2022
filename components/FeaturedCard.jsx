import { StyleSheet, TouchableOpacity, Image, Text, View } from "react-native";
import { Colors } from "../styles";
import { useNavigation } from "@react-navigation/native";
import { FontSizes } from "../styles/FontSizes";
import { Ionicons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const FeaturedCard = ({ title, location, people, image, navScreenName }) => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate(navScreenName)}
    >
      <View
        style={{ backgroundColor: Colors.white, borderRadius: 10, padding: 10 }}
      >
        <View style={styles.flex}>
          <Image source={image} style={styles.image} />
          <View style={{ width: "70%", paddingLeft: 15 }}>
            <Text style={styles.text}>{title}</Text>
            <Text style={styles.details}>{location}</Text>
            <Text style={styles.details}>{people}</Text>
          </View>
        </View>
        <Ionicons
          name="chevron-forward-outline"
          size={20}
          color="black"
          style={{ position: "absolute", right: 15, bottom: 15 }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "Poppins-Medium",
    fontSize: FontSizes.M16,
    lineHeight: 33,
  },
  image: {
    height: 133,
    width: 90,
    flex: 1,
    resizeMode: "contain",
  },
  flex: {
    flexDirection: "row",
  },
  details: {
    color: "#6B6B6B",
    fontSize: FontSizes.S14,
    marginBottom: 5,
  },
});

export default FeaturedCard;
