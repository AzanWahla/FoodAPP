import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

interface Surah {
  id: number;
  name: string;
  arabicName: string;
  verses: number;
  type: string;
}

interface SurahListProps {
  surahs: Surah[];
}

export default function SurahList({ surahs }: SurahListProps) {
  const renderItem = ({ item }: { item: Surah }) => (
    <View style={styles.item}>
      <View style={styles.numberContainer}>
        <Text style={styles.number}>{item.id}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.type}>{item.type.toUpperCase()} • {item.verses} VERSES</Text>
      </View>
      <Text style={styles.arabicName}>{item.arabicName}</Text>
    </View>
  );

  return (
    <FlatList
      data={surahs}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  numberContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  number: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textContainer: {
    flex: 1,
  },
  name: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  type: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 12,
  },
  arabicName: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});