import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Icon,
  Text,
  View,
} from "react-native";
import { Colors } from "../styles";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { FontSizes } from "../styles/FontSizes";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

const ScreenWrapper = ({ title, children, sidemenu, ...props }) => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.view} {...props}>
      {sidemenu ? (
        <TouchableOpacity onPress={() => DrawerActions.openDrawer()}>
          <View style={styles.back}>
          <Ionicons name="reorder-three-outline" size={35} color="black" />
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => navigation.goBack(null)}>
          <View style={styles.back}>
            <Ionicons name="chevron-back-outline" size={35} color="black" />
            {/* <Text style={styles.text}>Back</Text> */}
          </View>
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  back: {
    flexDirection: "row",
    paddingTop: 40,
    paddingLeft: 10,
    alignItems: "center",
    paddingBottom: 20,
    backgroundColor: Colors.white,
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
    top: 44,
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
  button: {
    paddingVertical: "8%",
    paddingLeft: 10,
    paddingBottom: 10,
  },
});

export default ScreenWrapper;
