import React, { Component } from "react";
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator
} from "react-navigation";
import Landing from "./components/landing";
import Cgpa from "./components/cgpa";
import Maps from "./components/map";
import Memo from "./components/memo";
import Material from "./components/material";

class App extends Component {
  render() {
    return <AppStack />;
  }
}
const AppStack = createDrawerNavigator({
  Landing,
  Cgpa,
  Maps,
  Memo,
  Material
});
export default createAppContainer(AppStack);
