import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Title = ({ title }) => {
  return <Text style={styles.title}>{title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    marginVertical: 20,
    fontSize: 32,
    fontWeight: "bold",
  },
});

export default Title;
