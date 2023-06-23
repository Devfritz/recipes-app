import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Input from "../../components/input/Input";
import Container from "../../components/container/Container";

const Search = () => {
  return (
    <Container>
      <Input placeholder={"Search Recipes"} />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default Search;
