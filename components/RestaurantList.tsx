import { Colors } from "@/constants/theme";
import { useRestaurants } from "@/hooks/useRestaurants";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const RestaurantList = () => {
  const { data: restaurants, isLoading, error } = useRestaurants();

  if (isLoading)
    return (
      <View>
        <ActivityIndicator size={"large"} color={Colors.secondary} />
      </View>
    );
  if (error) return <Text>Error...</Text>;

  return (
    <>
      {restaurants?.map((restaurant) => (
        <View key={restaurant.id}>
          <TouchableOpacity style={styles.card}>
            <Image source={restaurant.image!} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.name}>{restaurant.name}</Text>
              <Text style={styles.description} numberOfLines={2}>
                {restaurant.description}
              </Text>
            </View>
            <View style={styles.metadata}>
              <Ionicons name="bicycle-outline" size={18} color={Colors.muted} />
              <Text style={styles.metadataText}>
                €{restaurant.deliveryFee.toFixed(2)}
              </Text>
              <Text style={styles.dot}>.</Text>
              <Text style={styles.metadataText}>€€€€</Text>
              <Text style={styles.dot}>.</Text>
              <Ionicons name="happy-outline" size={18} color={Colors.muted} />
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    margin: 16,
    boxShadow: "0px 4px 2px -2px rgba(0, 0, 0, 0.2)",
    elevation: 2,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.light,
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: 8,
  },
  info: {
    padding: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: Colors.muted,
  },
  metadata: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: Colors.light,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    padding: 12,
  },
  metadataText: {
    fontSize: 13,
    color: Colors.muted,
  },
  dot: {
    fontSize: 13,
    color: "#999",
  },
});

export default RestaurantList;
