import { StyleSheet, Text, View } from "react-native";
import ScreenWrapper from "../components/ScreenWrapper";
import SearchBar from "../components/SearchBar";
import ListingCard from "../components/ListingCard";
import { ShelterSingleScreenNavName } from "./ShelterSingleScreen";
import { FontSizes, Colors } from "../styles";
import { Entypo } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { LocationScreenNavName } from "./LocationScreen";
import { useNavigation } from "@react-navigation/native";
import { ShelterSingleScreen2NavName } from "./ShelterSingleScreen2";
import { ShelterSingleScreen3NavName } from "./ShelterSingleScreen3";
import { ShelterSingleScreen4NavName } from "./ShelterSingleScreen4";

export const HomeScreenNavName = "HomeScreen";
const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <ScreenWrapper title="Available accomodation" stickyHeaderIndices={[2]}>
      <SearchBar />
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
        <ListingCard
          title="3 bed shared room..."
          people="3 people"
          location="London, United Kingdom"
          navScreenName={ShelterSingleScreenNavName}
        />
        <ListingCard
          title="2 bed flat"
          people="6 people"
          location="Budapest, Hungary"
          navScreenName={ShelterSingleScreen2NavName}
        />
        <ListingCard
          title="Spare room"
          people="1-2 people"
          location="Berlin, Germany"
          navScreenName={ShelterSingleScreen3NavName}
        />
        <ListingCard
          title="Spare room"
          people="1 person"
          location="Rome, Italy"
          navScreenName={ShelterSingleScreen4NavName}
        />
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
