import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { Bike, BIKES } from './types';
interface Props {
  onSelectBike: (bike: Bike) => void;
}
export default function Screen02({ onSelectBike }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const filteredBikes =
    selectedCategory === 'All'
      ? BIKES
      : BIKES.filter((item) => item.category === selectedCategory);
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>The world's Best Bike</Text>
      <View style={styles.categoryContainer}>
        {['All', 'Roadbike', 'Mountain'].map((cat) => (
          <TouchableOpacity
            key={cat}
            style={[
              styles.catButton,
              selectedCategory === cat && styles.catButtonActive,
            ]}
            onPress={() => setSelectedCategory(cat)}
          >
            <Text
              style={[
                styles.catText,
                selectedCategory === cat && styles.catTextActive,
              ]}
            >
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        data={filteredBikes}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => onSelectBike(item)}
          >
            <View style={styles.heartIcon}>
              <Text style={{ fontSize: 14, color: '#000' }}>♡</Text>
            </View>
            <Image
              source={item.image}
              style={styles.cardImage}
              resizeMode="contain"
            />
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text style={styles.cardPrice}>$ {item.price}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#ffffff',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'red', 
    marginVertical: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around', 
    marginBottom: 15,
  },
  catButton: {
    borderWidth: 1,
    borderColor: 'gray', 
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 4, 
    backgroundColor: '#fff',
  },
  catButtonActive: {
    borderColor: 'red', 
  },
  catText: {
    fontSize: 14,
    color: 'gray',
  },
  catTextActive: {
    color: 'red',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#f9f9f9', 
    margin: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 5,
    alignItems: 'center',
  },
  heartIcon: {
    alignSelf: 'flex-start', 
  },
  cardImage: {
    width: 100, 
    height: 100,
  },
  cardTitle: {
    fontSize: 14,
    color: '#000',
    marginTop: 5,
  },
  cardPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 2,
  },
});
