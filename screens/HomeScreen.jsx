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
          title="Hello accomodation"
          people="2 people"
          location="London, United Kingdom"
          navScreenName={ShelterSingleScreenNavName}
        />
        <ListingCard
          title="Best shelter"
          people="6 people"
          location="Kuala Lumpur, Malaysia"
        />
        <ListingCard
          title="Best accomodation"
          people="4 people"
          location="Budapest, Hungary"
        />
        <ListingCard
          title="Hello accomodation"
          people="2 people"
          location="London, United Kingdom"
        />
        <ListingCard
          title="Best shelter"
          people="6 people"
          location="Kuala Lumpur, Malaysia"
        />
        <ListingCard
          title="Best accomodation"
          people="4 people"
          location="Budapest, Hungary"
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
