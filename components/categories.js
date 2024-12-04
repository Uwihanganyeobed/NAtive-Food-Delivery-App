import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import { getCategories } from "../api";
import { urlFor } from "../sanity";

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCategories()
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => {
        console.error("Failed to fetch categories:", err);
        setError("Failed to load categories.");
      });
  }, []);

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        {categories.map((category, index) => {
          const isActive = category._id === activeCategory;
          const btnClass = isActive
            ? styles.activeButton
            : styles.inactiveButton;
          const textClass = isActive ? styles.activeText : styles.inactiveText;
          return (
            <View key={index} style={styles.categoryContainer}>
              <TouchableOpacity
                onPress={() => setActiveCategory(category._id)}
                style={[styles.button, btnClass]}
              >
                <Image
                  style={styles.image}
                  source={{ uri: urlFor(category.image).url() }}
                />
              </TouchableOpacity>
              <Text style={textClass}>{category.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 4,
  },
  scrollViewContent: {
    paddingHorizontal: 15,
  },
  categoryContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginRight: 6,
  },
  button: {
    padding: 8,
    borderRadius: 100,
    backgroundColor: "gray",
  },
  activeButton: {
    backgroundColor: "gray",
  },
  inactiveButton: {
    backgroundColor: "lightgray",
  },
  image: {
    width: 45,
    height: 45,
  },
  activeText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "gray",
  },
  inactiveText: {
    fontSize: 14,
    color: "gray",
  },
});
