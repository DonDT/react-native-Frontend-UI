import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Platform,
  StatusBar,
  ScrollView,
  Image,
  Dimensions,
  Animated
} from "react-native";
import { SafeAreaView } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Category from "./components/Explore/Category";
import Home from "./components/Explore/Home";
import Tag from "./components/Explore/Tag";

const { height, width } = Dimensions.get("window");

class Explore extends Component {
  componentDidMount() {
    this.scrollY = new Animated.Value(0);

    this.startHeaderHeight = 80;
    this.endHeaderHeight = 50;
    if (Platform.OS == "android") {
      this.startHeaderHeight = 100 + StatusBar.currentHeight;
      this.endHeaderHeight = 70 + StatusBar.currentHeight;
    }
    this.animatedheaderHeight = this.scrollY.interpolate({
      inputRange: [0, 50],
      outputRange: [this.startHeaderHeight, this.endHeaderHeight],
      extrapolate: "clamp"
    });
    this.animatedOpacity = this.animatedheaderHeight.interpolate({
      inputRange: [this.endHeaderHeight, this.startHeaderHeight],
      outputRange: [0, 1],
      extrapolate: "clamp"
    });
    this.animatedTagTop = this.animatedheaderHeight.interpolate({
      inputRange: [this.endHeaderHeight, this.startHeaderHeight],
      outputRange: [-30, 10],
      extrapolate: "clamp"
    });
  }

  render() {
    // SafeAreaView makes sure the component is not hidden in ios
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Animated.View
            style={{
              height: this.animatedheaderHeight,
              //height: this.startHeaderHeight,
              backgroundColor: "white",
              borderBottomWidth: 1,
              borderBottomColor: "#dddddd"
            }}
          >
            <View
              style={{
                flexDirection: "row",
                padding: 10,
                backgroundColor: "white",
                marginHorizontal: 20,
                shadowOffset: { width: 0, height: 0 },
                shadowColor: "black",
                shadowOpacity: 0.2,
                borderRadius: 12,
                elavation: 1,
                marginTop: Platform.OS == "android" ? 30 : null
              }}
            >
              <Ionicons
                name="ios-search"
                size={20}
                style={{ marginRight: 10 }}
              />
              <TextInput
                underlineColorAndroid="transparent"
                placeholder="Explore Helsinki"
                placeholderTextColor="grey"
                style={{ flex: 1, fontWeight: "700", backgroundColor: "white" }}
              />
            </View>
            <Animated.View
              style={{
                flexDirection: "row",
                marginHorizontal: 20,
                position: "relative",
                top: this.animatedTagTop,
                opacity: this.animatedOpacity
              }}
            >
              <Tag name="Guests" />
              <Tag name="Dates" />
            </Animated.View>
          </Animated.View>
          <ScrollView
            scrollEventThrottle={16}
            onScroll={Animated.event([
              { nativeEvent: { contentOffset: { y: this.scrollY } } }
            ])}
          >
            <View style={styles.mainHeader}>
              <Text style={styles.headerText}>
                What can we help you find, dear?
              </Text>
              <View style={styles.scrollNav}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <Category
                    imageURI={require("../assets/amsterdam-architectural-architecture-1258865.jpg")}
                    name="Amsterdam "
                  />
                  <Category
                    imageURI={require("../assets/art-dark-ethnic-1038041.jpg")}
                    name="All Shades"
                  />
                  <Category
                    imageURI={require("../assets/adventure-algeria-daylight-2245436.jpg")}
                    name="Desert Love"
                  />
                  <Category
                    imageURI={require("../assets/architecture-daylight-flora-2224956.jpg")}
                    name="Rome nature"
                  />
                </ScrollView>
              </View>
              <View style={styles.airbnbPlus}>
                <Text style={{ fontSize: 24, fontWeight: "700" }}>
                  {" "}
                  Introducing Airbnb Plus
                </Text>
                <Text style={{ fontWeight: "100", marginTop: 10 }}>
                  A new selection of homes verified for quality and comfort
                </Text>
                <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                  <Image
                    source={require("../assets/adventure-architecture-arid-2976370.jpg")}
                    style={{
                      flex: 1,
                      height: null,
                      width: null,
                      resizeMode: "cover",
                      borderRadius: 5,
                      borderWidth: 1,
                      borderColor: "#dddddd"
                    }}
                  />
                </View>
              </View>
            </View>
            <View style={{ marginTop: 30 }}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "700",
                  paddingHorizontal: 20
                }}
              >
                Homes around the world
              </Text>
              <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
                <Home width={width} />
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 24,
    fontWeight: "700",
    paddingHorizontal: 20
  },
  mainHeader: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 20
  },
  scrollNav: {
    height: 130,
    marginTop: 20
  },
  airbnbPlus: {
    marginTop: 40,
    paddingHorizontal: 20
  }
});

export default Explore;
