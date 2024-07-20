import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BootSplash from "react-native-bootsplash";
import ChooseYourOption from "./src/components/ChooseYourOption";
import TeacherLandingPage from "./src/components/TeacherLandingPage";
import StudentLandingPage from "./src/components/StudentLandingPage";
import LoginScreen from "./src/components/Login";
import StudentProfile from "./src/components/StudentProfile";
import GuestLandingPage from "./src/components/GuestLandingPage";
import StudentHomeWorkPage from "./src/components/StudentHomeWorkPage";
import StudentQuiz from "./src/components/StudentQuiz";
import StudentResult from "./src/components/StudentResult";

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await BootSplash.hide({ fade: true });
      console.log("BootSplash has been hidden successfully");
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={ChooseYourOption}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TeacherScreen"
          component={TeacherLandingPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="StudentScreen"
          component={StudentLandingPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GuestScreen"
          component={GuestLandingPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SProfileScreen"
          component={StudentProfile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SHomeWorkScreen"
          component={StudentHomeWorkPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SQuizScreen"
          component={StudentQuiz}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SResultScreen"
          component={StudentResult}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
