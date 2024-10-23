import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface LastReadCardProps {
  surah: {
    name: string;
    ayah: number;
  };
}

export default function LastReadCard({ surah }: LastReadCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Feather name="book-open" size={24} color="white" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.label}>Last Read</Text>
        <Text style={styles.surahName}>{surah.name}</Text>
        <Text style={styles.ayah}>Ayah No: {surah.ayah}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  iconContainer: {
    backgroundColor: '#9932CC',
    borderRadius: 10,
    padding: 10,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  label: {
    color: 'white',
    fontSize: 12,
  },
  surahName: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  ayah: {
    color: 'white',
    fontSize: 14,
  },
});