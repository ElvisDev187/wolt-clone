import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Feed",
          headerTitleAlign: "center",
          contentStyle: { backgroundColor: "#ffff" },
        }}
      />
    </Stack>
  );
};

export default Layout;
