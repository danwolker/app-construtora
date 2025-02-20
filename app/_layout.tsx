import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { useEffect } from "react";

interface ScreenOptions {
  name: string;
  options: {
    title: string;
    headerShown: boolean;
  };
}

const screensOptionsList: ScreenOptions[] = [
  { name: "(tabs)/login", options: { title: "Login", headerShown: true } },
  // { name: "(tabs)/home", options: { title: "Home", headerShown: true } },
];

// GestureHandlerRootView => Necessário para capturar corretamente gestos (Swipe, Pan, etc.) dentro do aplicativo
// SafeAreaProvider => Necessário para evitar que elementos fiquem atrás da barra de status

// TODO: Implementar tela inicial dinâmica de acordo com o estado de autenticação do usuário

const RootLayout = () => {

  const router = useRouter();

  useEffect(() => {
    router.replace("/(tabs)/login"); // Redireciona para login ao iniciar
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <Stack initialRouteName="(tabs)/login">
          {screensOptionsList.map((screen) => (
            <Stack.Screen
              key={screen.name}
              name={screen.name}
              options={screen.options}
            />
          ))}
        </Stack>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default RootLayout;