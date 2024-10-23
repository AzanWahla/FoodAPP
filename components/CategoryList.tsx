import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';


const categories = [
    { name: 'Fruits', icon: 'shopping-cart' },
    { name: 'Vegetables', icon: 'shopping-bag' },
    { name: 'Bakery', icon: 'coffee' },
    { name: 'Milk', icon: 'droplet' },
  ];
  

export const CategoryList = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
      {categories.map((category, index) => (
        <View key={index} style={styles.category}>
          <View style={styles.iconContainer}>
            <Feather name={category.icon} size={24} color="#4CAF50" />
          </View>
          <Text style={styles.categoryName}>{category.name}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft:30,
    paddingVertical: 16,
  },
  category: {
    alignItems: 'center',
    marginRight: 24,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 12,
    color: '#333',
  },
});