import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

export const Header = () => {
  return (
    <View style={styles.header}>

      <View style={styles.searchBar}>
        <Feather
          name="search"
          size={20}
          color="#888"
          style={styles.searchIcon}
        />

        <TextInput
          placeholder="Search for products"
          style={styles.searchInput}
        />

      </View>

      <Feather
        name="heart"
        size={24}
        color="#4CAF50"
        style={styles.heartIcon}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 16,
    backgroundColor: "#fff",
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    paddingHorizontal: 12,
    marginRight: 16,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  heartIcon: {
    marginLeft: "auto",
  },
});
