import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

const ProfilePage = () => {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Text>ProfilePage</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingTop: 100,
  },
});

export default ProfilePage;
