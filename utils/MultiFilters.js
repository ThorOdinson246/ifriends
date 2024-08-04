import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { items,getUniqueCountries,getUniqueReligions   } from "./filteritems"; // Importing items from filteritems file
import { SafeAreaView } from "react-native-safe-area-context"; // Importing SafeAreaView for safe area handling


export default function MultiFilters() {
  // State to keep track of selected countries
  const [selectedCountry, setSelectedCountry] = useState([]);
  // State to keep track of selected religions
  const [selectedReligions, setSelectedReligions] = useState([]);
  // State to keep track of filtered items
  const [filteredItems, setFilteredItems] = useState(items);
//   import { items } from "./filteritems"; // Importing items from filteritems file


// Example usage
 filters = getUniqueCountries(); // Get unique countries from items
 religions = getUniqueReligions(); // Get unique religions from items


//   List of filter categories for COuntry
//   let filters = ["Nepal", "India", "Nigeria", "NA",'Bangladesh'];
  // List of religion categories
//   let religions = ["Hinduism", "Islam", "Christianity", "None"];

  // Function to handle filter button click for countries
  const handleFilterButtonClick = (country) => {
    if (selectedCountry.includes(country)) {
      // Remove the country from selected countries if it's already selected
      let updatedCountries = selectedCountry.filter((el) => el !== country);
      setSelectedCountry(updatedCountries);
    } else {
      // Add the country to selected countries if it's not selected
      setSelectedCountry([...selectedCountry, country]);
    }
  };

  // Function to handle filter button click for religions
  const handleReligionButtonClick = (religion) => {
    if (selectedReligions.includes(religion)) {
      // Remove the religion from selected religions if it's already selected
      let updatedReligions = selectedReligions.filter((el) => el !== religion);
      setSelectedReligions(updatedReligions);
    } else {
      // Add the religion to selected religions if it's not selected
      setSelectedReligions([...selectedReligions, religion]);
    }
  };

  // useEffect to filter items whenever selectedCountry or selectedReligions change
  useEffect(() => {
    filterItems();
  }, [selectedCountry, selectedReligions]);

  // Function to filter items based on selected countries and religions
  const filterItems = () => {
    if (selectedCountry.length === 0 && selectedReligions.length === 0) {
      // If no filters are selected, show all items
      setFilteredItems(items);
    } else {
      // Filter items based on selected countries and religions
      const filtered = items.filter(item =>
        (selectedCountry.length === 0 || selectedCountry.includes(item.country)) &&
        (selectedReligions.length === 0 || selectedReligions.includes(item.religion))
      );
      setFilteredItems(filtered);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        {/* Render filter buttons for countries */}
        <Text style={{ fontSize: 20, marginBottom: 10 }}>Filter by Country:</Text>
        <View style={styles.buttonsContainer}>
          {filters.map((country, idx) => (
            <TouchableOpacity
              onPress={() => handleFilterButtonClick(country)}
              style={[
                styles.button,
                selectedCountry.includes(country) ? styles.activeButton : null,
              ]}
              key={`filters-${idx}`}
            >
              <Text>{country}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Render filter buttons for religions */}
        <Text style={{ fontSize: 20, marginBottom: 10 }}>Filter by Religion:</Text>
        <View style={styles.buttonsContainer}>
          {religions.map((religion, idx) => (
            <TouchableOpacity
              onPress={() => handleReligionButtonClick(religion)}
              style={[
                styles.button,
                selectedReligions.includes(religion) ? styles.activeButton : null,
              ]}
              key={`religions-${idx}`}
            >
              <Text>{religion}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Render filtered items */}
        <View style={styles.itemsContainer}>
          {filteredItems.map((item, idx) => (
            <Text key={`item-${idx}`} style={styles.itemText}>
              {item.name}
            </Text>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// Styles for the components
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  button: {
    padding: 10,
    backgroundColor: '#ddd',
    margin: 5,
    borderRadius: 5,
  },
  activeButton: {
    backgroundColor: '#aaa',
  },
  itemsContainer: {
    marginTop: 20,
  },
  itemText: {
    fontSize: 16,
    marginBottom: 3,
  },
});