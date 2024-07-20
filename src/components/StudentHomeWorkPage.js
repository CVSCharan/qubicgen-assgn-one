import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import sHomeWorkImg from "../assets/images/s-homework-img.png";

const StudentHomeWorkPage = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={sHomeWorkImg} style={styles.iconImg} />
          <Text style={styles.textOne}>HOMEWORK</Text>
        </View>
        <View style={styles.firstDiv}>
          <Text style={styles.textTwo}>
            Math_2078/4/8{"<homework file name>"}
          </Text>
          <View style={styles.firstDivSubDiv} />
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.textOne}>Downlad your Homework</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

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
    height: hp("10%"),
    flexDirection: "row",
    backgroundColor: "#0C46C4",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
    gap: 20,
  },
  textOne: {
    color: "white",
    fontSize: 22,
  },
  textTwo: {
    color: "#0C46C4",
    fontSize: 17,
  },
  textFour: {
    color: "grey",
    fontSize: 17,
    marginTop: 10,
  },
  img: {
    height: 25,
    width: 25,
  },
  iconImg: {
    height: 40,
    width: 40,
  },
  loginBtn: {
    width: wp("90%"),
    height: hp("7%"),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0C46C4",
    marginTop: 40,
    borderRadius: 20,
  },
  firstDiv: {
    width: wp("94%"),
    height: hp("58%"),
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    marginTop: 30,
    padding: 12,
    backgroundColor: "white",
  },
  firstDivSubDiv: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "35%",
    backgroundColor: "#C4C4C4",
  },
  secondDiv: {
    width: wp("90%"),
    height: hp("37%"),
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginTop: 30,
    padding: 7,
    flexWrap: "wrap",
    gap: 15,
  },
  secondDivSubDiv: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    width: "30%",
    height: "33%",
  },
  textThree: {
    color: "white",
    fontSize: 15,
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
});

export default StudentHomeWorkPage;
