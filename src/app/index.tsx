import React, { useEffect } from "react";
import { StatusBar } from "react-native";
import { View, Text } from "react-native";
import { ThemeProvider } from "styled-components/native";
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_800ExtraBold,
} from "@expo-google-fonts/poppins";
import { DMSans_400Regular } from "@expo-google-fonts/dm-sans";
import { DMSerifDisplay_400Regular } from "@expo-google-fonts/dm-serif-display";
import THEME from "../styles/theme";

// Impede que a splash screen desapareça automaticamente
SplashScreen.preventAutoHideAsync();

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_800ExtraBold,
    DMSans_400Regular,
    DMSerifDisplay_400Regular,
  });

  useEffect(() => {
    async function hideSplashScreen() {
      if (fontsLoaded) {
        await SplashScreen.hideAsync(); // Esconde a splash screen quando as fontes carregarem
      }
    }
    hideSplashScreen();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // Retorna null enquanto as fontes carregam
  }

  return (
    <ThemeProvider theme={THEME}>
      <StatusBar
        style="light"
        backgroundColor={THEME.COLORS.BACKGROUNDTRANSPARENT}
        translucent />

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",

          backgroundColor: THEME.COLORS.SUCCESS_LIGHT5,
        }}
      >
        <Text>Hello Worldss</Text>
      </View>
    </ThemeProvider>
  );
};

export default App;