import React from "react";
import { View, StyleSheet, ScrollView, Text, FlatList } from "react-native";
import { useGroceryData } from "./useGroceryData";
import { GroceryItem } from "./GroceryItem";

export const ItemsView = () => {
  const { groceryItems, loading, error } = useGroceryData();

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View style={styles.container}>
          <FlatList
          data={groceryItems}
          renderItem={({ item }) => (
            <GroceryItem
              key={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
              discount={item.discount}
            />
          )}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={{ gap: 10, padding: 10 }}
          columnWrapperStyle={{ gap: 10,padding: 10 }}
        />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingLeft:10,
  },
  groceryList: {
    paddingHorizontal: 16,
  },
});
