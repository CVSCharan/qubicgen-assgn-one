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
import sResultImg from "../assets/images/s-result-img.png";

const StudentResult = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={sResultImg} style={styles.iconImg} />
          <Text style={styles.textOne}>RESULT</Text>
        </View>
        <View style={styles.firstDiv}>
          <View style={styles.firstDivSubDiv}>
            <View style={styles.subDiv}>
              <Text style={styles.textTwo}>First Terminal</Text>
              <View style={styles.subDivOne} />
              <Text style={styles.textFour}>VIEW</Text>
            </View>
          </View>
          <View style={styles.firstDivSubDiv}>
            <View style={styles.subDiv}>
              <Text style={styles.textTwo}>Second Terminal</Text>
              <View style={styles.subDivOne} />
              <Text style={styles.textFour}>VIEW</Text>
            </View>
          </View>
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
    fontSize: 18,
    fontWeight: "bold",
  },
  textFour: {
    color: "#0C46C4",
    fontSize: 17,
    alignSelf: "flex-end",
  },
  img: {
    height: 25,
    width: 25,
  },
  iconImg: {
    height: 40,
    width: 40,
  },
  firstDiv: {
    width: wp("94%"),
    height: hp("78%"),
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
    height: "40%",
    backgroundColor: "#0C46C4",
    borderRadius: 20,
    paddingTop: 17,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  subDiv: {
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: "column",
    justifyContent: "space-evenly",
    padding: 20,
  },
  subDivOne: {
    height: "30%",
    width: "100%",
    backgroundColor: "#C4C4C4",
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

export default StudentResult;
