import { useState, useEffect } from 'react';

interface GroceryItem {
  id: string;
  name: string;
  price: number;
  image: string;
  discount?: number;
}

export const useGroceryData = () => {
  const [groceryItems, setGroceryItems] = useState<GroceryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://grocery-dnjnjeuw1-azan-wahlas-projects.vercel.app/api/grocery-items');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data)
        //setGroceryItems(data);
        setLoading(false);
      } catch (e) {
        console.error('Fetch error:', e);
        setError(`Failed to fetch grocery items: ${e.message}`);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { groceryItems, loading, error };
};