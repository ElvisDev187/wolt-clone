import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const SCROLL_TRESHOLD = 60;

interface RestaurantHeaderProps {
  title: string;
  scrollOffset: SharedValue<number>;
}

const RestaurantHeader = ({ title, scrollOffset }: RestaurantHeaderProps) => {
  const insets = useSafeAreaInsets();

  const header1Style = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollOffset.value,
      [0, SCROLL_TRESHOLD * 0.6],
      [1, 0],
      Extrapolation.CLAMP
    );
    const translateY = interpolate(
      scrollOffset.value,
      [0, SCROLL_TRESHOLD * 0.6],
      [0, -10],
      Extrapolation.CLAMP
    );
    return {
      opacity,
      transform: [{ translateY }],
    };
  });

  const header2Style = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollOffset.value,
      [SCROLL_TRESHOLD * 0.3, SCROLL_TRESHOLD],
      [0, 1],
      Extrapolation.CLAMP
    );
    const translateY = interpolate(
      scrollOffset.value,
      [SCROLL_TRESHOLD * 0.3, SCROLL_TRESHOLD],
      [-10, 0],
      Extrapolation.CLAMP
    );
    return {
      opacity,
      transform: [{ translateY }],
    };
  });

  const shadowStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollOffset.value,
      [0, SCROLL_TRESHOLD],
      [0, 1],
      Extrapolation.CLAMP
    );
    return {
      shadowOpacity: opacity * 0.1,
      elevation: opacity * 6,
    };
  });

  return (
    <Animated.View
      style={[styles.headerContainer, shadowStyle, { paddingTop: insets.top }]}
    >
      {/* Header 1 */}
      <Animated.View style={[styles.header1, header1Style]}>
        <Link href={"/(app)/(auth)/(modal)/location"} asChild>
          <TouchableOpacity style={styles.locationBtn}>
            <View style={styles.locationBtnIcon}>
              <Ionicons name="business-outline" size={16} />
            </View>
            <Text style={styles.locationText}>Münster</Text>
            <Ionicons name="chevron-down" size={16} />
          </TouchableOpacity>
        </Link>
        <View style={styles.rigthIcons}>
          <Link href={"/(app)/(auth)/(modal)/filter"} asChild>
            <TouchableOpacity style={styles.iconBtn}>
              <Ionicons name="filter" size={20} />
            </TouchableOpacity>
          </Link>
          <TouchableOpacity style={styles.iconBtn}>
            <Ionicons name="map-outline" size={20} />
          </TouchableOpacity>
        </View>
      </Animated.View>

      {/* Header 2 */}
      <Animated.View style={[styles.header2, header2Style]}>
        <View style={styles.centerContent}>
          <Text style={styles.titleSmall}>{title}</Text>
          <Link href={"/(app)/(auth)/(modal)/location"} asChild>
            <TouchableOpacity style={styles.locationSmall}>
              <Text style={styles.locationSmallText}>Münster</Text>
              <Ionicons name="chevron-down" size={16} />
            </TouchableOpacity>
          </Link>
        </View>
        <View style={styles.rigthIcons}>
          <Link href={"/(app)/(auth)/(modal)/filter"} asChild>
            <TouchableOpacity style={styles.iconBtn}>
              <Ionicons name="filter" size={20} />
            </TouchableOpacity>
          </Link>
        </View>
      </Animated.View>

      <StatusBar animated barStyle={"dark-content"} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    zIndex: 100,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  header1: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header2: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  locationBtn: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    gap: 6,
  },
  locationBtnIcon: {
    backgroundColor: Colors.light,
    borderRadius: 20,
    padding: 10,
  },
  locationText: {
    fontSize: 14,
    fontWeight: "600",
  },
  rigthIcons: {
    flexDirection: "row",
    gap: 8,
  },
  iconBtn: {
    width: 40,
    height: 40,
    backgroundColor: Colors.light,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  centerContent: {
    flex: 1,
    alignItems: "center",
    paddingLeft: 40,
  },
  titleSmall: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 2,
  },
  locationSmall: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  locationSmallText: {
    fontSize: 12,
    color: Colors.muted,
  },
});

export default RestaurantHeader;
