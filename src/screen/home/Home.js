import React from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import Input from "../../components/input/Input";
import Container from "../../components/container/Container";
import { useNavigation } from "@react-navigation/native";

const Home = (props) => {
  const navigation = useNavigation();
  return (
    <Container>
      <Input
        pressable
        placeholder={"Search Recipes"}
        onPress={() => navigation.navigate("Search")}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24 },
});

export default Home;
