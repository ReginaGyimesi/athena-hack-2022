import { StyleSheet, Image, Text, View } from "react-native";
import MeetYourHost from "../components/MeetYourHost";
import ReserveBottomTab from "../components/ReserveBottomTab";
import ScreenWrapper from "../components/ScreenWrapper";
import { Colors, FontSizes } from "../styles";
import { ReserveScreenNavName } from "./ReserveScreen";

export const ShelterSingleScreenNavName = "ShelterSingleScreen";
const ShelterSingleScreen = () => {
  return (
    <>
      <ReserveBottomTab title="Continue" navScreenName={ReserveScreenNavName} />
      <ScreenWrapper title="Accommodation details">
        <Image source={require("../assets/images/roomImage.png")} />

        <Text style={styles.text}>
          All accommodations are free of charge, make yourself at home! 🏘️
        </Text>
        <MeetYourHost
          name="Ms Gladys"
          date="Hosting since May 22nd"
          image={require("../assets/images/host2.png")}
        />
        <View style={styles.container}>
          <Text style={styles.heading}>3 bed shared room with bathroom</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 5,
            }}
          >
            <Image source={require("../assets/images/star.png")} />
            <Image source={require("../assets/images/star.png")} />
            <Image source={require("../assets/images/star.png")} />
            <Image source={require("../assets/images/star.png")} />
            <Image source={require("../assets/images/star.png")} />
            <Text
              style={{
                fontSize: FontSizes.XS12,
                fontFamily: "Poppins-Medium",
                color: "#6B6B6B",
                paddingLeft: 5,
              }}
            >
              4.2 star rating
            </Text>
            <Text
              style={{
                fontSize: FontSizes.XS12,
                fontFamily: "Poppins-Regular",
                color: Colors.secondary,
                paddingLeft: 5,
              }}
            >
              12 reviews
            </Text>
          </View>
          <Text style={styles.details}>3 beds - 1 bath</Text>
          <Text style={styles.details}>No pets</Text>
          <Text style={styles.desc}>
            Cosy 3 bed shared room available with bathroom. Very well located,
            bus stop, subway and the nearest shopping centre is a 5 minute walk
            away. This room is part of a hostel, during the day I'm always
            available for a chat, and if you need any help getting around in the
            city.
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
    paddingBottom: 100,
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

export default ShelterSingleScreen;
