import React from "react";
import { View, StyleSheet, ScrollView, Text, FlatList } from "react-native";
import { useGroceryData } from "./useGroceryData";
import { Header } from "./Header";
import { CategoryList } from "./CategoryList";
import { GroceryItem } from "./GroceryItem";
import { ItemsView } from "./ItemsView";

export const MainScreen = () => {
  const { groceryItems, loading, error } = useGroceryData();
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    // Implement a refresh function in useGroceryData and call it here
    // For now, we'll just simulate a refresh
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centerContainer}>
        <Text>Error: {error}</Text>
        <Text>Please check your internet connection and try again.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>
      <View style={styles.category}>
        <CategoryList />
      </View>
      <View style={styles.flatlist}>
        <ItemsView groceryItems={groceryItems} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flex: 0.15,
  },
  category: {
    flex: 0.15,
    paddingLeft: 10,
  },
  flatlist: {
    flex: 0.7,
  },
  groceryList: {
    paddingHorizontal: 16,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});