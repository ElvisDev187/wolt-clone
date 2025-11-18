import { Stack } from "expo-router";
import React from "react";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          contentStyle: { backgroundColor: "#ffff" },
        }}
      />
      <Stack.Screen
        name="other-options"
        options={{
          headerShown: false,
          presentation: "formSheet",
          title: "",
          headerShadowVisible: false,
          sheetAllowedDetents: [0.6],
          sheetCornerRadius: 18,
        }}
      />
    </Stack>
  );
};

export default Layout;
