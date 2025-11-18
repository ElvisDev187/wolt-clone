import AppleAuthButton from "@/components/auth/AppleAuthButton";
import GoogleAuthButton from "@/components/auth/GoogleAuthButton";
import { Colors, Fonts } from "@/constants/theme";
import useUserStore from "@/hooks/use-userstore";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function Page() {
  const router = useRouter();
  const { setIsGuest } = useUserStore();
  const continueAsGuest = () => {
    setIsGuest(true);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeBtn} onPress={() => router.back()}>
        <Ionicons name="close" size={20} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>Log in or create a Wolt account</Text>
      <View style={styles.buttonsContainer}>
        <Animated.View entering={FadeInDown.delay(100)}>
          {/* Apple auth */}
          <AppleAuthButton />
        </Animated.View>
        <Animated.View entering={FadeInDown.delay(200)}>
          {/* Google auth */}
          <GoogleAuthButton />
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(300)}>
          <TouchableOpacity style={styles.facebookButton}>
            <FontAwesome5 name="facebook" size={18} color="#000" />
            <Text style={styles.facebookButtonText}>
              Continue with Facebook
            </Text>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View entering={FadeInDown.delay(400)}>
          <TouchableOpacity
            style={styles.otherButton}
            onPress={continueAsGuest}
          >
            <Text style={styles.otherButtonText}>Continue as guest</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 14,
  },
  closeBtn: {
    alignSelf: "flex-end",
    backgroundColor: Colors.light,
    borderRadius: 40,
    padding: 8,
  },
  title: {
    fontSize: 30,
    marginVertical: 22,
    fontFamily: Fonts.brandBlack,
  },
  buttonsContainer: {
    width: "100%",
    gap: 12,
  },
  otherButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 17,
    borderRadius: 12,
    gap: 4,
  },
  otherButtonText: {
    color: Colors.secondary,
    fontSize: 18,
    fontWeight: "600",
  },
  facebookButton: {
    backgroundColor: Colors.light,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 17,
    borderRadius: 12,
    gap: 4,
  },
  facebookButtonText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "600",
  },
});
