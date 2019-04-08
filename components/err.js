import React from "react";
import {
  View,
  Dimensions,
  Text,
  StyleSheet,
  BackHandler,
  TouchableOpacity,
  Image
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
export default class Err extends React.Component {
  static navigationOptions = {
    header: null,
    Left: null
  };
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackButton);
  }
  handleBackButton() {
    return true;
  }
  render() {
    const device_width = Dimensions.get("window").width;
    const device_height = Dimensions.get("window").height;
    return (
      <View
        style={{
          height: device_height,
          width: device_width,
          flex: 1,
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Image
          source={require("../assets/error.png")}
          style={{ height: 600 / 2, width: 900 / 2, marginBottom: -40 }}
        />

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Landing")}
        >
          <FontAwesome name="refresh" size={50} style={{ color: "#B22222" }} />
        </TouchableOpacity>
      </View>
    );
  }
}
