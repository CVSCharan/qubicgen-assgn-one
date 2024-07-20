import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import logo from "../assets/images/assgn-logo.png";
import userIcon from "../assets/images/username-icon.png";
import passwordIcon from "../assets/images/password-icon.png";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header} />
        <View style={styles.logoDiv}>
          <Image source={logo} style={styles.iconImg} />
        </View>
        <View style={styles.firstDiv}>
          <Text style={styles.textTwo}>User Name</Text>
          <View style={styles.firstDivSubDiv}>
            <TextInput
              style={styles.input}
              placeholder="Username"
              value={username}
              onChangeText={setUsername}
            />
            <Image source={userIcon} style={styles.img} />
          </View>
        </View>
        <View style={styles.secondDiv}>
          <Text style={styles.textTwo}>Password</Text>
          <View style={styles.secondDivSubDiv}>
            <TextInput
              style={styles.input}
              placeholder="************"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
            />
            <Image source={passwordIcon} style={styles.img} />
          </View>
        </View>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.textThree}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.textFour}>Forgot Password ?</Text>
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
    marginTop: 180,
    color: "black",
    fontSize: 20,
  },
  textTwo: {
    color: "black",
    fontSize: 17,
  },
  textFour: {
    color: "grey",
    fontSize: 17,
    marginTop: 10,
  },
  img: {
    height: 17,
    width: 17,
  },
  iconImg: {
    height: 130,
    width: 100,
  },
  firstDiv: {
    width: wp("90%"),
    height: hp("17%"),
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    marginTop: 160,
    padding: 7,
  },
  firstDivSubDiv: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 2,
    width: "100%",
  },
  secondDiv: {
    width: wp("90%"),
    height: hp("17%"),
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    marginTop: 7,
    padding: 7,
  },
  secondDivSubDiv: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 2,
    width: "100%",
  },
  input: {
    width: "80%",
    paddingLeft: 7,
    fontSize: 17,
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
  textThree: {
    color: "white",
    fontSize: 22,
  },
});
