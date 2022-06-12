import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import ScreenWrapper from "../components/ScreenWrapper";
import MapView, { MAP_TYPES, ProviderPropType } from "react-native-maps";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Colors, FontSizes } from "../styles";
const { width, height } = Dimensions.get("window");
import CardSilder from "react-native-cards-slider";
import FeaturedCard from "../components/FeaturedCard";
import ShelterSingleScreen, {
  ShelterSingleScreenNavName,
} from "./ShelterSingleScreen";
import ShelterSingleScreen2, {
  ShelterSingleScreen2NavName,
} from "./ShelterSingleScreen2";
import { ShelterSingleScreen3NavName } from "./ShelterSingleScreen3";
import { ShelterSingleScreen4NavName } from "./ShelterSingleScreen4";

const ASPECT_RATIO = width / height;
const LATITUDE = 54.526;
const LONGITUDE = 15.2551;
const LATITUDE_DELTA = 50;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export const LocationScreenNavName = "LocationScreen";

export const BackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack(null)}>
      <View style={styles.back}>
        <Ionicons name="chevron-back-outline" size={35} color="black" />
        <Text style={styles.text}>Back</Text>
      </View>
    </TouchableOpacity>
  );
};
class LocationScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      markers: [],
    };
  }

  onRegionChange(region) {
    this.setState({ region });
  }

  getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
  }

  randomCoordinate() {
    const region = this.state.region;
    return {
      latitude:
        region.latitude + (Math.random() - 0.5) * (region.latitudeDelta / 2),
      longitude:
        region.longitude + (Math.random() - 0.5) * (region.longitudeDelta / 2),
    };
  }

  randomRegion() {
    return {
      ...this.state.region,
      ...this.randomCoordinate(),
    };
  }

  render() {
    return (
      <>
        <BackButton />
        <View style={styles.container}>
          <MapView
            provider={this.props.provider}
            ref={(ref) => {
              this.map = ref;
            }}
            mapType={MAP_TYPES.STANDARD}
            style={styles.map}
            initialRegion={this.state.region}
            onRegionChange={(region) => this.onRegionChange(region)}
          >
            <MapView.Marker
              coordinate={{ latitude: 47.4979, longitude: 19.0402 }}
              title={"2 bed flat"}
              description={"Spacious 2 bed flat in the centre of Budapest."}
            />
            <MapView.Marker
              coordinate={{ latitude: 51.5072, longitude: 0.1276 }}
              title={"3 bed shared room with bathroom"}
              description={"Cosy 3 bed shared room available with bathroom."}
            />
            <MapView.Marker
              coordinate={{ latitude: 41.9028, longitude: 12.4964 }}
              title={"Flat for 2"}
            />

            <MapView.Marker
              coordinate={{ latitude: 52.52, longitude: 13.405 }}
              title={"Spare room for 1 person"}
            />
          </MapView>
        </View>
        <CardSilder style={{ marginTop: 30, position: "absolute", bottom: 20 }}>
          <FeaturedCard
            title="3 bed shared room"
            people="3 people"
            location="London, United Kingdom"
            image={require("../assets/images/image_3.png")}
            navScreenName={ShelterSingleScreenNavName}
          />
          <FeaturedCard
            title="2 bed flat"
            people="6 people"
            location="Budapest, Hungary"
            image={require("../assets/images/image_4.png")}
            navScreenName={ShelterSingleScreen2NavName}
          />
          <FeaturedCard
            title="Spare room"
            people="1-2 people"
            location="Berlin, Germany"
            image={require("../assets/images/image_6.png")}
            navScreenName={ShelterSingleScreen3NavName}
          />
          <FeaturedCard
            title="Spare room"
            people="1 person"
            location="Rome, Italy"
            image={require("../assets/images/image_5.png")}
            navScreenName={ShelterSingleScreen4NavName}
          />
        </CardSilder>
      </>
    );
  }
}

LocationScreen.propTypes = {
  provider: ProviderPropType,
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -1,
  },
  bubble: {
    backgroundColor: "rgba(255,255,255,0.7)",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: "stretch",
  },
  button: {
    width: 100,
    paddingHorizontal: 8,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    marginVertical: 20,
    backgroundColor: "transparent",
  },
  buttonText: {
    textAlign: "center",
  },
  back: {
    flexDirection: "row",
    paddingTop: 40,
    paddingLeft: 10,
    alignItems: "center",
    paddingBottom: 20,
    zIndex: 1,
    position: "absolute",
    top: 0,
    left: 0,
  },
  text: {
    fontFamily: "Poppins-Light",
    fontSize: FontSizes.M16,
  },
});

export default LocationScreen;
