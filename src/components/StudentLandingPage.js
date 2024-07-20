import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import logo from "../assets/images/bx-happy.svg.png";
import rightArrow from "../assets/images/right-arrow.png";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import attendanceImg from "../assets/images/attendance.png";
import homeWorkImg from "../assets/images/homework.png";
import resultImg from "../assets/images/exam.png";
import examRoutineImg from "../assets/images/exam-routine.png";
import solutionImg from "../assets/images/solution.png";
import noticeandeventsImg from "../assets/images/notices-events.png";

export default function StudentLandingPage() {
  const listArr = [
    {
      id: "1",
      name: "Attendance",
      img_src: attendanceImg,
    },
    {
      id: "2",
      name: "Homework",
      img_src: homeWorkImg,
    },
    {
      id: "3",
      name: "Result",
      img_src: resultImg,
    },
    {
      id: "4",
      name: "Exam Routine",
      img_src: examRoutineImg,
    },
    {
      id: "5",
      name: "Solution",
      img_src: solutionImg,
    },
    {
      id: "6",
      name: "Quiz",
      img_src: noticeandeventsImg,
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header} />
        <View style={styles.logoDiv}>
          <Image source={logo} style={styles.iconImg} />
        </View>
        <View style={styles.firstDiv}>
          <View style={styles.firstDivSubDiv}>
            <Text style={styles.textFive}>Welcome Message</Text>
            <Image source={rightArrow} style={styles.arrowImg} />
          </View>
          <Text style={styles.textThree}>The standard Lorem Ipsum passage</Text>
          <Text style={styles.textThree}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
          </Text>
        </View>
        <View style={styles.secondDiv}>
          {listArr.map((item, itemIndex) => (
            <View style={styles.secondDivSubDiv} key={itemIndex}>
              <TouchableOpacity style={styles.imgDiv}>
                <Image source={item.img_src} style={styles.img} />
              </TouchableOpacity>
              <Text style={styles.textTwo}>{item.name}</Text>
            </View>
          ))}
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
    marginTop: 180,
    color: "black",
    fontSize: 20,
  },
  textTwo: {
    color: "black",
    fontSize: 14,
  },
  textFour: {
    color: "grey",
    fontSize: 17,
    marginTop: 10,
  },
  img: {
    height: 45,
    width: 45,
  },
  iconImg: {
    height: 140,
    width: 140,
  },
  arrowImg: {
    height: 17,
    width: 17,
  },
  firstDiv: {
    width: wp("94%"),
    height: hp("18%"),
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    marginTop: 130,
    padding: 12,
    backgroundColor: "#0C46C4",
    borderRadius: 20,
  },
  firstDivSubDiv: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "60%",
    height: "25%",
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
