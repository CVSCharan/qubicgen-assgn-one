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
import sQuizImg from "../assets/images/s-result-img.png";
import quizImg from "../assets/images/start-quiz-img.png";

const StudentQuiz = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={sQuizImg} style={styles.iconImg} />
          <Text style={styles.textOne}>QUIZ</Text>
        </View>
        <View style={styles.firstDiv}>
          <Text style={styles.textTwo}>Start Quiz</Text>
          <Image source={quizImg} style={styles.img} />
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.textOne}>Start</Text>
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
    color: "black",
    fontSize: 22,
  },
  textFour: {
    color: "grey",
    fontSize: 17,
    marginTop: 10,
  },
  img: {
    height: 140,
    width: 170,
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
    alignItems: "center",
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

export default StudentQuiz;
