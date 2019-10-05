import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";

class Home extends Component {
  render() {
    return (
      <View>
        <View
          style={{
            width: this.props.width / 2,
            height: this.props.width / 2,
            borderWidth: 0.5,
            borderColor: "#dddddd"
          }}
        >
          <View style={{ flex: 1 }}>
            <Image
              source={require("../../../assets/animal-animal-photography-aviary.jpg")}
              style={{
                flex: 1,
                width: null,
                height: null,
                resizeMode: "cover"
              }}
            />
          </View>
          <View
            style={{
              flex: 1,
              alignItems: "flex-start",
              justifyContent: "space-evenly",
              paddingLeft: 10
            }}
          >
            <Text style={{ fontSize: 14, color: "#b63838" }}>
              PRIVATE ROOM - 2 BEDS
            </Text>
            <Text style={{ fontSize: 12, fontWeight: "bold" }}>
              The Cozy Palace
            </Text>
            <Text style={{ fontSize: 12 }}>€82</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default Home;
