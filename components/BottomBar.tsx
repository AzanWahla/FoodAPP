import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function BottomBar() {
  return (
    <View style={styles.container}>
      <Feather name="book" size={24} color="white" />
      <Feather name="bookmark" size={24} color="white" />
      <Feather name="play" size={24} color="white" />
      <Feather name="settings" size={24} color="white" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    paddingVertical: 10,
  },
});