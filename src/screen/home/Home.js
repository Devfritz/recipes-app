import React, { useState } from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import Input from "../../components/input/Input";
import Container from "../../components/container/Container";
import { useNavigation } from "@react-navigation/native";
import Title from "../../components/Title/Title";
import Categories from "../../components/categories/Categories";

const Home = () => {
  const navigation = useNavigation();
  const categories = ["All", "Trending", "Seasonal", "Daily", "Chocolat"];
  const [selectedCategory, setSelectedCAtegory] = useState("All");
  const handleSelectedCategorie = (item) => {
    setSelectedCAtegory(item);
  };
  return (
    <Container>
      <Input
        pressable
        placeholder={"Search Recipes"}
        onPress={() => navigation.navigate("Search")}
      />
      <Title title="Featured Recipes" />
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        onClickCategories={handleSelectedCategorie}
      />
    </Container>
  );
};

export default Home;
