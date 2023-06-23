import React from "react";
import { View, StyleSheet, Text, FlatList, Pressable } from "react-native";
import colors from "../../constants/constants";

const Categories = ({ categories, selectedCategory, onClickCategories }) => {
  return (
    <View>
      <FlatList
        keyExtractor={(item) => String(item)}
        data={categories}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          const selected = selectedCategory === item;
          return (
            <Pressable onPress={() => onClickCategories(item)}>
              <Text
                style={[
                  styles.category,
                  selected ? styles.selectedCategory : {},
                ]}
              >
                {item}
              </Text>
            </Pressable>
          );
        }}
        horizontal
      />
    </View>
  );
  //   return (
  //     <View style={styles.container}>
  //       <Text></Text>
  //     </View>
  //   );
};

const styles = StyleSheet.create({
  category: {
    marginLeft: 8,
    fontSize: 20,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 10,
    backgroundColor: colors.lightGrey,
  },
  selectedCategory: {
    backgroundColor: colors.green,
    color: colors.white,
  },
});

export default React.memo(Categories);
