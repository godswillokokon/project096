import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import Expo from "expo";

export default class App extends Component {
  state = {
    location: null
  };

  _getLocationAsync = async () => {
    let { status } = await Expo.Permissions.askAsync(Expo.Permissions.LOCATION);
    if (status !== "granted") {
      console.error("Location permission not granted!");
      return;
    }

    let location = await Expo.Location.getCurrentPositionAsync({});

    const cy = (await Expo.Location.geocodeAsync("12 Yellow duke lane"))[0];
    const deGuyNext = (await Expo.Location.geocodeAsync(
      "14 Bassey duke St."
    ))[0];
    const betShop = (await Expo.Location.geocodeAsync("watt market"))[0];

    let where = (await Expo.Location.reverseGeocodeAsync(location.coords))[0];
    console.log(where);

    this.setState({
      location,
      places: {
        cy,
        deGuyNext,
        betShop
      },
      where
    });
  };

  componentDidMount() {
    this._getLocationAsync();
  }

  render() {
    if (!this.state.location) {
      return <View />;
    }
    return (
      <Expo.MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: this.state.location.coords.latitude,
          longitude: this.state.location.coords.longitude,
          latitudeDelta: 0.0922 / 4.5,
          longitudeDelta: 0.0421 / 4.5
        }}
      >
        <Expo.MapView.Marker
          coordinate={this.state.location.coords}
          title="You dey here"
          description="Current Location"
          pinColor="green"
        />
        <Expo.MapView.Marker
          coordinate={this.state.places.cy}
          title="ETF 2"
          description="Big Hall"
          pinColor="blue"
        />

        <Expo.MapView.Marker
          coordinate={this.state.places.deGuyNext}
          title="ETF 1"
          description="Big Hall"
          pinColor="crimson"
        />

        <Expo.MapView.Marker
          coordinate={this.state.places.betShop}
          title="PREFEB 1"
          description="Small Hall"
          pinColor="yellow"
        />
      </Expo.MapView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1"
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#34495e"
  }
});
