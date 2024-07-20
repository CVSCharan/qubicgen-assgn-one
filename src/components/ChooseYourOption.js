import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import logo from "../assets/images/assgn-logo.png";
import studentImg from "../assets/images/student-icon.png";
import teacherImg from "../assets/images/teacher-icon.png";
import guestImg from "../assets/images/guest-icon.png";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function ChooseYourOption() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header} />
        <View style={styles.logoDiv}>
          <Image source={logo} style={styles.iconImg} />
        </View>
        <Text style={styles.textOne}>Choose your option</Text>
        <View style={styles.divOne}>
          <View style={styles.divOneSubDiv}>
            <TouchableOpacity
              onPress={() => navigation.navigate("StudentScreen")}
              style={styles.imgDiv}
            >
              <Image source={studentImg} style={styles.img} />
            </TouchableOpacity>
            <Text style={styles.textTwo}>Student</Text>
          </View>
          <View style={styles.divOneSubDiv}>
            <TouchableOpacity
              style={styles.imgDiv}
              onPress={() => navigation.navigate("LoginScreen")}
            >
              <Image source={teacherImg} style={styles.img} />
            </TouchableOpacity>
            <Text style={styles.textTwo}>Teacher</Text>
          </View>
        </View>
        <View style={styles.divOne}>
          <View style={styles.divOneSubDiv}>
            <TouchableOpacity
              onPress={() => navigation.navigate("TeacherScreen")}
              style={styles.imgDiv}
            >
              <Image source={guestImg} style={styles.img} />
            </TouchableOpacity>
            <Text style={styles.textTwo}>Guest</Text>
          </View>
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
  divOne: {
    width: wp("100%"),
    height: hp("20%"),
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 20,
  },
  divOneSubDiv: {
    width: "50%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 20,
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
    marginTop: 180,
    color: "black",
    fontSize: 20,
  },
  textTwo: {
    color: "black",
    fontSize: 17,
  },
  iconImg: {
    height: 130,
    width: 100,
  },
  img: {
    height: 60,
    width: 60,
  },
  imgDiv: {
    backgroundColor: "blue",
    borderRadius: 10,
    padding: 10,
  },
});
