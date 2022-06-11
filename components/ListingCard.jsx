import { StyleSheet, TouchableOpacity, Image, Text, View } from "react-native";
import { Colors } from "../styles";
import { useNavigation } from "@react-navigation/native";
import { FontSizes } from "../styles/FontSizes";
import { Ionicons } from "@expo/vector-icons";

const ListingCard = ({ title, people, location, navScreenName }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate(navScreenName)}>
      <View style={styles.view}>
        <View style={{ ...styles.flex, justifyContent: "space-between" }}>
          <View style={styles.flex}>
            <Image source={require("../assets/images/building.png")} />
            <View style={{ marginTop: -15, marginLeft: 10 }}>
              <Text style={styles.text}>{title}</Text>
              <View style={styles.flex}>
                <Text style={{ marginRight: 10 }}>{people}</Text>
                <Text>{location}</Text>
              </View>
            </View>
          </View>
          <Ionicons name="chevron-forward-outline" size={20} color="black" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    width: "90%",
    borderColor: "#D0D1D1",
    borderWidth: 1,
    borderRadius: 10,
    shadowColor: "#D0D1D1",
    shadowOffset: {
      width: 4,
      height: 8,
    },
    shadowOpacity: 0.5,
    alignSelf: "center",
    padding: 15,
    marginBottom: 15,
  },
  text: {
    fontFamily: "Poppins-Medium",
    fontSize: FontSizes.XL22,
    marginTop: 20,
    lineHeight: 33,
  },
  image: {
    width: 31,
    height: 33,
    flex: 1,
    resizeMode: "contain",
  },
  flex: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default ListingCard;
