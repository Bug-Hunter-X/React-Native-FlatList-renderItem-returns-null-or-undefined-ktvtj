```javascript
import React, { useState, useEffect } from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';

const Item = ({ item }) => (
  <View style={styles.item}>
    <Text>{item.name}</Text>
  </View>
);

const MyFlatList = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //Simulate fetching data
        const response = await new Promise((resolve) => setTimeout(resolve, 1000, [{ name: 'Item 1' }, { name: 'Item 2' }]));
        setData(response);
      } catch (e) {
        setError(e);
      }
      finally{
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  if (data.length === 0) {
    return <Text>No data to display</Text>;
  }

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Item item={item} />}
      keyExtractor={(item) => item.name}
    />
  );
};

export default MyFlatList;

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
```