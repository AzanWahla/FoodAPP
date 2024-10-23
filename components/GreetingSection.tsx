import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface GreetingSectionProps {
  name: string;
}

export default function GreetingSection({ name }: GreetingSectionProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Assalamualaikum</Text>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  greeting: {
    fontSize: 18,
    color: 'white',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});