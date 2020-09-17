import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      text1: "green",
      show1: "green",
      text2: "red",
      show2: "red",
      text3: "yellow",
      show3: "yellow",
      text4: "purple",
      show4: "purple",
    };
  }

  updateText1 = () => {
    if (this.state.show1 === this.state.text1) {
      this.setState({
        show1: "pink",
      });
    } else {
      this.setState({
        show1: this.state.text1,
      });
    }
  };

  updateText2 = () => {
    if (this.state.show2 === this.state.text2) {
      this.setState({
        show2: "orange",
      });
    } else {
      this.setState({
        show2: this.state.text2,
      });
    }
  };

  updateText3 = () => {
    if (this.state.show3 === this.state.text3) {
      this.setState({
        show3: "blue",
      });
    } else {
      this.setState({
        show3: this.state.text3,
      });
    }
  };

  updateText4 = () => {
    if (this.state.show4 === this.state.text4) {
      this.setState({
        show4: "grey",
      });
    } else {
      this.setState({
        show4: this.state.text4,
      });
    }
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            backgroundColor: "powderblue",
          }}
        >
          <View style={{ width: 100, justifyContent: "space-evenly" }}>
            <Button title="Button1" onPress={this.updateText1} />
          </View>
          <View style={{ width: 100, justifyContent: "space-evenly" }}>
            <Button title="Button2" onPress={this.updateText2} />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            backgroundColor: "powderblue",
          }}
        >
          <View style={{ width: 100, justifyContent: "space-evenly" }}>
            <Button title="Button3" onPress={this.updateText3} />
          </View>
          <View style={{ width: 100, justifyContent: "space-evenly" }}>
            <Button title="Button4" onPress={this.updateText4} />
          </View>
        </View>
        <View
          style={{
            flex: 2,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
            backgroundColor: "skyblue",
          }}
        >
          <View style={{ width: 100, justifyContent: "space-evenly" }}>
            <Button title="Text1" color={this.state.show1} />
          </View>
          <View style={{ width: 100, justifyContent: "space-evenly" }}>
            <Button title="Text2" color={this.state.show2} />
          </View>
          <View style={{ width: 100, justifyContent: "space-evenly" }}>
            <Button title="Text3" color={this.state.show3} />
          </View>
          <View style={{ width: 100, justifyContent: "space-evenly" }}>
            <Button title="Text4" color={this.state.show4} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
