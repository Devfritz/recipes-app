import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import colors from "../../constants/constants";

const Button = ({ children, style = {}, onPress }) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={{ fontSize: 20, color: colors.white, textAlign: "center" }}>
        {children}
      </Text>
      <Image
        source={require("../../../assets/arrowRight.png")}
        style={{ width: 25, height: 25, marginLeft: 15 }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.green,
    alignSelf: "stretch",
    marginHorizontal: 25,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 15,
    marginBottom: 20,
  },
});

export default Button;
