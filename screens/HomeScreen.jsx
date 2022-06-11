import { StyleSheet, View, Image } from "react-native";
import ScreenWrapper from "../components/ScreenWrapper";
import SearchBar from "../components/SearchBar";
import StartCard from "../components/StartCard";
import { Colors } from "../styles";
import { LocationScreenNavName } from "./LocationScreen";
import { RequestDetailsScreenNavName } from "./RequestDetailsScreen";

export const HomeScreenNavName = "HomeScreen";
const HomeScreen = () => {
  return (
    <ScreenWrapper title="Available shelters">
      <SearchBar />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({

});

export default HomeScreen;