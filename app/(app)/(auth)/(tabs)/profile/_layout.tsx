import { Stack } from "expo-router";
import React from "react";

const ProfileLayout = () => {
  return (
    <Stack screenOptions={{ contentStyle: { backgroundColor: "#fff" } }}>
      <Stack.Screen
        name="index"
        options={{
          title: "Profile",
          headerLargeTitle: true,
          headerTitleAlign: "left",
          headerTransparent: true,
        }}
      />
    </Stack>
  );
};

export default ProfileLayout;
