import { StyleSheet, TouchableOpacity, Image, Text, View } from "react-native";
import { Colors } from "../styles";
import { useNavigation } from "@react-navigation/native";
import { FontSizes } from "../styles/FontSizes";
import { Ionicons } from "@expo/vector-icons";

const ScreenWrapper = ({ title, children }) => {
  const navigation = useNavigation();
  return (
    <View style={[styles.view]}>
      <TouchableOpacity onPress={() => navigation.goBack(null)}>
        <View style={styles.back}>
          <Ionicons name="chevron-back-outline" size={30} color="black" />
          {/* <Text style={styles.text}>Back</Text> */}
        </View>
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: Colors.white,
  },
  back: {
    flexDirection: "row",
    paddingTop: 40,
    paddingLeft: 10,
    alignItems: "center",
    marginBottom: 26,
  },
  text: {
    fontFamily: "Poppins-Light",
    fontSize: FontSizes.M16,
  },
  title: {
    fontFamily: "Poppins-Medium",
    fontSize: FontSizes.L20,
    textAlign: "center",
    position: "absolute",
    top: 40,
    margin: "auto",
    justifyContent: "center",
    alignSelf: "center",
  },
  image: {
    width: 160,
    height: 102,
    flex: 1,
    resizeMode: "contain",
  },
});

export default ScreenWrapper;
