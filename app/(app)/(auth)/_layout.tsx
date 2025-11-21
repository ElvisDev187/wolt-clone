import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";

const Layout = () => {
  const router = useRouter();
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(modal)/location"
        options={{
          presentation: "formSheet",
          title: "",
          sheetGrabberVisible: true,
          sheetAllowedDetents: [0.7],
          sheetCornerRadius: 18,
          headerShadowVisible: false,
          headerRight: () => (
            <TouchableOpacity
              style={{
                padding: 4,
                borderRadius: 20,
                backgroundColor: "#e9e9e9ff",
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => router.dismiss()}
            >
              <Ionicons name="close-sharp" size={28} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="(modal)/filter"
        options={{
          presentation: "formSheet",
          title: "",
          sheetGrabberVisible: true,
          sheetAllowedDetents: [0.8],
          sheetCornerRadius: 18,
          headerShadowVisible: false,
          contentStyle: { backgroundColor: "#fff" },
          headerRight: () => (
            <TouchableOpacity
              style={{
                padding: 4,
                borderRadius: 20,
                backgroundColor: "#e9e9e9ff",
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => router.dismiss()}
            >
              <Ionicons name="close-sharp" size={28} />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
};
export default Layout;
