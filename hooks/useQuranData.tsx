import { useState, useEffect } from 'react';

interface Surah {
  id: number;
  name: string;
  arabicName: string;
  verses: number;
  type: string;
}

interface QuranData {
  surahs: Surah[];
  lastRead: {
    name: string;
    ayah: number;
  };
}

export function useQuranData(): QuranData {
  const [quranData, setQuranData] = useState<QuranData>({
    surahs: [],
    lastRead: { name: '', ayah: 0 },
  });

  useEffect(() => {
    // In a real app, you would fetch this data from an API
    const mockData: QuranData = {
      surahs: [
        { id: 1, name: 'Al-Fatiah', arabicName: 'الفاتحة', verses: 7, type: 'meccan' },
        { id: 2, name: 'Al-Baqarah', arabicName: 'البقرة', verses: 286, type: 'medinan' },
        { id: 3, name: "Ali 'Imran", arabicName: 'آل عمران', verses: 200, type: 'medinan' },
        { id: 4, name: 'An-Nisa', arabicName: 'النساء', verses: 176, type: 'medinan' },
        { id: 1, name: 'Al-Fatiah', arabicName: 'الفاتحة', verses: 7, type: 'meccan' },
        { id: 2, name: 'Al-Baqarah', arabicName: 'البقرة', verses: 286, type: 'medinan' },
        { id: 3, name: "Ali 'Imran", arabicName: 'آل عمران', verses: 200, type: 'medinan' },
        { id: 4, name: 'An-Nisa', arabicName: 'النساء', verses: 176, type: 'medinan' },
      ],
      lastRead: { name: 'Al-Fatiah', ayah: 1 },
    };

    setQuranData(mockData);
  }, []);

  return quranData;
}