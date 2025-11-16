import {
  Nunito_400Regular,
  Nunito_700Bold,
  Nunito_900Black,
} from "@expo-google-fonts/nunito";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
const queryClient = new QueryClient();
export default function RootLayout() {
  const insets = useSafeAreaInsets();
  let [fontLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
    Nunito_900Black,
  });
  if (!fontLoaded) return null;
  return (
    <GestureHandlerRootView
      style={{ flex: 1, paddingBottom: insets.bottom, backgroundColor: "#fff" }}
    >
      <QueryClientProvider client={queryClient}>
        <Slot />
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}
