import { StyleSheet, Text, View } from "react-native";
import ScreenWrapper from "../components/ScreenWrapper";
import SearchBar from "../components/SearchBar";
import ListingCard from "../components/ListingCard";
import { ShelterSingleScreenNavName } from "./ShelterSingleScreen";
import { FontSizes } from "../styles";

export const HomeScreenNavName = "HomeScreen";
const HomeScreen = () => {
  return (
    <ScreenWrapper title="Available accomodation">
      <SearchBar />
      <View style={styles.container}>
        <Text style={{ marginBottom: 10, paddingLeft: 20, fontFamily: "Poppins-Light", fontSize: FontSizes.S14 }}>Recently uploaded</Text>
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
});

export default HomeScreen;
