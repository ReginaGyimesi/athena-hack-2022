import { StyleSheet, Image, Text, View } from "react-native";
import MeetYourHost from "../components/MeetYourHost";
import ReserveBottomTab from "../components/ReserveBottomTab";
import ScreenWrapper from "../components/ScreenWrapper";
import { FontSizes } from "../styles";
import { ReserveScreenNavName } from "./ReserveScreen";

export const ShelterSingleScreen3NavName = "ShelterSingleScreen3";
const ShelterSingleScreen3 = () => {
  return (
    <>
      <ReserveBottomTab title="Continue" navScreenName={ReserveScreenNavName} />
      <ScreenWrapper title="Accommodation details">
        <Image
          source={require("../assets/images/room4.jpg")}
          maxHeight="50%"
        />

        <Text style={styles.text}>
          All accommodations are free of charge, make yourself at home! 🏘️
        </Text>
        <MeetYourHost
          name="Jonas"
          date="Hosting since March 15th"
          image={require("../assets/images/host4.png")}
        />
        <View style={styles.container}>
          <Text style={styles.heading}>Spare room</Text>
          <Text style={styles.details}>1 room</Text>
          <Text style={styles.details}>No pets, no guests</Text>
          <Text style={styles.details}>Heating</Text>
          <Text style={styles.desc}>
            Our guest spare room is always open for anyone who needs a place to
            stay. Well located in the heart of Berlin, we can show your around
            when you arrive!
          </Text>
        </View>
      </ScreenWrapper>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingHorizontal: 30,
    paddingBottom: 50,
  },
  text: {
    fontFamily: "Poppins-Light",
    paddingTop: 5,
    textAlign: "center",
    backgroundColor: "white",
    paddingBottom: 20,
  },
  heading: {
    marginTop: 20,
    fontFamily: "Poppins-SemiBold",
    fontSize: FontSizes.XXL28,
  },
  details: {
    color: "#6B6B6B",
    fontSize: FontSizes.S14,
    marginTop: 2,
  },
  desc: {
    color: "#6B6B6B",
    fontSize: FontSizes.M16,
    marginTop: 10,
  },
});

export default ShelterSingleScreen3;
