import { StyleSheet, View, Text, Image } from "react-native";
import { FontSizes } from "../styles";

const MeetYourHost = ({ name, date, image }) => {
  return (
    <View style={styles.view}>
      <View style={styles.flex}>
        <Image
          source={image}
          style={{ height: 120, width: 120, borderRadius: 10 }}
        />
        <View style={{ paddingLeft: 15, justifyContent: "space-between" }}>
          <View>
            <Text style={styles.heading}>meet your host</Text>
            <Text style={styles.text}>{name}</Text>
          </View>
          <Text style={styles.detail}>{date}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: "rgba(56, 105, 149, 0.07)",
    borderRadius: 10,
    padding: 15,
  },
  heading: {
    fontFamily: "Poppins-Light",
    fontSize: FontSizes.S14,
    color: "#6B6B6B",
    textTransform: "uppercase",
  },
  text: {
    fontFamily: "Poppins-SemiBold",
    fontSize: FontSizes.M16,
  },
  detail: {
    fontFamily: "Poppins-Light",
    fontSize: FontSizes.XS12,
    color: "#6B6B6B",
  },
  flex: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default MeetYourHost;
