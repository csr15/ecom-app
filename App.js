import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_300Light,
} from "@expo-google-fonts/inter";
import { Pacifico_400Regular } from "@expo-google-fonts/pacifico";
import AppLoading from "expo-app-loading";
import { enableScreens } from "react-native-screens";

import Navigator from "./Navigation/Navigator";

enableScreens();

export default function App() {
  const [loadedFonts] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Pacifico_400Regular,
    Inter_300Light,
  });

  if (!loadedFonts) {
    return <AppLoading />;
  } else {
    return <Navigator />;
  }
}

console.disableYellowBox = true;
