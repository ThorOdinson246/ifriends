import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { items, getUniqueValuesByKey, uniqueKeyNames } from "./filteritems"; // Importing items and getUniqueValuesByKey from filteritems file
import { SafeAreaView } from "react-native-safe-area-context"; // Importing SafeAreaView for safe area handling

export default function MultiFilters() {
  // State to keep track of selected filters
  const [selectedFilters, setSelectedFilters] = useState({});
  // State to keep track of filtered items
  const [filteredItems, setFilteredItems] = useState(items);

  // Function to handle filter selection
  const handleFilterSelection = (key, value) => {
    setSelectedFilters(prev => {
      const newFilters = { ...prev };
      if (newFilters[key]?.includes(value)) {
        newFilters[key] = newFilters[key].filter(v => v !== value);
      } else {
        newFilters[key] = [...(newFilters[key] || []), value];
      }
      return newFilters;
    });
  };

  // Function to generate filter components
  const generateFilterComponents = () => {
    const keysToExclude = ["fullName", "contact", "preferredName", "arrivalDate","contactInfo","email","lookingFor","leisureActivities","qualities"];
    const keys = Object.keys(items[0]).filter(key => !keysToExclude.includes(key)); // Get unique key names from items and exclude specified keys
    // const keys =  Object.keys(items[0]) // Get unique key names from items
    return keys.map(key => {
      const uniqueValues = getUniqueValuesByKey(key,items);
      return (
        <View key={key} style={styles.filterContainer}>
          <Text style={styles.filterTitle}>Filter By {key}</Text>
          {uniqueValues.map(value => (
            <TouchableOpacity
              key={value}
              style={[
                styles.filterButton,
                selectedFilters[key]?.includes(value) && styles.selectedFilterButton
              ]}
              onPress={() => handleFilterSelection(key, value)}
            >
              <Text style={styles.filterText}>{value}</Text>
            </TouchableOpacity>
          ))}
        </View>
      );
    });
  };

  // Effect to filter items based on selected filters
  useEffect(() => {
    let filtered = items;
    Object.keys(selectedFilters).forEach(key => {
      if (selectedFilters[key].length > 0) {
        filtered = filtered.filter(item => selectedFilters[key].includes(item[key]));
      }
    });
    setFilteredItems(filtered);
  }, [selectedFilters]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {generateFilterComponents()}
        <View style={styles.itemsContainer}>
          {filteredItems.map((item, index) => (
            <Text key={index} style={styles.itemText}>{(item.fullName)}</Text>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  filterContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  filterTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  filterButton: {
    padding: 10,
    backgroundColor: '#ddd',
    margin: 5,
    borderRadius: 5,
  },
  selectedFilterButton: {
    backgroundColor: '#aaa', // Change this to the color you want for selected filters
  },
  filterText: {
    fontSize: 16,
    marginBottom: 3,
  },
  itemsContainer: {
    marginTop: 20,
  },
  itemText: {
    fontSize: 14,
    marginVertical: 5,
  },
});