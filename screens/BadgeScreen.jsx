import { StyleSheet, View, Text, Image } from "react-native";
import ScreenWrapper from "../components/ScreenWrapper";
import { Colors, FontSizes } from "../styles";
import * as Progress from "react-native-progress";

export const BadgeScreenNavName = "BadgeScreen";
const BadgeScreen = () => {
  return (
    <ScreenWrapper title="Social Badge">
      <View style={styles.container}>
        <View style={styles.flex}>
          <Text style={styles.heading}>Get a social badge!</Text>
          <Image source={require("../assets/images/cil_badge.png")} />
        </View>
        <Text style={styles.text}>
          You can earn social credits by giving guests an enjoyable stay.
        </Text>
        <Text style={styles.text}>
          Social credits show how much your help impact society. Be proud of it
          and share it on social media.
        </Text>
        <Text
          style={{
            ...styles.text,
            color: Colors.secondary,
            textAlign: "center",
            paddingTop: 36,
          }}
        >
          Let's reach 100 social credits to receive a social badge!
        </Text>

        <View
          style={{ ...styles.flex, justifyContent: "center", marginTop: 10 }}
        >
          <Progress.Bar
            animated={false}
            borderWidth={0}
            width={250}
            unfilledColor="#E7EAED"
            color={Colors.secondary}
            progress={0.2}
          />
          <Image
            source={require("../assets/images/cli_badge_full.png")}
            style={{ marginLeft: 13 }}
          />
        </View>
        <Text style={styles.text}>
          You have <Text style={styles.heading}>20</Text> social credits.
        </Text>

      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    paddingHorizontal: 35,
    paddingBottom: 50,
  },
  heading: {
    fontFamily: "Poppins-Medium",
    fontSize: FontSizes.ML18,
    marginVertical: 7,
  },
  text: {
    fontFamily: "Poppins-Regular",
    fontSize: FontSizes.S14,
    color: "#6D6D6D",
    marginTop: 10,
  },
  flex: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default BadgeScreen;
