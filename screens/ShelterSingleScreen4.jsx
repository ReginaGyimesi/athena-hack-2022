import { StyleSheet, Image, Text, View } from "react-native";
import MeetYourHost from "../components/MeetYourHost";
import ReserveBottomTab from "../components/ReserveBottomTab";
import ScreenWrapper from "../components/ScreenWrapper";
import { FontSizes } from "../styles";
import { ReserveScreenNavName } from "./ReserveScreen";
import { Colors } from "../styles";
export const ShelterSingleScreen4NavName = "ShelterSingleScreen4";
const ShelterSingleScreen4 = () => {
  return (
    <>
      <ReserveBottomTab title="Continue" navScreenName={ReserveScreenNavName} />
      <ScreenWrapper title="Accommodation details">
        <Image
          source={require("../assets/images/room3.jpg")}
          style={{ height: 400 }}
        />

        <Text style={styles.text}>
          All accommodations are free of charge, make yourself at home! 🏘️
        </Text>
        <MeetYourHost
          name="Michela"
          date="Hosting since 28th May"
          image={require("../assets/images/Host5.png")}
        />
        <View style={styles.container}>
          <Text style={styles.heading}>Spare room</Text>
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
              4.4 star rating
            </Text>
            <Text
              style={{
                fontSize: FontSizes.XS12,
                fontFamily: "Poppins-Regular",
                color: Colors.secondary,
                paddingLeft: 5,
              }}
            >
              9 reviews
            </Text>
          </View>
          <Text style={styles.details}>1 bed</Text>
          <Text style={styles.details}>No pets, no guests</Text>
          <Text style={styles.details}>Heating</Text>
          <Text style={styles.desc}>
            Cosy little spare room available in my flat for 1 person.
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

export default ShelterSingleScreen4;
