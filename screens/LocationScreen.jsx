import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

import MapView, { MAP_TYPES, ProviderPropType } from "react-native-maps";

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE = 51.509865;
const LONGITUDE = -0.118092;
const LATITUDE_DELTA = 0.3;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export const LocationScreenNavName = "LocationScreen";
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
    console.log(this.state.markers);
    let markers = this.state.markers.slice(0, 2);
    return (
      <ScreenWrapper title="Available accomodation" stickyHeaderIndices={[1]}>
      <SearchBar />
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
          onPress={(e) =>
            this.setState({
              markers: [
                ...this.state.markers,
                { latlng: e.nativeEvent.coordinate },
              ],
            })
          }
        >
          {markers.map((marker, i) => (
            <MapView.Marker
              draggable
              coordinate={marker.latlng}
              key={i}
              onDragEnd={(e) =>
                this.setState({
                  markers: [
                    ...this.state.markers,
                    { latlng: e.nativeEvent.coordinate },
                  ],
                })
              }
            />
          ))}
        </MapView>
        <View style={[styles.bubble, styles.latlng]}>
          <Text style={{ textAlign: "center" }}>
            {this.state.region.latitude.toPrecision(7)},
            {this.state.region.longitude.toPrecision(7)}
          </Text>
        </View>
      </View>
      </ScreenWrapper>
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
});

export default LocationScreen;
