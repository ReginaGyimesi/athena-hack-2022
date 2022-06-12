import { StyleSheet, Image, Text, View } from "react-native";
import MeetYourHost from "../components/MeetYourHost";
import ReserveBottomTab from "../components/ReserveBottomTab";
import ScreenWrapper from "../components/ScreenWrapper";
import { FontSizes } from "../styles";
import { ReserveScreenNavName } from "./ReserveScreen";
import { Colors } from "../styles";
export const ShelterSingleScreen2NavName = "ShelterSingleScreen2";
const ShelterSingleScreen2 = () => {
  return (
    <>
      <ReserveBottomTab title="Continue" navScreenName={ReserveScreenNavName} />
      <ScreenWrapper title="Accommodation details">
        <Image source={require("../assets/images/roomImage2.png")} />

        <Text style={styles.text}>
          All accommodations are free of charge, make yourself at home! 🏘️
        </Text>
        <MeetYourHost
          name="Anna"
          date="Hosting since April 1st"
          image={require("../assets/images/host3.png")}
        />
        <View style={styles.container}>
          <Text style={styles.heading}>2 bed flat</Text>
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
              4.5 star rating
            </Text>
            <Text
              style={{
                fontSize: FontSizes.XS12,
                fontFamily: "Poppins-Regular",
                color: Colors.secondary,
                paddingLeft: 5,
              }}
            >
              25 reviews
            </Text>
          </View>
          <Text style={styles.details}>2 bedrooms - 1 bath</Text>
          <Text style={styles.details}>Pets allowed</Text>
          <Text style={styles.details}>Air con, heating</Text>
          <Text style={styles.desc}>
            Spacious 2 bed flat in the centre of Budapest.
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

export default ShelterSingleScreen2;
