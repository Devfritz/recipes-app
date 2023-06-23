import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";

const Container = ({ children }) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24 },
});

export default Container;
