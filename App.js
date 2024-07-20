import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BootSplash from "react-native-bootsplash";
import ChooseYourOption from "./src/components/ChooseYourOption";
import TeacherLandingPage from "./src/components/TeacherLandingPage";
import StudentLandingPage from "./src/components/StudentLandingPage";

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
          name="TeacherScreen"
          component={TeacherLandingPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="StudentScreen"
          component={StudentLandingPage}
          options={{ headerBackTitle: "Back" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
