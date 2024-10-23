import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useQuranData } from '@/hooks/useQuranData';
import TopBar from './TopBar';
import GreetingSection from './GreetingSection';
import LastReadCard from './LastReadCard';
import SurahList from './SurahList';
import BottomBar from './BottomBar';

export default function App() {
  const { surahs, lastRead } = useQuranData();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.content}>
        <TopBar />
        <GreetingSection name="Azan Wahla" />
        <LastReadCard surah={lastRead} />
        <SurahList surahs={surahs} />
      </View>
      <BottomBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8A2BE2',
  },
  content: {
    flex: 1,
    padding: 20,
  },
});