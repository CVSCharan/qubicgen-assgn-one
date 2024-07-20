import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import logo from "../assets/images/hero-img.png";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function StudentProfile() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header} />
        <View style={styles.logoDiv}>
          <Image source={logo} style={styles.iconImg} />
        </View>
        <View style={styles.firstDiv}>
          <View style={styles.firstDivSubDiv}>
            <Text style={styles.textOne}>ID: 165653</Text>
          </View>
          <View style={styles.firstDivSubDiv}>
            <Text style={styles.textTwo}>Full Name:</Text>
            <Text style={styles.textThree}>Prajesh Shakya</Text>
          </View>
          <View style={styles.firstDivSubDiv}>
            <Text style={styles.textTwo}>Grade:</Text>
            <Text style={styles.textThree}>9 'B'</Text>
          </View>
          <View style={styles.firstDivSubDiv}>
            <Text style={styles.textTwo}>Roll No.:</Text>
            <Text style={styles.textThree}>21</Text>
          </View>
          <View style={styles.firstDivSubDiv}>
            <Text style={styles.textTwo}>Address:</Text>
            <Text style={styles.textThree}>Prajesh Shakya</Text>
          </View>
          <View style={styles.firstDivSubDiv}>
            <Text style={styles.textTwo}>Gaurdian's Name:</Text>
            <Text style={styles.textThree}>Prajesh Shakya</Text>
          </View>
          <View style={styles.firstDivSubDiv}>
            <Text style={styles.textTwo}>Gaurdian's Contact:</Text>
            <Text style={styles.textThree}>9999999999</Text>
          </View>
          <TouchableOpacity style={styles.editBtn}>
            <Text style={styles.textFour}>Request Edit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    width: wp("100%"),
    height: hp("100%"),
  },
  container: {
    width: wp("100%"),
    height: hp("100%"),
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  header: {
    width: wp("100%"),
    height: hp("20%"),
    backgroundColor: "#28C2A0",
    borderColor: "transparent",
    borderBottomLeftRadius: 120,
    borderBottomRightRadius: 120,
    position: "relative",
  },
  logoDiv: {
    height: 200,
    width: 200,
    borderColor: "#28C2A0",
    borderWidth: 8,
    borderRadius: 200,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "10%",
  },
  textOne: {
    color: "#0C46C4",
    fontSize: 22,
    fontWeight: "bold",
  },
  textTwo: {
    color: "#0C46C4",
    fontSize: 17,
  },
  textThree: {
    color: "black",
    fontSize: 18,
  },
  textFour: {
    color: "white",
    fontSize: 20,
  },
  img: {
    height: 45,
    width: 45,
  },
  iconImg: {
    height: 140,
    width: 140,
  },
  firstDiv: {
    width: wp("94%"),
    height: hp("57%"),
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    marginTop: 120,
    padding: 10,
    backgroundColor: "white",
  },
  firstDivSubDiv: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    width: "60%",
    height: "15%",
  },
  textFive: {
    color: "white",
    fontSize: 20,
  },
  imgDiv: {
    borderRadius: 10,
    backgroundColor: "rgba(40, 194, 160, 0.25)", // #28C2A0 with 25% opacity
    height: "60%",
    width: "70%",
    justifyContent: "center",
    alignItems: "center",
  },
  editBtn: {
    width: wp("90%"),
    height: hp("6%"),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0C46C4",
    marginTop: 20,
    borderRadius: 20,
  },
});
