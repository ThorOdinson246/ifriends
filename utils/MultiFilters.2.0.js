import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { items, getUniqueValuesByKey } from "./filteritems"; // Importing items and getUniqueValuesByKey from filteritems file
import { SafeAreaView } from "react-native-safe-area-context"; // Importing SafeAreaView for safe area handling
import AntDesign from '@expo/vector-icons/AntDesign';

export default function MultiFilters() {
  // State to keep track of selected filters
  const [selectedFilters, setSelectedFilters] = useState({});
  // State to keep track of filtered items
  const [filteredItems, setFilteredItems] = useState(items);
  // State to keep track of visible dropdowns
  const [visibleDropdown, setVisibleDropdown] = useState(null);

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

  // Function to toggle visibility of dropdowns
  const toggleDropdownVisibility = key => {
    setVisibleDropdown(prev => (prev === key ? null : key));
  };

  // Function to remove selected filter
  const removeFilter = (key, value) => {
    setSelectedFilters(prev => {
      const newFilters = { ...prev };
      newFilters[key] = newFilters[key].filter(v => v !== value);
      if (newFilters[key].length === 0) {
        delete newFilters[key];
      }
      return newFilters;
    });
  };

  // Function to generate filter chips and dropdown menus
  const generateFilterComponents = () => {
    const keysToExclude = ["fullName", "contact", "preferredName", "arrivalDate","contactInfo","email","lookingFor","leisureActivities","qualities","studyLevel","apartmentLocation","familyStatus"];
    const keys = Object.keys(items[0]).filter(key => !keysToExclude.includes(key)); // Get unique key names from items and exclude specified keys

    return keys.map(key => {
      const uniqueValues = getUniqueValuesByKey(key, items);
      return (
        <View key={key} style={styles.filterContainer}>
          <TouchableOpacity style={styles.filterChip} onPress={() => toggleDropdownVisibility(key)}>
            <Text style={styles.filterChipText}> {key}</Text>
          </TouchableOpacity>
          {visibleDropdown === key && (
            <View style={styles.dropdownMenu}>
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
                  {selectedFilters[key]?.includes(value) && (
                    <AntDesign name="checkcircleo" size={15} color="green" />
                  )}
                </TouchableOpacity>
              ))}
            </View>
          )}
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
        <View style={styles.filterByContainer}>
          <Text style={styles.filterByText}>Filter By</Text>
        </View>
        <ScrollView horizontal style={styles.chipsContainer}>
          {generateFilterComponents()}
        </ScrollView>
        <View style={styles.selectedFiltersContainer}>
          {Object.keys(selectedFilters).map(key =>
            selectedFilters[key].map(value => (
              <View key={`${key}-${value}`} style={styles.selectedFilter}>
                <Text style={styles.selectedFilterText}>{`${value}`}</Text>
                <TouchableOpacity onPress={() => removeFilter(key, value)}>
                <AntDesign name="closecircleo" size={15} color="red" />
                </TouchableOpacity>
              </View>
            ))
          )}
        </View>
        <View style={styles.itemsContainer}>
          {filteredItems.map((item, index) => (
            <Text key={index} style={styles.itemText}>{item.fullName}</Text>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  filterByContainer: {
    marginVertical: 15,
    alignItems: 'center',
  },
  filterByText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  chipsContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  filterContainer: {
    marginRight: 10,
    
  },
  filterChip: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 10,
    marginBottom: 5,
    
  },
  filterChipText: {
    fontSize: 16,
    fontWeight: 'bold',

  },
  dropdownMenu: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#ddd',
    marginVertical: 5,
    borderRadius: 5,
  },
  selectedFilterButton: {
    backgroundColor: '#C7DFC5', // Change this to the color you want for selected filters
  },
  filterText: {
    fontSize: 16,
  },
  checkmarkIcon: {
    marginLeft: 10,
  },
  selectedFiltersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 10,
  },
  selectedFilter: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ddd',
    padding: 5,
    borderRadius: 5,
    margin: 5,
  },
  selectedFilterText: {
    marginRight: 5,
  },
  itemsContainer: {
    marginTop: 20,
  },
  itemText: {
    fontSize: 14,
    marginVertical: 5,
  },
});

