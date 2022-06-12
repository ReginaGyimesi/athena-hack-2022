import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import List from "../components/List";
import ScreenWrapper from "../components/ScreenWrapper";
import SearchBar from "../components/SearchBar";
import { Colors, FontSizes } from "../styles";
import { LocationScreenNavName } from "./LocationScreen";
export const HomeScreenNavName = "HomeScreen";
const HomeScreen = () => {
  const navigation = useNavigation();
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);

  return (
    <ScreenWrapper
      title="Available accomodation"
      sidemenu={true}
      stickyHeaderIndices={[2]}
    >
      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      />
      <View style={styles.container}>
        <View style={styles.flex}>
          <Text
            style={{
              marginBottom: 10,
              paddingLeft: 20,
              fontFamily: "Poppins-Light",
              fontSize: FontSizes.S14,
            }}
          >
            Recently uploaded
          </Text>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate(LocationScreenNavName)}
          >
            <View style={styles.flex}>
              <Text
                style={{
                  marginBottom: 10,
                  fontFamily: "Poppins-Light",
                  fontSize: FontSizes.S14,
                  color: Colors.secondary,
                }}
              >
                Map view
              </Text>
              <Entypo
                name="location"
                size={20}
                color={Colors.secondary}
                style={{ paddingRight: 20, paddingLeft: 2, paddingBottom: 4 }}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
        <List searchPhrase={searchPhrase} setClicked={setClicked} />
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {},
  flex: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default HomeScreen;
