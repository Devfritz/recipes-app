import React from "react";
import { View, StyleSheet, TextInput, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../../constants/constants";
const Input = ({ placeholder, onPress, pressable }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <MaterialIcons name="search" size={30} />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={colors.lightGrey}
        editable={!pressable}
        style={{ flex: 1 }}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    borderRadius: 15,
    borderWidth: 1,
    padding: 8,
    borderColor: colors.lightGrey,
  },
});

export default Input;
