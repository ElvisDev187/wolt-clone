import AppleAuthButton from "@/components/auth/AppleAuthButton";
import GoogleAuthButton from "@/components/auth/GoogleAuthButton";
import SmooyhInfiniteScroll from "@/components/SmooyhInfiniteScroll";
import { Fonts } from "@/constants/theme";
import { LinearGradient } from "expo-linear-gradient";
import {
  Image,
  Linking,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
export default function Index() {
  const openWebBrowser = () => {
    Linking.openURL("https://galaxies.dev");
  };
  return (
    <View style={styles.container}>
      <StatusBar animated barStyle={"dark-content"} />
      <View style={styles.infiniteScrollContainer}>
        <View>
          <SmooyhInfiniteScroll scrollDirection="down" iconSet="set1" />
        </View>
        <View>
          <SmooyhInfiniteScroll scrollDirection="up" iconSet="set2" />
        </View>
        <View>
          <SmooyhInfiniteScroll scrollDirection="down" iconSet="set3" />
        </View>
        <LinearGradient
          colors={["transparent", "#ffff"]}
          style={{
            position: "absolute",
            height: 200,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        />
      </View>

      <View style={styles.contentContainer}>
        <Image
          source={require("@/assets/images/wolt-logo.png")}
          style={styles.brandLogo}
        />
        <Animated.Text entering={FadeInDown} style={styles.tagLine}>
          Almost everything delivered
        </Animated.Text>

        {/* Login Buttons */}
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
            <TouchableOpacity style={styles.otherButton}>
              <Text style={styles.otherButtonText}>Other options</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
        <Animated.View
          style={styles.privacyContainer}
          entering={FadeInDown.delay(400)}
        >
          <Text style={styles.privacyText}>
            Please visit{" "}
            <Text style={styles.privacyLink} onPress={openWebBrowser}>
              Wolt Privacy Statement
            </Text>{" "}
            to learn about personal data processing at Wolt.
          </Text>
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  contentContainer: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  brandLogo: {
    width: "100%",
    height: 48,
    resizeMode: "contain",
    marginBottom: 20,
  },
  tagLine: {
    fontSize: 32,
    fontFamily: Fonts.brandBlack,
    textAlign: "center",
    marginBottom: 50,
    lineHeight: 36,
  },
  buttonsContainer: {
    width: "100%",
    gap: 12,
  },

  otherButton: {
    backgroundColor: "#f0f0f0",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 17,
    borderRadius: 12,
    gap: 4,
  },
  otherButtonText: {
    color: "#666",
    fontSize: 18,
    fontWeight: "600",
  },
  privacyContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  privacyText: {
    fontSize: 12,
    color: "#999",
    textAlign: "center",
    lineHeight: 18,
  },
  privacyLink: {
    color: "#4285F4",
    textDecorationLine: "underline",
  },
  infiniteScrollContainer: {
    flex: 0.8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
    position: "relative",
  },
});
